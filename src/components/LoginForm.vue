<template>
    <h1>Login</h1>
    <form @submit.prevent="enterGame" method="post">
        <div v-if="nicknameError" class="error">{{ nicknameError }}</div>
        <label for="nickname"><b>Nickname</b></label>
        <input type="text" name="nickname" v-model="nickname" required>
        <button type="submit">Enter Game</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            nickname: '',
            nicknameError: ''
        }
    },
    methods: {
        enterGame() {
            console.log("Entering the game as " + this.nickname);
            let formData = new FormData();
            formData.append('portfolioName', this.nickname);
            /*
            let connection = new WebSocket("wss://www.localhost:2222/socket")
            connection.onopen = function(event) {
                console.log("Successfully connected")
            }*/
            
            /*
            const url = "wss://www.localhost:8081/websocket";
            fetch(url, 
            {
                method: 'POST',
                mode: 'cors',
                body: formData
            })
            .then(function(response) {
                return response.json();
            })
            .then(res => {
                console.log("Success " + res);
            }).catch(err => function() {
                this.nicknameError = err;
            });*/
            this.$emit('close');
        }
    }
}
</script>

<style>
    .error {
        color: #ff0062;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>