<script>
import Header from '@/views/Layouts/Header.vue';
import Nav from '@/views/Layouts/Nav.vue'
import Footer from '@/views/Layouts/Footer.vue'
import PaymentHeader from './views/Layouts/PaymentHeader.vue';

import { useFooterStore } from '@/stores/footer'
import { useCategoriesStore } from '@/stores/categories'
import MobileHeader from './views/Layouts/MobileHeader.vue';
import MobileNav from './views/Layouts/MobileNav.vue';

export default {
  components: {
    Header,
    Nav,
    Footer,
    PaymentHeader,
    MobileHeader,
    MobileNav
  },
  data() {
    return {
      footerStore: null,
      categoriesStore: null
    };
  },
  created() {
    this.footerStore = useFooterStore();
    this.categoriesStore = useCategoriesStore();
  },
  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  }
};
</script>

<template>
  <div id="app">
    <MobileHeader v-if="isMobile() && $route.name !== 'payment' && $route.name !== 'success'" />
    <Header v-if="$route.name !== 'payment' && $route.name !== 'success' && isMobile() === false" />
    <Nav v-if="$route.name !== 'payment' && $route.name !== 'success' && isMobile() === false"
      :categories="categoriesStore.categories" />
    <MobileNav v-if="isMobile()" />
    <PaymentHeader v-if="$route.name === 'payment' || $route.name === 'success'" />
    <router-view />
    <Footer :footer="footerStore" />
  </div>
</template>


