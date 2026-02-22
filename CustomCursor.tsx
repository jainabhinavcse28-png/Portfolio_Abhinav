@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", serif;
}

:root {
  --bg: #050505;
  --fg: #ffffff;
  --accent: #10b981; /* Emerald-500 */
}

body {
  background-color: var(--bg);
  color: var(--fg);
  font-family: var(--font-sans);
  overflow-x: hidden;
  cursor: none; /* Hide default cursor for custom one */
}

/* Hide cursor on mobile/touch devices */
@media (hover: none) and (pointer: coarse) {
  body {
    cursor: auto;
  }
  .custom-cursor {
    display: none;
  }
}

::selection {
  background-color: var(--accent);
  color: var(--bg);
}

.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.text-gradient {
  background: linear-gradient(to right, #fff, #a1a1aa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-padding {
  @apply py-24 px-6 md:px-12 lg:px-24;
}
