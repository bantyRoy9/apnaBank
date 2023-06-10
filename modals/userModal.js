const mongoose = require('mongoose');
const validator = require('validator');
const  bcrypt  = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'name required'],
        maxlength: [20,' maxlength is less than 5'],
        minlength: [3, 'minlength is greater than 5']
    },
    email:{
        type:String,
        required: [true, 'Email required'],
        validate: [validator.isEmail,'Provide valid Email'],
        lowercase: [true, 'Email must lowerCase'],
        unique:true,

    },
    password:{
        type:String,
        required: [true, 'password must required'],
        minlength: 4,
        select:false
    },
    confirmPass:{
        type:String,
        required: [true, 'confirmpassword must required'],
        validate:{
            validator: function(el){
                return (el === this.password)
            },
            message:'password should be same',
        }
    },
    phone:{
        type:Number,
        unique:true,
        required:[true, 'number must be require'],  
        min:10
    },
    userPhoto:String,
    userAge:Number,
    userGender:String,
    interestRate:Number,

    movements:{
        type:Array
    },
    movementsDates:{
        type: Array
    },
    currency:{
        type:String,
        default:'INR'
    },
    locale:{
        type:String,
        default:'en-IN'
    },
    accountNo:{
        type:String,
        unique:true
    },
    totalAmt:Number,
    changePassworAt: Date

})
// userSchema.virtuals("avrgTotal").get(function(){
//     return this.totalAmt / 100;
// })
userSchema.pre('save', async function(next){
    this.accountNo = `1009716${Math.trunc((Math.random()+1)*10000)}`;
    // let total = 0;
    // this.movements.map(el=>{
    //     total += el
    // })
    // this.totalAmt = total ;
    if(!this.isModified('password')) return (next)
    this.password = await bcrypt.hash(this.password,12);

    this.confirmPass = undefined;

    next();
})

userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword);
}

userSchema.methods.changePasswordAfter = async function(JWTTimeStamp){
    if(this.changePassworAt){
        const changeTimeStamp = parseInt(this.passwordChangeAt.getTime()/1000,10)
        return JWTTimeStamp< changeTimeStamp;
    }
    return false;
}
const UserAcc = mongoose.model('UserAcc', userSchema);

module.exports = UserAcc