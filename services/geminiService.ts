
import { GoogleGenAI, Type } from "@google/genai";
import { AuditResult } from "../types";

export const getSeoAudit = async (websiteUrl: string, businessType: string): Promise<AuditResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `You are a world-class SEO strategist specializing in local service businesses (Plumbers, HVAC, Roofers, etc.). 
  You provide high-impact, actionable audits. Even if you cannot visit a live site, you use the domain name, business type, and current industry trends to deduce the most likely SEO gaps and growth opportunities. 
  Your tone is professional, authoritative, and growth-oriented.`;

  const prompt = `Perform a strategic SEO audit for the following prospect:
  Domain: ${websiteUrl}
  Industry: ${businessType}
  
  Please provide:
  1. A summary of their likely current SEO situation based on industry standards for their category.
  2. 5 high-impact, specific growth strategies they should implement immediately (be specific to their niche).
  3. A health score (0-100) representing their estimated online dominance.
  
  Return the results in a clear JSON format.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overview: { 
              type: Type.STRING,
              description: "Professional high-level summary."
            },
            strategies: {
              type: Type.ARRAY,
              items: { 
                type: Type.STRING
              },
              description: "5 actionable items."
            },
            score: { 
              type: Type.NUMBER,
              description: "Health score between 0 and 100."
            }
          },
          required: ["overview", "strategies", "score"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("API returned no content.");
    
    return JSON.parse(text) as AuditResult;
  } catch (error: any) {
    console.error("Gemini Audit Service Error:", error);
    throw new Error(error.message || "The audit engine is currently offline. Please try again in a moment.");
  }
};
