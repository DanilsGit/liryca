import { coverAIRequest } from "@/modules/core/api/core";
import { useEffect, useState } from "react";

export const useGenerateImageAI = ({ changeImageAI }) => {
  const [prompt, setPrompt] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }, [error]);

  const generateImageAI = async (folder, id) => {
    setLoadingAI(true);
    try {
      const res = await coverAIRequest(prompt, folder, id);
      changeImageAI(res.data);
    } catch (error) {
      console.log(error);
      setError("This prompt is not valid");
      setLoadingAI(false);
    }
    setLoadingAI(false);
  };

  return { generateImageAI, loadingAI, prompt, setPrompt, error };
};
