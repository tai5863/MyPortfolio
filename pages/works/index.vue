<template>
    <div id="works">
        <Header></Header>
        <div class="works_container">
            <div class="container" v-if="works.length !== 0">
                <div v-for="(work, index) in works" :key="index" class="work">
                    <h1 class="work_title">{{ work.name }}</h1>
                    <div class="img_container">
                        <div class="img_wrapper">
                            <router-link :to="`works/${work.tag}`" @click.native="onClick(index)"><img :src="work.images[0]" class="img first" width="1920" height="1080" /></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { workIndexStore, worksStore } from '@/store';
import { Work } from '@/models/Work';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Component({
    name: 'Works',
    components: {
        Header,
        Footer
    }
})
export default class Works extends Vue {
    works: Array<Work> = [];
    this: any = this;

    onClick(index: number): void {
        workIndexStore.setIndex(index);
    }

    created() {
        if (worksStore.works.length === 0) {
            this.$router.push('/');
        } else {
            this.works = worksStore.works;
        }
    }

    mounted() {
        let titles = Array.from(document.getElementsByClassName('work_title'));
    
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
.works_container .container {
  margin: 0 13.5vw;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
.work {
  width: 50%;
  padding-top: 2vw;
  padding-bottom: 3vw;
}
.work_title {
  width: 80%;
  margin: 2vw auto;
  font-family: 'Kiona';
  font-style: normal;
  font-weight: normal;
  font-size: min(25px, 2vw);
  text-align: center;
}
.img_container {
  text-align: center;
}
.img_wrapper {
  width: 80%;
  margin: 0 auto;
}
.img {
  width: 100%;
  height: auto;
  margin: 0 auto;
  min-width: 300px;
  cursor: pointer;
}

.img_container :hover {
  opacity: 0.8;
  transition-duration: 0.5s;
}

@media screen and (max-width: 1200px) {
  #works_container #container {
    margin: 0 9.5vw;
  }
  .work {
    width: 100%;
    padding-bottom: 5vw;
  }
  .work_title {
    font-size: 3vw;
  }
  .img_wrapper {
    width: 100%;
  }
}
</style>

