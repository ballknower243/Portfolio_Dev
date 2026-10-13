(() => {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  const current =
    document.body.dataset.nav ||
    location.pathname.split("/").pop() ||
    "index.html";
  menu.querySelectorAll("a").forEach((a) => {
    if (a.dataset.page === current) a.setAttribute("aria-current", "page");
  });

  const setMenu = (open) => {
    menu.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    document.body.classList.toggle("menu-open", open);
  };
  burger.addEventListener("click", () =>
    setMenu(burger.getAttribute("aria-expanded") !== "true"),
  );
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });
  window.matchMedia("(min-width: 769px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
