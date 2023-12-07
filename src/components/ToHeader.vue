<template>
  <div class="header">
    <div class="header_wrap">
      <img class="logo" src="../../public/images/logo1.png" style="cursor:pointer" @click="dashboard()" />
      <ul class="gnb">
        <li>
          <router-link to="/" class="on">
            회사소개
          </router-link>
        </li>
        <li>
          <router-link to="/Service">
            사업영역
          </router-link>
        </li>
        <li>
          <router-link to="/News">
            소식
          </router-link>
        </li>
      </ul>
      <div class="header_right">
        <div class="lang_wrap">
          <div class="lang_img">
            언어변경
          </div>

          <ul class="lang_list">
            <li class="lang_btn">
              <router-link to="/" class="on">
                KOR
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <button :class="{ 'menu_btn on': openmenu }" class="menu_btn" @click="openmenu = !openmenu">
      </button>
    </div>
    <nav :class="{ 'mo_gnb on': openmenu }" class="mo_gnb">
      <ul>
        <li>
          <router-link to="/" class="on">
            회사소개
          </router-link>
        </li>
        <li>
          <router-link to="/Service">
            사업영역
          </router-link>
        </li>
        <li>
          <router-link to="/News">
            소식
          </router-link>
        </li>
        <div class="lang_wrap">
          <li class="lang_btn">
            <router-link to="/" class="on">
              KOR
            </router-link>
          </li>
        </div>
      </ul>
    </nav>
  </div>
  <div class="sidebar-overlay" :class="{ 'sidebar-overlay on': openmenu }"></div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const openmenu = ref(false)
const dashboard = () => {
  router.push({
    path: '/',
  })
}
</script>
<style scoped>
@import "~/assets/header.css";
</style>
