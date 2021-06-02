<template>
    <div id="works">
        <Header></Header>
        <div class="works_container">
            <div class="container" v-if="works.length !== 0">
                <div v-for="(work, index) in works" :key="index" class="work">
                    <router-link :to="`works/${work.tag}`" @click.native="onClick(index)">
                        <div class="img_wrapper">
                            <img :src="work.images[0]" class="img first" width="1920" height="1080" />
                        </div>
                    </router-link>
                    <h1 class="work_title">{{ work.name }}</h1>
                    <h2 class="date">{{ work.date }}</h2>
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
        console.log(this.works);
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
    margin: 2vw 13.5vw 0;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
}
.work {
    width: 50%;
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

.img_wrapper :hover {
    opacity: 0.8;
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

