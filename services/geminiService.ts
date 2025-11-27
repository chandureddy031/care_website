import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Injected via environment
const ai = new GoogleGenAI({ apiKey });

export const generateSuccessStory = async (topic: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model,
      contents: `Write a short, inspiring, emotional 100-word success story about an NGO named CARE helping with ${topic}. The tone should be futuristic yet heartwarming.`,
    });
    return response.text || "Together, we are making a difference.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI is currently recharging. Please explore our static success stories.";
  }
};

export const chatWithCareAI = async (message: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model,
      contents: message,
      config: {
        systemInstruction: "You are the advanced AI assistant for CARE, an NGO. Your tone is professional, empathetic, and futuristic. You help users understand our mission (providing food, education, and medical aid). Answer briefly."
      }
    });
    return response.text || "I am here to assist you with CARE's mission.";
  } catch (error) {
    return "Connection to Neural Net unstable. Try again later.";
  }
};