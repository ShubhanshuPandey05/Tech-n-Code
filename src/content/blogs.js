// src/data/blogPosts.js

export const blogPosts = [
    {
      title: "Getting Started with Vite",
      description: "Learn how to set up a new Vite project, explore its folder structure, and understand its basic configuration.",
      pubDate: "2024-07-18",
      link: "/blog/getting-started-with-vite",
      content: `
  ## Getting Started with Vite
  
  Vite is a next-generation front-end tooling that provides a fast and modern development experience. Here's how you can set up a new Vite project:
  
  1. Install Vite:
     \`\`\`sh
     npm init vite@latest my-vite-project
     cd my-vite-project
     npm install
     \`\`\`
  
  2. Explore the folder structure:
     - \`index.html\`: The entry point of your application.
     - \`src/main.js\`: The main JavaScript file.
     - \`vite.config.js\`: Configuration file for Vite.
  
  3. Start the development server:
     \`\`\`sh
     npm run dev
     \`\`\`
  
  Now, your Vite project is up and running!
      `
    },
    {
      title: "Getting Started with Tailwind CSS",
      description: "Learn how to set up Tailwind CSS with Vite, explore its configuration, and create custom components.",
      pubDate: "2024-07-18",
      link: "/blog/getting-started-with-tailwind-css",
      content: `
  ## Getting Started with Tailwind CSS
  
  Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. To set it up with Vite:
  
  1. Install Tailwind CSS:
     \`\`\`sh
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     \`\`\`
  
  2. Configure \`tailwind.config.js\`:
     \`\`\`js
     module.exports = {
       content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     \`\`\`
  
  3. Add Tailwind directives to your CSS file:
     \`\`\`css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     \`\`\`
  
  4. Start your development server:
     \`\`\`sh
     npm run dev
     \`\`\`
  
  You are now ready to use Tailwind CSS in your project!
      `
    },
    {
      title: "Getting Started with Astro",
      description: "Learn how to set up a new Astro project, explore its folder structure, and understand its basic features.",
      pubDate: "2024-07-18",
      link: "/blog/getting-started-with-astro",
      content: `
  ## Getting Started with Astro
  
  Astro is a modern static site builder that delivers lightning-fast websites with minimal JavaScript. Here's how to set up an Astro project:
  
  1. Create a new Astro project:
     \`\`\`sh
     npm create astro@latest
     \`\`\`
  
  2. Follow the prompts to set up your project structure.
  
  3. Explore the folder structure:
     - \`src/pages\`: Your website pages.
     - \`src/components\`: Reusable components.
     - \`astro.config.mjs\`: Configuration file for Astro.
  
  4. Start the development server:
     \`\`\`sh
     npm run dev
     \`\`\`
  
  Your Astro project is now up and running!
      `
    }
  ];
  