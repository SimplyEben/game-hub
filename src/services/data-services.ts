import apiClient from "./api-client";

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getData = () => apiClient.get<T[]>(this.endpoint).then((res) => res.data);
}

export default APIClient;
