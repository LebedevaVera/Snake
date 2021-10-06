<template>
    <button class="actions" @click="endGame">Show statistics</button>
    <canvas ref="canvas" width="800" height="500"></canvas>
</template>

<script>
import Game from "@/assets/js/classes";

export default {
    data() {
        return {
            game: new Game(15, 15),
        }
    },
    
    mounted() {
        console.log("mounted");
        this.canvas = this.$refs.canvas;
        this.canvas.width = 16 * 15;
        this.canvas.height = 16 * 15;
        console.log(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.game.start(this.ctx, this.canvas.width, this.canvas.height);
    },

    created() {
        //best place to make requests to the server
        console.log("created halli hallooooooO");
    },

    methods: {
        endGame() {
            this.$emit('endGame');
        }
    }
}
</script>

<style>
    canvas {
        border: 1px solid black;
    }
</style>