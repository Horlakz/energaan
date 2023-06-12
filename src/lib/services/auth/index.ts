import { client } from "../apiClient";

interface AuthData {
  email: string;
  password: string;
}

export default class Auth {
  login(data: AuthData) {
    return client({
      method: "POST",
      url: "/auth/login",
      data,
    });
  }
}
