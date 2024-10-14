// Função para salvar os itens no LocalStorage
function saveItemToLocalStorage(itemText) {
    let items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    items.push(itemText);
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }
  
  // Função para remover um item do LocalStorage
  function removeItemFromLocalStorage(itemText) {
    let items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    items = items.filter(item => item !== itemText);
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }
  
  // Função para adicionar um item à lista
  function addItem(event) {
    event.preventDefault();
  
    const itemText = itemInput.value.trim();
    if (itemText === "") {
      showError("Por favor, digite um item válido.");
      return;
    }
  
    if (itemExists(itemText)) {
      showError("Este item já está na lista.");
      return;
    }
  
    removeError();
  
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
  
    saveItemToLocalStorage(itemText); // Salva o item no LocalStorage
    itemInput.value = "";
  }
  