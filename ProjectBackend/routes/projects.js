// // // routes/projects.js

const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const auth = require('../middleware/auth');
const { upload, uploadToCloudinary } = require('../middleware/upload');

// ➕ Add new project with image upload to Cloudinary
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { name, description, link } = req.body;

    let imageUrl = null;
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'projects');
      imageUrl = result.secure_url;
    }

    const newProject = new Project({
      name,
      description,
      link,
      imageUrl,
      owner: req.user
    });

    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Error adding project:', err);
    res.status(500).json({ message: 'Failed to add project' });
  }
});

// 📃 Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().populate('owner', 'name email');
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
});

// 👤 Get current user's projects
router.get('/me', auth, async (req, res) => {
  try {
    const projects = await Project.find({ owner: req.user });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch your projects' });
  }
});

// ✏️ Update a project (image optional)
router.put('/:id', auth, upload.single('image'), async (req, res) => {
  try {
    const { name, description, link } = req.body;

    let imageUrl;
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'projects');
      imageUrl = result.secure_url;
    }

    const updateData = { name, description, link };
    if (imageUrl) updateData.imageUrl = imageUrl;

    const updated = await Project.findOneAndUpdate(
      { _id: req.params.id, owner: req.user },
      updateData,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: 'Project not found' });
    res.json(updated);
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ message: 'Update failed' });
  }
});

// ❌ Delete a project
router.delete('/:id', auth, async (req, res) => {
  try {
    const deleted = await Project.findOneAndDelete({ _id: req.params.id, owner: req.user });
    if (!deleted) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed' });
  }
});

module.exports = router;
