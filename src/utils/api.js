import { setApiError } from "./gptSlice";

// Get API key from environment variables
const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const callGeminiAPI = async (prompt, dispatch) => {
  if (!GEMINI_API_KEY) {
    const error =
      "Gemini API key is missing. Please check your environment variables.";
    dispatch(setApiError(error));
    return null;
  }

  try {
    // Your API calling logic here using the environment variable
    const response = await fetch("https://api.gemini.com/v1/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GEMINI_API_KEY}`,
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    dispatch(setApiError(error.message));
    return null;
  }
};
