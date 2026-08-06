// ハッシュベースの簡易ルーター
// GitHub Pages のようなサーバー設定なしの環境でも動きます。

const routes = [];

/**
 * @param {RegExp} pattern パスにマッチする正規表現
 * @param {(params: string[], query: URLSearchParams) => void} handler
 */
export function route(pattern, handler) {
  routes.push({ pattern, handler });
}

export function currentPath() {
  const hash = location.hash.replace(/^#/, '') || '/';
  return hash.split('?')[0];
}

export function currentQuery() {
  const hash = location.hash.replace(/^#/, '');
  const i = hash.indexOf('?');
  return new URLSearchParams(i === -1 ? '' : hash.slice(i + 1));
}

export function navigate(to) {
  if (location.hash === '#' + to) resolve();
  else location.hash = to;
}

let notFound = () => {};
export function setNotFound(fn) {
  notFound = fn;
}

let onBeforeRoute = () => {};
export function setBeforeRoute(fn) {
  onBeforeRoute = fn;
}

export function resolve() {
  const path = currentPath();
  const query = currentQuery();
  onBeforeRoute(path);

  for (const r of routes) {
    const m = path.match(r.pattern);
    if (m) {
      r.handler(m.slice(1).map(decodeURIComponent), query);
      return;
    }
  }
  notFound();
}

export function start() {
  window.addEventListener('hashchange', resolve);
  resolve();
}
