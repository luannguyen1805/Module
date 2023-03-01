// thư viện axios dung cú pháp require và module.expots của node.js, nên ta không thể sử dụng cú pháp import của ES6 để sử dụng
//import axios from "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

import axios from "axios";

const URL = "https://63e86415ac3920ad5beb7b08.mockapi.io/api/products";

export function getProducts() {
    return axios({
        method: "GET",
        url: URL,
    });
}