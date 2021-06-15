<template>
  <div id="header">
    <div id="header_container">
      <div>
        <router-link to="/" style="text-decoration: none; color: #000000">
          <h1 id="name">Taichi Uchida</h1>
        </router-link>
      </div>
      <nav id="nav_for_sections">
        <ul id="header_ul">
          <li v-for="section in sections" :key="section.id">
            <router-link
              :id="section + '_nav'"
              :to="'/' + section"
              class="nav"
              >{{ section }}</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'Header',
})
export default class Header extends Vue {
  sections: Array<string> = ['works', 'about', 'gallery']
}
</script>

<style>
#header {
  background-color: #000000;
  z-index: 1;
}
#header_container {
  /* margin: 0 17.5vw; */
  margin: 0 5.5vw;
  height: 87px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#header_container #name {
  font-family: Kiona;
  font-style: normal;
  font-weight: normal;
  font-size: min(30px, 3vw);
  text-align: center;

  color: #ffffff;

  margin: 0;
}
#header_container #nav_for_sections {
  position: relative;
  width: 65%;
}
#header_container #header_ul {
  height: 100%;
  margin: 0;
  position: relative;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  padding: 0;
}
#header_container li {
  font-family: Kiona;
  font-style: normal;
  font-weight: normal;
  font-size: min(15px, 2vw);
  text-align: right;

  margin-left: calc(10% + 15px);
}
#gallery_nav {
  text-decoration: none;
  color: #ffffff;
}
#works_nav {
  text-decoration: none;
  color: #ffffff;
}
#about_nav {
  text-decoration: none;
  color: #ffffff;
}
.nav {
  position: relative;
  display: inline-block;
  text-decoration: none;
  will-change: auto;
}
.nav::after {
  position: absolute;
  bottom: -8px;
  left: 0;
  content: '';
  width: 100%;
  height: 1px;
  background: #fff;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.nav:hover::after {
  bottom: -4px;
  opacity: 1;
  visibility: visible;
}

@media screen and (max-width: 800px) {
  #header {
    padding-top: 00px;
  }
  #header_container {
    /* margin: 0 17.5vw; */
    height: 50px;
  }
  #header_comp {
    top: 0;
    margin: 0;
  }
  #header_container {
    margin: 0 9.5vw;
  }
  #header_container #name {
    font-size: 3.5vw;
  }
  #header_container li {
    margin-left: 15%;
    font-size: 2vw;
  }
  .nav::after {
    bottom: -4px;
  }
  .nav:hover::after {
    bottom: -2px;
  }
}
</style>
