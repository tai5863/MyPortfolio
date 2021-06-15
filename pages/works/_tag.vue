<template>
  <div id="work">
    <div class="border_container"></div>
    <div class="work_container">
      <div style="width: 60px; height: 60px; text-align: center">
        <router-link to="/works" class="batsu">←back</router-link>
      </div>
      <div v-if="work" class="container">
        <div class="exp_container">
          <div class="title_container">
            <h1 class="work_name">{{ work.name }}</h1>
            <h2 class="date">{{ work.date }}</h2>
          </div>
          <div class="photo_container">
            <img
              v-lazy="require('@/assets/img/works/' + work.images[0])"
              class="photo"
            />
            <img
              v-if="work.images[1]"
              v-lazy="require('@/assets/img/works/' + work.images[1])"
              class="photo"
              width="1920"
              height="1080"
            />
            <img
              v-if="work.images[2]"
              v-lazy="require('@/assets/img/works/' + work.images[2])"
              class="photo"
              width="1920"
              height="1080"
            />
            <img
              v-if="work.images[3]"
              v-lazy="require('@/assets/img/works/' + work.images[3])"
              class="photo"
              width="1920"
              height="1080"
            />
            <img
              v-if="work.images[4]"
              v-lazy="require('@/assets/img/works/' + work.images[4])"
              class="photo"
              width="1920"
              height="1080"
            />
            <img
              v-if="work.images[5]"
              class="photo"
              :src="require('@/assets/img/works/' + work.images[5])"
              width="1920"
              height="1080"
            />
            <img
              v-if="work.images[6]"
              class="photo"
              :src="work.images[6]"
              width="1920"
              height="1080"
            />
          </div>
          <span class="message_wrapper"
            ><p class="item">- Description</p>
            <div v-for="message in work.messages" :key="message.key">
              <p class="message main">{{ message }}</p>
            </div></span
          >
          <span v-if="work.tools" class="message_wrapper"
            ><p class="item">- Tools</p>
            <p class="message tools">{{ work.tools }}</p></span
          >
          <span v-if="work.url" class="message_wrapper"
            ><p class="item">- Information</p>
            <p class="message url" @click="openLink(work.url)">
              {{ work.url }}
            </p></span
          >
          <span
            v-for="cooperator in work.cooperators"
            :key="cooperator.key"
            class="message_wrapper"
            ><p class="item">- {{ cooperator.direction }}</p>
            <p class="message coop">{{ cooperator.name }}</p></span
          >
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { workIndexStore, worksStore } from '@/store'
import { Work } from '@/models/Work'
import Footer from '@/components/Footer.vue'

@Component({
  name: 'WorkPage',
  components: {
    Footer,
  },
})
export default class WorkPage extends Vue {
  color = 'rgb(0, 0, 0)'

  get work(): Work {
    console.log(worksStore.works[workIndexStore.index])
    return worksStore.works[workIndexStore.index]
  }

  mounted() {
    const name = Array.from(document.getElementsByClassName('work_name'))
    const date = Array.from(document.getElementsByClassName('date'))
    const elements = name.concat(date)

    elements.forEach((element) => {
      const txtArray = element.innerHTML.split('')

      element.innerHTML = ''

      txtArray.forEach((value, index) => {
        const newElement = document.createElement('span')
        newElement.innerHTML = value
        newElement.style.color = 'rgba(0, 0, 0, 0.0)'
        element.appendChild(newElement)
        this.color =
          'rgb(' +
          Math.random() * 255 +
          ', ' +
          Math.random() * 255 +
          ', ' +
          Math.random() * 255 +
          ')'
        const animation = newElement.animate(
          [
            { color: 'rgba(0, 0, 0, 0.0)', backgroundColor: this.color },
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

  openLink(link: string) {
    window.open(link)
  }
}
</script>

<style scoped>
.batsu {
  margin: 0 0 0 10vw;
  color: black;
  font-family: Kiona;
  font-size: min(20px, 2vw);
  line-height: 100px;

  text-decoration: none;
}
.batsu:hover {
  cursor: pointer;
}
.work_container {
  z-index: 1000;
  position: absolute;
  background: white;
  top: 0;
  left: 0;
  right: 0;
}
.work_container .container {
  margin: auto;
  padding-top: 30px;
  width: 65vw;
}
.work_container .exp_container {
  margin: 30px 0 0;
}
.work_container .title_container {
  text-align: left;
}
.work_container .work_name {
  font-family: 'Kiona';
  font-style: normal;
  font-weight: normal;
  font-size: min(30px, 3vw);

  margin: 0;
}
.work_container .date {
  font-family: 'Kiona';
  margin: 0.5vw 0;
  font-style: normal;
  font-weight: normal;
  font-size: min(20px, 2vw);

  color: rgb(140, 140, 140);
}
.message_wrapper {
  text-align: left;

  font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic, sans-serif;
  /* font-family: 'Kiona', "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif; */
  font-style: normal;
  font-weight: normal;
  font-size: min(18px, 1.8vw);

  margin: 2vw 0;
}
.message {
  margin-top: 0.5vw;
}
.item {
  font-size: min(20px, 2vw);
  margin: 2vw 0 0;
  font-family: 'Kiona', '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
    sans-serif;
}
.url:hover {
  text-decoration: underline solid black;
  cursor: pointer;
}
.work_container .photo_container {
  text-align: center;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}
.work_container .photo {
  width: 100%;
  height: auto;
  min-width: 300px;
  margin: 0 0 1vw;
}
img {
  will-change: opacity;
}
img[lazy='loaded'] {
  animation-duration: 1s;
  animation-fill-mode: both;
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
  .work_container .container {
    width: 81vw;
    padding: 0;
  }
}

@media screen and (max-width: 800px) {
  .work_container .title_container {
    margin: 10px 0;
  }
}
</style>
