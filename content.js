let lastUrl = location.href;
new MutationObserver(() => {
  if (location.href === lastUrl) return;
  lastUrl = location.href;

  if (location.pathname !== "/watch") return;
  if (location.search.includes("rco=1")) return;

  const url = new URL(location.href);
  url.searchParams.set("rco", "1");
  history.replaceState({}, "", url);
  location.reload();
}).observe(document, { subtree: true, childList: true });
