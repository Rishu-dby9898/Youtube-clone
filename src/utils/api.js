import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

// const options = {
//     params: { hl: "en", gl: "IN" },
//     headers: {
//         "X-RapidAPI-Key":
//             process.env.REACT_APP_YOUTUBE_API_KEY || "YOUR_API_KEY",
//         "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//     },
// };

const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: {q: 'desp', hl: 'en', gl: 'IN'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY || '6c3ae62d86msh4eee3cd23db21c4p161040jsnd722aa785156',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
