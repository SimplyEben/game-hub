import apiClient from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(
    () => {
      //Handling cancellations
      //Cretaing a controller object and set it to an instance of AbortController().

      const controller = new AbortController();

      setLoading(true);
      /*we pass an object as a second argument when making a get request and set the signal property to controller.signal. */

      // the second argument passed to the fetch (get) request { signal: controller.signal } -- is called AxiosRequestConfig. we then spread the requestConfig object to add any additional properties
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      //adding/returning a clean up function after calling apiClient.get by calling the controller.abort()

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
}

export default useData;
