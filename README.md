# Voz Ñawi Producciones - Portafolio Web

Portafolio web oficial desarrollado para **Voz Ñawi Producciones**, una productora audiovisual independiente nacida en Lima, dedicada a la creación de documentales que exploran realidades diversas con una mirada auténtica y consciente.

## Características Principales

* **Diseño 100% Responsivo:** Adaptable a dispositivos móviles, tablets y pantallas de escritorio mediante CSS Media Queries.
* **Carga Dinámica de Componentes:** Implementación de la API `fetch()` con Vanilla JavaScript para inyectar componentes globales (Header y Footer) de forma asíncrona, manteniendo el código DRY (Don't Repeat Yourself).
* **Galería Adaptable (Grid):** Sistema de cuadrícula para la visualización de proyectos, preparado para combinar fotografías horizontales y cuadradas.
* **Visor de Imágenes (Lightbox):** Modal interactivo creado con JavaScript puro para ampliar las imágenes de la galería sin necesidad de librerías externas.
* **Soporte Multi-Tema:** Favicon dinámico que detecta la preferencia del sistema del usuario (`prefers-color-scheme`) para alternar entre una versión clara y oscura del logotipo.

## Tecnologías Utilizadas

* HTML5 (Semántico)
* CSS3 (Variables globales, CSS Grid, Flexbox, Animaciones)
* JavaScript (Vanilla JS, DOM Manipulation, Fetch API)
* Despliegue: Vercel

## Estructura del Proyecto

La arquitectura del proyecto está diseñada para ser modular y escalable:

```text
/
├── index.html                # Página principal (Inicio, Nosotros, Destacado, Equipo)
├── proyectos.html            # Página secundaria (Galería de trabajos)
├── componentes/              # Módulos inyectables
│   ├── header.html
│   └── footer.html
└── static/                   # Recursos estáticos
    ├── css/
    │   ├── style.css         # Estilos globales y de la página principal
    │   └── pages.css         # Estilos específicos para páginas secundarias
    ├── js/
    │   └── script.js         # Lógica de animaciones, menú y lightbox
    └── res/                  # Imágenes, logotipos y recursos audiovisuales
