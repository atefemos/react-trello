export function getLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}

export function setLocalStorage(name, data) {
  return localStorage.setItem(name, JSON.stringify(data));
}
