<template>
  <div id="home">
    <transition name="loading">
      <Loading v-if="loading"></Loading>
    </transition>
    <WebGL :loading="loading"></WebGL>
    <HomeHeader></HomeHeader>
    <div class="home_container">
      <div class="name_container">
        <h1 class="name">Taichi Uchida</h1>
        <div id="load"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { worksStore } from '@/store'
import Loading from '@/components/Loading.vue'
import HomeHeader from '@/components/HomeHeader.vue'
import WebGL from '@/components/WebGL.vue'

@Component({
  name: 'Home',
  components: {
    HomeHeader,
    WebGL,
    Loading,
  },
})
export default class Home extends Vue {
  loading = true
  navigation = 0

  getWorks() {
    worksStore.getWorks().then(() => {
      this.toggleLoadingStatus()
    })
    // .catch((err) => {
    //   console.error(err)
    // })
  }

  toggleLoadingStatus() {
    this.loading = false
  }

  created() {
    if (worksStore.works.length === 0) {
      this.getWorks()
    } else {
      this.toggleLoadingStatus()
    }
  }
}
</script>

<style scoped>
.loading-enter,
.loading-leave-to {
  opacity: 0;
}
.loading-enter-active,
.loading-leave-active {
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}
.home_container {
  min-height: 500px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.home_container .name_container {
  position: absolute;
  width: 100%;
  height: 95px;
  bottom: 12.5%;

  background-color: rgba(255, 255, 255, 0.8);
}
.home_container .name {
  position: relative;
  color: black;

  font-family: 'Kiona', 'Yu Gothic', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: min(40px, 9vw);
  line-height: 98px;
  text-align: center;

  margin: 0;
}

@media screen and (max-width: 957px) {
  .background {
    width: auto;
  }
}
</style>
