import express from "express";
import mongoose from "mongoose";
const app = express();

//Using Middleware
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://murtazrobo:pass%40123@cluster0.qdiv5ks.mongodb.net/",
    {
      dbname: "backendapi",
    }
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => console.log(err));

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", schema);

app.get("/", (req, res) => {
  res.send("Nice Working");
});

app.get("/users/all", async (req, res) => {
  const users = await User.find({});
  console.log(req.query.keyword);

  res.json({
    success: true,
    users,
  });
});

app.post("/users/new", async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });

  res.status(201).cookie("tempi", "lol").json({
    message: "Registered Successfully",
  });
});

app.get("/userid", async (req, res) => {
  const { id } = req.query;
  const user = await User.findById(id);
  res.json({
    success: true,
    user,
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
