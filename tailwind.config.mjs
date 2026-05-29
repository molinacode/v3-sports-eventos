/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Anton", "Impact", "sans-serif"],
        gaming: ["'Bebas Neue'", "Impact", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        club: {
          bg: "#0E1410",
          ink: "#F5F1E8",
          green: "#1E3A2B",
          "green-soft": "#2A5240",
          gold: "#C9A658",
          "gold-soft": "#E0C079",
        },
        fem: {
          burdeos: "#8B1538",
          "burdeos-dark": "#5C0E25",
          rosa: "#E8B4BC",
          cream: "#FAF3E7",
        },
        prince: {
          bg: "#0A0A0A",
          gold: "#FFD23F",
          electric: "#00E5FF",
          crown: "#FF2E63",
        },
        mixto: {
          court: "#C6FF3D",
          deep: "#0F1B3D",
          graphite: "#1A1A1A",
          "deep-soft": "#1A2A55",
        },
      },
      backgroundImage: {
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        "holo":
          "linear-gradient(115deg, #FFD23F 0%, #FF2E63 30%, #00E5FF 60%, #FFD23F 100%)",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(250%) skewX(-20deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 24px rgba(201,166,88,0.25)" },
          "50%": { boxShadow: "0 0 48px rgba(201,166,88,0.6)" },
        },
      },
      animation: {
        shine: "shine 2.4s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
