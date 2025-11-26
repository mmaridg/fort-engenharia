const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

const horasTrabalhadas = 450;
const horasDevidas = 150;

ctx.fillStyle = "#333";
ctx.fillRect(60, 200 - horasTrabalhadas / 3, 120, horasTrabalhadas / 3);

ctx.fillStyle = "#ffcc33";
ctx.fillRect(240, 200 - horasDevidas / 3, 120, horasDevidas / 3);
