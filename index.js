import Replicate from "replicate";
import dotenv from "dotenv";

dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

async function runModel() {
  try {
    console.log("Running the model...");
    const output = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          prompt: "Change your prompt here",
        }
      }
    );
    console.log(output);
  } catch (error) {
    console.error("Error running the model:", error);
  }
}

runModel();
