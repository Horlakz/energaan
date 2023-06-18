import { client } from "../apiClient";

interface ProductData {
  title: string;
  description: string;
  features: string[];
  image: File[];
  categoryId: string;
}

export default class Product {
  create(data: ProductData) {
    const newProductData = new FormData();
    newProductData.append("title", data.title);
    newProductData.append("description", data.description);
    newProductData.append("categoryId", data.categoryId);
    for (let i = 0; i < data.features.length; i++) {
      newProductData.append("features", data.features[i]);
    }
    for (let i = 0; i < data.image.length; i++) {
      newProductData.append("image", data.image[i]);
    }
    return client({
      method: "POST",
      url: "/products",
      data: newProductData,
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
