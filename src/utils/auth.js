// export function saveToken(token) {
//   localStorage.setItem("auth_token", token);
// }

// export function getToken() {
//   return localStorage.getItem("auth_token");
// }

// export function isLoggedIn() {
//   return !!localStorage.getItem("auth_token");
// }

// export function logout() {
//   localStorage.removeItem("auth_token");
// }
// src/utils/auth.js
const TOKEN_KEY = "careeraura_token";

export function saveToken(token) {
  if (!token) return;
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch (e) {
    console.warn("saveToken:", e);
  }
}

export function getToken() {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (e) {
    return null;
  }
}

export function removeToken() {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (e) {
    console.warn("removeToken:", e);
  }
}

/**
 * Lightweight check: token presence only.
 * If you want to validate expiry decode & check 'exp'.
 */
export function isLoggedIn() {
  const t = getToken();
  return !!t;
}

export function logout() {
  removeToken();
}
