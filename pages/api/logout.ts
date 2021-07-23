export const logout = () => {
  localStorage.removeItem("user-token");
}