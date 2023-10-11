import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);

    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected to DataBase");
    });

    connection.on("error", (err) => {
      console.log("Connection error: ", err);
      process.exit();
    });
  } catch (error) {
    console.log("something goes wrong");
    console.log(error);
  }
}
