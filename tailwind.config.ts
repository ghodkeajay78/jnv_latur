import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'xs': ['0.65rem', { lineHeight: '0.875rem' }],      // 10.4px (was 12px)
        'sm': ['0.75rem', { lineHeight: '1rem' }],          // 12px (was 14px)
        'base': ['0.875rem', { lineHeight: '1.25rem' }],    // 14px (was 16px)
        'lg': ['1rem', { lineHeight: '1.5rem' }],           // 16px (was 18px)
        'xl': ['1.125rem', { lineHeight: '1.75rem' }],      // 18px (was 20px)
        '2xl': ['1.25rem', { lineHeight: '1.75rem' }],      // 20px (was 24px)
        '3xl': ['1.5rem', { lineHeight: '2rem' }],          // 24px (was 30px)
        '4xl': ['1.875rem', { lineHeight: '2.25rem' }],     // 30px (was 36px)
        '5xl': ['2.25rem', { lineHeight: '2.5rem' }],       // 36px (was 48px)
        '6xl': ['2.75rem', { lineHeight: '3rem' }],         // 44px (was 60px)
        '7xl': ['3.5rem', { lineHeight: '3.5rem' }],        // 56px (was 72px)
        '8xl': ['4.25rem', { lineHeight: '4.5rem' }],       // 68px (was 96px)
        '9xl': ['5rem', { lineHeight: '5rem' }],            // 80px (was 128px)
      },
      spacing: {
        '0.5': '0.125rem',   // 2px (was 2px)
        '1': '0.25rem',      // 4px (was 4px)
        '1.5': '0.375rem',   // 6px (was 6px)
        '2': '0.5rem',       // 8px (was 8px)
        '2.5': '0.625rem',   // 10px (was 10px)
        '3': '0.75rem',      // 12px (was 12px)
        '3.5': '0.875rem',   // 14px (was 14px)
        '4': '1rem',         // 16px (was 16px)
        '5': '1.25rem',      // 20px (was 20px)
        '6': '1.5rem',       // 24px (was 24px)
        '7': '1.75rem',      // 28px (was 28px)
        '8': '2rem',         // 32px (was 32px)
        '9': '2.25rem',      // 36px (was 36px)
        '10': '2.5rem',      // 40px (was 40px)
        '11': '2.75rem',     // 44px (was 44px)
        '12': '3rem',        // 48px (was 48px)
        '14': '3.5rem',      // 56px (was 56px)
        '16': '4rem',        // 64px (was 64px)
        '20': '5rem',        // 80px (was 80px)
        '24': '6rem',        // 96px (was 96px)
        '28': '7rem',        // 112px (was 112px)
        '32': '8rem',        // 128px (was 128px)
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        slideInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-up": "slideInUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
