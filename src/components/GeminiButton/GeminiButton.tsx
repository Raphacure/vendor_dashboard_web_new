import { Button } from "react-bootstrap";
import { GEMINI_API_KEY } from "@/lib/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const GeminiButton = ({ onClick = () => {}, text = "" , title= "Improve Comment",className=""}: any) => {
  const handleGeminiBtnClick = async () => {
    console.log("text : ", text);
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const prompt = `Improve the following text, only return the improved version, nothing else:- ${text}`;

    const result = await chatSession.sendMessage(prompt);
    const generatedText = result.response.text();
    console.log("gemini : ", generatedText);
    onClick(generatedText); // Pass the generated text to parent
  };

  return (
    <div className={className}>
      <Button
        variant="outline-primary"
        disabled={text.trim() === ""}
        onClick={() => {
          handleGeminiBtnClick();
        }}
      >
        <img
          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1740390379819.png"
          title={title}
          alt="Improve Comment"
          className="w-[25px] h-[25px]"
        />
      </Button>
    </div>
  );
};

export default GeminiButton;
