<template>
    <section class="cards mt-90">
        <div class="container">
            <div class="cards-top">
                <SectionTitle :title="title" />
                <div class="cards-btns">
                    <ArrowBtnPrev @nextClicked="showPrev()" />
                    <ArrowBtnNext @nextClicked="showNext()" :reversed="true" />
                </div>
            </div>

            <div class="recently-carousel">
                <VueSlickCarousel ref="products" v-bind="settings">
                    <RecentlyProduct v-for="(product, index) in products" :key="index" :img="product.img"
                        :title="product.title" :price="product.price" :isFavorite="product.isFavorite" />
                </VueSlickCarousel>
            </div>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import SectionTitle from '@/components/SectionTitle.vue';
import ArrowBtnPrev from '@/components/ArrowBtnPrev.vue'
import ArrowBtnNext from '@/components/ArrowBtnNext.vue'
import RecentlyProduct from '@/components/RecentlyProduct.vue';

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import productsJson from '@/datas/products.json'

export default {
    name: 'Recently',
    components: {
        VueSlickCarousel,
        SectionTitle,
        ArrowBtnPrev,
        ArrowBtnNext,
        RecentlyProduct
    },
    props: {
        title: {
            type: String,
            default: 'Title'
        }
    },
    methods: {
        showNext() {
            this.$refs.products.next()
        },
        showPrev() {
            this.$refs.products.prev()
        },
    },
    data() {
        return {
            settings: {
                arrows: false,
                dots: false,
                touchMove: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: false,
                initialSlide: 1,
            },
            products: productsJson
        }
    }
}
</script>

<style lang="scss">
.cards {
    &-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 60px;
    }

    &-btns {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .recently-carousel {
        height: 120px;
    }

    .slick-slide {
        margin: 10px;
    }
}

@media (max-width:991px) {
    .cards {
        .recently-carousel {
            height: 100px;

            .slick-list {
                height: 100px;
            }
        }
    }
}

@media (max-width:991px) {
    .cards {
        .recently-carousel {
            height: 98px;

            .slick-list {
                height: 98px;
            }
        }
    }
}
</style>