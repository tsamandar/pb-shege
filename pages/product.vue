<template>
  <div class="site-content">
    <div class="topbar">
      <a class="topbar__link" href="./">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M7.22552 12.5431C6.92483 12.2429 6.92483 11.7579 7.22552 11.4569L14.362 4.32572C14.7961 3.89143 15.5023 3.89143 15.9372 4.32572C16.3713 4.76002 16.3713 5.46488 15.9372 5.89917L9.83231 12.0004L15.9372 18.1C16.3713 18.5351 16.3713 19.24 15.9372 19.6743C15.5023 20.1086 14.7961 20.1086 14.362 19.6743L7.22552 12.5431Z"
            fill="white" />
        </svg>
      </a>
      <p class="topbar__title">Short dress</p>
    </div>

    <!-- Swiper -->
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://media1.popsugar-assets.com/files/thumbor/V74AHIuVVdoBl4S6rlOw2Oyvui4/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/06/24/220/n/1922564/58f92be0f75ea746_netimg6MyrbZ/i/HM-Short-Dress.jpg">
        </div>
        <div class="swiper-slide">
          <img
            src="https://media1.popsugar-assets.com/files/thumbor/V74AHIuVVdoBl4S6rlOw2Oyvui4/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/06/24/220/n/1922564/58f92be0f75ea746_netimg6MyrbZ/i/HM-Short-Dress.jpg">
        </div>
        <div class="swiper-slide">
          <img
            src="https://media1.popsugar-assets.com/files/thumbor/V74AHIuVVdoBl4S6rlOw2Oyvui4/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/06/24/220/n/1922564/58f92be0f75ea746_netimg6MyrbZ/i/HM-Short-Dress.jpg">
        </div>
      </div>
    </div>

    <div class="center-bar">
      <select>
        <option selected disabled>Size</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
      <select>
        <option selected disabled>Color</option>
        <option value="Blue">Blue</option>
        <option value="Black">Black</option>
        <option value="Yellow">Yellow</option>
      </select>
      <button class="product__like"></button>
    </div>

    <div class="bottom-bar">
      <div class="bottom-bar__top">
        <p class="bottom-bar__title">Short dress</p>
        <span class="bottom-bar__price">$19.99</span>
      </div>
      <p class="bottom-bar__info">Short dress in soft cotton jersey with decorative buttons down the front and a wide,
        frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff
        sleeves with a small frill trim.</p>
    </div>

  </div>
</template>