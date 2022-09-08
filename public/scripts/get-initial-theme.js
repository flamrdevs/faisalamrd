const html = document.getElementById("html");
const theme = localStorage.getItem("faisalamrd:settings:theme");
const valid = typeof theme === "string" && ["dark", "light"].includes(theme) ? theme : "dark";
if (valid === "dark") {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}
