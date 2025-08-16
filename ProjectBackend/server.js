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

const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');

const app = express();

// Trust proxy for correct protocol detection (important on Render)
app.set('trust proxy', true);

app.use(cors({
  origin: 'https://projectdeployapp.onrender.com',
  credentials: true
}));

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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
