// Récupérer le bouton de recherche
const searchButton = document.getElementById('search-button');

// Récupérer le formulaire de recherche
const searchForm = document.getElementById('search-form');

// Écouter pour l'événement de clic sur le bouton de recherche
searchButton.addEventListener('click', function () {
  searchForm.classList.toggle('hidden');
});


// Tri-dimensionnel tableau de données d'exemple
const data = [
  ['dog', 'DOG', 'Canis lupus familiaris'],
  ['cat', 'CAT', 'Felis catus'],
  ['lion', 'LION', 'Panthera leo'],
  ['duck', 'DUCK', 'Anatis']
];

// Récupérer l'élément de saisie
const input = document.getElementById('input');

// Écouter pour l'événement de saisie sur l'élément de saisie
input.addEventListener('input', function () {
  // Récupérer la valeur de saisie
  const value = this.value;

  // Filtrer les données en fonction de la valeur de saisie
  const suggestions = data.filter(function (item) {
    return item[0].toLowerCase().indexOf(value.toLowerCase()) !== -1;
  });

  // Afficher les suggestions dans une liste déroulante
  const list = document.getElementById('suggestions');
  list.innerHTML = '';

  suggestions.forEach(function (suggestion) {
    const item = document.createElement('li');
    item.innerHTML = suggestion[0];
    item.classList.add('p-2', 'hover:bg-gray-200');
    item.addEventListener('click', function () {
      input.value = suggestion[0];
      list.innerHTML = '';
    });
    list.appendChild(item);
  });
});