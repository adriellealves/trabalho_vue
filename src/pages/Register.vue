<template>
    <div>
        <b-form @submit.prevent="register">
            <b-form-group
                id="input-group-1"
                label="Nome:"
                label-for="input-1"
               
            >
                <b-form-input
                    id="input-1"
                    v-model="student.name"
                    required
                    placeholder="Nome do estudante"
                    ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="E-mail:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="student.email"
                    required
                    type="email"
                    placeholder="Informe o email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Telefone:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="student.phone"
                required
                placeholder="Informe o telefone"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Salvar</b-button>
            </b-form>
           
    </div>
</template>

<script>

    import api from '../services/api';

    export default {

        
        name: 'Register',

        data(){

            return{

                student: {

                    name: "",
                    email: "",
                    phone: ""

                }

            }

        },

        methods:{

            register(){

                api.post('/students', {

                    name: this.student.name,
                    email: this.student.email,
                    phone: this.student.phone,

                })
                .then(()=>{

                    alert('Cadastrado com sucesso');
                    this.clear();

                })

                .catch(()=>{

                    alert('Houve uma falha ao tentar cadastrar o estudante');

                })

            },
            
            clear(){

                this.student = {

                    name: "",
                    email: "",
                    phone: ""

                }

            }

        }

    }
</script>

<style>


</style>