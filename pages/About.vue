<template>
    <div id="about">
        <Header></Header>
        <div class="about_container">
            <div class="container">
                <div class="photo_container">
                    <img class="photo" :src="image" width="1280" height="1280">
                </div>
                <div class="intro_container">
                    <div style="display: block">
                        <p class="item">- Position</p>
                        <p class="intro tag">Visual Artist / Programmer</p>
                        <p class="item">- Affiliation</p>
                        <p class="intro tag">2016.04  - Kyoto Prefectural Sagano High School, 京都府立嵯峨野高校 京都こすもす科(共修)</p>
                        <p class="intro tag">2019.04  - University of Tsukuba, Media Arts, Science and Technology / 筑波大学 情報メディア創成学類</p>
                        <p class="item">- Skills</p>
                        <p class="intro tag">TouchDesigner / GLSL / WebGL / Vue.js(Nuxt.js) / TypeScript / HTML / CSS / JavaScript</p>
                        <p class="item">- Interests</p>
                        <p class="intro tag">Creative Coding / Visual Production / Web Production / Machine Learning / Stage Performance / Track Making</p>
                        <p class="item">- Accounts</p>
                        <p class="intro"> 
                            <span @click="openLink('https://twitter.com/_t_ai__')"><span class="account">Twitter</span> /</span>
                            <span @click="openLink('https://www.instagram.com/_t_ai__/')"><span class="account">Instagram</span> /</span>
                            <span @click="openLink('https://github.com/tai5863/')"><span class="account">Github</span></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script lang="ts"> 
import { Component, Vue } from 'nuxt-property-decorator';
import { profileImgStore } from '@/store';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Component({
    name: 'About',
    components: {
        Header,
        Footer
    }
})
export default class HomeHeader extends Vue {
    items = [
        { name: 'Twitter', url: 'https://twitter.com/_t_ai__', cut: 1 }, 
        { name: 'Instagram', url: 'https://www.instagram.com/_t_ai__/', cut: 1 }, 
        { name: 'GitHub', url: 'https://github.com/tai5863/', cut: 0 }
    ];

    color = 'rgb(0, 0, 0)';

    image = '';

    openLink = function(link: string) {
      window.open(link);
    }

    created() {
        if (profileImgStore.image === '') {
            this.$router.push('/');
        } else {
            this.image = profileImgStore.image;
        }
    }

    mounted () {
        let items = Array.from(document.getElementsByClassName('item'));
        let elements = items;
    
        elements.forEach((element) => {
            let txt_array = element.innerHTML.split('');
            
            element.innerHTML = '';

            txt_array.forEach((value, index) => {
                let new_element = document.createElement('span');
                new_element.innerHTML = value;
                new_element.style.color = "rgba(0, 0, 0, 0.0)";
                element.appendChild(new_element);
                this.color = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')';
                let animation = new_element.animate([
                    { color: "rgba(0, 0, 0, 0.0)", backgroundColor: this.color },
                    { color: "rgba(0, 0, 0, 1.0)" }
                ], {
                    duration: 200,
                    delay: index * 20,
                })
                animation.onfinish = function() {
                    new_element.style.color = "rgba(0, 0, 0, 1.0)";
                }
            })
        })
    }
}
</script>

<style scoped>
.about_container {
    position: relative;
    z-index: 1000;
}
.about_container .container {
    margin: 6vw auto 6vw;
    width: 63.5vw;
    height: 100%;
}
.about_container .photo_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.about_container .photo {
    height: auto;
    width: min(60%, 300px);
    width: 40%;
}
.intro_container {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    margin: 0 auto; 
}
.position {
    text-align: left;

    /* font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif; */
    font-family: 'Kiona';
    font-style: normal;
    font-weight: normal;
    font-size: min(18px, 1.8vw);

    padding-bottom: 2%;
}
.intro {
    text-align: left;

    font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
    /* font-family: 'Kiona'; */
    font-style: normal;
    font-weight: normal;
    font-size: min(18px, 1.8vw);
    margin-top: 0.5vw;
}
.item {
    font-family: 'Kiona';
    font-size: min(20px, 2vw);
    margin-top: 1.8vw;
}
.account {
    cursor: pointer;
    text-decoration: underline black;
}

@media screen and (max-width: 1200px) {
    .about_container .container {
        margin: 8vw auto 8vw;
    }
    .about_container .photo {
        margin: 0 0 6vw;
    }
}

@media screen and (max-width: 800px) {
    .about_container .container {
        width: 75vw;
    }
}
</style>

