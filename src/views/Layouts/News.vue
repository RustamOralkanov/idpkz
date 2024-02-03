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
            <div class="news-carousel">
                <VueSlickCarousel ref="products" v-bind="settings" class="news-carousel">
                    <NewsCard v-for="(item, index) in news" :title="item.title" :description="item.description"
                        :img="item.img" :key="index" />
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
import NewsCard from '@/components/NewsCard.vue';

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import newsJson from '@/datas/news.json'

export default {
    name: 'News',
    components: {
        VueSlickCarousel,
        SectionTitle,
        ArrowBtnPrev,
        ArrowBtnNext,
        NewsCard
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
                initialSlide: 0,
            },
            news: newsJson
        }
    }
}
</script>

<style lang="scss">
.cards {
    .news-carousel {
        display: flex;
        height: 380px;
        overflow: hidden;
    }
}

@media (max-width:991px) {
    .cards {
        .news-carousel {
            height: 330px;
        }
    }
}
</style>