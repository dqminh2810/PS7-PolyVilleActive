<template>
    <header class="modal-content container-fluid">
            <div class="row p-3 border shadow">
                <div class="col">
                    <p class="h5 my-0 me-md-auto fw-normal">
                        Bienvenue sur Cityformation
                    </p>
                </div>
                <div class="col">
                    <nav id="buttons" >
                        <router-link to="dialog"><a class="p-2 text-dark">Dialoger</a></router-link>
                        <router-link to="aboutUs"><a class="p-2 text-dark">Qui somme nous ?</a></router-link>
                        <router-link to="ourProject"><a class="p-2 text-dark">Notre projet</a></router-link>
                        <router-link to="contact"><a class="p-2 text-dark">Nous contacter</a></router-link>
                    </nav>
                </div>
                <div class="col">
                    <router-link @click="send" to="login" id="lastb" class="btn btn-outline-primary">Connexion / Profil</router-link>
                </div>
            </div>
    </header>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Menu",
        methods: {
            send(){
                if( localStorage.getItem("jwt") === null )
                    axios.create({baseURL: "http://localhost:9428"}).post("/api/dialog/logout", false);
                else
                    axios.create({baseURL: "http://localhost:9428"}).post("/api/dialog/autorize", false);
            }
        }
    }
</script>

<style scoped>
</style>
