import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";

interface Genre {
  id: number;
  name: string;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  //the parent_platform is an array of objects where each object has a property of platform of type Platform
}
interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    //Handling cancellations
    //Cretaing a controller object and set it to an instance of AbortController().

    const controller = new AbortController();

    setLoading(true);
    /*we pass an object as a second argument when making a get request and set the signal property to controller.signal. */

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    //adding/returning a clean up function after calling apiClient.get by calling the controller.abort()

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
}

export default useGenres;
