<template>
    <div class="col-xl-9">
        <div class="banners-carousel">
            <VueSlickCarousel :arrows="false" :touchMove="true" :dots="true" ref="carousel">
                <div class="banners-slide" v-for="banner in banners" :key="banner.id">
                    <a href="#">
                        <img :src="banner.img" :alt="banner.title" />
                    </a>
                </div>
            </VueSlickCarousel>
            <div class="banners-btns d-flex">
                <ArrowBtnPrev @nextClicked="showPrev()" />
                <ArrowBtnNext @nextClicked="showNext()" :reversed="true" />
            </div>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ArrowBtnPrev from '../../../components/ArrowBtnPrev.vue'
import ArrowBtnNext from '../../../components/ArrowBtnNext.vue'

export default {
    name: 'Carousel',
    components: { VueSlickCarousel, ArrowBtnPrev, ArrowBtnNext },
    data() {
        return {
            banners: [
                {
                    id: 0,
                    img: 'https://www.idpkz.kz/upload/images/62267_163568_10.jpg',
                    title: 'Banner',
                    link: ''
                },
                {
                    id: 1,
                    img: 'https://www.idpkz.kz/upload/images/94539_222269_09.png',
                    title: 'Banner',
                    link: ''
                },
                {
                    id: 3,
                    img: 'https://www.idpkz.kz/upload/images/29777_620579_10.jpg',
                    title: 'Banner',
                    link: ''
                },
            ]
        }
    },
    methods: {
        showNext() {
            this.$refs.carousel.next()
        },
        showPrev() {
            this.$refs.carousel.prev()
        },
    },
}
</script>

<style lang="scss" scoped>
.banners {
    &-carousel {
        width: 100%;
        height: 500px;
        border-radius: var(--radius);
        overflow: hidden;
        position: relative;
    }

    &-slide {
        display: block;
        height: 500px;
        background-color: $white;
        border-radius: $radius;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
            border-radius: $radius;
        }
    }

    &-btns {
        position: absolute;
        z-index: 90;
        left: 16px;
        bottom: 16px;
        display: flex;
        align-items: center;
        gap: 5px;
    }
}
</style>
