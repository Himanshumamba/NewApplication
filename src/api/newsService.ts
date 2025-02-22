import axios from "axios";

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const GUARDIAN_API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;
const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;

// Fetch from NewsAPI


export const fetchNewsAPI = async (query: string) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching from NewsAPI:", error);
    return [];
  }
};

// Fetch from The Guardian
export const fetchGuardianAPI = async (query: string) => {
  try {
    const response = await axios.get(
      `https://content.guardianapis.com/search?q=${query}&api-key=${GUARDIAN_API_KEY}`
    );
    return response.data.response.results;
  } catch (error) {
    console.error("Error fetching from The Guardian:", error);
    return [];
  }
};

// Fetch from New York Times
export const fetchNYTAPI = async (query: string) => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${NYT_API_KEY}`
    );
    return response.data.response.docs;
  } catch (error) {
    console.error("Error fetching from NYT:", error);
    return [];
  }
};
