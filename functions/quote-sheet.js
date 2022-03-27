import axios from 'axios';

export const createQuoteSheetApi = async (data) => await axios.post(`/api/createQuoteSheet`, data);
