# Tailwind

## Installation into Vite + React app

```
npm install -D tailwindcss postcss autoprefixer
```

## Initilize

```
npx tailwindcss init -p
```

## Configure tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Import into index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```
