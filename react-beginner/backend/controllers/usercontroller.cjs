const User = require('../models/authModel.cjs');
const bcrypt = require('bcrypt');
const catchAsync = require('../utils/catchAsync.cjs');
const AppError = require('../utils/appError.cjs');
const jwt = require('jsonwebtoken');


exports.signup = catchAsync(async(req, res) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hash
});
user.save().then(result => {
    res.status(201).json ({
        message: "User Created",
        result : result
    });

}). catch(err => {
    res.status(500).json({
        error: err
    });
});

    });

});
exports.login = catchAsync(async(req,res) => {
    const {email, password} = req.body;
    // check if the email and password exist
    if(!email || !password){
        return next(new AppError("please provide the email and password ", 400));
    }
    //check if user exists and password is correct
    const user = await User.findOne({email}).select("+password");
    if(!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError("Incorrect email and password", 401))
    }
    const token = jwt.sign(
        {email: user.email, userId: user._id},
        "secret_this_should_be_longer",
        {expiresIn: "1h"}
    );
    res.status(200).json({
        token: token,
    });
});