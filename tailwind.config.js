/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // Common sizes/utilities that might appear dynamically
    "w-5",
    "h-5",
    "w-6",
    "h-6",
    "w-8",
    "h-8",
    "text-xs",
    "text-sm",
    "text-lg",
    "text-xl",
    "md:text-xl",
    "md:text-2xl",
    "md:text-6xl",
    "bg-blue-600",
    "bg-blue-700",
    "hover:bg-blue-700",
    "hover:bg-blue-800",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
