<script>
import News from '../Layouts/News.vue';
import Recently from '../Layouts/Recently.vue';
import SeoText from '../Layouts/SeoText.vue';
import Banners from './Banners/Banners.vue';
import HomeBrands from './HomeBrands.vue';
import HomeFeatures from './HomeFeatures.vue';
import HomeProducts from './HomeProducts.vue';
import HomeSeo from './HomeSeo.vue';

export default {
  name: 'HomeView',
  components: {
    Banners,
    HomeFeatures,
    HomeSeo,
    HomeProducts,
    HomeBrands,
    Recently,
    News,
    SeoText
  }
}
</script>

<template>
  <main>
    <Banners />
    <HomeFeatures />
    <HomeSeo />
    <HomeProducts title="Популярные продукты" />
    <HomeProducts title="Лучшие предложения" />
    <HomeBrands title="Бренды" />
    <Recently title="Просмотренные товары" />
    <News title="Новости" />
    <SeoText title="Интернет магазин Scinla Computers" />
  </main>
</template>
