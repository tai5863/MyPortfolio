<template>
  <div id="gallery">
    <Header></Header>
    <div class="gallery_container">
      <div class="container">
        <div class="item-wrapper upper">
          <h1 class="title">Yottette VJ - TouchDesigner</h1>
          <div class="iframe-wrapper">
            <iframe
              id="reel"
              src="https://player.vimeo.com/video/558303190"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="item-wrapper upper">
          <h1 class="title">2020 Showreel - TouchDesigner</h1>
          <div class="iframe-wrapper">
            <iframe
              id="reel"
              src="https://player.vimeo.com/video/502608124"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="item-wrapper">
          <h1 class="title">Photography</h1>
          <ul>
            <span
              v-for="(image, index) in images"
              :key="index"
              class="img_container"
              ><img
                :id="'img' + index"
                v-lazy="require('@/assets/img/photos/' + image)"
                class="img"
                width="1920"
                height="1080"
            /></span>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// import { photosStore } from '@/store'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

@Component({
  name: 'Gallery',
  components: {
    Header,
    Footer,
  },
})
export default class Gallery extends Vue {
  images: Array<string> = [
    'DSC_0312.jpg',
    'DSC_0487.jpg',
    'DSC_0583.jpg',
    'DSC_0467.jpg',
    'DSC_0469.jpg',
    'DSC_0355.jpg',
    'DSC_0300.jpg',
    'DSC_0306.jpg',
    'DSC_0342.jpg',
    'DSC_0255.jpg',
    'DSC_0337.jpg',
    'DSC_0279.jpg',
    'DSC_0278.jpg',
    'DSC_0280.jpg',
    'DSC_0241.jpg',
    'DSC_0334.jpg',
    'DSC_0335.jpg',
    'DSC_0514.jpg',
  ]

  mounted() {
    const titles = Array.from(document.getElementsByClassName('title'))

    titles.forEach((title) => {
      const txtArray = title.innerHTML.split('')

      title.innerHTML = ''

      txtArray.forEach((value: string, index: number) => {
        const newElement = document.createElement('span')
        newElement.innerHTML = value
        newElement.style.color = 'rgba(0, 0, 0, 0.0)'
        title.appendChild(newElement)
        const animation = newElement.animate(
          [
            {
              color: 'rgba(0, 0, 0, 0.0)',
              backgroundColor:
                'rgb(' +
                Math.random() * 255 +
                ', ' +
                Math.random() * 255 +
                ', ' +
                Math.random() * 255 +
                ')',
            },
            { color: 'rgba(0, 0, 0, 1.0)' },
          ],
          {
            duration: 200,
            delay: index * 20,
          }
        )
        animation.onfinish = function () {
          newElement.style.color = 'rgba(0, 0, 0, 1.0)'
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
  content: '';
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
img[lazy='loaded'] {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: scrollIn;
  animation-name: scrollIn;
}
@keyframes scrollIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
