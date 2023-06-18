import { client } from "../apiClient";

interface PlanData {
  title: string;
  description: string;
  features: string[];
  image: File;
}

export default class Plan {
  create(data: PlanData) {
    return client({
      method: "POST",
      url: "/plans",
      data,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  delete(slug: string) {
    return client({
      method: "DELETE",
      url: "/plans/" + slug,
    });
  }
}
