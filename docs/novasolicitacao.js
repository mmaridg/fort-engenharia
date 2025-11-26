document.addEventListener("DOMContentLoaded", function() {
    
    const formulario = document.getElementById("formulario");
    const btnCancelar = document.querySelector(".botaoContainerCancelar");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const obra = document.getElementById("obraInput").value;
        const funcionario = document.getElementById("funcionarioInput").value;
        const data = document.getElementById("dataInput").value;
        const horas = document.getElementById("horasInput").value;
        const motivo = document.getElementById("motivoInput").value;
        const notificar = document.getElementById("notificar").checked;

        if (!obra || !funcionario || !data || !horas) {
            alert("Por favor, preencha todos os campos obrigatórios (*).");
            return;
        }

        const dadosSolicitacao = {
            obra: obra,
            funcionario: funcionario,
            data: data,
            horas: horas,
            motivo: motivo,
            notificar: notificar
        };

        console.log("Dados enviados:", dadosSolicitacao);

        // Aqui mostramos o Feedback para o usuário:
        alert("Solicitação de Hora Extra criada com sucesso!\n\nObra: " + obra + "\nFuncionário: " + funcionario);

        formulario.reset();
    });

    if (btnCancelar) {
        btnCancelar.addEventListener("click", function() {
            const confirmarCancelamento = confirm("Deseja realmente limpar o formulário?");
            
            if (confirmarCancelamento) {
                formulario.reset();
                console.log("Formulário limpo pelo usuário.");
            }
        });
    }
});