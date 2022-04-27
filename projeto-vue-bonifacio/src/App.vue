<template>
  <MenuLateral />
  <Cabecalho />
  <BlocoPrincipal />
  <Rodape />
</template>
<script>
import MenuLateral from '@/components/MenuLateral.vue'
import Cabecalho from '@/components/Cabecalho.vue'
import Rodape from '@/components/Rodape.vue'
import BlocoPrincipal from '@/components/BlocoPrincipal.vue'
export default {
  components: { MenuLateral, Cabecalho, Rodape, BlocoPrincipal }
}
</script>
<style></style>
