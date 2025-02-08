import express from "express";
import path from "path";

const app = express();

app.use(express.static("./public/"));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "./public/index.html"));
});

app.listen(3000, () => {
  console.log("Server is up and listening ~~~");
});
