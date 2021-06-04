<template>
    <div id="gallery">
        <Header></Header>
        <div class="gallery_container">
        <div class="container">
            <div class="item-wrapper upper">
                <h1 class="title">Yottette VJ - TouchDesigner</h1>
                <div class="iframe-wrapper">
                    <iframe src="https://player.vimeo.com/video/558303190" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen id="reel"></iframe>
                </div>
            </div>
            <div class="item-wrapper upper">
                <h1 class="title">2020 Showreel - TouchDesigner</h1>
                <div class="iframe-wrapper">
                    <iframe src="https://player.vimeo.com/video/502608124" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen id="reel"></iframe>
                </div>
            </div>
            <div class="item-wrapper">
                <h1 class="title">Photography</h1>
                <ul>
                    <span v-for="(image, index) in images" :key="index" class="img_container"><img class="img" :id="'img' + index" :src="image" width="1920" height="1080" /></span>
                </ul>
            </div>
        </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { photosStore } from '@/store';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Component({
    name: 'Gallery',
    components: {
        Header,
        Footer
    }
})
export default class Gallery extends Vue {
    images: Array<string> = [];

    created() {
        if (photosStore.images.length === 0) {
            this.$router.push('/');
        } else {
            this.images = photosStore.images;
        }
    }

    mounted() {
        let titles = Array.from(document.getElementsByClassName('title'));
    
        titles.forEach((title) => {
            let txt_array = title.innerHTML.split('');
            
            title.innerHTML = '';

            txt_array.forEach((value: string, index: number) => {
                let new_element = document.createElement('span');
                new_element.innerHTML = value;
                new_element.style.color = "rgba(0, 0, 0, 0.0)";
                title.appendChild(new_element);
                let animation = new_element.animate([
                    { color: "rgba(0, 0, 0, 0.0)", backgroundColor: 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')' },
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
.gallery_container .container {
    margin: 2vw 17.5vw;
}
.item-wrapper .title {
    font-family: Kiona;
    margin: 1vw auto;
    font-style: normal;
    font-weight: normal;
    font-size: min(30px, 3vw);
    text-align: left;

    color: #000000;  
}
.iframe-wrapper {
    position: relative;
}
.upper {
    padding-bottom: 5vw;
}
.iframe-wrapper::before {
    content: "";
    display: inline-block;
    padding-top: 56.25%;
}
.iframe-wrapper #reel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
}
.gallery_container ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    margin: 0;
    padding: 0;
}
.gallery_container .img_container {
    width: 33.3333%;
    height: auto;
}
.img {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 1200px) {
    .gallery_container .container {
        margin: 6vw 7.5vw;
    }
}

@media screen and (max-width: 800px) {
    .gallery_container .img_container {
        width: 100%;
    }
    .gallery_container .img_container {
        margin-bottom: 1vw;
    }
}
</style>
