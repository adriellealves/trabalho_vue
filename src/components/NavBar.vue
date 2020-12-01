<template>
    
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/">Sistema da Adriele</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/students">Listar Alunos</b-nav-item>
                <b-nav-item href="/store">Cadastrar Novo Aluno</b-nav-item>
            </b-navbar-nav>

            
            </b-collapse>
        </b-navbar>
    </div>

</template>

<script>
    export default {
        
        name: 'NavBar'

    }
</script>

<style>

</style>