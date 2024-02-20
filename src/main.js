import axios from 'axios';

const BASE_URL = 'https://your-energy.b.goit.study/api-docs';
const FILTER_LIMIT = 12;
const FILTER_LIMIT_MOBILE = 9;
const EXERCISES_LIMIT = 10;
const EXERCISES_LIMIT_MOBILE = 8;

let limit = FILTER_LIMIT;
let limitExercises = EXERCISES_LIMIT;

const api = axios.create({
  baseUrl: BASE_URL,
  params: {},
});
const getFilteredList = async (filter, page = 1) => {
  const response = await api.get('/filters', {
    params: {
      filter,
      page,
      limit: limit,
    },
  });
  return response.data;
};
console.log(getFilteredList());
