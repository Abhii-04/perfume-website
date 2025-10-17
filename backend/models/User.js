import mongoose from 'mongoose' ;
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true,

    },
    email: {
        type: String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

// Hashing password before saving user
userSchema.pre('save', async function(next){
    if(!this.isModified('password') )return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password.salt, salt);
    next();

});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword){
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('user', userSchema);
module.exports = User;
