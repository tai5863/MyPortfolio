<template>
    <div id="header">
        <div id="header_container">
        <h1 id="name"><router-link to="/" style="text-decoration: none; color: #000000">Taichi Uchida</router-link></h1>
        <nav id="nav_for_sections">
            <ul id="header_ul">
            <li v-for="section in sections" :key="section.id"><router-link :to="'/' + section" :id="section + '_nav'">{{ section }}</router-link></li>
            </ul>
        </nav>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
    name: 'Header'
})
export default class Header extends Vue {
    sections: Array<string> = ['works', 'about', 'gallery'];
}
</script>

<style>
#header {
    margin-top: 30px;
    z-index: 1;
}
#header_container {
    margin: 0 9.5vw;
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

    color: #000000;
    
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
    color: #000000;
}
#works_nav {
    text-decoration: none;
    color: #000000;
}
#about_nav {
    text-decoration: none;
    color: #000000;
}

@media screen and (max-width: 800px) {
    #header_comp {
        top: 0;
        margin: 0;
    } 
    #header_container #name {
        font-size: 3.5vw;
    }
    #header_container li {
        margin-left: 15%;
        border-bottom: solid 1px white;
        font-size: 2vw;
    }
}
</style>