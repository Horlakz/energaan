import { client } from "../apiClient";

interface ProductData {
  title: string;
  description: string;
  features: string[];
  image: File;
  categoryId: string;
}

export default class Product {
  create(data: ProductData) {
    return client({
      method: "POST",
      url: "/products",
      data,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  filterByCategory(id: string) {
    return client({
      method: "GET",
      url: "/products?categoryId=" + id,
    });
  }

  delete(slug: string) {
    return client({
      method: "DELETE",
      url: "/products/" + slug,
    });
  }
}
