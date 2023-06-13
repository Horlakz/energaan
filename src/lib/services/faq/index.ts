import { client } from "../apiClient";

interface FAQData {
  title: string;
  description: string;
}

export default class FAQ {
  add(data: FAQData) {
    return client({
      method: "POST",
      url: "/faqs",
      data,
    });
  }

  update(data: FAQData, id: string) {
    return client({
      method: "PATCH",
      url: "/faqs/" + id,
      data,
    });
  }

  delete(id: string) {
    return client({
      method: "DELETE",
      url: "/faqs/" + id,
    });
  }
}
