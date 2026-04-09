# Real Club de Regatas Galicia — Web Estática

Exportación HTML estática generada automáticamente desde la app.

## Estructura

```
rcrg-web/
├── index.html
├── styles.css
├── main.js
├── README.md
└── images/
    ├── logo-rcrg.png
    ├── escudo-rcrg.png
    ├── hero-bg.jpg
    ├── salon-principal.jpg
    ├── trulock.jpg
    ├── sede-historica.jpg
    ├── historia-1913.jpg
    ├── copa-del-rey-1927.jpg
    ├── presidente.jpg
    ├── junta-directiva.png
    ├── regata-liga2026.png
    ├── regata-toubes2026.png
    ├── regata-liga-snipe2026.jpg
    ├── regata-toubes2025.jpg
    ├── regata-rita2025.jpg
    ├── regata-sanroque2025.jpg
    ├── news-*.jpg / news-*.png  (5 imágenes de noticias)
    ├── sponsor-*.jpg / sponsor-*.png  (9 logos)
    └── gallery/
        ├── gallery-001.jpg  ... gallery-015.jpg
```

## Pasos de uso

1. Descarga index.html, styles.css y main.js.
2. Crea la carpeta `images/` y descarga cada imagen (ver pestaña images/).
3. Dentro de images/ crea la subcarpeta `gallery/` y descarga las fotos de galería.
4. Abre index.html en cualquier navegador (no necesita servidor).

## Características
- Sin frameworks ni dependencias npm
- Responsive mobile + desktop
- Regatas 2026 y 2025 con pestañas
- Galería completa con lightbox
- 5 noticias publicadas
- 43 convenios con enlace web
- Patrocinadores con carousel automático
- Formulario guarda en localStorage
