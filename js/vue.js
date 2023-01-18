console.log('Vue ok', Vue);

const app = Vue.createApp({
    data() {
        return {
            mails:[]
        }
    },

    methods: {
        // CREATE RANDOM EMAIL USING API
        getRandomEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then (response => {
                this.mails.push(response.data.response);
            })            
        }
    },
    mounted() {
        // I CREATE A LOOP TO RUN
        for(let i = 0; i < 10; i++) {
            this.getRandomEmail()
        }
    }
});

app.mount('#root');
