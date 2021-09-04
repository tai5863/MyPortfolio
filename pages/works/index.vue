<template>
  <div id="works">
    <Header></Header>
    <div class="works_container">
      <div v-if="works.length !== 0" class="container">
        <div v-for="(work, index) in works" :key="index" class="work">
          <div class="img_wrapper">
            <img
              v-lazy="require('@/assets/img/works/' + work.images[0])"
              class="img first"
              width="1920"
              height="1080"
              @click="onImageClick(work.tag, index)"
            />
          </div>
          <h1 class="work_title">{{ work.name }}</h1>
          <h2 class="date">{{ work.date }}</h2>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { workIndexStore, worksStore } from '@/store'
import { Work } from '@/models/Work'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

@Component({
  name: 'Works',
  components: {
    Header,
    Footer,
  },
})
export default class Works extends Vue {
  works: Array<Work> = []
  this: any = this

  onClick(index: number): void {
    workIndexStore.setIndex(index)
  }

  onImageClick(tag: string, index: number): void {
    workIndexStore.setIndex(index)
    this.$router.push('/works/' + tag)
  }

  created() {
    if (worksStore.works.length === 0) {
      this.$router.push('/')
    } else {
      this.works = worksStore.works
    }
    // console.log(this.works)
  }

  mounted() {
    const titles = Array.from(document.getElementsByClassName('work_title'))

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
.works_container .container {
  margin: 2.5vw 0vw 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
.works_container .container:after {
  content: '';
  display: block;
  width: 33.33333%;
  height: 0;
}
.work {
  width: 33.33333%;
  padding-bottom: 1vw;
}
.work_title {
  width: 80%;
  margin: 0 auto;
  font-family: 'Kiona';
  font-style: normal;
  font-weight: normal;
  font-size: min(20px, 2vw);
  text-align: left;
}
.date {
  width: 80%;
  margin: 0 auto;
  font-family: 'Kiona';
  font-style: normal;
  font-weight: normal;
  font-size: min(18px, 1.8vw);

  color: rgb(140, 140, 140);
}
.img_wrapper {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
.img {
  width: 100%;
  height: auto;
  margin: 0 auto;
  min-width: 300px;
  cursor: pointer;
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
.img_wrapper :hover {
  opacity: 0.8;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

@media screen and (max-width: 1200px) {
  .works_container .container {
    margin: 6vw 7.5vw 0;
  }
  .work {
    width: 100%;
    padding-bottom: 5vw;
  }
  .date {
    width: 100%;
  }
  .work_title {
    width: 100%;
    text-align: left;
    font-size: 3vw;
  }
  .img_wrapper {
    width: 100%;
  }
}
</style>
