import { client } from "../apiClient";

interface QuoteData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  serviceId: string;
  serviceType: string;
}

export default class Quote {
  create(data: QuoteData) {
    return client({
      method: "POST",
      url: "/quotes",
      data,
    });
  }
}
