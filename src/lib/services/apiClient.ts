import { PUBLIC_API_URL } from "$env/static/public";
import axios from "axios";

export const client = axios.create({});

client.defaults.baseURL = PUBLIC_API_URL;
client.defaults.xsrfHeaderName = "X-CSRFToken";
client.defaults.responseEncoding = "utf8";
client.defaults.headers["common"]["Content-Type"] = "application/json";
