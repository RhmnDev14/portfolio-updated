/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "class"], // tetap penting
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Navbar
    "backdrop-blur-md",
    "border-white/30",
    "menu-horizontal",
    "menu-compact",
    "dropdown-content",
    "btn",
    "btn-ghost",
    "normal-case",
    "text-xl",
    "font-bold",
    "gap-2",
    "gap-6",
    "z-50",
    "absolute",
    "-translate-x-1/2",
    "relative",
    "-top-4",

    // Hero
    "opacity-0",
    "opacity-100",
    "pointer-events-none",
    "pointer-events-auto",
    "transition-opacity",
    "duration-300",
    "min-h-screen",
    "hero",
    "hero-content",
    "flex-col",
    "lg:flex-row-reverse",
    "lg:items-start",
    "lg:gap-12",
    "w-64",
    "h-64",
    "lg:w-80",
    "lg:h-80",
    "rounded-xl",
    "overflow-hidden",
    "shadow-lg",
    "shadow-black/40",
    "border-4",
    "border-white/80",
    "transition-transform",
    "ease-in-out",
    "hover:scale-105",
    "hover:brightness-110",
    "px-4",
    "md:px-6",
    "lg:px-8",

    // Modal / CV
    "fixed",
    "inset-0",
    "bg-black/60",
    "flex",
    "items-center",
    "justify-center",
    "w-[90%]",
    "h-[80%]",
    "md:w-[70%]",
    "md:h-[75%]",
    "flex-col",
    "overflow-hidden",
    "p-3",
    "border-b",
    "ml-2",
    "flex-1",
    "overflow-auto",
    "p-2",
    
    // 🆕 Safelist untuk SkillCarousel
    "hover:animation-pause",
    "animate-scroll-infinite",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      // 🆕 KONFIGURASI ANIMASI SCROLL
      animation: {
        // Durasi scroll akan ditentukan oleh variabel CSS (--scroll-duration) di komponen React
        'scroll-infinite': 'scroll var(--scroll-duration, 25s) linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          // Pindah 50% untuk menciptakan loop yang mulus (karena item digandakan)
          '100%': { transform: 'translateX(-50%)' }, 
        },
      },
    },
  },
  plugins: [
    require("daisyui"), 
    require("tailwindcss-animate"),
    // 🆕 PLUGIN KUSTOM UNTUK MENGHENTIKAN ANIMASI SAAT HOVER
    function ({ addUtilities }) {
      addUtilities({
        '.hover\\:animation-pause:hover': {
          'animation-play-state': 'paused',
        },
      });
    },
  ],
  daisyui: {
    themes: ["light"], // default light
    darkTheme: "light", // tetap pakai light meskipun browser dark mode
  },
};
