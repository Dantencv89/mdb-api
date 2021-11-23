import mongoose from 'mongoose';


(async()=>{
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/taskapi');
    }
    catch (error){
        console.log(`Error at opening MongoDB Database: ${error}`);
    }
})();

