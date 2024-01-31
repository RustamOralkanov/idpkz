<script>
import Header from '@/views/Layouts/Header.vue';
import Nav from '@/views/Layouts/Nav.vue'
import Footer from '@/views/Layouts/Footer.vue'
import { useFooterStore } from '@/stores/footer'
import PaymentHeader from './views/Layouts/PaymentHeader.vue';

export default {
  components: {
    Header,
    Nav,
    Footer,
    PaymentHeader
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
    <Header v-if="$route.name !== 'payment'" />
    <Nav v-if="$route.name !== 'payment'" />
    <PaymentHeader v-if="$route.name === 'payment'" />
    <router-view />
    <Footer :footer="footerStore" />
  </div>
</template>


