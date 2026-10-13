(() => {
  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("#project-grid .card");
  const status = document.getElementById("filter-status");
  const labels = { all: "Semua", python: "Python", web: "Web" };

  const apply = (key) => {
    let shown = 0;
    cards.forEach((card) => {
      const match = key === "all" || card.dataset.category === key;
      card.hidden = !match;
      if (match) {
        shown++;
        card.setAttribute("data-entering", "");
        card.addEventListener(
          "animationend",
          () => card.removeAttribute("data-entering"),
          { once: true },
        );
      }
    });
    buttons.forEach((b) => {
      const on = b.dataset.filter === key;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    status.textContent = `Filter ${labels[key]}: ${shown} project ditampilkan`;
    history.replaceState(
      null,
      "",
      key === "all" ? location.pathname : `#${key}`,
    );
  };

  buttons.forEach((b) =>
    b.addEventListener("click", () => apply(b.dataset.filter)),
  );

  const initial = location.hash.slice(1);
  if (labels[initial] && initial !== "all") apply(initial);
})();
