import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
dotenv.config();
const connectdb = async()=>{ 
    try{ 
        await mongoose.connect(process.env.MONGODB_URL); 
        console.log('connected succesfully'); 
    }catch(err){ 
        console.error('connection failed',err); 
    } 
}; 
connectdb(); 
const db = mongoose.connection; 
db.on('error',console.error.bind(console,'connection error:')); 
export default db;
