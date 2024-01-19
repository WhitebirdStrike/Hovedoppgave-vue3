<template>
  <head>
    <!-- Add your meta tags, title, stylesheets, etc. here -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    />
  </head>
  <body class="flex flex-col min-h-screen">
    <div class="flex-1">
      <!-- Your website content goes here -->
      <!-- This div is the content area that will take up the available space -->
    </div>
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <nav class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div>
          <header class="footer-title mb-4 md:ml-32">Services</header>
          <a class="link link-hover mb-2 mr-2 md:md:mr-4">|Branding</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">|Design</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">|Marketing</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">|Advertisement|</a>
        </div>
        <div>
          <header class="footer-title mb-4 md:ml-28">Company</header>
          <a class="link link-hover mb-2 mr-2 md:mr-4">|About us</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">|Contact</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">|Jobs</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">|Press kit|</a>
        </div>
        <div>
          <header class="footer-title mb-4 md:ml-32">Legal</header>
          <a class="link link-hover mb-2 mr-2 md:mr-4">|Terms of use</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">|Privacy policy</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">|Cookie policy|</a>
        </div>
      </nav>
    </footer>
  </body>
  <p class="pl-4">
    # Footer with a logo section ACME Industries Ltd. Providing reliable tech since 1992 SERVICES
    Branding Design Marketing Advertisement C
  </p>
</template>
