// Função para exibir mensagem de erro visual por um tempo determinado
function showError(message) {
  const errorText = document.createElement('small');
  errorText.textContent = message;
  errorText.style.color = 'red';
  errorText.id = "error-message";

  if (!document.getElementById("error-message")) {
    itemInput.insertAdjacentElement('afterend', errorText);
  }
  itemInput.style.border = "2px solid red";

  // Define o tempo de exibição da mensagem (2 segundos)
  setTimeout(() => {
      removeError();
  }, 3000); // 2000 milissegundos = 2 segundos
}

// Função para remover mensagem de erro
function removeError() {
  const errorText = document.getElementById("error-message");
  if (errorText) {
      errorText.remove();
  }
  itemInput.style.border = "1px solid #ccc";
}

// Função para verificar se o item já existe
function itemExists(itemText) {
  const items = document.querySelectorAll("#shoppingList li");
  return Array.from(items).some(item => item.firstChild.textContent === itemText);
}

// Evento de clique para adicionar item
document.querySelector('#addItemButton').addEventListener('click', function() {
  const itemText = itemInput.value.trim();
  if (!itemText) {
      showError("Por favor, digite um item válido.");
  } else if (itemExists(itemText)) {
      showError("Este item já foi adicionado.");
  } else {
      addItemToList(itemText);
  }
});
