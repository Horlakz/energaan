import { client } from "../apiClient";

interface PlanData {
  title: string;
  description: string;
  features: string[];
  image: File;
}

export default class Plan {
  create(data: PlanData) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image);
    for (let i = 0; i < data.features.length; i++) {
      formData.append("features", data.features[i]);
    }
    return client({
      method: "POST",
      url: "/plans",
      data: formData,
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
