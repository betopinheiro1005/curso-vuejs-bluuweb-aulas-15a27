import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      {nome: 'Maçã', quantidade: 0},
      {nome: 'Pera', quantidade: 0},
      {nome: 'Laranja', quantidade: 0}
    ]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].quantidade ++
    },
    reiniciar(state){
      state.frutas.forEach(elemento => {
        elemento.quantidade = 0
      })
    }
  },
  actions: {

  }
})
