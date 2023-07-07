import { app } from "./app.js";
import { connectDB } from "./data/db.js";

connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server started on port 3000");
});
