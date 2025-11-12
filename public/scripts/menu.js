document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".kap-burger");
  const nav = document.querySelector("#kap-nav");

  if (!burger || !nav) {
    console.log("❌ Burger o nav no encontrado");
    return;
  }

  console.log("✅ Script cargado correctamente");

  const toggleMenu = (e) => {
    e.stopPropagation();
    nav.classList.toggle("is-open");
    document.body.classList.toggle("body--no-scroll");
    burger.setAttribute("aria-expanded", nav.classList.contains("is-open"));
  };

  burger.addEventListener("click", toggleMenu);

  document.addEventListener("click", (e) => {
    const inside = nav.contains(e.target) || burger.contains(e.target);
    if (!inside && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      document.body.classList.remove("body--no-scroll");
      burger.setAttribute("aria-expanded", "false");
    }
  });
});
