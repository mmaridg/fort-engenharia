document.getElementById("solicitacaoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const obra = document.getElementById("obraInput").value.trim();
  const funcionario = document.getElementById("funcionarioInput").value.trim();
  const data = document.getElementById("dataInput").value;
  const horas = document.getElementById("horasInput").value;
  const motivo = document.getElementById("motivoInput").value;
  const notificar = document.getElementById("notificar").checked;

  console.log("Obra:", obra);
  console.log("Funcionário:", funcionario);
  console.log("Data:", data);
  console.log("Horas:", horas);
  console.log("Motivo:", motivo);
  console.log("Notificar gestor:", notificar);

  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  this.reset();
});