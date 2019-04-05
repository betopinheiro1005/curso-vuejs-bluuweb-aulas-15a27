<template>
    <div>
        <h1>Galeria de Fotos</h1>
            <router-link :to="{ name: 'fotos', params: {id: item} }" 
            v-for="(item, index) of fotosArray" :key = "index">
                <button>foto {{ item }}</button>                
            </router-link>
        <foto />
        <button @click="home">Home</button>
        <button @click="anterior">Anterior</button>
        <button @click="seguinte">Seguinte</button>
    </div>
</template>

<script>
    import Foto from "@/components/Fotografia.vue";

    export default {
        components: {
            Foto
        },
        data() {
            return {
                fotosArray : [1,2,3]
            }
        },
        methods: {
            home(){
                this.$router.push('/')
            },
            anterior(){
                this.$router.go(-1)
            },
            seguinte(){
                this.$router.go(1)
            }
        }
    }
</script>