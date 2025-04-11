import User from '../models/User.js';

// Submit job application
export const applyJob = async (req, res) => {
  try {
    const { name, phone, email, address, aadhaarNumber, panNumber } = req.body;
    const resume = req.file ? req.file.path : null;

    const user = new User({
      name,
      phone,
      email,
      address,
      aadhaarNumber,
      panNumber,
      resume,
    });
    

    await user.save();
    res
      .status(201)
      .json({ success: true, message: 'Application submitted successfully.' });
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const users = await User.find({ role: 'user' }).select('-__v ');
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.send(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};
