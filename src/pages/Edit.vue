<template>
    <div v-show="show">
        <b-form @submit.prevent="atualizar" >
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

            <b-button type="submit" variant="primary">Editar</b-button>
        
        </b-form>

        <br><br>
        <b-button type="button" @click="deletar" variant="danger">Deletar</b-button>

           
    </div>
</template>


<script>

    import api from '../services/api';

    export default {
        
        name: 'Edit',

        data(){

            return{

                student:{

                    name: "",
                    email: "",
                    phone: ""

                },

                show: false

            }

        },

        created(){

            api.get(`students/${ this.$route.params.id }`)

            .then(( response )=>{

                const { data } = response;

                if(data.id == 0)
                    throw new Error('');

                
                this.student = data;
                this.show = true;


            })

            .catch(()=>{

                alert('Usuário não existe');
                this.voltar();

            })


        },

        methods: {

            atualizar(){

                api.put(`students/${ this.$route.params.id }`, {

                    name: this.student.name,
                    email: this.student.email,
                    phone: this.student.phone

                })

                .then(()=>{

                    alert('Atualizado com sucesso')
                    this.voltar();
                })

                .catch(()=>{

                    alert('Erro ao atualizar');

                })

            }, 

            deletar(){

                if(confirm('Deseja realmente deletar')){

                    api.delete(`students/${ this.$route.params.id }`)

                    .then(()=>{

                        alert('Deletado com sucesso');
                        this.voltar();


                    })

                    .catch(()=>{

                        alert('Erro ao deletar');

                    })
                
                }

            }, 

            voltar(){

                window.location.href = '/students';
                
            }

        }
        

    }

</script>

<style></style>
