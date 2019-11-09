export const fetcher = (url, options = {}) =>
  fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }).then(r => r.json());
