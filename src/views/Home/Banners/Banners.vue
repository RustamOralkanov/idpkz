<template>
    <section class="banners">
        <div class="container">
            <div class="row">
                <AsideMenu />
                <Carousel />
            </div>
        </div>
    </section>
</template>

<script>
import AsideMenu from '../AsideMenu/AsideMenu.vue';
import Carousel from './Carousel.vue';

export default {
    components: { AsideMenu, Carousel }
}
</script>

<style lang="scss" scoped>
.banners {
    margin-top: 24px;
}
</style>