const itens = document.getElementById('itens');

listaItems.map(item => {
  itens.innerHTML += `
  <figure>
    <img src="${item.src}" alt="item ${item.id}" width="100%">
  </figure>
  `;
});