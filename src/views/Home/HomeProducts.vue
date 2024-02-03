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

            <VueSlickCarousel ref="products" v-bind="settings" class="cards-carousel">
                <ProductCard v-for="(product, index) in products" :key="index" :img="product.img"
                    :part-number="product.partNumber" :title="product.title" :old-price="product.discountPrice"
                    :price="product.price" :delivery="product.delivery" :is-favorite="product.isFavorite"
                    :discount=product.discount />
            </VueSlickCarousel>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import SectionTitle from '@/components/SectionTitle.vue';
import ArrowBtnPrev from '@/components/ArrowBtnPrev.vue'
import ArrowBtnNext from '@/components/ArrowBtnNext.vue'
import ProductCard from '@/components/ProductCard.vue';

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import productsJson from '@/datas/products.json'

export default {
    name: 'HomeProducts',
    components: {
        VueSlickCarousel,
        SectionTitle,
        ArrowBtnPrev,
        ArrowBtnNext,
        ProductCard
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

    &-carousel {
        position: relative !important;

        .slick-list {
            margin: -40px -10px;
            padding: 40px 10px;
            height: 550px;
        }
    }

    .slick-slide {
        margin: 10px;
    }
}

@media (max-width: 991px) {
    .cards {
        &-top {
            margin-bottom: 30px;
        }

        &-carousel {

            .slick-list {
                height: 485px;
            }
        }
    }
}

@media (max-width: 767px) {
    .cards {
        &-top {
            margin-bottom: 30px;
        }

        &-carousel {

            .slick-list {
                height: 415px;
                margin: 0;
                padding: 0;
            }
        }

        .slick-slide {
            margin: 5px;
        }
    }
}
</style>