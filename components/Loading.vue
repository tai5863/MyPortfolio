<template>
    <div id="loading">
        <HalfCircleSpinner :animation-duration="2000" :size="60" color="#aaaaaa" id="spinner" />
        <div id="text">Loading</div>
    </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import { HalfCircleSpinner } from 'epic-spinners';

@Component({
    name: 'Loading',
    components: {
        HalfCircleSpinner
    }
})
export default class Loading extends Vue {}
</script>

<style scoped>
#loading {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    background-color: rgba(255, 255, 255, 1.0);
}

#spinner {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
}
#text {
    font-family: 'Kiona', 'Yu Gothic', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    text-align: center;

    position: absolute;
    top: calc(50% + 50px);
    left: 0;
    right: 0;
    margin: auto;
}
</style>>