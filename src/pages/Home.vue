<template>

 <div class="text-center"   >
        
        <h1>{{welcome_message}}</h1>
    
        
    </div>
</template>

<script>

    import api from '../services/api';

    export default {

        data(){

            return{

                welcome_message: "Carregando..."

            }

        },

        name: 'Home',

        created(){

            api.get('')
            .then( ( response )=>{

                const { data } = response;
                this.welcome_message = data;


            })

        }

    }
    
</script>

<style>



</style>