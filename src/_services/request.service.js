import { config } from '@/constants/config'
export const requestService = {
  GetFetch,
  PostFetch,
  PutFetch,
  PatchFetch,
  DeleteFetch
};
async function GetFetch(path) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  };
  const url = config.BASE_API_URL + path

  return fetch(url, requestOptions);
}
async function PostFetch(path, object) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  };
  const url = config.BASE_API_URL + path

  return fetch(url, requestOptions);
}
async function PatchFetch(path, object) {
  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(object),
  };
  const url = config.BASE_API_URL + path

  return fetch(url, requestOptions);
}
async function PutFetch(path, object) {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(object),
  };
  const url = config.BASE_API_URL + path

  return fetch(url, requestOptions);
}
async function DeleteFetch(path) {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  };
  const url = config.BASE_API_URL + path

  return fetch(url, requestOptions);
}