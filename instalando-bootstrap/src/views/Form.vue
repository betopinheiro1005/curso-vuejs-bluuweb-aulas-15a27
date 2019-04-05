<template>
    <div class="mt-5">
        <h1>Formulários</h1>
        <form>
            <b-row>
                <b-col md="3">
                    <b-form-input type="text" v-model="texto" :state="comprovar"></b-form-input>
                    <small>Mínimo: 3 caracteres</small>
                </b-col>
                <b-col md="3">
                    <b-form-select v-model="select" :options="animais"></b-form-select>
                    <p>Seleção: {{ select }}</p>
                </b-col>
                <b-col md="3">
                    <b-form-radio-group v-model="radio" :options="animaisRadio"></b-form-radio-group>
                    <p>Radio: {{ radio }}</p>
                </b-col>
                <b-col md="3">
                    <b-form-checkbox-group v-model="check" :options="animaisRadio"></b-form-checkbox-group>
                    <p>Múltiplo: {{ check }}</p>
                </b-col>
            </b-row>
            <p>Texto: {{ texto }}</p>   
        </form>
        
    </div>
</template>

<script>
    export default {
        name: 'Form',
        data(){
            return {
                texto: '',
                check: [],
                radio: null,
                select: null,
                animais: [
                    {value: null, text: 'Selecione um animal'},
                    {value: 'cachorro', text: 'au, au'},
                    {value: 'gato', text: 'miau, miau'},
                    {value: 'pato', text: 'quack, quack'}
                ],
                animaisRadio: [
                    {value: 'cachorro', text: 'au, au'},
                    {value: 'gato', text: 'miau, miau'},
                    {value: 'pato', text: 'quack, quack'}
                ]
            }
        },
        computed: {
            comprovar(){
                return this.texto.length > 2 ? true : false
            },
            animais(){

            }
        }
    }
</script>