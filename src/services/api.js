import axios from "axios";


const instance = axios.create({
  baseURL: "https://609f63e2c512c20017dcd2bd.mockapi.io/api/v1/products/"
});

export const productsAPI = {
  getProducts() {
    return instance.get()
  }
};