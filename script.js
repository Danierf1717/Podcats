    // Música de fondo continua
    const initBackgroundMusic = () => {
      let audio = document.getElementById('background-music');
      if (!audio) {
        audio = document.createElement('audio');
        audio.id = 'background-music';
        audio.src = 'MEMORIZING (Slowed + Best Part) - Dj Delacroix, Oxxed, Wintherduud.m4a';
        audio.loop = true;
        audio.volume = 0.5; // Volumen moderado
        audio.style.display = 'none'; // Ocultar el elemento
        document.body.appendChild(audio);

        // Restaurar tiempo de reproducción desde localStorage
        const savedTime = localStorage.getItem('musicCurrentTime');
        if (savedTime) {
          audio.currentTime = parseFloat(savedTime);
        }

        // Intentar reproducir automáticamente
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            // Reproducción exitosa
          }).catch(() => {
            // Autoplay bloqueado, esperar interacción del usuario
            document.addEventListener('click', () => {
              audio.play();
            }, { once: true });
          });
        }

        // Guardar tiempo de reproducción cada segundo
        setInterval(() => {
          if (!audio.paused) {
            localStorage.setItem('musicCurrentTime', audio.currentTime);
          }
        }, 1000);
      }
    };

    // Mostrar loader al cargar la página
    window.addEventListener("load", () => {
      // soporta ambos IDs: 'loader' o 'loading-overlay', y 'content' o 'main-content'
      const loader = document.getElementById("loader") || document.getElementById("loading-overlay");
      const content = document.getElementById("content") || document.getElementById("main-content");

      // Protege contra elementos faltantes y reduce el tiempo de espera para que el formulario aparezca rápido
      const hide = () => {
        if (loader && loader.classList) loader.classList.add("hidden");
        if (loader && loader.style) loader.style.display = "none";
        if (content && content.classList) content.classList.add("visible");
      };

      // espera corta para suavizar la transición (300ms)
      setTimeout(hide, 1500);

      // Inicializar música de fondo
      initBackgroundMusic();
    });

    // Mostrar loader al navegar entre páginas
    window.addEventListener("beforeunload", () => {
      const loader = document.getElementById("loader") || document.getElementById("loading-overlay");
      if (loader && loader.classList) loader.classList.remove("hidden");
    });


// Detecta cuál página está activa y marca el botón correspondiente
const currentPage = window.location.pathname.split("/").pop();
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
  if (item.getAttribute("href") === currentPage) {
    item.classList.add("active");
  } else {
    item.classList.remove("active");
  }
});



  // Desactiva todos los inputs del menú
  document.querySelectorAll('nav.menu input[type="radio"]').forEach(input => input.checked = false);

  // Marca el input correspondiente según la página
  if (currentPage === "index.html" || currentPage === "") {
    document.getElementById("m-home").checked = true;
  } else if (currentPage === "buscar.html") {
    document.getElementById("m-search").checked = true;
  } else if (currentPage === "actividad.html") {
    document.getElementById("m-notification").checked = true;
  } else if (currentPage === "juegos.html") {
    document.getElementById("m-favorites").checked = true;
  } else if (currentPage === "perfil.html") {
    document.getElementById("m-profile").checked = true;
  }

  document.addEventListener("DOMContentLoaded", () => {
            const sections = document.querySelectorAll(".section");
        
            const revealOnScroll = () => {
                sections.forEach(section => {
                    const sectionTop = section.getBoundingClientRect().top;
                    if (sectionTop < window.innerHeight * 0.85) {
                        section.classList.add("visible");
                    }
                });
            };
        
            window.addEventListener("scroll", revealOnScroll);
            revealOnScroll();
        });
        