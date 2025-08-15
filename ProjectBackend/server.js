const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();


const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const allowedOrigins = [process.env.FRONTEND_URL];

const app = express();    

// Middlewares   
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());  // JSON body parse करने के लिए


// Static folder for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connect करो (apni config/db.js से भी कर सकते हो)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
 
// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
