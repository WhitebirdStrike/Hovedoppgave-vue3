<div
  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
  role="menu"
  aria-orientation="vertical"
  aria-labelledby="user-menu-button"
  tabindex="-1"
>
<!-- Active: "bg-gray-100", Not Active: "" -->
<a
  href="#"
  class="block px-4 py-2 text-sm text-gray-700"
  role="menuitem"
  tabindex="-1"
  id="user-menu-item-0"
  >Your Profile</a
>
<a
  href="#"
  class="block px-4 py-2 text-sm text-gray-700"
  role="menuitem"
  tabindex="-1"
  id="user-menu-item-1"
  >Settings</a
>
<a
  href="#"
  class="block px-4 py-2 text-sm text-gray-700"
  role="menuitem"
  tabindex="-1"
  id="user-menu-item-2"
  >Sign out</a
>
</div>

<footer class="footer p-10 bg-neutral text-neutral-content bottom-0 absolute right-0 h-16">

<nav>
      <header class="footer-title">Company</header>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </nav>
    <nav>
      <header class="footer-title">Legal</header>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </nav>
    <nav>
      <header class="footer-title">Services</header>
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>
    </nav>

    <template>
  <div class="flex flex-col min-h-screen"></div>
  <footer
    class="footer p-10 bg-neutral text-neutral-content bottom-0 absolute right-0 mt-auto"
  ></footer>
</template>

<div v-for="(product, productIndex) in myProducts" :key="productIndex" class="flex">
      <div class="card w-96 bg-base-100 shadow-x1" style="border: solid hotpink 2px">
        <img :src="product.productImage" alt="" />
        <div class="card-body">
          <h2 class="card-title">{{ product.Title }}</h2>
          <div class="card-actions justify-end"></div>
        </div>
      </div>
    </div>
    <span class="absolute -inset-1.5"></span>
    <button @click="closeModal() ">Close</button>

    <svg
                class="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>