import api from './api-config';

export const getAllInterests = async () => {
  const resp = await api.get('/interests');
  return resp.data;
}