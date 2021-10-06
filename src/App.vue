<template>
  <h1>Snake</h1>
  <LoginForm v-if="show === 'login'" @close="enterGame"/>
  <GameField v-else-if="show === 'game'" @endGame="showStatistics"/>
  <GameStatistics v-else-if="show === 'statistics'"/>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import GameField from "./components/GameField.vue";
import GameStatistics from "./components/GameStatistics.vue";

export default {
  name: 'App',
  components: { LoginForm, GameField, GameStatistics },
  data() {
    return{
      show: 'login'
    }
  },
  methods: {
    enterGame() {
      console.log('game');
      this.show = 'game';
    },

    showStatistics() {
      console.log('statistics');
      this.show = 'statistics';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  text-align: center;
  background-color: #9ddc1159;
  border-radius: 7px;
  border: 1px solid #9ddc11;
  width: 150px;
  height: 30px;
  margin: 20px auto;
  display: block;
}
</style>
