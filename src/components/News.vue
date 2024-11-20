<template>
  <div id="mainVisual">
    <div class="mainSlider">
      <div class="msImg"></div>
      <div class="tbox">
        <h4>소식</h4>
      </div>
    </div>
  </div>
  <div id="container">
    <div class="main_section">
      <div class="storyFlexBox">
        <ul class="story plus">
          <a href="#">
            <li>
              <img src="../../public/images/sample320.jpg" alt="text" />
            </li>
            <li>
              <p class="story_title">
                Lorem ip sum
              </p>
              <p class="day">
                2023.04.12
              </p>
            </li>
          </a>
        </ul>
        <ul class="story plus">
          <a href="#">
            <li>
              <img src="../../public/images/sample320.jpg" alt="text" />
            </li>
            <li>
              <p class="story_title">
                Lorem ip sum
              </p>
              <p class="day">
                2022.04.26
              </p>
            </li>
          </a>
        </ul>
        <ul class="story">
          <a href="#">
            <li><img src="../../public/images/sample320.jpg" alt="text" /></li>
            <li>
              <p class="story_title"> Lorem ip sum</p>
              <p class="day">2021.12.30</p>
            </li>
          </a>
        </ul>
        <ul class="story plus">
          <a href="#">
            <li><img src="../../public/images/sample320.jpg" alt="text" /></li>
            <li>
              <p class="story_title"> Lorem ip sum</p>
              <p class="day">2021.08.06</p>
            </li>
          </a>
        </ul>
        <ul class="story">
          <a href="#">
            <li><img src="../../public/images/sample320.jpg" alt="text" /></li>
            <li>
              <p class="story_title"> Lorem ip sum</p>
              <p class="day">2021.07.08</p>
            </li>
          </a>
        </ul>
        <ul class="story plus">
          <a href="#">
            <li><img src="../../public/images/sample320.jpg" alt="text" /></li>
            <li>
              <p class="story_title"> Lorem ip sum</p>
              <p class="day">2021.05.12</p>
            </li>
          </a>
        </ul>
        <ul class="story">
          <a href="#">
            <li><img src="../../public/images/sample320.jpg" alt="text" /></li>
            <li>
              <p class="story_title"> Lorem ip sum</p>
              <p class="day">2020.11.09</p>
            </li>
          </a>
        </ul>
        <ul class="story plus">
          <a href="#">
            <li><img src="../../public/images/sample320.jpg" alt="text" /></li>
            <li>
              <p class="story_title"> Lorem ip sum</p>
              <p class="day">2020.11.09</p>
            </li>
          </a>
        </ul>
      </div>
      <ul class="arrow">
        <a :class="{ 'blind_view on': story02on }" class="blind_view" @click="story02on = !story02on">
          <li>
            <img class="more_btn" src="../../public/images/arrow.png" alt="text" />
          </li>
          <li>
            <p class="arrow_title">더보기</p>
          </li>
        </a>
      </ul>
      <div class="story02" :class="{ 'story02 on': story02on }">
        <div class="storyFlexBox">
          <ul class="story">
            <a href="#">
              <li><img src="../../public/images/sample320.jpg" alt="text" /></li>
              <li>
                <p class="story_title"> Lorem ip sum</p>
                <p class="day">2020.10.20</p>
              </li>
            </a>
          </ul>
          <ul class="story plus">
            <a href="#">
              <li><img src="../../public/images/sample320.jpg" alt="text" /></li>
              <li>
                <p class="story_title"> Lorem ip sum</p>
                <p class="day">2020.09.03</p>
              </li>
            </a>
          </ul>
          <ul class="story">
            <a href="#">
              <li><img src="../../public/images/sample320.jpg" alt="text" /></li>
              <li>
                <p class="story_title"> Lorem ip sum</p>
                <p class="day">2020.08.06</p>
              </li>
            </a>
          </ul>
          <ul class="story plus">
            <a href="#">
              <li style="border: 0.5px solid #BEBEBE; box-sizing: border-box;"><img
                  src="../../public/images/sample320.jpg" alt="text" /></li>
              <li>
                <p class="story_title"> Lorem ip sum</p>
                <p class="day">2020.06.30</p>
              </li>
            </a>
          </ul>
          <ul class="story">
            <a href="#">
              <li style="border: 0.5px solid #BEBEBE; box-sizing: border-box;"><img
                  src="../../public/images/sample320.jpg" alt="text" /></li>
              <li>
                <p class="story_title"> Lorem ip sum</p>
                <p class="day">2020.01.16</p>
              </li>
            </a>
          </ul>
          <ul class="story plus">
            <a href="#">
              <li><img src="../../public/images/sample320.jpg" alt="text" /></li>
              <li>
                <p class="story_title"> Lorem ip sum</p>
                <p class="day">2019.11.07</p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <footer id="footer">
    <div id="footerIn">
      <div class="finfo">
        <p><span>Lorem</span> ipsum | <span>eamit</span> : dolor</p>
        <p><span>Lorem ipsum</span> : 123-12-123456</p>
        <p>Lorem ipsum dolor sit amet, 123-10</p>
        <p>pongja@com.com</p>
      </div>
      <hr />
      <div class="copy">
        Copyright Lorem
      </div>
    </div>
  </footer>
  <button class="btn_top_display" :class="{ 'btn_top_display on': scrollActive }" @click="toTop">
  </button>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const scrollActive = ref(false)
const scrollPostion = ref(0)

const toTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollActive.value = scrollPostion.value > 800
    scrollPostion.value = window.scrollY
  })
})

const story02on = ref(false)

</script>
<style scoped>
@import "~/assets/news.css";
@import "~/assets/topbtn.css";
@import "~/assets/footer.css";
</style>
