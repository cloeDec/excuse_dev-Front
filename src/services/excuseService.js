import axios from "axios";

function fetchExcuse() {
  return axios.get("http://localhost:3000/excuse");
}

function addExcuse(Exc) {
  return axios.post("http://localhost:3000/excuse", Exc, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function fetchExcuseById(http_code) {
  return axios.get("http://localhost:3000/excuse/" + http_code);
}

export default {
    fetchExcuse,
    addExcuse,
    fetchExcuseById,
};
