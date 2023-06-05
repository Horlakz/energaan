import { client } from "../apiClient";

interface ContactData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

export default class Contact {
  submit(data: ContactData) {
    return client({
      method: "POST",
      url: "/contacts",
      data,
    });
  }
}
