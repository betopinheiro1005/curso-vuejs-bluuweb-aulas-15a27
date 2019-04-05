<template>
  <div>
    <ul class="list-group">
      <li v-for="(item, index) of arrayOrdenado" :key="item.id" @click="aumentar(index)"
       class="list-group-item d-flex justify-content-between align-items-center">
        {{ index }} - {{ item.nome }}
        <span class="badge badge-primary badge-pill">{{item.quantidade}}</span>
      </li>
    </ul>
    <button class="btn btn-danger btn-block" @click="reiniciar">Reiniciar</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
  nome: "Lista",
  computed: {
      ...mapState(['frutas']),
      arrayOrdenado(){
        return this.frutas.sort( (a, b) => b.quantidade - a.quantidade )
      }
  },
  methods: {
      ...mapMutations(['aumentar','reiniciar'])
  }
};
</script>