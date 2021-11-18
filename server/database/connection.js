import mongoose from "mongoose";

const MongoUrl = process.env.MONGO_URL;

export default async () => {
  return mongoose.connect("mongodb+srv://UrvishPatel:aU2SUclj82OGgYSu@petpooja.eznmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
