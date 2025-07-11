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
// Contador de visitas y clics por producto
function setupTracking() {
    console.log('setupTracking ejecutado en', window.location.href);
    // Contador de visitas por página
    let visitas = JSON.parse(localStorage.getItem('visitas')) || {};
    const pagePath = window.location.pathname.split('/').pop() || 'index.html';
    let pageKey = pagePath;
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('nombre') || '';
    const subcategoria = urlParams.get('subcategoria') || '';
    if (pagePath === 'categoria.html' && categoria) {
        pageKey = `categoria_${categoria}${subcategoria ? `_sub_${subcategoria}` : ''}`;
    }
    visitas[pageKey] = (visitas[pageKey] || 0) + 1;
    try {
        localStorage.setItem('visitas', JSON.stringify(visitas));
        console.log('Visita registrada para', pageKey, ':', visitas[pageKey], 'localStorage:', localStorage.getItem('visitas'));
    } catch (e) {
        console.error('Error al guardar en localStorage:', e);
    }

    // Contador de visitas por producto
    let visitasProductos = JSON.parse(localStorage.getItem('visitasProductos')) || {};
    if (pagePath === 'producto.html') {
        const productName = urlParams.get('nombre') || 'Producto sin nombre';
        if (productName) {
            visitasProductos[productName] = (visitasProductos[productName] || 0) + 1;
            try {
                localStorage.setItem('visitasProductos', JSON.stringify(visitasProductos));
                console.log('Visita a producto registrada para', productName, ':', visitasProductos[productName], 'localStorage:', localStorage.getItem('visitasProductos'));
            } catch (e) {
                console.error('Error al guardar en localStorage:', e);
            }
        }
    }

    // Contador de clics
    let clicsProductos = JSON.parse(localStorage.getItem('clicsProductos')) || {};
    function registrarClic(producto) {
        clicsProductos[producto] = (clicsProductos[producto] || 0) + 1;
        try {
            localStorage.setItem('clicsProductos', JSON.stringify(clicsProductos));
            console.log('Clic registrado para', producto, ':', clicsProductos[producto], 'localStorage:', localStorage.getItem('clicsProductos'));
        } catch (e) {
            console.error('Error al guardar en localStorage:', e);
        }
    }

    // Clics en productos
    const productCards = document.querySelectorAll('.product-card a, .product-card .buy-btn');
    console.log('Elementos para clics encontrados:', productCards.length);
    productCards.forEach(element => {
        element.addEventListener('click', () => {
            const productContainer = element.closest('.product-card');
            const productName = productContainer.querySelector('h3')?.textContent.trim() || 'Producto sin nombre';
            console.log('Clic detectado en', productName);
            registrarClic(productName);
        });
    });

    // Clics en consultar
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            const productName = document.getElementById('product-name')?.textContent.trim() || 'Producto sin nombre';
            console.log('Consulta detectada para', productName);
            registrarClic(`Consulta_${productName}`);
        });
    } else {
        console.log('Botón whatsapp-btn no encontrado');
    }
}

// Asegurar que se ejecute
document.addEventListener('DOMContentLoaded', () => {
    console.log('Scripts cargado en', window.location.href);
    setupTracking();
});


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
    setupViewToggle(); // Nueva función

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    } else {
        console.warn('El formulario con id="contact-form" no se encontró en esta página.');
    }

    window.addEventListener('resize', adjustContentMargin);
});


function setupViewToggle() {
    const viewToggle = document.getElementById('view-toggle');
    const productGrid = document.getElementById('product-grid');
    const gridBtn = document.querySelector('.view-btn.grid-view');
    const listBtn = document.querySelector('.view-btn.list-view');

    if (viewToggle && productGrid && gridBtn && listBtn) {
        // Establecer vista mosaico como predeterminada en móvil
        const defaultView = localStorage.getItem('preferredView') || 'grid';
        productGrid.classList.remove('grid-view', 'list-view'); // Limpiar clases
        productGrid.classList.add(defaultView + '-view');
        if (defaultView === 'grid') {
            gridBtn.classList.add('active');
            listBtn.classList.remove('active');
        } else {
            listBtn.classList.add('active');
            gridBtn.classList.remove('active');
        }

        gridBtn.addEventListener('click', () => {
            console.log('Cambiando a vista en mosaico');
            productGrid.classList.remove('list-view');
            productGrid.classList.add('grid-view');
            gridBtn.classList.add('active');
            listBtn.classList.remove('active');
            localStorage.setItem('preferredView', 'grid');
        });

        listBtn.addEventListener('click', () => {
            console.log('Cambiando a vista en lista');
            productGrid.classList.remove('grid-view');
            productGrid.classList.add('list-view');
            listBtn.classList.add('active');
            gridBtn.classList.remove('active');
            localStorage.setItem('preferredView', 'list');
        });

        // Forzar actualización de estilos al cargar
        window.dispatchEvent(new Event('resize'));
    } else {
        console.warn('No se encontraron los elementos para el toggle de vista');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const searchBar = document.querySelector('.search-bar');
    let lastScrollTop = 0;
    let headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));

    // Función para verificar si el usuario está cerca de la barra de búsqueda
    function isSearchBarNearTop() {
        if (!searchBar) return false;
        const searchBarRect = searchBar.getBoundingClientRect();
        return searchBarRect.top <= headerHeight + 20; // Mostrar header cuando la barra de búsqueda está a 20px del borde superior
    }

    // Función para manejar el scroll
    function handleScroll() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // No hacer nada si el scroll es menor a 0 (evita errores en algunos navegadores)
        if (currentScroll < 0) return;

        // Verificar si la barra de búsqueda está cerca del borde superior
        if (isSearchBarNearTop()) {
            header.classList.remove('hidden');
            header.classList.add('visible');
            return;
        }

        // Determinar la dirección del scroll
        if (currentScroll > lastScrollTop && currentScroll > headerHeight) {
            // Scroll hacia abajo: ocultar el header
            header.classList.remove('visible');
            header.classList.add('hidden');
        } else if (currentScroll < lastScrollTop) {
            // Scroll hacia arriba: mostrar el header
            header.classList.remove('hidden');
            header.classList.add('visible');
        }

        lastScrollTop = currentScroll;
    }

    // Escuchar el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Ajustar --header-height en móviles
    function updateHeaderHeight() {
        headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
    }

    // Actualizar la altura del header en cambios de tamaño de ventana
    window.addEventListener('resize', updateHeaderHeight);
});

