<template>
  <div id="main" class="main">
    <div id="mainVisual">
      <div class="mainSlider">
        <carousel id="desk_slide" :wrap-around="true" :breakpoints="breakpoints" :autoplay="10000">
          <slide v-for="slide in slides" :key="slide">
            <div class="carousel__item">
              <img :src="`/images/${slide.src}`" class="msImg" />
            </div>
          </slide>
        </carousel>
        <carousel id="mb_slide" :wrap-around="true" :breakpoints="breakpoints" :autoplay="10000">
          <slide v-for="mbslide in mbslides" :key="mbslide">
            <div class="carousel__item">
              <img :src="`/images/${mbslide.src}`" class="msImg" />
            </div>
          </slide>
        </carousel>
        <div class="tbox">
          <div class="blur_box"></div>
          <div class="ms_text_wrap" style="display: inline-block;">
            <h4 class="main_title">
              Lorem <br />ipsum
            </h4>
            <p class="sub_title">
              Lorem ipsum<br /> Lorem ipsum text only text
            </p>
          </div>
        </div>
        <button type="button" class="ms_down_icon">
          <a @click="down_icon()"><img src="../../public/images/down-circle-outline.svg" alt="down_icoon" /></a>
        </button>
      </div>
    </div>
    <div id="container">
      <div id="aboutUs">
        <div ref="section_top"></div>
        <div class="text_wrap">
          <h2 class="section_title">
            About us
          </h2>
          <p class="body_text">
            Lorem ipsum dolor sit amet, Ut enim ad minim veniam<br class="mobi_none" />
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br
              class="mobi_none" />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br
              class="mobi_none" />
          </p>
          <p class="body_text last_text">
            Lorem ipsum dolor sit amet <span class="point_text">Ut enim ad </span>minim veniam.
          </p>
        </div>
        <div class="img_wrap">
          <div class="left_img">
            <p>Lorem</p>
          </div>
          <div class="right_img">
            <p>Lorem</p>
          </div>
        </div>
        <button type="button" class="more_bnt" @click="more_bnt()">
          자세히 보기 →
        </button>
      </div>
      <div id="MissionVision">
        <div class="MissionVision_img">
        </div>
        <h2 class="section_title">
          Lorem ipsum dolor sit amet
        </h2>
        <div class="text_wrap">
          <p class="body_text">
            Lorem ipsum dolor sit amet, Ut enim ad minim veniam consectetur adipiscing elit,<br />
            sed do eiusmod tempor <span class="last_text">“incididunt <span class="point_text">ut labore</span> Ut enim ad
              minim veniam,”</span>Ut enim ad
          </p>
          <p class="body_text">
            uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident
          </p>
          <p class="body_text">
            uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident
          </p>
          <p class="body_text">
            uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident
          </p>
          <p class="body_text">
            uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident
          </p>
        </div>
      </div>
      <div id="history">
        <div class="history_img">
        </div>
        <h2 class="section_title">
          History
        </h2>
        <div class="history_wrap">
          <div class="grid_box">
            <p class="year">
              2023
            </p>
            <div class="history_contents">
              <div class="month_wrap">
                <p>01</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>03</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>06</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>08</p>
                <div class="history_text">
                  <p>
                    Lorem ipsum<br />
                    Lorem ipsum dolor
                  </p>
                </div>
              </div>
              <div class="month_wrap">
                <p>09</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid_box">
            <p class="year">
              2022
            </p>
            <div class="history_contents">
              <div class="month_wrap">
                <p>12</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>11</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>06</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                  <p>Lorem ipsum</p>
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>05</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>04</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                  <p>Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid_box">
            <p class="year">
              2021
            </p>
            <div class="history_contents">
              <div class="month_wrap">
                <p>12</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>11</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>08</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>05</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>03</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid_box">
            <p class="year">
              2020
            </p>
            <div class="history_contents">
              <div class="month_wrap">
                <p>12</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>10</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>09</p>
                <div class="history_text">
                  <p>Lorem ipsum </p>
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>08</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>07</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>03</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div class="month_wrap">
                <p>01</p>
                <div class="history_text">
                  <p>Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="affiliate_section">
        <div class="inner">
          <div class="affiliate_img">
          </div>
          <h4 class="section_title">
            Affiliate
          </h4>
          <div class="aff_wrap">
            <div class="left_logo"></div>
            <div class="right_text">
              <h4 class="aff_title">
                Lorem
              </h4>
              <p class="aff_subtitle">
                Lorem ipsum dolor sit amet,
              </p>
              <p class="aff_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.<br class="mobi_none" />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.<br class="mobi_none" />
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                <br class="mobi_none" />
                mollit anim id est laborum.
              </p>
            </div>
          </div>
          <button type="button" class="more_bnt">
            홈페이지 바로가기 →
          </button>
        </div>
      </section>
      <section class="cont4">
        <div class="inner">
          <h4 class="section_title">
            Partners
          </h4>

          <div class="ptbox">
            <ul class="cf cf-img01">
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
            </ul>
            <ul class="cf cf-img02">
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
            </ul>
            <ul class="cf cf-img03">
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
            </ul>
            <ul class="cf cf-img04">
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
              <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="300"
                class="aos-init aos-animate">
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <footer id="footer">
      <div id="footerIn">
        <div class="finfo">
          <p><span>Lorem</span> ipsum | <span>eamit</span> : dolor</p>
          <p><span>Lorem ipsum</span> : 123-12-123456</p>
          <p>Lorem ipsum dolor sit amet, 123-10</p>
          <p>help@com.com</p>
        </div>
        <hr />
        <div class="copy">
          Copyright Lorem
        </div>
      </div>
    </footer>
    <button class="btn_top_display" :class="{ 'btn_top_display on': scrollActive }" @click="toTop">
    </button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
onMounted(() => {
  AOS.init()

})
const down_icon = () => {
  section_top.value.scrollIntoView({ behavior: 'smooth' })
}
const section_top = ref(null)
const toTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
const scrollActive = ref(false)
const scrollPostion = ref(0)
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollActive.value = scrollPostion.value > 800
    scrollPostion.value = window.scrollY
  })
})
const slides = [

  { id: 1, src: 'main_img2.jpg' },
  { id: 2, src: 'main_img3.jpg' },
]
const mbslides = [

  { id: 1, src: 'mb_main_img2.jpg' },
  { id: 2, src: 'mb_main_img3.jpg' },
]

const router = useRouter()


const more_bnt = () => {
  router.push({
    path: '/News'
  })
}


</script>


<style scoped>
@import "~/assets/home.css";
@import "~/assets/topbtn.css";
@import "~/assets/footer.css";
</style>
