// src/auth/useAuth.js

export function loginUser() {
  localStorage.setItem("pmc_auth", "true");
}

export function logoutUser() {
  localStorage.removeItem("pmc_auth");
}

export function isLoggedIn() {
  return localStorage.getItem("pmc_auth") === "true";
}
