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
            console.log('Búsqueda iniciada con query:', query);
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
                console.log('Enter presionado con query:', query);
                if (query) {
                    window.location.href = `busqueda.html?query=${encodeURIComponent(query)}`;
                } else {
                    console.warn('El término de búsqueda está vacío');
                }
            }
        });
    }
}

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
            console.log('Menú principal toggled:', navMenu.classList.contains('active') ? 'Cerrando' : 'Abriendo');
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                const parentLi = link.parentElement;
                const isSubmenuLink = parentLi.classList.contains('has-submenu');
                const isSubcategoryLink = link.parentElement.parentElement.classList.contains('submenu');

                console.log('Clic en enlace:', link.textContent, {
                    isSubmenuLink,
                    isSubcategoryLink,
                    windowWidth: window.innerWidth
                });

                if (window.innerWidth <= 768) {
                    if (isSubmenuLink) {
                        e.preventDefault();
                        const submenu = parentLi.querySelector('.submenu');
                        if (submenu) {
                            const isSubmenuOpen = submenu.classList.contains('active');
                            console.log('Estado del submenú:', isSubmenuOpen ? 'Abierto' : 'Cerrado');

                            if (!isSubmenuOpen) {
                                console.log('Abriendo submenú para:', link.textContent);
                                parentLi.classList.add('active');
                                submenu.classList.add('active');

                                const menuItemsWithSubmenu = navMenu.querySelectorAll('.has-submenu');
                                menuItemsWithSubmenu.forEach(otherItem => {
                                    if (otherItem !== parentLi) {
                                        otherItem.classList.remove('active');
                                        const otherSubmenu = otherItem.querySelector('.submenu');
                                        if (otherSubmenu) {
                                            otherSubmenu.classList.remove('active');
                                        }
                                    }
                                });
                            } else {
                                console.log('Cerrando submenú para:', link.textContent);
                                parentLi.classList.remove('active');
                                submenu.classList.remove('active');
                            }
                        } else {
                            console.warn('No se encontró submenú para:', link.textContent);
                        }
                    } else if (isSubcategoryLink) {
                        console.log('Seleccionada subcategoría:', link.textContent, 'Cerrando menú principal');
                        navMenu.classList.remove('active');
                    } else {
                        console.log('Seleccionada categoría sin submenú:', link.textContent, 'Cerrando menú principal');
                        navMenu.classList.remove('active');
                    }
                }
            });
        });

        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                console.log('Clic fuera del menú, cerrando menú principal y submenús');
                navMenu.classList.remove('active');
                const menuItemsWithSubmenu = navMenu.querySelectorAll('.has-submenu');
                menuItemsWithSubmenu.forEach(item => {
                    item.classList.remove('active');
                    const submenu = item.querySelector('.submenu');
                    if (submenu) {
                        submenu.classList.remove('active');
                    }
                });
            }
        });
    } else {
        console.error("No se encontraron los elementos menuToggle o navMenu");
    }
}

function setupFilters() {
    const filterFloat = document.querySelector('.filter-float');
    const filters = document.querySelector('.filters');

    if (filterFloat && filters) {
        filterFloat.addEventListener('click', () => {
            console.log('Clic en botón flotante de filtros:', filters.classList.contains('active') ? 'Cerrando filtros' : 'Abriendo filtros');
            filters.classList.toggle('active');
            filterFloat.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!filters.contains(e.target) && !filterFloat.contains(e.target) && filters.classList.contains('active')) {
                console.log('Clic fuera del panel de filtros, cerrando filtros');
                filters.classList.remove('active');
                filterFloat.classList.remove('active');
            }
        });
    } else {
        console.error("No se encontraron los elementos filterFloat o filters");
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const formMessage = document.getElementById('form-message');

    // Depuración
    console.log('nameInput:', nameInput);
    console.log('emailInput:', emailInput);
    console.log('phoneInput:', phoneInput);
    console.log('messageInput:', messageInput);
    console.log('formMessage:', formMessage);

    if (!nameInput || !messageInput || !formMessage) {
        console.error('Uno o más elementos del formulario no se encontraron en el DOM.');
        formMessage.style.display = 'block';
        formMessage.textContent = 'Error: No se pudo encontrar el formulario. Por favor, intenta de nuevo.';
        return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const message = messageInput.value.trim();

    if (!name || !message) {
        formMessage.style.display = 'block';
        formMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
        return;
    }

    // Intentar enviar a WhatsApp
    const whatsappMessage = `Hola, soy ${name}${email ? `, Email: ${email}` : ''}${phone ? `, Teléfono: ${phone}` : ''}. Mensaje: ${message}`;
    const whatsappNumber = '+5491131680489';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Verificar si es un dispositivo móvil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        window.open(whatsappURL, '_blank');
        formMessage.style.display = 'block';
        formMessage.textContent = '¡Mensaje enviado! Serás redirigido a WhatsApp.';
        document.getElementById('contact-form').reset();
        return;
    }

    // Si no es móvil, enviar a Formspree
    const form = event.target;
    form.action = 'https://formspree.io/f/mzzrnyrr'; // Reemplaza con tu endpoint de Formspree
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            formMessage.style.display = 'block';
            formMessage.textContent = '¡Consulta enviada con éxito! Te contactaremos pronto.';
            form.reset();
        } else {
            formMessage.style.display = 'block';
            formMessage.textContent = 'Hubo un error al enviar la consulta. Por favor, intenta de nuevo.';
        }
    })
    .catch(error => {
        console.error('Error en el envío:', error);
        formMessage.style.display = 'block';
        formMessage.textContent = 'Error de conexión. Por favor, intenta de nuevo más tarde.';
    });
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
    setupFilters();

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    } else {
        console.warn('El formulario con id="contact-form" no se encontró en esta página.');
    }

    window.addEventListener('resize', adjustContentMargin);
});