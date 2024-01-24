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
          <header class="footer-title mb-4 md:ml-32">
            {{ $t('myFooter.myFooterHeadliners') }}
          </header>
          <a class="link link-hover mb-2 mr-2 md:md:mr-4">{{ $t('myFooter.myFooterA') }}</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">{{ $t('myFooter.myFooterA1') }}</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">{{ $t('myFooter.myFooterA2') }}</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">{{ $t('myFooter.myFooterA3') }}</a>
        </div>
        <div>
          <header class="footer-title mb-4 md:ml-28">
            {{ $t('myFooter.myFooterHeadliners1') }}
          </header>
          <a class="link link-hover mb-2 mr-2 md:mr-4">{{ $t('myFooter.myFooterA4') }}</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">{{ $t('myFooter.myFooterA5') }}</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">{{ $t('myFooter.myFooterA6') }}</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">{{ $t('myFooter.myFooterA7') }}</a>
        </div>
        <div>
          <header class="footer-title mb-4 md:ml-32">
            {{ $t('myFooter.myFooterHeadliners2') }}
          </header>
          <a class="link link-hover mb-2 mr-2 md:mr-4">{{ $t('myFooter.myFooterA8') }}</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">{{ $t('myFooter.myFooterA9') }}</a>
          <a class="link link-hover mb-2 mr-2 md:mr-4">{{ $t('myFooter.myFooterA10') }}</a>
        </div>
      </nav>
    </footer>
  </body>
  <p class="pl-4">
    # Footer with a logo section ACME Industries Ltd. Providing reliable tech since 1992 SERVICES
    Branding Design Marketing Advertisement C
  </p>
</template>

<script setup></script>
