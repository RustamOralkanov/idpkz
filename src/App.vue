<script>
import Header from '@/views/Layouts/Header.vue';
import Nav from '@/views/Layouts/Nav.vue'
import Footer from '@/views/Layouts/Footer.vue'
import { useFooterStore } from '@/stores/footer'

export default {
  components: {
    Header,
    Nav,
    Footer,
  },
  data() {
    return {
      footerStore: null,
    };
  },
  created() {
    this.footerStore = useFooterStore();
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <Nav />
    <router-view />
    <Footer :footer="footerStore" />
  </div>
</template>


