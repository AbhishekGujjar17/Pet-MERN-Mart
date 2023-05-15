import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connection to DB is Successfull: ${connect.connection.host}`);
  }
  catch (err) {
    console.log(`Error while connecting to DB: ${err}`);
  }
};

export default connectDB; 