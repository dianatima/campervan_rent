import axios from 'axios';

axios.defaults.baseURL = 'https://661840529a41b1b3dfbc9f9d.mockapi.io/api/v1';

export async function fetchAdvertsAPI(page = 1) {
  const res = await axios.get(`adverts?page=${page}&limit=4`);
  return res.data;
}

export async function fetchAllAdvertsAPI() {
  const res = await axios.get(`adverts`);
  return res.data;
}
