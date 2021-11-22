import mongoose from 'mongoose';


(async()=>{
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI);
    }
    catch (error){
        console.log(`Error at opening MongoDB Database: ${error}`);
    }
})();

