import { client } from "../apiClient";

interface GalleryData {
  title: string;
  image: Blob;
}

export default class Gallery {
  add(data: GalleryData) {
    return client({
      method: "POST",
      url: "/gallery",
      data,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  delete(id: string) {
    return client({
      method: "DELETE",
      url: `/gallery/${id}`,
    });
  }
}
