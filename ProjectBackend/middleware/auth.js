// const jwt = require('jsonwebtoken');

// const JWT_SECRET = process.env.JWT_SECRET;

// module.exports = function (req, res, next) {
//   const authHeader = req.header('Authorization');
//   if (!authHeader)
//     return res.status(401).json({ message: 'No token, access denied' });

//   const token = authHeader.split(' ')[1]; // "Bearer token" me se token nikalna

//   if (!token)
//     return res.status(401).json({ message: 'No token, access denied' });

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = decoded.userId;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };


const jwt = require('jsonwebtoken');
const mongoose = require('mongoose'); // ✅ Add this

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = function (req, res, next) {
  const authHeader = req.header('Authorization');
  if (!authHeader)
    return res.status(401).json({ message: 'No token, access denied' });

  const token = authHeader.split(' ')[1];

  if (!token)
    return res.status(401).json({ message: 'No token, access denied' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = mongoose.Types.ObjectId(decoded.userId); // ✅ Convert to ObjectId
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

