# V3 Sports Eventos · Programa de eventos Temporada 2026/27

Web visual e interactiva en **Astro + Tailwind + GSAP + Swiper** que presenta el programa deportivo del club:

- **Liga Femenina** (social, iniciación) - 7 jornadas, cada 6 semanas
- **Prince Padel Cup** (infantil 10-16, no federados) - 6 jornadas con cartas King League
- **Ranking Mixto** (medio, mixto, formato pozo) - 12 jornadas cada 3 semanas (arranque 26 de septiembre)

## Arrancar el proyecto

```bash
npm install
npm run dev
```

Abre `http://localhost:4321` en el navegador.

Para una build de producción lista para subir a Netlify / Vercel / GitHub Pages:

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
src/
  pages/
    index.astro                  -> Home (hero + 3 eventos + panel director + calendario)
    eventos/
      liga-femenina.astro
      prince-padel-cup.astro
      ranking-mixto.astro
  components/
    Hero.astro, Nav.astro, Footer.astro
    EventTeasers.astro           -> 3 tarjetas grandes con paleta por evento
    DirectorPanel.astro          -> KPIs animados + calculadora de ingresos
    CalendarSlider.astro         -> Slider Swiper de las 12 jornadas
    PrinceCard.astro             -> Carta King League con flip 3D
    CardIcon.astro               -> SVGs custom de cada carta
    PrizeIcon.astro              -> Iconos de premios
  data/
    events.json                  -> Configuración de cada evento (editable)
    calendar.json                -> Las 12 jornadas con sus eventos
    cards.json                   -> Las 8 cartas Prince Padel Cup
    revenue.json                 -> Precios y escenarios de la calculadora
  scripts/
    revenue.ts                   -> Cálculo de ingresos
  styles/
    global.css                   -> Tokens, paletas y utilidades
```

## Personalizar para la presentación

Antes de la reunión con el club, puedes editar **solo los JSON** sin tocar código:

### 1) Cifras del Panel del Director - `src/data/revenue.json`

Edita los 3 escenarios (`pesimista` / `realista` / `optimista`) con los números que más te convengan negociar. Los sliders del Panel del Director cargarán esos valores al pulsar cada botón de escenario.

### 2) Calendario - `src/data/calendar.json`

Cambia las fechas si quieres mover la apertura/cierre de temporada. La cadencia actual es cada 3 semanas, sábados.

### 3) Cartas Prince Padel Cup - `src/data/cards.json`

Añade, edita o quita cartas. Cada carta tiene:
- `name`, `tagline`, `description`
- `rarity` y `rarityLevel` (1-4: Común, Rara, Épica, Legendaria) → controla los colores
- `icon` → uno de: `serve`, `dice`, `crown`, `wall`, `smash`, `swap`, `bolt`, `tiara`

Para añadir un nuevo icono, edita `src/components/CardIcon.astro` y añade un nuevo `{name === "miNuevoIcono" && (...)}`.

### 4) Eventos - `src/data/events.json`

Mensajes, premios, formato, precios, URL del ranking en xporty.

### 4.bis) Logo - `src/components/Logo.astro`

Hay 6 variantes de logo en SVG. Puedes previsualizarlas todas en `http://localhost:4321/logos` (página interna, bórrala antes de publicar borrando `src/pages/logos.astro`).

Para cambiar el logo que se usa, edita la prop `variant` donde se llama a `<Logo />`:
- Nav: `src/components/Nav.astro`
- Footer: `src/components/Footer.astro`
- Hero (guiño): `src/components/Hero.astro`

Variantes disponibles: `wordmark`, `compact`, `badge`, `monogram`, `racket`, `ball`, `image`.
Colores: `palette="site"` (paleta de la web) o `palette="brand"` (rojo + amarillo originales).

Para usar tu logo real en imagen: deja el archivo en `public/img/v3-sports.svg` (o `.png`) y usa `<Logo variant="image" />` (o `<Logo variant="image" src="/img/mi-logo.png" />`). Para el nav, sobre fondo oscuro, conviene una versión blanca/clara. El favicon se edita aparte en `src/layouts/BaseLayout.astro` (el `<link rel="icon" ...>`).

### 5) Imágenes

`public/img/` está preparado para que pongas fotos del club. Si las usas, modifica los componentes para sustituir los gradientes de los heros por la imagen.

## Atajos durante la presentación

