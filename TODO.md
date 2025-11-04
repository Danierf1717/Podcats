# TODO: Agregar Música de Fondo Continua

## Información Recopilada
- Sitio web con páginas HTML: index.html, Principal.html, actividad.html, buscar.html, juegos.html, perfil.html.
- Todas las páginas incluyen script.js.
- Archivo de música: "MEMORIZING (Slowed + Best Part) - Dj Delacroix, Oxxed, Wintherduud.m4a" en el directorio raíz.
- Requisitos: Música automática al iniciar, infinita (loop), sin controles, continua entre páginas (usando localStorage para guardar/reanudar tiempo de reproducción).

## Plan
- Modificar script.js para agregar lógica de audio de fondo.
- Crear elemento <audio> invisible con autoplay, loop y src al archivo de música.
- Usar localStorage para guardar currentTime cada segundo y restaurarlo al cargar la página.
- Asegurar que el audio se reproduzca automáticamente sin interacción del usuario (manejar políticas de autoplay del navegador).

## Pasos
- [x] Editar script.js para agregar el código de audio.
- [ ] Probar en navegador local (usar browser_action si es necesario para verificar reproducción).
- [ ] Verificar que la música se reanude desde el punto guardado al navegar entre páginas.
- [ ] Ajustar si hay problemas con autoplay (puede requerir interacción inicial en algunos navegadores).

## Archivos Dependientes
- script.js (modificar para agregar audio).

## Seguimiento
- Completar cada paso y marcar como [x] al finalizar.
