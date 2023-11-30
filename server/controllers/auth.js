const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse"); // As we will handle errors using "next()"

/**
 * @description Get uesr data with token
 * @route GET /api/auth/user
 * @access Public
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const findMe = async (req, res, next) => {
  try {
    return sendAuth(req.user, 200, res);
  }
  catch (error) {
    return next(error);
  }
}

/**
 * @description Register a user
 * @route POST /api/auth/register
 * @access Public
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const register = async (req, res, next) => {
  try {
    const { name, email, password, profilePic } = req.body;
    // Check if any of them is undefined
    if (!name || !email || !password) {
      return next(
        new ErrorResponse("Please provide name, email and password", 400)
      );
    }

    // Check if user already exists in our DB
    const userExists = await User.findOne({ email }).exec();

    if (userExists) {
      return next(new ErrorResponse("User already exists", 400));
    }

    // Register and store the new user
    const user = await User.create(
      // If there is no picture present, remove 'profilePic'
      profilePic === undefined || profilePic.length === 0
        ? {
          name,
          email,
          password,
        }
        : {
          name,
          email,
          password,
          profilePic,
        }
    );

    return sendAuth(user, 201, res);
  } catch (error) {
    return next(error);
  }
};

/**
 * @description Login a user
 * @route POST /api/auth/auth
 * @access Public
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorResponse("Please provide email and password", 400));
    }

    const user = await User.findOne({ email }).select("+password"); // Explicitly adding password

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Using our own custom method to compare passwords
    const isMatched = await user.matchPasswords(password);

    if (!isMatched) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    return sendAuth(user, 200, res);
  } catch (error) {
    return next(error);
  }
};

const sendAuth = (user, statusCode, res) => {
  return res.status(statusCode).json({
    success: true,
    data: {
      name: user.name,
      email: user.email,
      profilePic: user.profilePic,
      token: user.getSignedToken(),
      expires_at: new Date(Date.now() + process.env.JWT_EXPIRE * 60 * 60 * 1000),
    }
  });
};

module.exports = { findMe, register, login };
