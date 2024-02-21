import axios from "axios";

const endpoint = "http://localhost:8000";

export function uploadDocument(path,formdata) {

  return axios.post(`${endpoint}/${path}`, formdata, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
