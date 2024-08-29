import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://foodproject:food9177@cluster0.r2nfk.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
