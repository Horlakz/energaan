import { client } from "../apiClient";

export default class Category {
  create(name: string) {
    return client({
      method: "POST",
      url: "/categories",
      data: { name },
    });
  }

  update(slug: string, name: string) {
    return client({
      method: "PATCH",
      url: "/categories/" + slug,
      data: { name },
    });
  }

  delete(slug: string) {
    return client({
      method: "DELETE",
      url: "/categories/" + slug,
    });
  }
}
