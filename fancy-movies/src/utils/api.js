const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=ad6baf64ad75ee341315fda666f2d48e";

const GET = async(type, movieID) => {
  const res = await fetch(BASE_URL+type+'/'+movieID+API_KEY);
  return await res.json();
}

export { GET };