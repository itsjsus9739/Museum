# Museo de Nosotros

Juego web en pixel art (vista cenital) que funciona como museo de recuerdos de pareja.
Se publica con GitHub Pages en https://itsjsus9739.github.io/Museum/

**Siempre responde en español.**

## Archivos

- `index.html` — HTML, CSS y lógica: música, ventanas (álbum, cartas, música, logros, tablón), salas, colisiones, NPC, cuentas con Firebase y bucle del juego.
- `arte.js` — todo el pixel art dibujado con código: fondos de las 2 salas, sprites de objetos, iluminación y personajes.
- `contenido.js` — datos editables por el usuario (fotos, cartas, música, logros, planes, frases y config de Firebase en `nube`). No cambies su estructura sin actualizar `index.html`.
- `fotos/`, `musica/` — archivos referenciados desde `contenido.js`.

Orden de carga: SDK de Firebase (compat 10.12.2) → `contenido.js?v=N` → `arte.js?v=N` → script principal.
Cuando cambies `contenido.js` o `arte.js`, sube el número `?v=` en `index.html` para evitar caché.

## Estilo y reglas

- Mundo estilo "To the Moon" (cálido, nocturno, luz HD-2D). Personajes estilo "OMORI".
- **No modifiques** los sprites de personajes (`drawOmoriGirl`, `drawOmoriBoy` en `arte.js`): el usuario los hizo y quiere que se queden así.
- Lienzo de 384x256 (W=24, H=16, T=16) escalado con `image-rendering: pixelated`.
- La lógica corre a 60 pasos/s fijos (acumulador de tiempo); no la ates a `requestAnimationFrame`.
- Audio en móvil: solo se puede reproducir tras un gesto (pointerup/touchend/click/keydown). `NotAllowedError` no significa archivo inexistente.
- Sin build ni dependencias: HTML/JS planos.
- No uses `localStorage` para datos que deban sincronizarse; usa `guardar()`.

## Firebase

- Auth con correo/contraseña; el nombre se convierte en `nombre@museo-cuenta.app`.
- Firestore: colección `partidas/{uid}` con `{ favs, outfit, vol, room, px, py, nombre, actualizado }`.
- Reglas: cada usuario solo lee/escribe su propio documento.
- Para guardar algo nuevo: agrégalo en `estado()` y `aplicar()` y llama `guardar()` cuando cambie.

## Probar

Abrir con Live Server (`127.0.0.1` o `localhost` deben estar en los dominios autorizados de Firebase).
