import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, message: "Portfolio API is running." });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email and message are required." });
    }

    const saved = await Contact.create({ name, email, message });

    res.status(201).json({
      message: "Message received successfully.",
      id: saved._id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to save the message." });
  }
});

async function start() {
  if (process.env.MONGO_URI) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB connected.");
    } catch (error) {
      console.error("MongoDB connection failed:", error.message);
    }
  } else {
    console.log("MONGO_URI not configured. API will still start, but contacts cannot be saved.");
  }

  app.listen(PORT, () => {
    console.log(`Portfolio API running on http://localhost:${PORT}`);
  });
}

start();
