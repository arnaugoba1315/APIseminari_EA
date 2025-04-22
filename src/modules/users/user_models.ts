import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    password : {
        type: String,
        required : false
    },
    age: {
        type: Number,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique: true
    },
    phone: {
        type: Number,
        required : false
    },

});

export interface IUser{
    name: string;
    password?: string;
    age?: number;
    email: string;
    phone?: number;

}

const User = mongoose.model('User', userSchema);
export default User;