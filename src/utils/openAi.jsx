import OpenAI from "openai";
import { OPENAI_API_KEY } from "../utils/constants";

const openAi = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});


export default openAi;
