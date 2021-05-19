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
                        <h1 class="name">Taichi Uchida / 内田 大智</h1>
                        <p class="position">Visual Artist / Programmer</p>
                        <p class="intro item">Affiliation</p>
                        <p class="intro tag">University of Tsukuba, Media Arts, Science and Technology</p>
                        <p class="intro item">Skills</p>
                        <p class="intro tag">WebGL / TouchDesigner / GLSL / JS / Vue.js</p>
                        <p class="intro item">Interests</p>
                        <p class="intro tag">Creative Coding / Visual Production / Web / Machine Learning</p>
                        <p class="intro item">Accounts</p>
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
        let name = Array.from(document.getElementsByClassName('name'));
        let position = Array.from(document.getElementsByClassName('position'));
        let intro = Array.from(document.getElementsByClassName('tag'));
        let accounts = Array.from(document.getElementsByClassName('account'));
        let elements = name.concat(position).concat(intro).concat(accounts);
    
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
    margin: 8vw auto;
    width: 65vw;
    display: flex;
    height: 100%;
}
.about_container .photo_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
}
.about_container .photo {
    height: auto;
    width: min(60%, 300px);
}
.intro_container {
    margin-left: 5%;
    display: flex;
    justify-content: left;
    align-items: center;
}
.about_container .name {
    text-align: left;

    /* font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif; */
    font-family: 'Kiona', "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: max(min(30px, 2vw), 15px);

    margin: 0;
}
.position {
    text-align: left;
    color: rgb(140, 140, 140);

    /* font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif; */
    font-family: 'Kiona';
    font-style: normal;
    font-weight: normal;
    font-size: max(min(20px, 1.3vw), 12px);

    padding-bottom: 2%;
}
.intro {
    text-align: left;

    /* font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif; */
    font-family: 'Kiona';
    font-style: normal;
    font-weight: normal;
    font-size: max(min(18px, 1vw), 10px);

    margin-top: 20px;
}
.item {
    font-size: max(min(18px, 1vw), 10px);
    font-weight: bold;
}
.account {
    cursor: pointer;
    text-decoration: underline black;
}

@media screen and (max-width: 1500px) {  
    .about_container .container {
        display: block;
        margin: 10% auto 10%;
    }
    .about_container .photo_container {
        width: 100%;
    }
    .about_container .photo {
        margin: 0 0 20%;
        width: 40%;
    }
    .intro_container {
        width: 100%;
        margin: 0 auto; 
    }
}
@media screen and (max-width: 800px) {
    .about_container .container {
        width: 75vw;
    }
}
</style>

