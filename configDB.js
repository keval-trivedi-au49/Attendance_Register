import mongoose from "mongoose";

const connect = () => {
    mongoose
      .connect('mongodb+srv://keval:kevalattainu@cluster0.xk0rgxi.mongodb.net/?retryWrites=true&w=majority')
      .then(() => {
        console.log("Connected to DB");
      })
      .catch((err) => {
        throw err;
      });
  };

export default connect;