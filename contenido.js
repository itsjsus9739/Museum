/* ============================================================
   CONTENIDO DEL MUSEO — aquí editas todo lo que hay dentro.
   Sube tus imágenes a la carpeta  fotos/  y tus canciones a  musica/
   y escribe la ruta tal cual (ej: "fotos/playa.jpg").
   Si una imagen no existe o la dejas vacía "", se muestra un corazón ♥.
   ============================================================ */
window.CONTENIDO = {

  museo: { titulo: "Museo de Nosotros", sub: "Para ti ♥" },

  /* MÚSICA PRINCIPAL DEL MUSEO (Suena de fondo al entrar y se repite en bucle) */
  musicaPrincipal: {
    titulo: "Tema Principal (Nuestro Museo)",
    archivo: "musica/menu.mp3", // Pon aquí el mp3 principal de fondo
    volumen: 0.5                // Volumen inicial de 0.0 a 1.0
  },

  /* FRASES DE TU NPC (Cuando ella se acerca a ti y presiona hablar) */
  frases: [
    "¡Hola mi amor! Hice este museo con todo mi cariño para guardar nuestros mejores recuerdos juntos. ♥",
    "Cada rincón de este lugar tiene un pedacito de nuestra historia. ¡Qué linda te ves hoy!",
    "¿Ya viste nuestras fotos favoritas allá arriba en el pasillo? Son mis preferidas.",
    "Me encanta caminar por aquí y verte explorar todo. Te amo muchísimo. ♥"
  ],

  /* PASILLO: las 3 fotos favoritas principales (cuelgan en la pared de arriba) */
  favoritas: [
    { src: "fotos/fav1.jpg", titulo: "Primera foto juntos", texto: "Escribe aquí por qué esta es especial." },
    { src: "fotos/fav2.jpg", titulo: "Ese viaje",           texto: "Un recuerdo que no se me olvida." },
    { src: "fotos/fav3.jpg", titulo: "Un día cualquiera",   texto: "Mi favorita porque se te ve feliz." }
  ],

  /* ÁLBUM DE FOTOS: agrega todas las que quieras */
  fotos: [
    { src: "fotos/foto1.jpg", titulo: "amo tu sonrisa", fecha: "2026-09-25" },
    { src: "fotos/foto2.jpg", titulo: "Paseo",           fecha: "2025-05-02" },
    { src: "fotos/foto3.jpg", titulo: "Cena",            fecha: "2025-08-20" }
  ],

  /* ÁLBUM DE CARTAS (Ahora con espacio para textos largos y profundos)
     rareza: "comun" | "rara" | "epica" | "legendaria"
     Al tocar la carta se voltea y muestra el texto completo con scroll. */
  cartas: [
    { 
      titulo: "Carta de Amor I", 
      imagen: "fotos/carta1.jpg", 
      rareza: "comun",      
      texto: "Desde el primer momento en que cruzamos miradas supe que ibas a ser alguien muy especial en mi vida. Cada día a tu lado descubro una razón nueva para sonreír, para admirarte y para agradecerle al destino por haber cruzado nuestros caminos. Este museo es solo un pequeño reflejo de lo inmenso que eres para mí." 
    },
    { 
      titulo: "Promesa de Futuro", 
      imagen: "fotos/carta2.jpg", 
      rareza: "rara",       
      texto: "Quiero prometerte que estaré contigo en cada paso, apoyando tus sueños, riéndome de nuestras locuras y abrazándote fuerte cuando el mundo abrume. No importa el lugar ni el tiempo, mientras estemos tú y yo construyendo nuestra propia historia, sé que todo estará bien." 
    },
    { 
      titulo: "Nuestra Magia", 
      imagen: "fotos/carta3.jpg", 
      rareza: "epica",      
      texto: "Hay una magia inexplicable en las cosas más simples cuando las compartimos: un café por la tarde, una caminata sin rumbo fijo, una noche de películas o simplemente quedarnos en silencio sabiendo que estamos juntos. Eres mi lugar seguro y mi paz favorita." 
    },
    { 
      titulo: "Eternamente Tú", 
      imagen: "fotos/carta4.jpg", 
      rareza: "legendaria", 
      texto: "Carta única e irrepetible. No hay palabras suficientes en ningún diccionario para describir lo mucho que te amo. Eres la persona con la que quiero compartir mis mayores alegrías y mis días grises. Gracias por existir y por dejarme ser parte de tu vida. Te amo con todo mi corazón." 
    }
  ],

  /* SELECTOR DE MÚSICA (Gramófono) */
  musica: [
    { titulo: "Nuestra canción", artista: "Artista", archivo: "musica/cancion1.mp3" },
    { titulo: "Otra canción",    artista: "Artista", yt: "dQw4w9WgXcQ" }
  ],

  /* LOGROS (Con imagen personalizada y fecha modificable) */
  logros: [
    { id: "inicio", titulo: "Comienza la aventura", desc: "El día que nos conocimos.",   imagen: "fotos/logro1.jpg", fecha: "12 de Enero, 2024",   x: 0, y: 1, padre: "",       logrado: true },
    { id: "cita",   titulo: "Primera cita",         desc: "Salimos por primera vez.",    imagen: "fotos/logro2.jpg", fecha: "04 de Febrero, 2024", x: 1, y: 0, padre: "inicio", logrado: true },
    { id: "novios", titulo: "Oficialmente",         desc: "Empezamos esta historia.",    imagen: "fotos/logro3.jpg", fecha: "14 de Marzo, 2024",   x: 1, y: 2, padre: "inicio", logrado: true },
    { id: "viaje",  titulo: "Primer viaje",         desc: "Nuestra próxima aventura.",   imagen: "fotos/logro4.jpg", fecha: "Por descubrir...",    x: 2, y: 0, padre: "cita",   logrado: false },
    { id: "casa",   titulo: "Un hogar",             desc: "Cosas hermosas que vendrán.", imagen: "fotos/logro5.jpg", fecha: "Futuro juntos",       x: 2, y: 2, padre: "novios", logrado: false, oculto: true }
  ]
};