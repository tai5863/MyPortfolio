<template>
    <div id="footer">
        <div id="footer_container">
        <p id="copyright">@2020 Taichi Uchida</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
    name: 'Footer'
})
export default class Footer extends Vue {}
</script>

<style>
#footer {
    padding-top: 1vw;
}
#footer_container {
    position: relative;
    margin: 30px 0;
}
#copyright {
    color: rgb(140, 140, 140);
    text-align: center;
    font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: min(15px, 2vw);
}
</style>