const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getMe,
  requestPasswordReset,
  resetPassword
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.post('/request-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);

module.exports = router;

