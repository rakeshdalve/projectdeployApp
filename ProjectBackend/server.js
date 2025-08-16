// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const path = require('path');
// require('dotenv').config();


// const authRoutes = require('./routes/auth');
// const projectRoutes = require('./routes/projects');

// const app = express(); 
// app.set('trust proxy', true);   

// // Middlewares
// app.use(cors());
// app.use(express.json());  // JSON body parse करने के लिए


// // Static folder for uploaded images
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // MongoDB connect करो (apni config/db.js से भी कर सकते हो)
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/projects', projectRoutes);
 
// // Server start
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

console.log('Cloudinary ENV check:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ? '✔' : '❌',
  api_secret: process.env.CLOUDINARY_API_SECRET ? '✔' : '❌',
});


const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');

const app = express();

// Trust proxy for correct protocol detection (important on Render)
app.set('trust proxy', true);

app.use(cors());
app.use(express.json());

// Serve static uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

// If using monorepo and serving frontend from backend
// Comment out if frontend is separate deployment
// app.use(express.static(path.join(__dirname, 'client', 'dist')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
