import { client } from "../apiClient";

interface ProductData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  serviceId: string;
  serviceType: string;
}

export default class Product {
  create(data: ProductData) {
    return client({
      method: "POST",
      url: "/products",
      data,
    });
  }

  filterByCategory(id: string) {
    return client({
      method: "GET",
      url: "/products?categoryId=" + id,
    });
  }
}
