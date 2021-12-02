const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const valida = document.formulario;

function enviarDados() {
  if (nome.value == "" || nome.value.length < 2) {
    alert("preencha campo nome");
    document.formulario.nome.focus();
    return false;
  }
  if (document.formulario.sobrenome.value == "") {
    alert("escreva seu sobrenome");
    document.formulario.sobrenome.focus();
    return false;
  } else {
    alert("confirmado");
  }
}

enviarDados();

if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote", // nome do atributo data-slide="principal"
    time: 4000, // tempo de transição dos slides
    //nav: true, // se deve ou não mostrar a navegação
    //pauseOnHover: true, // pausa a transição automática
    // auto: true, // se o slide deve passar automaticamente
  });
  new SimpleSlide({
    slide: "portfolio",
    time: 5000,
    nav: true,
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}
