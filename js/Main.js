import { Theme } from "./Theme.js";

class Main {
  skillsData = [
    { name: "HTML5 / CSS3", category: "Frontend" },
    { name: "JavaScript (ES6+)", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "SCSS", category: "Frontend" },
    { name: "RxJS", category: "Frontend" },
    { name: "Git & GitHub", category: "Tools" },
  ];

  init() {
    const catBtns = document.querySelectorAll(".cat-btn");
    catBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        catBtns.forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");

        this.filterSkills(e.target.textContent);
      });
    });
    this.filterSkills();
  }

  filterSkills(category = "Все") {
    if (category === "Все") {
      this.renderSkills(this.skillsData);
      return;
    }

    const filtered = this.skillsData.filter(
      (skill) => skill.category === category,
    );
    this.renderSkills(filtered);
  }

  renderSkills(skills) {
    const skillsList = document.getElementById("skillsList");

    skillsList.innerHTML = skills
      .map(
        (skill) => `
    <li class="skill-card">
      <h4 class="skill-name">${skill.name}</h4>
      <span class="skill-tag">${skill.category}</span>
    </li>
  `,
      )
      .join("");
  }
}
const main = new Main();
const theme = new Theme();
main.init();
