import { GoogleGenerativeAI } from "@google/generative-ai";
import { cache } from "react";

export async function generateProductInformation(product: string) {
  const gemini = new GoogleGenerativeAI(
    String(process.env.NEXT_PUBLIC_API_KEY_GEMINI_IA)
  );
  const model = gemini.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `de forma breve gere uma descrição e um preço apenas o número sem caracteres do ${product}, retorne a informação com Descrição: e Preço:`;

  const result = await model.generateContent(prompt);
  const response = result.response.text();

  // extract description and price text
  const descricao =
    response.match(/Descrição: (.+)\./g)?.[0].split("Descrição:")[1] ?? "";

  const preco =
    Number(response.match(/Preço: (.+)/g)?.[0].split("Preço:")[1]) ?? 0;

  return {
    descricao,
    preco,
  };
}

export default cache(generateProductInformation);
