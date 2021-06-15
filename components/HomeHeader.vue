<template>
  <div id="home_header">
    <div id="home_header_container">
      <nav id="nav_for_sections">
        <ul id="header_ul">
          <li v-for="section in sections" :key="section.id">
            <nuxt-link :id="'home_' + section + '_nav'" :to="'/' + section">{{
              section
            }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'HomeHeader',
})
export default class HomeHeader extends Vue {
  sections: Array<string> = ['works', 'about', 'gallery']
}
</script>

<style>
#home_header {
  position: absolute;
  width: 100vw;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  z-index: 1000;
}
#home_header_container #header_ul {
  position: relative;
  margin: 0 20%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
}
#home_header_container li {
  font-family: 'Kiona';
  font-style: normal;
  font-weight: normal;
  font-size: min(30px, 7vw);
  line-height: 63px;
  text-align: center;

  margin: 0 auto;
}
#home_gallery_nav {
  text-decoration: none;
  color: black;
}
#home_works_nav {
  text-decoration: none;
  color: black;
}
#home_about_nav {
  text-decoration: none;
  color: black;
}

@media screen and (max-width: 900px) {
  #home_header_comp {
    top: 45%;
    left: 0%;
    transform: translateY(-50%);
  }
  #home_header_container #header_ul {
    display: block;
  }
  #home_header_container li {
    line-height: 90px;
  }
}
</style>
