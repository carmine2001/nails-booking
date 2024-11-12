<template>
  <div class="w-[100%]">
    <Header></Header>
  </div>

  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    Header
  }
  
}
</script>