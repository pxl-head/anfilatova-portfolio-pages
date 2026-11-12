(() => {
  const path = window.location.pathname;
  let destination = null;
  if (path.startsWith('/osoiel/')) destination = path.slice('/osoiel'.length);
  else if (path.startsWith('/lookbook/')) destination = path;
  if (destination !== null) window.location.replace('https://shop.art-anfilatova.ru' + destination + window.location.search + window.location.hash);
})();
