export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return Boolean(token);

  // TODO: we need to verify the token
};
