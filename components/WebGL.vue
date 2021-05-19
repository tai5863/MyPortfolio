<template>
    <div id="webgl">
        <canvas id="canvas"></canvas>
    </div>
</template>

<script src="@/node_modules/noisejs/index.js"></script>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'nuxt-property-decorator';
import { gsap, Power2 } from 'gsap';
//@ts-ignore
import * as THREE from 'three';
//@ts-ignore
import Delaunator from 'delaunator';

@Component({
    name: 'WebGL'
})
export default class WebGL extends Vue {
    @Prop({ type: Boolean, default: true })
    loading!: boolean

    @Watch('loading')
    isChangeLoadingStatus() {
        if (!this.loading) {
            this.three(); 
        } 
    }

    three() {    
        // renderer

        let canvas = document.getElementById("canvas");

        let renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true
        });

        renderer.setClearColor(0x0f0f0f);
        
        let width: any, height: any;

        let params = { progress: 0 };
        
        function resetRenderer() {

            width = window.innerWidth;
            height = window.innerHeight;
        
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(width, height);
        }
        
        // scene
        
        let scene = new THREE.Scene();
        
        // camera 
        
        let rot = 0;

        const dist = 240;

        let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        rot = 180;

        let radian = (rot * Math.PI) / 180;

        camera.position.x = dist * Math.sin(radian);
        camera.position.z = dist * Math.cos(radian);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        // resize 

        function resizeCanvas() {

            resetRenderer();
        
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // light
        
        scene.add(new THREE.AmbientLight(0xffffff, 1.0));
        scene.add(new THREE.DirectionalLight(0xffffff, 1.0));

        
        // mesh
        // geometry1

        let size = { x: 500, y: 230 };

        let numPoints = 300;

        let positions = [];

        for (let i = 0; i < numPoints; i++) {

            let x = THREE.MathUtils.randFloatSpread(size.x);
            let y = THREE.MathUtils.randFloatSpread(size.y);

            positions.push(new THREE.Vector3(x, y, 0));
        }
        
        let geometry1 = new THREE.BufferGeometry().setFromPoints(positions);

        let delaunatorIndex = Delaunator.from(
            positions.map(v => {
                return [v.x, v.y];
            })
        );

        let meshIndex: any = [];

        for (let i = 0; i < delaunatorIndex.triangles.length; i++) {

            meshIndex.push(delaunatorIndex.triangles[i]);
        }

        geometry1.setIndex(meshIndex);

        geometry1.computeVertexNormals();

        // wireframe

        let mesh1 = new THREE.Mesh(
            geometry1,
            new THREE.MeshPhongMaterial({ color: 0x777777,  wireframe: true })
        );
        scene.add(mesh1);
        mesh1.position.z += -0.2;

        // triangles

        // shuffle

        for (let i = meshIndex.length / 3 - 1; i > 0; i--) {

            let r = Math.floor(Math.random() * (i + 1));

            let tmp1 = meshIndex[i * 3];
            let tmp2 = meshIndex[i * 3 + 1];
            let tmp3 = meshIndex[i * 3 + 2];

            meshIndex[i * 3] = meshIndex[r * 3];
            meshIndex[i * 3 + 1] = meshIndex[r * 3 + 1];
            meshIndex[i * 3 + 2] = meshIndex[r * 3 + 2];

            meshIndex[r * 3] = tmp1;
            meshIndex[r * 3 + 1] = tmp2;
            meshIndex[r * 3 + 2] = tmp3;
        }

        // reduce mesh 

        const meshCount = meshIndex.length / 3 - 45;
        let len = meshIndex.length / 3;
        let tmp = [];

        for (let i = 0; i < (len - meshCount); i++) {

            for (let j = 0; j < meshIndex.length - 3; j++) {
                
                tmp[j] = meshIndex[j];
            }
            meshIndex = tmp;
            tmp = [];
        }

        // geometry2

        let geometry2 = new THREE.BufferGeometry().setFromPoints(positions);

        geometry2.setIndex([]);

        let mesh2 = new THREE.Mesh(
            geometry2,
            new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0x999999 })
        );
        scene.add(mesh2);

        // gsap settings

        gsap.to(params, {
            duration: 1,
            progress: 1.0,
            yoyo: true,
            ease: Power2.easeInOut,
            onUpdate: setIndex,
            onComplete: geometry2.computeVertexNormals()
        });

        function setIndex() {

            let altMeshIndex = [];

            let currentIndex = Math.floor(params.progress * (meshIndex.length - 1));

            for (let i = 0; i < currentIndex - 1; i++) {
                altMeshIndex[i] = meshIndex[i];
                altMeshIndex[i + 1] = meshIndex[i + 1];
                altMeshIndex[i + 2] = meshIndex[i + 2];
            }

            geometry2.setIndex(altMeshIndex);

            geometry2.computeVertexNormals();
        }

        // animate 

        animate();
        
        function animate() {

            render();
        
            requestAnimationFrame(animate);
        } 
        
        function render() {

            renderer.render(scene, camera);    
        }

    }

    mounted() {
        if (!this.loading) {
            this.three();
        }
    }
}
</script>

<style scoped>
#webgl {
    z-index: 0;
    margin: 0;
    min-height: 500px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}
</style>
