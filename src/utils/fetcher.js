const token = localStorage.getItem("token");

export const fetcher = (url, options = {}) =>
  fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`
    },
    mode: "cors"
  }).then(r => r.json());
