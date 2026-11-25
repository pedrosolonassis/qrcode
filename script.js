// elementos
const nomePlaca = document.getElementById('nome-placa');
const botaoSalvar = document.querySelector('.btn-primary');
const quadradosQr = document.querySelectorAll('.qr-p');
const opcoesCor = document.querySelectorAll('input[name="cor-qr"]');

// mudar a cor
for (let i = 0; i < opcoesCor.length; i++) {
  opcoesCor[i].addEventListener('change', function () {
    let cor = '#000000';

    if (opcoesCor[i].value === 'azul') {
      cor = '#125af5';
    } else if (opcoesCor[i].value === 'verde') {
      cor = '#34d129';
    } else if (opcoesCor[i].value === 'vermelho') {
      cor = '#e92020';
    }

    // mudança de cor do quadrado do QR
    for (let j = 0; j < quadradosQr.length; j++) {
      quadradosQr[j].style.backgroundColor = cor;
    }
  });
}

// validação do campo
botaoSalvar.addEventListener('click', function (e) {
  e.preventDefault();

  if (nomePlaca.value.trim() === '') {
    alert('Insira o nome da placa!'); // verificar depois pq não está aparecendo
  } else {
    alert('Placa "' + nomePlaca.value + '" salva com sucesso!');
  }
});