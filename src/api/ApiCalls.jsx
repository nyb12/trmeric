import {
  get,
  post,
  update as coreUpdate,
  patch,
  distory,
  handleResponseException,
} from './index';
const baseUrl = import.meta.env.VITE_BASE_URL;

export const addNotes = async (params = {}, header = {}) => {
  let headers = {
    ...header,
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  };
  try {
    const result = await post(`${baseUrl}/note/create/`, params, {
      headers,
    });
    if (result.data) {
      return result.data;
    } else {
      return {};
    }
  } catch ({ response, message }) {
    return {
      status: response?.status ? response?.status : 404,
      error: response?.data?.message ? response?.data?.message : message,
    };
  }
};
