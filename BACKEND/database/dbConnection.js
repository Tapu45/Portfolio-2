import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "PORTFOLIO"
    }).then(()=>{
        console.log("MongoDB connected successfully");
    }).catch((error)=>{
        console.log(`some error occured while connecting to database ${error}`);
    })
}

export default dbConnection;