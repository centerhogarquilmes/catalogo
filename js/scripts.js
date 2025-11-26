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

// Generar o recuperar ID de dispositivo
function getDeviceId() {
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
        deviceId = 'device_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('deviceId', deviceId);
    }
    return deviceId;
}

// Verificar si el dispositivo está excluido
function isDeviceExcluded() {
    const deviceId = getDeviceId();
    const excludedDevices = JSON.parse(localStorage.getItem('excludedDevices')) || {};
    return !!excludedDevices[deviceId];
}

// Contador de visitas y clics por producto
function setupTracking() {
    console.log('setupTracking ejecutado en', window.location.href);

    // Registrar dispositivo único
    const deviceId = getDeviceId();
    let uniqueDevices = JSON.parse(localStorage.getItem('uniqueDevices')) || {};
    if (!uniqueDevices[deviceId]) {
        uniqueDevices[deviceId] = true;
        localStorage.setItem('uniqueDevices', JSON.stringify(uniqueDevices));
        console.log('Dispositivo único registrado:', deviceId);
    }

    // No registrar nada si el dispositivo está excluido
    if (isDeviceExcluded()) {
        console.log('Dispositivo excluido, no se registran visitas ni clics');
        return;
    }

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


function cargarEstadisticas() {
    // Ejemplo de datos ficticios o calculados
    const ventasHoy = Math.floor(Math.random() * 20) + 1; // Simulación
    const pedidosPendientes = Math.floor(Math.random() * 10);
    const stockBajo = Math.floor(Math.random() * 5);

    document.getElementById('ventas-hoy').textContent = ventasHoy;
    document.getElementById('pedidos-pendientes').textContent = pedidosPendientes;
    document.getElementById('stock-bajo').textContent = stockBajo;

    // Productos más vistos
    const visitasProductos = JSON.parse(localStorage.getItem('visitasProductos')) || {};
    const productosOrdenados = Object.entries(visitasProductos)
        .sort((a, b) => b[1] - a[1]) // Ordenar por visitas
        .slice(0, 10); // Top 10

    const contenedor = document.getElementById('productos-mas-vistos');
    contenedor.innerHTML = '';

    if (productosOrdenados.length === 0) {
        contenedor.textContent = 'No hay datos de visitas todavía.';
        return;
    }

    productosOrdenados.forEach(([nombre, visitas]) => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <h4>${nombre}</h4>
            <p>${visitas} visitas</p>
        `;
        contenedor.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('ventas-hoy')) {
        cargarEstadisticas();
    }
});


// === Popup Newsletter ===
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup_email_subscription");
    const closeButtons = document.querySelectorAll(".popup-close");
    const checkboxHide = document.getElementById("rv_popup_hide");
    const form = document.getElementById("popup-newsletter-form");
    const resultMessage = document.querySelector(".result_email_subscription");
    const emailInput = document.getElementById("rvemail");

    // ✅ Revisar si ya se marcó "no volver a mostrar" y si sigue vigente
    const hideUntil = localStorage.getItem("hidePopupUntil");
    const now = new Date().getTime();

    if (hideUntil && now < parseInt(hideUntil)) {
        console.log("Popup oculto hasta:", new Date(parseInt(hideUntil)).toLocaleString());
        if (popup) popup.style.display = "none";
    } else {
        // Mostrar popup (ejemplo con delay de 1s)
        if (popup) {
            console.log("Popup encontrado, mostrando...");
            setTimeout(() => {
                popup.style.display = "flex";
            }, 1000);
        } else {
            console.error("Popup no encontrado en el DOM");
        }
    }

    // Función para guardar expiración de 7 días
    function setHidePopup(days = 7) {
        const expireDate = new Date().getTime() + days * 24 * 60 * 60 * 1000;
        localStorage.setItem("hidePopupUntil", expireDate.toString());
        console.log("Popup oculto hasta:", new Date(expireDate).toLocaleString());
    }

    // Cerrar popup
    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("Cerrando popup");
            popup.style.display = "none";
            if (checkboxHide && checkboxHide.checked) {
                setHidePopup(7); // ✅ Guardar por 7 días
            }
        });
    });

    // Validación en tiempo real del email
    if (emailInput) {
        emailInput.addEventListener("input", function () {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                resultMessage.textContent = "Por favor, ingrese un correo electrónico válido.";
                resultMessage.style.color = "red";
            } else {
                resultMessage.textContent = "";
            }
        });
    } else {
        console.error("Elemento rvemail no encontrado");
    }

    // Enviar formulario a Formspree
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = emailInput.value.trim();

            if (!email) {
                resultMessage.textContent = "Por favor, ingrese un correo electrónico válido.";
                resultMessage.style.color = "red";
                return;
            }

            fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: {
                    "Accept": "application/json"
                }
            })
            .then(response => {
                if (response.ok) {
                    resultMessage.textContent = "¡Gracias por suscribirte! Pronto recibirás nuestras promociones.";
                    resultMessage.style.color = "green";
                    form.reset();
                    setTimeout(() => {
                        popup.style.display = "none";
                    }, 2000);
                    if (checkboxHide && checkboxHide.checked) {
                        setHidePopup(7); // ✅ Guardar también al enviar
                    }
                    if (window.gtag) {
                        gtag('event', 'newsletter_signup', {
                            'event_category': 'engagement',
                            'event_label': 'Newsletter Popup'
                        });
                    }
                } else {
                    resultMessage.textContent = "Error al suscribirte. Por favor, intenta de nuevo.";
                    resultMessage.style.color = "red";
                }
            })
            .catch(error => {
                console.error("Error en el envío:", error);
                resultMessage.textContent = "Error de conexión. Por favor, intenta de nuevo.";
                resultMessage.style.color = "red";
            });
        });
    } else {
        console.error("Formulario popup-newsletter-form no encontrado");
    }
});
// === /Popup Newsletter ===



// === Chatbot Obelisquín ===
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("chatbot-toggle");
  const chatbot = document.getElementById("chatbot-container");
  const closeBtn = document.getElementById("chatbot-close");
  const sendBtn = document.getElementById("chatbot-send");
  const input = document.getElementById("chatbot-input");
  const messages = document.getElementById("chatbot-messages");

  const respuestas = {
    // Saludos //
    "hola": "¡Hola! Soy Obelisquín 𓉶 ¿En qué puedo ayudarte?",

    // Horarios y contactos//
    "horario": "Nuestro horario es de Lunes a Sábado de 9 a 20 hs.",
    "hora": "Nuestro horario es de Lunes a Sábado de 9 a 20 hs.",
    "dias": "Nuestro horario es de Lunes a Sábado de 9 a 20 hs.",
    "dia": "Nuestro horario es de Lunes a Sábado de 9 a 20 hs.",
    "día": "Nuestro horario es de Lunes a Sábado de 9 a 20 hs.",
    "abierto": "Nuestro horario es de Lunes a Sábado de 9 a 20 hs.",
    "abren": "Nuestro horario es de Lunes a Sábado de 9 a 20 hs.",
    "horarios": "Nuestro horario es de Lunes a Sábado de 9 a 20 hs.",
    "ubicacion": "Estamos en Quilmes, Rivadavia 220, entre Lavalle y Brown.",
    "ubicación": "Estamos en Quilmes, Rivadavia 220, entre Lavalle y Brown.",
    "direccion": "Estamos en Quilmes, Rivadavia 220, entre Lavalle y Brown.",
    "dirección": "Estamos en Quilmes, Rivadavia 220, entre Lavalle y Brown.",
    "whatsapp": "Nuestro WhatsApp es 1130680489. Podemos atenderte de 9 a 20hs.<a href='https://api.whatsapp.com/send?phone=5491131680489&text=Hola,%20tengo%20una%20consulta' target='_blank'>WhatsApp</a>",
    "WhatsApp": "Nuestro WhatsApp es 1130680489. Podemos atenderte de 9 a 20hs.<a href='https://api.whatsapp.com/send?phone=5491131680489&text=Hola,%20tengo%20una%20consulta' target='_blank'>WhatsApp</a>",
    "Whatsapp": "Nuestro WhatsApp es 1130680489. Podemos atenderte de 9 a 20hs.<a href='https://api.whatsapp.com/send?phone=5491131680489&text=Hola,%20tengo%20una%20consulta' target='_blank'>WhatsApp</a>",
    "telefono": "Nuestro teléfono de WhatsApp es 1130680489. Podemos atenderte de 9 a 2hs.<a href='https://api.whatsapp.com/send?phone=5491131680489&text=Hola,%20tengo%20una%20consulta' target='_blank'>WhatsApp</a>",
    "teléfono": "Nuestro teléfono de WhatsApp es 1130680489. Podemos atenderte de 9 a 2hs.<a href='https://api.whatsapp.com/send?phone=5491131680489&text=Hola,%20tengo%20una%20consulta' target='_blank'>WhatsApp</a>",
    "numero" : "Nuestro numero de WhatsApp es 1130680489. Podemos atenderte de 9 a 2hs.<a href='https://api.whatsapp.com/send?phone=5491131680489&text=Hola,%20tengo%20una%20consulta' target='_blank'>WhatsApp</a>",
    "número" : "Nuestro numero de WhatsApp es 1130680489. Podemos atenderte de 9 a 2hs.<a href='https://api.whatsapp.com/send?phone=5491131680489&text=Hola,%20tengo%20una%20consulta' target='_blank'>WhatsApp</a>",

    // Formas de pago //
    "pago": "Aceptamos efectivo, débito, crédito y transferencias. Con qué medio de pago estás buscando?",
    "pagar": "Aceptamos efectivo, débito, crédito y transferencias. Con qué medio de pago estás buscando?",
    "garantia": "Todos nuestros productos tienen garantía oficial de 12 meses.",
    "garantias": "Todos nuestros productos tienen garantía oficial de 12 meses.",
    "garantía": "Todos nuestros productos tienen garantía oficial de 12 meses.",
    "garantías": "Todos nuestros productos tienen garantía oficial de 12 meses.",
    "precios": "Todos los precios estan publicados al contado y con tarjetas de crédito. Cómo estas averiguando?",
    "precio": "Todos los precios estan publicados al contado y con tarjetas de crédito. Cómo estas averiguando?",
    "contado": "Todos los precios al contado tienen un descuento. Podes hacerlo con efectivo, débito, transferencias o tarjetas de crédito en un pago. Cómo te interesa?",
    "efectivo": "Los precios en efectivo tienen un importante descuento sobre el precio de lista.",
    "creditos": "Te interesan las ofertas con tarjetas de crédito o de Créditos Personales?",
    "credito": "Te interesan las ofertas con tarjetas de crédito o de Créditos Personales?",
    "banco": "Los precios con tarjetas de crédito de cuaquier banco son el precio de lista en 3 y 6  cuotas sin interes.",
    "naranja": "Los precios con Tarjeta Naranja son el precio de lista en 3 y 6 cuotas sin interes.",
    "personales": "Los Créditos Personales se puede consultar con el DNI del interesado. Si te intresa, podrias comunicarte por WhatsApp para pedir calificación.",
    "tarjeta":"Aceptamos todas las tarjetas de crédito de todos los bancos. La tuya es de banco o Naranja?",
    "tarjetas":"Aceptamos todas las tarjetas de crédito de todos los bancos. La tuya es de banco o Naranja?",

    // Envios //
    "envio": "Los envíos se pueden programar para cuando el cliente lo desee. Pods consultar disponibilidad, precios y bonificaciones usando el WhatsApp de la sucursal.",
    
    // Productos //
    "lavarropas": "Acá tenes la seccion Lavarropas para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Lavado&subcategoria=Lavarropas' target='_blank'>Ir a Lavarropas</a>",
    "lavarropa": "Acá tenes la seccion Lavarropas para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Lavado&subcategoria=Lavarropas' target='_blank'>Ir a Lavarropas</a>",
    "heladeras": "Acá tenes la seccion Heladeras para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Heladeras+y+freezers&subcategoria=Heladeras' target='_blank'>Ir a Heladeras</a>",
    "heladera": "Acá tenes la seccion Heladeras para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Heladeras+y+freezers&subcategoria=Heladeras' target='_blank'>Ir a Heladeras</a>",
    "cocinas": "Acá tenes la seccion Cocinas para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Cocinas%2C+anafes+y+purificadores&subcategoria=Cocinas' target='_blank'>Ir a Cocinas</a>",
    "cocina": "Acá tenes la seccion Cocinas para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Cocinas%2C+anafes+y+purificadores&subcategoria=Cocinas' target='_blank'>Ir a Cocinas</a>",
    "celulares": "Acá tenes la seccion Celulares para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Tecnologia&subcategoria=Celulares' target='_blank'>Ir a Celulares</a>",
    "celular": "Acá tenes la seccion Celulares para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Tecnologia&subcategoria=Celulares' target='_blank'>Ir a Celulares</a>",
    "telefonos": "Acá tenes la seccion Celulares para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Tecnologia&subcategoria=Celulares' target='_blank'>Ir a Celulares</a>",
    "teléfonos": "Acá tenes la seccion Celulares para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Tecnologia&subcategoria=Celulares' target='_blank'>Ir a Celulares</a>",
    "celu": "Acá tenes la seccion Celulares para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Tecnologia&subcategoria=Celulares' target='_blank'>Ir a Celulares</a>",
    "freezers": "Acá tenes la seccion Freezers para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Heladeras+y+freezers&subcategoria=Freezers' target='_blank'>Ir a Freezers</a>",
    "televisores": "Acá tenes la seccion TV para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Tv+y+audio&subcategoria=Tv' target='_blank'>Ir a TV</a>",
    "televisor": "Acá tenes la seccion TV para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Tv+y+audio&subcategoria=Tv' target='_blank'>Ir a TV</a>",
    "tele": "Acá tenes la seccion TV para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Tv+y+audio&subcategoria=Tv' target='_blank'>Ir a TV</a>",
    "teles": "Acá tenes la seccion TV para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Tv+y+audio&subcategoria=Tv' target='_blank'>Ir a TV</a>",
    "tv": "Acá tenes la seccion TV para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Tv+y+audio&subcategoria=Tv' target='_blank'>Ir a TV</a>",
    "termotanques": "Acá tenes la seccion Termotanques para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Termotanques+y+calefones&subcategoria=Termotanques' target='_blank'>Ir a Termotanques</a>",
    "termotanque": "Acá tenes la seccion Termotanques para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Termotanques+y+calefones&subcategoria=Termotanques' target='_blank'>Ir a Termotanques</a>",
    "termos": "Acá tenes la seccion Termotanques para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Termotanques+y+calefones&subcategoria=Termotanques' target='_blank'>Ir a Termotanques</a>",
    "termo": "Acá tenes la seccion Termotanques para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Termotanques+y+calefones&subcategoria=Termotanques' target='_blank'>Ir a Termotanques</a>",
    "calefones": "Acá tenes la seccion Calefones para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Termotanques+y+calefones&subcategoria=Calefones' target='_blank'>Ir a Calefones</a>",
    "calefón": "Acá tenes la seccion Calefones para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Termotanques+y+calefones&subcategoria=Calefones' target='_blank'>Ir a Calefones</a>",
    "calefon": "Acá tenes la seccion Calefones para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Termotanques+y+calefones&subcategoria=Calefones' target='_blank'>Ir a Calefones</a>",
    "secarropas": "Acá tenes la seccion Secarropas para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Lavado&subcategoria=Secarropas' target='_blank'>Ir a Secarropas</a>",
    "secarropa": "Acá tenes la seccion Secarropas para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Lavado&subcategoria=Secarropas' target='_blank'>Ir a Secarropas</a>",
    "pavas electricas": "Acá tenes la seccion Pavas Elécticas para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Pequeños&subcategoria=pavas+electricas' target='_blank'>Ir a Pavas eléctricas</a>",
    "pavas eléctricas": "Acá tenes la seccion Pavas Elécticas para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Pequeños&subcategoria=pavas+electricas' target='_blank'>Ir a Pavas eléctricas</a>",
    "pavas": "Acá tenes la seccion Pavas Elécticas para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Pequeños&subcategoria=pavas+electricas' target='_blank'>Ir a Pavas eléctricas</a>",
    "pava": "Acá tenes la seccion Pavas Elécticas para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Pequeños&subcategoria=pavas+electricas' target='_blank'>Ir a Pavas eléctricas</a>",
    "estufas elécticas": "Acá tenes la seccion Calefactores Eléctricos para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Climatizacion&subcategoria=Calefaccion+electrica' target='_blank'>Ir a Calefactores eléctricos</a>",
    "estufa eléctica": "Acá tenes la seccion Calefactores Eléctricos para que veas todo lo que tenemos disponible 😎 👉 <a href='categoria.html?nombre=Climatizacion&subcategoria=Calefaccion+electrica' target='_blank'>Ir a Calefactores eléctricos</a>",
    "estufas": "Acá tenes la seccion Calefactores Eléctricos para que veas todo lo que tenemos disponible. O preferís a gas? 😎 👉 <a href='categoria.html?nombre=Climatizacion&subcategoria=Calefaccion+electrica' target='_blank'>Ir a Calefactores eléctricos</a>",
    "estufa": "Acá tenes la seccion Calefactores Eléctricos para que veas todo lo que tenemos disponible. O preferís a gas? 😎 👉 <a href='categoria.html?nombre=Climatizacion&subcategoria=Calefaccion+electrica' target='_blank'>Ir a Calefactores eléctricos</a>",
    "cafeteras": "Acá tenes la seccion Cafeteras para que veas todo lo que tenemos disponible. 😎 👉 <a href='categoria.html?nombre=Pequeños&subcategoria=Cafeteras' target='_blank'>Ir a Cafeteras</a>",
    "cafetera": "Acá tenes la seccion Cafeteras para que veas todo lo que tenemos disponible. 😎 👉 <a href='categoria.html?nombre=Pequeños&subcategoria=Cafeteras' target='_blank'>Ir a Cafeteras</a>",
    "café": "Acá tenes la seccion Cafeteras para que veas todo lo que tenemos disponible. 😎 👉 <a href='categoria.html?nombre=Pequeños&subcategoria=Cafeteras' target='_blank'>Ir a Cafeteras</a>",
    "cafe": "Acá tenes la seccion Cafeteras para que veas todo lo que tenemos disponible. 😎 👉 <a href='categoria.html?nombre=Pequeños&subcategoria=Cafeteras' target='_blank'>Ir a Cafeteras</a>",
    "microondas": "Acá tenes la seccion Microondas para que veas todo lo que tenemos disponible. 😎 👉 <a href='categoria.html?nombre=Hornos%2C+microondas+y+freidoras&subcategoria=Microondas' target='_blank'>Ir a Microondas</a>",
    "microonda": "Acá tenes la seccion Microondas para que veas todo lo que tenemos disponible. 😎 👉 <a href='categoria.html?nombre=Hornos%2C+microondas+y+freidoras&subcategoria=Microondas' target='_blank'>Ir a Microondas</a>",
    "hornos eléctricos": "Acá tenes la seccion Hornos Eléctricos para que veas todo lo que tenemos disponible. 😎 👉 <a href='categoria.html?nombre=Hornos%2C+microondas+y+freidoras&subcategoria=Hornos' target='_blank'>Ir a Hornos Eléctricos</a>",
    "hornos": "Acá tenes la seccion Hornos Eléctricos para que veas todo lo que tenemos disponible. 😎 👉 <a href='categoria.html?nombre=Hornos%2C+microondas+y+freidoras&subcategoria=Hornos' target='_blank'>Ir a Hornos Eléctricos</a>",
    "hornitos eléctricos": "Acá tenes la seccion Hornos Eléctricos para que veas todo lo que tenemos disponible. 😎 👉 <a href='categoria.html?nombre=Hornos%2C+microondas+y+freidoras&subcategoria=Hornos' target='_blank'>Ir a Hornos Eléctricos</a>",
    "hornitos": "Acá tenes la seccion Hornos Eléctricos para que veas todo lo que tenemos disponible. 😎 👉 <a href='categoria.html?nombre=Hornos%2C+microondas+y+freidoras&subcategoria=Hornos' target='_blank'>Ir a Hornos Eléctricos</a>",
    "aires acondicionados": "Acá tenes la seccion Aires Acondicionados para que veas todo lo que tenemos disponible. 😎 👉 <a href='catalogo/categoria.html?nombre=Climatizacion&subcategoria=Aires+acondicionados' target='_blank'>Ir a Aires Acondicionados</a>",
    "aire acondicionado": "Acá tenes la seccion Aires Acondicionados para que veas todo lo que tenemos disponible. 😎 👉 <a href='catalogo/categoria.html?nombre=Climatizacion&subcategoria=Aires+acondicionados' target='_blank'>Ir a Aires Acondicionados</a>",
    "aires": "Acá tenes la seccion Aires Acondicionados para que veas todo lo que tenemos disponible. 😎 👉 <a href='catalogo/categoria.html?nombre=Climatizacion&subcategoria=Aires+acondicionados' target='_blank'>Ir a Aires Acondicionados</a>",
    "aire": "Acá tenes la seccion Aires Acondicionados para que veas todo lo que tenemos disponible. 😎 👉 <a href='catalogo/categoria.html?nombre=Climatizacion&subcategoria=Aires+acondicionados' target='_blank'>Ir a Aires Acondicionados</a>",
    "ventiladores": "Acá tenes la seccion Ventilación para que veas todo lo que tenemos disponible. 😎 👉 <a href='categoria.html?nombre=Climatizacion&subcategoria=Ventilacion' target='_blank'>Ir a Ventilación</a>",
    "ventilador": "Acá tenes la seccion Ventilación para que veas todo lo que tenemos disponible. 😎 👉 <a href='categoria.html?nombre=Climatizacion&subcategoria=Ventilacion' target='_blank'>Ir a Ventilación</a>",



  };

  function agregarMensaje(texto, autor = "bot") {
  const wrapper = document.createElement("div");
  wrapper.classList.add("message-wrapper");

  const msg = document.createElement("div");
  msg.classList.add("chat-message");

  if (autor === "bot") {
    wrapper.classList.add("bot");
    msg.classList.add("chat-bot");
    msg.innerHTML = texto; // 👈 ahora permite HTML en la respuesta

    // Avatar de Obelisquín
    const avatar = document.createElement("img");
    avatar.src = "images/file-removebg-preview.png";
    avatar.alt = "Obelisquín";
    wrapper.appendChild(avatar);
    wrapper.appendChild(msg);

  } else {
    wrapper.classList.add("user");
    msg.classList.add("chat-user");
    msg.textContent = texto;
    wrapper.appendChild(msg);
  }

  messages.appendChild(wrapper);
  messages.scrollTop = messages.scrollHeight; // Mantener scroll abajo
}




  function procesarConsulta(texto) {
  const consulta = texto.toLowerCase();
  let respuesta = "Lo siento, no entendí tu consulta. 😅";
  for (const clave in respuestas) {
    if (consulta.includes(clave)) {
      respuesta = respuestas[clave];
      break;
    }
  }

  // Simular demora en responder
  setTimeout(() => {
    agregarMensaje(respuesta, "bot");
  }, 600); // medio segundo de delay
}


  sendBtn.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto) {
      agregarMensaje(texto, "user");
      procesarConsulta(texto);
      input.value = "";
    }
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
  });

  toggleBtn.addEventListener("click", () => {
    chatbot.style.display = "flex";
    toggleBtn.style.display = "none";
  });

  closeBtn.addEventListener("click", () => {
    chatbot.style.display = "none";
    toggleBtn.style.display = "block";
  });
});









