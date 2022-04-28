<script setup>
  import KanbanColumn from './components/KanbanColumn.vue'
</script>

<template>
  <main id="board">
      <KanbanColumn title="To Do" />
      <KanbanColumn title="Done" />
    </main>
</template>

<style>
/* @import './assets/base.css'; */

body {
  margin: 0;
  height: 100vh;
  background-color: #5C2751;
}

#board {
  display: flex;
  flex-direction: row;
  border: 2px solid blue;
  width: 70%;
  float: left;
  margin-left: 15%;
  margin-top: 5%;
  background-color: aliceblue;
  
}
</style>
