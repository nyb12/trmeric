import {
  get,
  post,
  update as coreUpdate,
  patch,
  distory,
  handleResponseException,
} from './index';
const baseUrl = import.meta.env.VITE_BASE_URL;

export const login = async (params = {}, header = {}) => {
  let headers = {
    ...header,
    'Content-Type': 'application/json',
  };
  try {
    const result = await post(`${baseUrl}/api/token/`, params, {
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

export const getAllNotes = async (params = {}, header = {}) => {
  let headers = {
    ...header,
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  };

  try {
    const result = await get(`${baseUrl}/notes`, {
      headers,
    });

    if (result?.data) {
      return result?.data?.data;
    } else {
      return [];
    }
  } catch ({ response, message }) {
    return {
      status: response?.status ? response?.status : 404,
      error: response?.data?.message ? response?.data?.message : message,
    };
  }
};


export const addProvider = async (params = {}, header = {}, pid = 1) => {
  let headers = {
    ...header,
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  };
  try {
    const result = await post(`${baseUrl}/api/create/provider/${pid}/`, params, {
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