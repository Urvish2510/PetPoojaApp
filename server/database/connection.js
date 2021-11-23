import mongoose from "mongoose";

const MongoUrl = process.env.MONGO_URL;

export default async () => {
  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
