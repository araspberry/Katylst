
import { GoogleGenAI, Type } from "@google/genai";
import { AuditResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getSeoAudit = async (websiteUrl: string, businessType: string): Promise<AuditResult> => {
  const prompt = `Perform a high-level SEO strategy audit for the website: ${websiteUrl}. The business type is: ${businessType}. Provide a response in JSON format including a general overview, a list of 5 key strategic recommendations, and an SEO health score (0-100).`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overview: { type: Type.STRING },
            strategies: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            score: { type: Type.NUMBER }
          },
          required: ["overview", "strategies", "score"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Empty response from Gemini");
    return JSON.parse(text) as AuditResult;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
