<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li ref="navbar-menu" class="navbar__item navbar__item--menu">
        <NuxtLink to="/menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M7.25 5C7.25 2.37665 9.37665 1.25 12 1.25H18C20.6234 1.25 22.75 3.37665 22.75 6V12C22.75 14.6234 21.6234 16.75 19 16.75C18.5858 16.75 18.25 16.4142 18.25 16V11.5C18.25 8.87665 15.1234 5.75 12.5 5.75H8C7.58579 5.75 7.25 5.41421 7.25 5ZM1.25 12C1.25 9.37665 3.37665 7.25 6 7.25H12C14.6234 7.25 16.75 9.37665 16.75 12V18C16.75 20.6234 14.6234 22.75 12 22.75H6C3.37665 22.75 1.25 20.6234 1.25 18V12Z"
              fill="white" />
          </svg>
        </NuxtLink>
      </li>
      <li ref="navbar-home" class="navbar__item navbar__item--home">
        <NuxtLink to="/">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 18.9434V13.4339C22 11.6317 22 10.7307 21.6295 9.93422C21.2589 9.13776 20.5612 8.53912 19.1657 7.34183L18.1102 6.43618C15.4403 4.14539 14.1053 3 12.5 3C10.8947 3 9.55975 4.14539 6.88982 6.43618L5.83426 7.34183C4.43881 8.53912 3.74108 9.13776 3.37054 9.93422C3 10.7307 3 11.6317 3 13.4339V18.9434C3 19.8929 3 20.3676 3.1607 20.7421C3.37496 21.2414 3.78595 21.6381 4.30322 21.8449C4.69119 22 5.18302 22 6.16667 22H6.51852C7.17294 22 7.50016 22 7.76862 21.9306C8.49714 21.7421 9.06619 21.1929 9.2614 20.4896C9.33333 20.2305 9.33333 19.9147 9.33333 19.283V16.9057C9.33333 15.2175 10.751 13.8491 12.5 13.8491C14.249 13.8491 15.6667 15.2175 15.6667 16.9057V19.283C15.6667 19.9147 15.6667 20.2305 15.7386 20.4896C15.9338 21.1929 16.5029 21.7421 17.2314 21.9306C17.4999 22 17.8271 22 18.4815 22H18.8333C19.817 22 20.3088 22 20.6968 21.8449C21.214 21.6381 21.6251 21.2414 21.8393 20.7421C22 20.3676 22 19.8929 22 18.9434Z"
              fill="white" />
          </svg>
        </NuxtLink>
      </li>
      <li ref="navbar-store" class="navbar__item navbar__item--store">
        <NuxtLink to="/categories/all">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M5.84243 2.75001C5.83918 2.75001 5.83587 2.75001 5.83252 2.75001H2.66699C2.25278 2.75001 1.91699 2.41422 1.91699 2.00001C1.91699 1.58579 2.25278 1.25001 2.66699 1.25001H5.83252C5.83852 1.25001 5.84459 1.25001 5.8507 1.25C5.95229 1.24997 6.06771 1.24994 6.16913 1.25805C6.28688 1.26746 6.44121 1.29084 6.6037 1.3684C6.82096 1.4721 7.00013 1.63646 7.12354 1.8373C7.21463 1.98554 7.25575 2.13182 7.27991 2.24561C7.30114 2.34556 7.31696 2.46138 7.33146 2.56755C7.33227 2.57348 7.33307 2.57937 7.33387 2.58523L7.69836 5.25001L21.8711 5.25C22.0095 5.24997 22.1592 5.24993 22.2874 5.2616C22.4305 5.27464 22.6293 5.30754 22.8262 5.42739C23.0793 5.58145 23.2645 5.81962 23.3571 6.09327C23.4279 6.30283 23.4223 6.49788 23.4085 6.63978C23.3959 6.76905 23.3686 6.91863 23.3424 7.06224L22.0663 14.059C21.9859 14.5001 21.9185 14.8697 21.8409 15.1708C21.7598 15.486 21.6556 15.7769 21.4776 16.047C21.2008 16.4668 20.8147 16.8024 20.3592 17.0118C20.0633 17.1479 19.761 17.2017 19.4431 17.2265C19.142 17.25 18.7788 17.25 18.3512 17.25H11.0582C10.6087 17.25 10.2277 17.25 9.91293 17.2248C9.58121 17.1982 9.26581 17.1404 8.95989 16.9936C8.4903 16.7682 8.09806 16.4084 7.8266 15.9621C7.65151 15.6742 7.55698 15.3657 7.48838 15.0326C7.42274 14.7139 7.37181 14.3228 7.31089 13.8551L6.30056 6.09927L5.84771 2.78851C5.84586 2.77501 5.84411 2.7622 5.84243 2.75001ZM7.91699 21C7.91699 20.0335 8.70049 19.25 9.66699 19.25C10.6335 19.25 11.417 20.0335 11.417 21C11.417 21.9665 10.6335 22.75 9.66699 22.75C8.70049 22.75 7.91699 21.9665 7.91699 21ZM15.917 21C15.917 20.0335 16.7005 19.25 17.667 19.25C18.6335 19.25 19.417 20.0335 19.417 21C19.417 21.9665 18.6335 22.75 17.667 22.75C16.7005 22.75 15.917 21.9665 15.917 21Z"
              fill="white" />
          </svg>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  watch: {
    $route(to) {
      if (to.path == '/menu') {
        this.$refs['navbar-home'].classList.remove('navbar__item--active')
        this.$refs['navbar-store'].classList.remove('navbar__item--active')
        this.$refs['navbar-menu'].classList.add('navbar__item--active')
      } else if (to.path.match(/\/categories\/(\w+)$/)) {
        this.$refs['navbar-home'].classList.remove('navbar__item--active')
        this.$refs['navbar-store'].classList.add('navbar__item--active')
        this.$refs['navbar-menu'].classList.remove('navbar__item--active')
      } else if (to.path == '/') {
        this.$refs['navbar-home'].classList.add('navbar__item--active')
        this.$refs['navbar-store'].classList.remove('navbar__item--active')
        this.$refs['navbar-menu'].classList.remove('navbar__item--active')
      } else {
        this.$refs['navbar-home'].classList.remove('navbar__item--active')
        this.$refs['navbar-store'].classList.remove('navbar__item--active')
        this.$refs['navbar-menu'].classList.remove('navbar__item--active')
      }
    }
  }
}
</script>