/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      jumbo: ["var(--text-jumbo-size)", "var(--text-jumbo-leading)"],
      xl: ["var(--text-xl-size)", "var(--text-xl-leading)"],
      h1: ["var(--text-h1-size)", "var(--text-h1-leading)"],
      h2: ["var(--text-h2-size)", "var(--text-h2-leading)"],
      h3: ["var(--text-h3-size)", "var(--text-h3-leading)"],
      h4: ["var(--text-h4-size)", "var(--text-h4-leading)"],
      lead: ["var(--text-lead-size)", "var(--text-lead-leading)"],
      large: ["var(--text-large-size)", "var(--text-large-leading)"],
      p: ["var(--text-p-size)", "var(--text-p-leading)"],
      "p-ui": ["var(--text-p-ui-size)", "var(--text-p-ui-leading)"],
      form: ["var(--text-form-size)", "var(--text-form-leading)"],
      "form-small": ["var(--text-form-small-size)", "var(--text-form-small-leading)"],
      list: ["var(--text-list-size)", "var(--text-list-leading)"],
      body: ["var(--text-body-size)", "var(--text-body-leading)"],
      subtle: ["var(--text-subtle-size)", "var(--text-subtle-leading)"],
      small: ["var(--text-small-size)", "var(--text-small-leading)"],
      detail: ["var(--text-detail-size)", "var(--text-detail-leading)"],
      blockquote: ["var(--text-blockquote-size)", "var(--text-blockquote-leading)"],
      "inline-code": ["var(--text-inline-code-size)", "var(--text-inline-code-leading)"],
      "table-head": ["var(--text-table-head-size)", "var(--text-table-head-leading)"],
      "table-item": ["var(--text-table-item-size)", "var(--text-table-item-leading)"],
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    fontFamily: {
      heading: ["Montserrat", "monospace"],
      special: ["Montserrat", "monospace"],
      body: ["Merriweather Sans", "monospace"],
      form: ["Merriweather Sans", "sans-serif"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        brand: "hsl(var(--brand))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
