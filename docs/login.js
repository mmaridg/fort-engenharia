document.addEventListener('DOMContentLoaded', () => {
    // 1. Obter referências para o formulário e inputs
    const form = document.querySelector('form');
    const inputUsuario = document.getElementById('usuario');
    const inputSenha = document.getElementById('senha');
    
    // 2. Definir os perfis de acesso e seus respectivos redirecionamentos
    // Usamos um objeto JavaScript para mapear as credenciais
    const perfisAcesso = {
        'gerente': {
            senha: '123456',
            dashboard: './gestorDashboard.html'
        },
        'encarregado': {
            senha: '654321',
            dashboard: './dashboardEncarregado.html'
        },
        'tecnico': {
            senha: '162534',
            dashboard: './dashboardTecnico.html'
        }
    };

    // 3. Adicionar um ouvinte de evento para a submissão do formulário
    form.addEventListener('submit', (event) => {
        // Impedir o envio padrão do formulário, que recarregaria a página
        event.preventDefault(); 
        
        // Coletar e limpar (trim) os valores inseridos pelo usuário
        const usuario = inputUsuario.value.trim().toLowerCase();
        const senha = inputSenha.value.trim();
        
        // Variável para rastrear se o login foi bem-sucedido
        let loginSucesso = false;
        
        // 4. Lógica de validação
        if (perfisAcesso[usuario]) {
            // Verifica se o usuário existe no mapa de perfis
            const perfil = perfisAcesso[usuario];
            
            if (perfil.senha === senha) {
                // Senha correta, login bem-sucedido
                loginSucesso = true;
                
                // 5. Redirecionamento
                console.log(`Login bem-sucedido para ${usuario}. Redirecionando para ${perfil.dashboard}`);
                // Use window.location.href para redirecionar o navegador
                window.location.href = perfil.dashboard;
            }
        }

        // 6. Feedback em caso de falha
        if (!loginSucesso) {
            alert('Falha no login. Usuário ou senha incorretos.');
            console.error('Tentativa de login falhou.');
            
            // Opcional: Limpar campos em caso de erro
            inputSenha.value = '';
            inputUsuario.focus(); // Foca no campo de usuário para nova tentativa
        }
    });
});