// Seleção de elementos HTML
const form = document.getElementById('shopping-form');
const itemInput = document.getElementById('itemInput');
const shoppingList = document.getElementById('shoppingList');

// Função para carregar os itens salvos no LocalStorage ao iniciar
function loadItemsFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
  items.forEach(itemText => {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Excluir";

    deleteBtn.onclick = () => {
      listItem.classList.add('hide');
      setTimeout(() => {
        listItem.remove();
        removeItemFromLocalStorage(itemText); // Remover do LocalStorage também
      }, 500);
    };

    listItem.appendChild(deleteBtn);
    shoppingList.appendChild(listItem);
  });
}

// Event listeners
document.addEventListener('DOMContentLoaded', loadItemsFromLocalStorage);
form.addEventListener('submit', addItem);
