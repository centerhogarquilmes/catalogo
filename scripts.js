// Normalizar texto para manejar acentos
function normalizeString(input) {
    if (Array.isArray(input)) {
        input = input.join(' ');
    }
    if (typeof input !== 'string') {
        input = String(input || '');
    }
    return input.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// Funcionalidad de búsqueda
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            console.log('Búsqueda iniciada con query:', query); // Depuración
            if (query) {
                window.location.href = `busqueda.html?query=${encodeURIComponent(query)}`;
            } else {
                console.warn('El término de búsqueda está vacío');
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                console.log('Enter presionado con query:', query); // Depuración
                if (query) {
                    window.location.href = `busqueda.html?query=${encodeURIComponent(query)}`;
                } else {
                    console.warn('El término de búsqueda está vacío');
                }
            }
        });
    }
}

// Resto de scripts.js (setupSuggestions, adjustContentMargin, etc.) sin cambios
function setupSuggestions() {
    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('suggestions');
    let selectedIndex = -1;

    if (!searchInput || !suggestionsContainer) return;

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        const queryNormalized = normalizeString(query);
        suggestionsContainer.innerHTML = '';
        selectedIndex = -1;

        if (query.length === 0) {
            suggestionsContainer.style.display = 'none';
            searchInput.style.borderBottomLeftRadius = '4px';
            return;
        }

        // Filtrar productos por nombre, categoria, codigo y descripcion
        const filteredSuggestions = productos.filter(producto =>
            normalizeString(producto.nombre).includes(queryNormalized) ||
            normalizeString(producto.categoria).includes(queryNormalized) ||
            (producto.codigo && normalizeString(producto.codigo).includes(queryNormalized)) ||
            normalizeString(producto.descripcion).includes(queryNormalized)
        );

        if (filteredSuggestions.length === 0) {
            suggestionsContainer.style.display = 'none';
            searchInput.style.borderBottomLeftRadius = '4px';
            return;
        }

        // Mostrar hasta 5 sugerencias
        filteredSuggestions.slice(0, 5).forEach((producto, index) => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.textContent = producto.nombre;
            suggestionDiv.setAttribute('data-index', index);
            suggestionDiv.addEventListener('click', () => {
                searchInput.value = producto.nombre;
                suggestionsContainer.style.display = 'none';
                searchInput.style.borderBottomLeftRadius = '4px';
                window.location.href = `producto.html?nombre=${encodeURIComponent(producto.nombre)}&imagen=${producto.imagen}&imagenes=${producto.imagenes.join(',')}&descripcion=${encodeURIComponent(producto.descripcion)}&caracteristicas=${producto.caracteristicas.map(c => encodeURIComponent(c)).join(',')}`;
            });
            suggestionsContainer.appendChild(suggestionDiv);
        });

        suggestionsContainer.style.display = 'block';
        searchInput.style.borderBottomLeftRadius = '0';
    });

    searchInput.addEventListener('keydown', (e) => {
        const suggestionItems = suggestionsContainer.querySelectorAll('div');
        if (suggestionItems.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, suggestionItems.length - 1);
            updateSelection();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, -1);
            updateSelection();
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            e.preventDefault();
            const selectedSuggestion = suggestionItems[selectedIndex].textContent;
            searchInput.value = selectedSuggestion;
            suggestionsContainer.style.display = 'none';
            searchInput.style.borderBottomLeftRadius = '4px';
            const producto = productos.find(p => p.nombre === selectedSuggestion);
            if (producto) {
                window.location.href = `producto.html?nombre=${encodeURIComponent(producto.nombre)}&imagen=${producto.imagen}&imagenes=${producto.imagenes.join(',')}&descripcion=${encodeURIComponent(producto.descripcion)}&caracteristicas=${producto.caracteristicas.map(c => encodeURIComponent(c)).join(',')}`;
            }
        }
    });

    function updateSelection() {
        const suggestionItems = suggestionsContainer.querySelectorAll('div');
        suggestionItems.forEach((item, index) => {
            item.classList.toggle('selected', index === selectedIndex);
        });
        if (selectedIndex >= 0) {
            suggestionItems[selectedIndex].scrollIntoView({ block: 'nearest' });
        }
    }

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
            searchInput.style.borderBottomLeftRadius = '4px';
            selectedIndex = -1;
        }
    });
}

function adjustContentMargin() {
    const header = document.querySelector('.header');
    const mainContent = document.querySelector('.banner') || 
                        document.querySelector('.catalog') || 
                        document.querySelector('.product-page') ||
                        document.querySelector('.contact-page') ||
                        document.querySelector('.legal-page');
    const headerHeight = header.offsetHeight;
    const isProductPage = document.body.classList.contains('product-page-body');

    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

    if (mainContent) {
        if (window.innerWidth > 768 && !isProductPage) {
            mainContent.style.marginTop = `${headerHeight + 20}px`;
        } else if (window.innerWidth <= 768) {
            mainContent.style.marginTop = `${headerHeight}px`;
        } else {
            mainContent.style.marginTop = '0';
        }
    }
}

function setupMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
}

const scrollToTopBtn = document.querySelector('.scroll-to-top');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    adjustContentMargin();
    setupSearch();
    setupSuggestions();
    setupMenuToggle();
});

window.addEventListener('resize', adjustContentMargin);

