import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

export default function Account() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', description: '', link: '', image: null });
    const [imagePreview, setImagePreview] = useState(null);
    const [editingProject, setEditingProject] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Please login first');
            navigate('/Login');
            return;
        }

        const storedUser = localStorage.getItem('user');
        try {
            if (storedUser && storedUser !== "undefined") {
                setUser(JSON.parse(storedUser));
            } else {
                setUser(null);
            }
        } catch (err) {
            console.error("Invalid user JSON in localStorage", err);
            setUser(null);
        }

        fetch(`${import.meta.env.VITE_API_URL}/api/projects/me`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(async (res) => {
                if (res.status === 401) {
                    alert('Session expired or unauthorized. Please login again.');
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    navigate('/Login');
                    return null;
                }
                return res.json();
            })
            .then(data => {
                if (data) {
                    if (Array.isArray(data)) {
                        setProjects(data);
                    } else {
                        setProjects([]);
                    }
                    setLoading(false);
                }
            })
            .catch(() => {
                alert('Failed to load projects');
                setLoading(false);
            });
    }, [navigate]);

    const handleDelete = (id) => {
        const token = localStorage.getItem('token');
        fetch(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                if (res.ok) {
                    setProjects(projects.filter(p => p._id !== id));
                } else {
                    alert('Failed to delete project');
                }
            })
            .catch(() => alert('Delete request failed'));
    };

    const handleAddOrUpdateProject = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        if (!formData.name || !formData.description || !formData.link) {
            alert("Please fill all fields.");
            return;
        }

        const url = editingProject
            ? `${import.meta.env.VITE_API_URL}/api/projects/${editingProject._id}`
            : `${import.meta.env.VITE_API_URL}/api/projects`;

        const method = editingProject ? 'PUT' : 'POST';

        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('link', formData.link);
        if (formData.image) {
            data.append('image', formData.image);
        }

        const res = await fetch(url, {
            method,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: data
        });

        const result = await res.json();
        console.log(`${editingProject ? 'Update' : 'Add'} Project response:`, res.status, result);

        if (res.ok) {
            if (editingProject) {
                setProjects(projects.map(p => (p._id === result._id ? result : p)));
            } else {
                setProjects([...projects, result]);
            }
            setFormData({ name: '', description: '', link: '', image: null });
            setImagePreview(null);
            setShowForm(false);
            setEditingProject(null);
        } else {
            alert(result.message || 'Failed to save project');
        }
    };

    // Update image and preview on file select
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    if (loading) return <p>Loading projects...</p>;

    return (
        <>
            <div className='flex md:flex-row flex-col h-screen'>
                <div className='w-full md:w-1/4 flex flex-col items-center  p-2 md:h-full md:text-2xl bg-slate-500 space-y-4'>
                    <h1>Account Owner</h1>
                    {user ? (
                        <>
                            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition duration-200">
                                <MdAccountCircle size={100} />
                            </div>
                            <div className='space-y-4'>
                                <h2>Name: {user.name}</h2>
                                <p>Email: {user.email}</p>
                                {user.phone && <p>Phone: {user.phone}</p>}
                            </div>
                        </>
                    ) : (
                        <p>User info not available. Please login.</p>
                    )}

                    <hr />
                </div>

                <div className='w-full md:w-3/4 h-full md:text-2xl overflow-auto m-2'>
                    <h3 className='flex justify-center'>Your Projects</h3>
                    <button onClick={() => {
                        setShowForm(true);
                        setEditingProject(null);
                        setFormData({ name: '', description: '', link: '', image: null });
                        setImagePreview(null);
                    }} className='bg-lime-400 p-2 rounded-lg'>
                        Add Project
                    </button>

                    {showForm && (
                        <form onSubmit={handleAddOrUpdateProject} style={{ marginTop: '1rem' }}>
                            <div className='space-x-2 space-y-2'>
                                <input
                                    type="text"
                                    placeholder="Project Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className='p-1 m-2'
                                /><br />
                                <textarea
                                    placeholder="Description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    required
                                    className='p-1 m-2'
                                /><br />
                                <input
                                    type="url"
                                    placeholder="Project Link"
                                    value={formData.link}
                                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                                    required
                                    className='p-1 m-2'
                                /><br />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className='p-1 m-2'
                                /><br />
                                
                                {imagePreview && (
                                    <div className="m-2">
                                        <img src={imagePreview} alt="Preview" style={{ maxWidth: '200px', maxHeight: '150px' }} />
                                    </div>
                                )}

                                <div className='p-1 m-2'>
                                    <button type="submit" className='m-1 p-1 border-4'>
                                        {editingProject ? 'Update Project' : 'Submit'}
                                    </button>
                                    <button className='m-1 p-1 border-4' type="button" onClick={() => {
                                        setShowForm(false);
                                        setEditingProject(null);
                                        setFormData({ name: '', description: '', link: '', image: null });
                                        setImagePreview(null);
                                    }}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                    {projects.length === 0 ? (
                        <p>No projects found.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                            {projects.map(proj => (
                                <div key={proj._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    {proj.imageUrl ? (
                                        <img
                                            src={proj.imageUrl}
                                            alt={`${proj.name} screenshot`}
                                            className="w-full h-40 object-cover"
                                        />
                                    ) : (
                                        <div className="h-40 bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-500">No Image</span>
                                        </div>
                                    )}

                                    <div className="p-4">
                                        <h3 className="text-lg font-bold mb-2">{proj.name}</h3>
                                        <p className="text-gray-700 mb-2">{proj.description}</p>
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 underline mb-2 block"
                                        >
                                            Visit Project
                                        </a>

                                        <div className="flex justify-between mt-4">
                                            <button
                                                onClick={() => {
                                                    setEditingProject(proj);
                                                    setFormData({
                                                        name: proj.name,
                                                        description: proj.description,
                                                        link: proj.link || '',
                                                        image: null
                                                    });
                                                    setImagePreview(null);
                                                    setShowForm(true);
                                                }}
                                                className="bg-yellow-400 flex justify-center hover:bg-yellow-500 text-white px-3 py-1 rounded"
                                            >
                                                <p>Edit</p> <FaEdit size={15} className='m-1 md:size-5' />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(proj._id)}
                                                className="bg-red-500 hover:bg-red-600 flex justify-center text-white px-3 py-1 rounded"
                                            >
                                                <p>Delete</p><MdDeleteForever className=' m-1' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}
