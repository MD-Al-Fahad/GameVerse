import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
    key: 'dddaf0e8e61644cfaabd061e22d912d9'
    }
})