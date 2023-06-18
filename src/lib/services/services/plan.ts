import { client } from "../apiClient";

interface PlanData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  serviceId: string;
  serviceType: string;
}

export default class Plan {
  create(data: PlanData) {
    return client({
      method: "POST",
      url: "/plan",
      data,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  delete(slug: string) {
    return client({
      method: "DELETE",
      url: "/plan/" + slug,
    });
  }
}
