// elementos do formulário
const formPlaca = document.getElementById('form-placa');
const nomePlaca = document.getElementById('nome-placa');
const textoPrincipal = document.getElementById('texto-principal');
const textoSecundario = document.getElementById('texto-secundario');
const opcoesModelo = document.querySelectorAll('input[name="modelo"]');
const opcoesCor = document.querySelectorAll('input[name="cor-qr"]');
const checkSeloNfc = document.querySelector('input[name="selo-nfc"]');

// elementos da prévia
const placaPreview = document.getElementById('placa-preview');
const previewTitulo = document.getElementById('preview-titulo');
const previewSubtitulo = document.getElementById('preview-subtitulo');
const previewNfc = document.getElementById('preview-nfc');
const tituloNome = document.getElementById('titulo-nome');
const quadradosQr = document.querySelectorAll('.qr-p');

// ===== Texto em tempo real =====
nomePlaca.addEventListener('input', function () {
  tituloNome.textContent = nomePlaca.value.trim() === '' ? '—' : nomePlaca.value;
});

textoPrincipal.addEventListener('input', function () {
  previewTitulo.textContent = textoPrincipal.value;
});

textoSecundario.addEventListener('input', function () {
  previewSubtitulo.textContent = textoSecundario.value;
});

// ===== Troca de modelo (mesa / cartão / adesivo) =====
for (let i = 0; i < opcoesModelo.length; i++) {
  opcoesModelo[i].addEventListener('change', function () {
    placaPreview.classList.remove('plate--mesa', 'plate--cartao', 'plate--adesivo');
    placaPreview.classList.add('plate--' + opcoesModelo[i].value);
  });
}

// ===== Cor do QR =====
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

// ===== Selo NFC =====
checkSeloNfc.addEventListener('change', function () {
  previewNfc.hidden = !checkSeloNfc.checked;
});

// ===== Validação no envio do formulário =====
formPlaca.addEventListener('submit', function (e) {
  e.preventDefault(); // impede o recarregamento da página

  if (nomePlaca.value.trim() === '') {
    alert('Insira o nome da placa!');
    nomePlaca.focus();
    return;
  }

  if (textoPrincipal.value.trim() === '') {
    alert('Insira o texto principal!');
    textoPrincipal.focus();
    return;
  }

  alert('Placa "' + nomePlaca.value + '" salva com sucesso!');
});
