<template>
    
    <div>

        <b-table

            :items="students"
            :fields="fields"
        
        >

            <template #cell(detalhes)="row">

            
                <b-button @click="mostrarDetalhes( row.item.id )" class="mr-2">

                    Detalhes

                </b-button>


            </template>

        </b-table>


    </div>

</template>

<script>

    import api from '../services/api';

    export default {

        name: 'ListStudents',
        data(){

            return{

                students: [],

                fields:[

                    {

                        key: 'name',
                        label: 'Nome',
                        sortable: true

                    }, 
                    
                    {

                        key: 'email',
                        label: 'E-mail',
                        sortable: true

                    }, 
                     {

                        key: 'phone',
                        label: 'Telefone',
                        sortable: true

                    }
                    , 
                     {

                        key: 'detalhes',
                        label: 'Ação',
                        sortable: false

                    }, 


                ]

            }

        },

        created(){

            api.get('students')
            .then( ( response )=>{

                const { data } = response;
                this.students = data;


            })

        },

        methods: {

            mostrarDetalhes( id_student ){

                window.location.href = `/edit/${id_student}`;

            }

        }


    }


</script>

<style>

</style>