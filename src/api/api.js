import {API_URL} from "./constants.js";

const fetchData = async () => {
    const data = await fetch(API_URL);
    return await data.json();
}

export default fetchData;