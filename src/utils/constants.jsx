export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "tamil", name: "Tamil" },
  { identifier: "telugu", name: "Telugu" },
  { identifier: "malayalam", name: "Malayalam" },
  { identifier: "french", name: "French" },
  { identifier: "german", name: "German" },
  { identifier: "spanish", name: "Spanish" },
];

// export const GEMINI_API_KEY =
//   "AIzaSyAuwc7rt3AKGo-b3nryxBZQUN_6N7EDt94";

// export const OPENAI_API_KEY1 =
//   "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";