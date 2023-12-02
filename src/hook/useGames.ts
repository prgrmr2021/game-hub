import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true)
    apiClient
      .get<FetchGamesResponse>("/games", {
        signal: controller.signal
      })
      .then((res) => setGames(res.data.results))
      .catch((err: AxiosError) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
      });

      return () => controller.abort();
  }, []);

  return {games, error}
};

export default useGames;
