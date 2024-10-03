import { type Config } from "tailwindcss";
import forms from "npm:@tailwindcss/forms@0.5.4";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  plugins: [forms],
} satisfies Config;