- Pulsa la tecla **`F`** en cualquier página para activar pantalla completa (modo "monitor del club").
- En el Panel del Director, **arrastra los sliders** durante la reunión: los números se actualizan en vivo. Si te dice "para mí es mucho 25 € de inscripción", baja el slider a 15 € y verás el total recalcularse al instante.
- En la página de Prince Padel Cup, pulsa **"SACAR CARTA ALEATORIA"** para enseñar la animación. Es el momento "wow" técnico.
- Las cartas se giran haciendo **click** sobre ellas (anverso ↔ reverso con la explicación).

## Guion de presentación sugerido (5 pasos · ~7 minutos)

Pensado para captar la atención de un decisor poco técnico que valora resultados, dinero y novedades.

### Paso 1 · Hero (30 s)
Abre en `/` a pantalla completa (`F`). Deja que las letras "TRES EVENTOS · UNA TEMPORADA" se animen. No digas nada. Espera a que reaccione.

> *"Tres eventos distintos. Un solo programa. De septiembre a mayo."*

### Paso 2 · Los 3 eventos (45 s)
Baja a la sección de las 3 tarjetas. Señala los colores: cada uno habla a un público distinto.

> *"Liga femenina para captar nuevas socias y fidelizar las actuales. Liga infantil para enganchar familias jóvenes. Y el ranking mixto, que llena las pistas cada 3 semanas pase lo que pase."*

### Paso 3 · Panel del Director (2 min) ← **AQUÍ SE VENDE EL PROYECTO**
Esta es la sección clave. Llega al "Panel del Director".

1. Espera a que los 4 KPIs cuenten hacia arriba (ingresos previstos, jornadas, ocupación, jugadores nuevos).
2. Muestra los 3 botones de escenario y pulsa **"Pesimista"**: los números bajan.
3. Pulsa **"Optimista"**: los números suben.
4. Vuelve a **"Realista"**.
5. Mueve un slider en directo (por ejemplo, "Cuota por jornada del Ranking Mixto" de 13 € a 15 €) y di:

   > *"Esto lo puedes ajustar ahora mismo. Cada euro que subimos aquí, son X euros más en la temporada. Ningún coste para el club: lo financian los participantes."*

Es el momento en el que se da cuenta de que no le estás pidiendo dinero, le estás ofreciendo un negocio sin coste.

### Paso 4 · Cartas Prince Padel Cup (1.5 min) ← **EL "WOW TECH"**
Ve a `/eventos/prince-padel-cup`.

1. Pulsa **"SACAR CARTA ALEATORIA"** → modal con animación de barajado.
2. Mientras se baraja:

   > *"Esto es el formato King League aplicado al pádel infantil. Los niños sacan una carta antes de cada partido. Cambia las reglas para ese partido. Imagínate la cara de los padres grabándolo con el móvil."*

3. Sale la carta. Da igual cuál. Léela.
4. Click en una de las 8 cartas de la galería para enseñar el flip al reverso con la explicación.

   > *"Cada partido es diferente. Cada partido genera un vídeo en Instagram. Marketing gratuito."*

### Paso 5 · Calendario (1 min)
Vuelve a `/#calendario`. Desliza el calendario con el ratón.

> *"12 jornadas. 12 sábados llenos. La femenina y la infantil alternan; el ranking mixto está siempre. Es predecible, recurrente y escalable."*

### Cierre (45 s)
Sube al Panel del Director.

> *"Cifra realista de temporada: X €. Inversión del club: cero. ¿Qué te parece si ajustamos los precios juntos?"*

Y le dejas mover los sliders. Si los toca él mismo, ya está dentro.

## Notas técnicas

- **Fuentes**: Google Fonts (Anton, Bebas Neue, Playfair Display, Inter). Se cargan desde CDN, no requieren instalación.
- **Animaciones**: respetan `prefers-reduced-motion` para usuarios que lo tengan activado.
- **Responsive**: mobile-first, breakpoints `sm/md/lg`. Probado en móvil y escritorio.
- **Accesibilidad**: tamaño base 17-18px, contraste AA, navegación por teclado en el slider.

## Despliegue

Recomendado: [Netlify Drop](https://app.netlify.com/drop) - arrastra la carpeta `dist/` después de `npm run build` y obtienes una URL pública en 30 segundos. Genera un QR a esa URL para que el gerente pueda escanearla desde su móvil.

---

Hecho con cariño para llenar las pistas del club.
