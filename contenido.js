/* ============================================================
   CONTENIDO DEL MUSEO — aquí editas todo lo que hay dentro.
   Sube tus imágenes a la carpeta  fotos/  y tus canciones a  musica/
   y escribe la ruta tal cual (ej: "fotos/playa.jpg").
   Si una imagen no existe o la dejas vacía "", se muestra un corazón ♥.
   ============================================================ */
window.CONTENIDO = {

  museo: { titulo: "Museo de Nosotros", sub: "Para ti ♥" },

  /* MÚSICA PRINCIPAL (suena de fondo y se repite en bucle) */
  musicaPrincipal: {
    titulo: "Tema Principal (Nuestro Museo)",
    archivo: "musica/menu.mp3",
    volumen: 0.5
  },

  /* FRASES DEL NPC (cuando te acercas y presionas hablar) */
  frases: [
    "¡Hola mi amor! Hice este museo con todo mi cariño para guardar nuestros mejores recuerdos juntos. ♥",
    "Cada rincón de este lugar tiene un pedacito de nuestra historia. ¡Qué linda te ves hoy!",
    "¿Ya viste nuestras fotos favoritas allá arriba en el pasillo? Son mis preferidas.",
    "Me encanta caminar por aquí y verte explorar todo. Te amo muchísimo. ♥"
  ],

  /* PASILLO: fotos que cuelgan por defecto en los 3 cuadros.
     Ella puede cambiarlas desde el álbum o desde el propio cuadro
     (su elección se guarda en su navegador). */
  favoritas: [
    { src: "fotos/fav1.jpg", titulo: "Primera foto juntos", texto: "Escribe aquí por qué esta es especial." },
    { src: "fotos/fav2.jpg", titulo: "Ese viaje",           texto: "Un recuerdo que no se me olvida." },
    { src: "fotos/fav3.jpg", titulo: "Un día cualquiera",   texto: "Mi favorita porque se te ve feliz." }
  ],

  /* ÁLBUM DE FOTOS (texto es opcional: se muestra si la pones en un cuadro) */
  fotos: [
    { src: "fotos/foto1.jpg", titulo: "amo tu sonrisa", fecha: "2026-09-25", texto: "" },
    { src: "fotos/foto2.jpg", titulo: "Nuestra primera foto",          fecha: "2026-03-30" },
    { src: "fotos/foto3.jpg", titulo: "Cuando empezaste a ser el centro de mi universo",   fecha: "2026-05-02" }
  ],

  /* CARTAS Y MANUSCRITOS
     rareza (color del sello): "comun" | "rara" | "epica" | "legendaria"
     fecha y firma son opcionales. Separa párrafos con \n
     imagen es opcional: aparece pegada como una foto en la carta. */
  cartas: [
    { titulo: "Carta de Amor I", imagen: "fotos/carta1.jpg", rareza: "comun", fecha: "18 de octubre de 2026", firma: "Siempre tuyo",
      texto: "Desde este momento empezaremos a trazar nuestro mundo de manera visual. Espero tener este pequeño museo por siempre y que se vuelva el museo mas grande del mundo" },
  ],

  /* SELECTOR DE MÚSICA (gramófono) */
  musica: [
    { titulo: "Nuestra canción", artista: "Artista", archivo: "musica/cancion1.mp3" },
    { titulo: "Otra canción",    artista: "Artista", yt: "dQw4w9WgXcQ" }
  ],

  /* LOGROS (mapa estilo Minecraft) */
  logros: [
    { id: "inicio", titulo: "Comienza la aventura", desc: "El día que nos conocimos.",   imagen: "fotos/logro1.jpg", fecha: "12 de Noviembre, 2025",   x: 0, y: 1, padre: "",       logrado: true },
    { id: "cita",   titulo: "Primera cita",         desc: "Salimos por primera vez.",    imagen: "fotos/logro2.jpg", fecha: "19 de Diciembre, 2025", x: 1, y: 0, padre: "inicio", logrado: true },
    { id: "novios", titulo: "Oficialmente",         desc: "Empezamos esta historia.",    imagen: "fotos/logro3.jpg", fecha: "3 de Junio, 2026",   x: 1, y: 2, padre: "inicio", logrado: true },
    { id: "viaje",  titulo: "Primer viaje",         desc: "Nuestra próxima aventura.",   imagen: "fotos/logro4.jpg", fecha: "Por descubrir...",    x: 2, y: 0, padre: "cita",   logrado: false },
    { id: "casa",   titulo: "Un hogar",             desc: "Cosas hermosas que vendrán.", imagen: "fotos/logro5.jpg", fecha: "Futuro juntos",       x: 2, y: 2, padre: "novios", logrado: false, oculto: true }
  ],

  /* SALA DE PLANES — TABLÓN DE MISIONES
     tipo: "viaje" | "casa" | "aventura" | "comida" | "sueno" | "amor"
     rango (importancia): "S" | "A" | "B" | "C"
     hecho: false = pendiente, true = cumplida (pasa a la pestaña "Cumplidas")
     pasos es opcional: lista de pasos; usa {t:"texto", ok:true} para marcarlos.
     El tablón de la pared muestra hasta 14 misiones. */
  planes: [
    { titulo: "Viaje a la playa", tipo: "viaje", rango: "A", fecha: "Diciembre 2026", recompensa: "Atardeceres y mil fotos juntos",
      desc: "Escaparnos unos días a ver el mar, sin relojes ni pendientes.",
      pasos: [{t:"Elegir destino",ok:true},{t:"Reservar hospedaje",ok:false},{t:"Hacer maletas",ok:false}], hecho: false },
    { titulo: "Cocinar juntos una receta nueva", tipo: "comida", rango: "C", fecha: "Este mes", recompensa: "Cena casera y cocina hecha un desastre",
      desc: "Elegir una receta que nunca hayamos hecho y terminarla (aunque salga rara).", hecho: false },
    { titulo: "Nuestro primer hogar", tipo: "casa", rango: "S", fecha: "Algún día", recompensa: "Un lugar nuestro",
      desc: "Un sitio pequeño, con plantas, libros y un rincón para este museo.", hecho: false },
    { titulo: "Ver el amanecer", tipo: "aventura", rango: "B", fecha: "Sin fecha", recompensa: "Recuerdo imborrable",
      desc: "Madrugar de verdad y ver salir el sol juntos.", hecho: false },
    { titulo: "Primera cita", tipo: "amor", rango: "B", fecha: "04 de Febrero, 2024", recompensa: "El comienzo de todo",
      desc: "Salimos por primera vez.", hecho: true }
  ]
};