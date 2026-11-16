
import "dotenv/config";
import express from "express";
import OpenAI from "openai";

const app = express();
const client = new OpenAI();

app.use(express.json());
app.use(express.static("public"));

app.post("/api/chat", async (req, res) => {
  try {
    const message = req.body.message;

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "Please enter a message."
      });
    }

    const response = await client.responses.create({
      model: "gpt-5.5",
      instructions: `
        You are AKA, a personal AI assistant.
        Help with coding and JavaScript projects.
        Explain errors clearly.
        Give hints before complete solutions.
        Be friendly and practical.
      `,
      input: message
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      error: "Something went wrong."
    });
  }
});

app.listen(3000, () => {
  console.log("AKA AI running at http://localhost:3000");
});
