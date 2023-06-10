const UserAcc = require('./../modals/userModal');
const AppError = require('../utils/appError');
const { promisify } = require('util')
const jwt = require("jsonwebtoken");
const catchAsync = require('../utils/catchAsync');

const signToken = (id) => {
    return jwt.sign({ id }, process.env.jwt_secret, {
        expiresIn: process.env.jwt_exp
    })
}

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);

    const tokenOptions = {
        expires: new Date(Date.now() + 30 * 60 * 60 * 1000),
        httpOnly: true
    }
    res.cookie("jwt", token, tokenOptions);
    user.password = undefined;

    res.status(statusCode).json({
        status: 'success',
        token,
        data: user
    })
}
exports.signUp = catchAsync(async (req, res, next) => {

    const newUser = await UserAcc.create(req.body);

    createSendToken(newUser, 201, res);
})
exports.signIn = catchAsync(async (req, res, next) => {
    // console.log(req.body);
    const { email, password, phone } = req.body;
    // loging with phone
    if (!Object.keys(req.body).includes('email')) {
        if (!phone || !password) {
            return next(new AppError('please fill both Mobile no & password ', 401))
        }
        const user = await UserAcc.findOne({ phone }).select('+password');

        if (!user || !(await user.correctPassword(password, user.password))) {
            return next(new AppError('incorrect user phone or password', 401))
        }

        createSendToken(user, 200, res);
    } else {

        if (!email || !password) {
            return next(new AppError('please fill both email & password ', 401))
        };

        const user = await UserAcc.findOne({ email }).select('+password');

        if (!user || !(await user.correctPassword(password, user.password))) {
            return next(new AppError('incorrect user email or password', 401))
        }
        // console.log(user);
        createSendToken(user, 200, res);

    }
})

exports.protect = catchAsync(async (req, res, next) => {
    let token;
    // console.log(req.headers.authorization);
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }else if (req.cookies.jwt) {
        token = req.cookies.jwt;
        console.log(token);
    };
    //  console.log(token);
    if (!token) {
        return next(new AppError('User Not Login', 401))
    }

    const decoder = await promisify(jwt.verify)(token, process.env.jwt_secret)

    // console.log(decoder);

    const currentUser = await UserAcc.findById(decoder.id);
    if (!currentUser) {
        return next(new AppError('user not belongs to this user id', 401))
    }

    if (currentUser.changePasswordAfter(decoder.iat)) {
        // return next(new AppError('password has change after login',401))

    }
    req.user = currentUser
    next();
});

exports.signOut = catchAsync(async(req,res,nex)=>{
    res.cookie('jwt','signOut',{
        expires: new Date(Date.now() + 1000),
        httpOnly:true
    })
    res.status(200).json({status:'success'})
});





