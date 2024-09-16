import mongoose from "mongoose";

export async function connect(){
    try{
      mongoose.connect(process.env.MONOGDB_URI!)
      const connection=mongoose.connection
      connection.on('connected',()=>{
        console.log('connected to database');
      })
      connection.on('error', (err) => {
        console.log('Mongodbconnction error'+err);
        process.exit()
      })
    }catch(error){
        console.log('Something went wrong in connection');
       console.log(error);
    }
}