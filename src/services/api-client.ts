import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '48c26127fe314737b1782a57e319ddc9'
    }
})