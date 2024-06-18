document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchButton = document.getElementById('search-button');
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');
    const data = [
        'T2 de  38m² à Angers',
        'Studio de 12m² à Angers',
        'T4 en colocation , 186 bd Elisabeth Boselli à Angers',
        'T4 en colocation ,8 rue osnabrück à Angers',
        'T3 en colocation, 12 rue de la morellerie à Angers',
        // Ajoutez ici plus d'éléments de données à rechercher
    ];

    function performSearch(query) {
        searchResults.innerHTML = '';
        if (query) {
            const filteredData = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
            if (filteredData.length) {
                filteredData.forEach(item => {
                    const resultItem = document.createElement('p');
                    resultItem.textContent = item;
                    resultItem.addEventListener('click', function() {
                        // Redirection vers la page des logements disponibles avec le terme de recherche
                        window.location.href = `Log.html?search=${encodeURIComponent(item)}`;
                    });
                    searchResults.appendChild(resultItem);
                });
                searchResults.style.display = 'block';
            } else {
                searchResults.style.display = 'none';
            }
        } else {
            searchResults.style.display = 'none';
        }
    }

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        performSearch(searchInput.value);
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });

    
    

    
    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuIcon.classList.toggle('change'); 
    })
    
});






