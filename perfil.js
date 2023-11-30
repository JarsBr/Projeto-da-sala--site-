document.addEventListener("DOMContentLoaded", function() {
    const inputFields = document.querySelector('.input-fields');
    const displayInfo = document.querySelector('.display-info');
    const salvarBtn = document.getElementById('salvarBtn');
    const editarBtn = document.getElementById('editarBtn');
    const inputFoto = document.getElementById('foto');
    const displayFoto = document.getElementById('display-foto');
    

    salvarBtn.addEventListener('click', function() {
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const email = document.getElementById('email').value;
        let fotoBase64 = '';

        // Simulando armazenamento temporário dos dados
        localStorage.setItem('perfilNome', nome);
        localStorage.setItem('perfilIdade', idade);
        localStorage.setItem('perfilEmail', email);

        if (inputFoto.files && inputFoto.files[0]) {
            const reader = new FileReader();

            reader.onload = function(e) {
                fotoBase64 = e.target.result;
                localStorage.setItem('perfilFoto', fotoBase64);

                // Exibir os dados salvos na seção "Mostrar Informações"
                displayFoto.src = fotoBase64;
            };

            reader.readAsDataURL(inputFoto.files[0]);
        }

        displayInfo.style.display = 'block';
        inputFields.style.display = 'none';

        // Exibir os dados salvos na seção "Mostrar Informações"
        document.getElementById('display-nome').textContent = nome;
        document.getElementById('display-idade').textContent = idade;
        document.getElementById('display-email').textContent = email;
    });

    editarBtn.addEventListener('click', function() {
        inputFields.style.display = 'block';
        displayInfo.style.display = 'none';
    });

    // Verificar se existem dados salvos localmente ao carregar a página
    const nomeSalvo = localStorage.getItem('perfilNome');
    const idadeSalva = localStorage.getItem('perfilIdade');
    const emailSalvo = localStorage.getItem('perfilEmail');
    const fotoSalva = localStorage.getItem('perfilFoto');

    if (nomeSalvo && idadeSalva && emailSalvo) {
        document.getElementById('display-nome').textContent = nomeSalvo;
        document.getElementById('display-idade').textContent = idadeSalva;
        document.getElementById('display-email').textContent = emailSalvo;

        displayInfo.style.display = 'block';
        inputFields.style.display = 'none';
        editarBtn.style.display = 'block';

        if (fotoSalva) {
            displayFoto.src = fotoSalva;
        }
    }
});

