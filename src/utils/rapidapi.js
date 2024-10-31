import axios from "axios"
// const API_KEY = process.env.YT_API_KEY
const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  
  
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    // part: 'id,snippet',
    // type: 'video',
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': process.env.YT_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`,options)

  return data
}
