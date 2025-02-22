import { create } from "zustand";
import { fetchNewsAPI, fetchGuardianAPI, fetchNYTAPI } from "../api/newsService";

interface NewsState {
  articles: any[];
  loading: boolean;
  query: string;
  setQuery: (query: string) => void;
  fetchNews: () => Promise<void>;
}

export const useNewsStore = create<NewsState>((set, get) => ({
  articles: [],
  loading: false,
  query: "technology",
  setQuery: (query) => set({ query }),
  
  fetchNews: async () => {
    set({ loading: true });
    const query = get().query;
    const newsAPI = await fetchNewsAPI(query);
    const guardianAPI = await fetchGuardianAPI(query);
    const nytAPI = await fetchNYTAPI(query);

    set({
      articles: [...newsAPI, ...guardianAPI, ...nytAPI],
      loading: false,
    });
  },
}));
