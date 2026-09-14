export class Theme {
  constructor() {
    const btnTheme = document.getElementById("btnTheme");
    btnTheme.addEventListener("click", this.btnThemeClick.bind(this));
    window.addEventListener("DOMContentLoaded", () => this.setTheme(btnTheme));
  }

  btnThemeClick(btn) {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") ?? "dark";

    const newTheme = currentTheme === "dark" ? "light" : "dark";
    btn.target.textContent =
      newTheme === "dark" ? "Светлая тема" : "Тёмная тема";

    document.documentElement.setAttribute("data-theme", newTheme);

    window.localStorage.setItem("theme", newTheme);

    this.savedTheme(newTheme);
  }

  savedTheme(theme) {
    window.localStorage.setItem("theme", theme);
  }

  setTheme(btn) {
    const savedTheme = window.localStorage.getItem("theme") ?? "dark";

    btn.textContent = savedTheme === "dark" ? "Светлая тема" : "Тёмная тема";

    document.documentElement.setAttribute("data-theme", savedTheme);
  }
}
