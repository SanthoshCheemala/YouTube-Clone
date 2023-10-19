import axios from "axios";

const Base_Url = 'https://youtube-v31.p.rapidapi.com';


const options = {
  url: Base_Url,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '35a4738569msh76eb688379bc4f5p1a14d9jsn00f4f2f10957',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const FetchFromApi = async (url) => {
  try {
    const response = await axios.get(`${Base_Url}/${url}`, options);
    return response.data;
  } catch (error) { 
    console.error("Error fetching data:", error);
    throw error;
  }
}
