const campos = document.querySelectorAll(".campo");

campos.forEach(function (campo) {
  const inputText = campo.querySelector(".input-text");

  inputText.addEventListener("change", function () {
    if (inputText.value !== "") {
      campo.classList.add("campo-preenchido");
      campo.classList.remove("campo-errado");
    } else {
      campo.classList.remove("campo-preenchido");
    }
  });
});

function validarCampos() {
  let todosPreenchidos = true;

  campos.forEach(function (campo) {
    const inputText = campo.querySelector(".input-text");
    if (inputText.value === "") {
      campo.classList.add("campo-errado");
      todosPreenchidos = false;
    } else {
      campo.classList.remove("campo-errado");
    }
  });

  return todosPreenchidos;
}

function enviar() {
  const todosPreenchidos = validarCampos();

  if (todosPreenchidos) {
    alert("Enviado");
  } else {
    alert("Preencha todos os campos obrigatórios.");
  }
}
