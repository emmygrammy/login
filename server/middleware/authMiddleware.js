
// middleware/authMiddleware.js
export const protect = (req, res, next) => {
  // check token
  next();
};