import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const SEARCH_DATA = 'SEARCH_DATA';

export function getData({ date, search }) {
  return axios
    .get(`https://api.iev.aero/api/flights/${date}`)
    .then(response => response.data)
    .then(data => ({
      type: GET_DATA,
      arrival: data.body.arrival,
      departure: data.body.departure,
      search: search,
    }))
    .catch(err => {
      console.error(err);
    });
}
