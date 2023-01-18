console.log('Vue ok', Vue);

const app = Vue.createApp({
    data() {
        return {
            mails:[]
        }
    },

    methods: {
    },
});

app.mount('#root');
