<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script> -->

<script>
export default {
  data() {
    return {
      nome: "teste de nome",
      likes: 0,
      valor: 0,
      frutas: ["Pera", "Uva", "Laranja"],
      novoCarro: {
        id: "KP",
        nome: "Picanto"
      },
      carros: [
        {
          id: "FU",
          nome: "Uno",
        },
        {
          id: "VG",
          nome: "Gol",
        },
        {
          id: "GC",
          nome: "Chevette",
        },
      ],
    };
  },
  methods: {
    addLike() {
      this.likes = this.likes + 1;
    },
    // Evitar
    getLikes() {
      return this.valor;
    },
    adicionarCarro() {
      this.carros.push(this.novoCarro);
      this.novoCarro = {};
    }
  },
  computed: {
    meta1() {
      return this.likes === 5;
    },
    getLikes2() {
      return this.valor;
    },
    icms() {
      if (this.valor < 5) return this.valor * 0.3;
      else if (this.valor < 6) return this.valor * 0.25;
      else return this.valor * 0.2;
    }
  }
}
</script>

<template>
  <p>Nome: {{ nome }}</p>
  <p>Likes: {{ likes }}</p>
  <button v-on:click="addLike()">Like</button>
  <button @click="likes--">Dislike</button>
  <input type="text" v-model="nome">
  <div v-show="meta1">Meta1 alcançada. (com v-show)</div>
  <div v-if="likes === 4">Meta alcançada. (com v-if)</div>
  <div v-else-if="likes >= 4">Você já passou a meta. (com v-else-if)</div>
  <div v-else>Continue tentando(v-else)</div>
  <div>
    <input type="number" v-model="valor">
    <p>Valor do combustível: {{ valor }} com ICMS de {{ icms }}</p>
  </div>
  <hr>
  <div>
    <h1>Frutas</h1>
    <ul>
      <li v-for="(fruta, i) in frutas" v-bind:key="i"> {{i}} - {{ fruta }}</li>
    </ul>
  </div>
  <div>
    <h1>Carro</h1>
    <input 
    type="text" 
    placeholder="ID" 
    :value="novoCarro.id"
    @input="novoCarro.id = $event.target.value"
    >
    <input type="text" placeholder="Nome" v-model="novoCarro.nome">
    <button v-on:click="adicionarCarro">Adicionar</button>
    <div>{{ novoCarro.id }} - {{ novoCarro.nome }}</div>
    <ul>
      <li v-for="carro in carros" v-bind:key="carro.id">
        {{ carro.id }} - {{ carro.nome }}
      </li>
    </ul>
  </div>
</template>

<style>
/* @import "./assets/base.css"; */

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
/* 
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
} */
</style>
