import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import multer, { memoryStorage } from "multer";

const app = express();

const PORT = process.env.PORT || 4000;

const storage = memoryStorage();
const upload = multer({ storage });

app.use(
  cors({
    origin: "*"
  })
);
app.use(json());

app.post("/images", upload.single("image"), (req, res) => {
  const { file } = req;
  const userId = req.headers["x-user-id"];

  console.log(file);
  if (!file || !userId) return res.status(400).json({ message: "Bad request" });

  return res.send("success");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
