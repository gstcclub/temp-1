/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      "colors": {
        "inverse-primary": "#c8c6c5",
        "secondary": "#5e5e5e",
        "on-secondary-container": "#646464",
        "surface": "#fcf9f5",
        "surface-container-highest": "#e5e2de",
        "tertiary-fixed": "#e6e2df",
        "on-primary-fixed-variant": "#474746",
        "surface-container-low": "#f6f3ef",
        "surface-dim": "#dcdad6",
        "error": "#ba1a1a",
        "surface-container-lowest": "#ffffff",
        "on-secondary-fixed-variant": "#464747",
        "primary-container": "#1c1c1c",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-tertiary": "#ffffff",
        "inverse-on-surface": "#f3f0ec",
        "secondary-fixed-dim": "#c7c6c6",
        "on-surface-variant": "#8C8C8C",
        "surface-container": "#f0ede9",
        "error-container": "#ffdad6",
        "tertiary-container": "#1d1c1b",
        "on-primary-container": "#858484",
        "primary-fixed-dim": "#c8c6c5",
        "secondary-container": "#e3e2e2",
        "on-error-container": "#93000a",
        "on-tertiary-container": "#878482",
        "on-tertiary-fixed": "#1c1b1a",
        "inverse-surface": "#31302e",
        "surface-tint": "#5f5e5e",
        "on-primary-fixed": "#1b1b1b",
        "on-surface": "#1C1C1C",
        "primary-fixed": "#e5e2e1",
        "outline": "#8C8C8C",
        "on-secondary-fixed": "#1b1c1c",
        "background": "#F7F4F0",
        "on-background": "#1C1C1C",
        "secondary-fixed": "#e3e2e2",
        "outline-variant": "#c4c7c7",
        "on-tertiary-fixed-variant": "#484645",
        "primary": "#1C1C1C",
        "on-error": "#ffffff",
        "tertiary": "#1C1C1C",
        "surface-variant": "#e5e2de",
        "surface-bright": "#F7F4F0",
        "tertiary-fixed-dim": "#cac6c4",
        "surface-container-high": "#ebe8e4"
      },
      "borderRadius": {
        "none": "0",
        "DEFAULT": "0",
        "lg": "0",
        "xl": "0",
        "full": "9999px"
      },
      "spacing": {
        "max-width": "1280px",
        "margin-desktop": "80px",
        "margin-mobile": "24px",
        "unit": "8px",
        "gutter": "32px"
      },
      "fontFamily": {
        "body-lg": ["Hanken Grotesk"],
        "headline-lg-mobile": ["\"Source Serif 4\""],
        "label-caps": ["Hanken Grotesk"],
        "caption": ["Hanken Grotesk"],
        "headline-md": ["\"Source Serif 4\""],
        "headline-display": ["\"Source Serif 4\""],
        "headline-lg": ["\"Source Serif 4\""],
        "body-md": ["Hanken Grotesk"]
      },
      "fontSize": {
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "600"}],
        "label-caps": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "700"}],
        "caption": ["14px", {"lineHeight": "1.4", "fontWeight": "400"}],
        "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
        "headline-display": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "headline-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}