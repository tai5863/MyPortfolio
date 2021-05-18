<template>
  <div id="home">
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
import { Component, Vue } from 'nuxt-property-decorator';
import HomeHeader from '@/components/HomeHeader.vue';

@Component({
    name: 'Home',
    components: {
        HomeHeader
    }
})
export default class Home extends Vue {}
</script>

<style scoped>
.home_container {
  background-color: white;
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
