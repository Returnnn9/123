export function initDemoDB() {
  // Initialize separate persistent stores: one for ads/session, one for users
  const DB_KEY = "tf_db_remote";
  const USERS_KEY = "tf_users";

  if (!localStorage.getItem(DB_KEY)) {
    const demo = { ads: [], session: null };
    localStorage.setItem(DB_KEY, JSON.stringify(demo));
  }
  if (!localStorage.getItem(USERS_KEY)) {
    const usersDemo = [];
    localStorage.setItem(USERS_KEY, JSON.stringify(usersDemo));
  }
}

function readDB() {
  return JSON.parse(localStorage.getItem("tf_db_remote") || "{}");
}
function writeDB(db) {
  localStorage.setItem("tf_db_remote", JSON.stringify(db));
  window.dispatchEvent(new Event("storage"));
}

// New helpers for separate users store
function readUsers() {
  return JSON.parse(localStorage.getItem("tf_users") || "[]");
}
function writeUsers(users) {
  localStorage.setItem("tf_users", JSON.stringify(users));
  window.dispatchEvent(new Event("storage"));
}

// Users (now in separate store)
export function registerUser({ username, password, tg }) {
  const users = readUsers();
  if (users.find(u => u.username === username)) return false;
  users.push({ username, password, tg });
  writeUsers(users);

  // also set session in main DB
  const db = readDB();
  db.session = { username };
  writeDB(db);
  return true;
}
export function loginUser({ username, password }) {
  const users = readUsers();
  const u = users.find(x => x.username === username && x.password === password);
  if (!u) return false;
  const db = readDB();
  db.session = { username };
  writeDB(db);
  return true;
}
export function logout() {
  const db = readDB();
  db.session = null;
  writeDB(db);
}
export function getCurrentUser() {
  const db = readDB();
  if (!db.session) return null;
  const users = readUsers();
  const u = users.find(x => x.username === db.session.username);
  return u ? { username: u.username, tg: u.tg } : null;
}

// Ads
export function listAds() {
  const db = readDB();
  return ((db.ads || [])).slice().reverse();
}
export function createAd(ad) {
  const db = readDB();
  db.ads = db.ads || [];
  db.ads.push(ad);
  writeDB(db);
  return ad;
}
export function updateAd(id, patch) {
  const db = readDB();
  db.ads = (db.ads || []).map(a => a.id === id ? { ...a, ...patch } : a);
  writeDB(db);
}
export function deleteAd(id) {
  const db = readDB();
  db.ads = (db.ads || []).filter(a => a.id !== id);
  writeDB(db);
}
export function getUserAds(username) {
  const db = readDB();
  return ((db.ads || []).filter(a => a.owner === username)).slice().reverse();
}