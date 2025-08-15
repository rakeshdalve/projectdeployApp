import React, { useEffect, useState } from 'react';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔀 Shuffle function
  const shuffleArray = (array) => {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };
 
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        const shuffled = shuffleArray(data); // 👈 shuffle here
        setProjects(shuffled);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch projects', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
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
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mb-2 block">
              Visit Project
            </a>
            <p className="text-sm text-gray-500 mt-2">Owner: {proj.owner.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

