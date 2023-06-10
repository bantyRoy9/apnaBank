const UserAcc = require('../modals/userModal');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');



exports.getAllAcc = catchAsync(async (req, res) => {
    const accounts = await UserAcc.findById(req.user.id);
    res.status(200).json({
        status: 'success',
        length: accounts.length,
        data: {
            accounts
        }
    })

})

exports.createAcc = catchAsync(async (req, res) => {

    const account = await UserAcc.create(req.body);
    // console.log(account);
    res.status(200).json({
        status: 'success',
        data: {
            account
        }
    })
    return account
})

exports.getUser = catchAsync(async (req, res, next) => {
    let accountNo = (req.params.id)
    // console.log(accountNo);
    if(req.user.accountNo === accountNo){
        return next(new AppError('YUP!!! This is your A/c Pls try another A/C',404))
    }
    const user = await UserAcc.findOne({ accountNo });
    if (!user) {
        return next(new AppError('user Not Found with this Account', 404))
    }

    const keys = Object.keys(req.body)
    if (keys.length == 0) {
        return res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    }
    req.transferUser = user;
    next();

})
exports.updateAcc = catchAsync(async (req, res, next) => {
    
    const loginUserData = req.user;
    const transferData = req.transferUser;    

    // console.log(loginUserData,transferData);

     const now = new Date;
    const option = {
        hour:'numeric',
        minute:'numeric',
        day:'numeric',
        month:'numeric',
        year:'numeric'
    }
    const date = new Intl.DateTimeFormat(
        loginUserData.locale, option
    ).format(now);
    const amount = +req.body.movements;

    let updateTransferAcc;
    let updateUserAcc;
    // console.log(loginUserData.totalAmt);

    if( amount > 0 && amount < loginUserData.totalAmt){
        let totalTransfer = 0;
        let totalWithdrawal = 0;
    
        loginUserData.movements.push(-amount);
        transferData.movements.push(amount);
        
        transferData.movementsDates.push(date)
        loginUserData.movementsDates.push(date)

        loginUserData.movements.map(el => { totalTransfer = totalTransfer + el })
        transferData.movements.map(el => { totalWithdrawal = totalWithdrawal+ el })
        

        
        updateUserAcc = await UserAcc.findByIdAndUpdate(req.user._id, { 
            movements: loginUserData.movements, 
            totalAmt: totalTransfer, 
            movementsDates: loginUserData.movementsDates },
            {
            new: true,
            runValidators: true
        });
        
        updateTransferAcc = await UserAcc.findByIdAndUpdate(req.transferUser._id, { 
            movements: transferData.movements, 
            totalAmt: totalWithdrawal, 
            movementsDates: transferData.movementsDates },
            {
            new: true,
            runValidators: true
        })
        
    }
    if (!updateUserAcc && !updateTransferAcc) {
        return next(new AppError('User Not Found with this ID', 404))
    }
    
    res.status(200).json({
        status: 'success',
        data: {
            user: updateUserAcc
        },
        data2:{
            updateTransferAcc
        }
    })
}
)
