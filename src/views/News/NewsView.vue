<template>
    <section class="categories">
        <div class="container">
            <Breadcrumbs />
            <SectionTitle title="Новости" />
            <CategoriesWrapper class="news-container">
                <NewsCard v-for="(item, index) in news" :title="item.title" :description="item.description" :img="item.img"
                    :key="index" />
            </CategoriesWrapper>
            <Pagination />
        </div>
    </section>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import CategoriesWrapper from '@/components/Categories/CategoriesWrapper.vue';
import NewsCard from '@/components/NewsCard.vue';
import Pagination from '@/components/Pagination.vue'

import newsJson from '@/datas/news.json'

export default {
    name: 'Categories',
    components: {
        Breadcrumbs,
        SectionTitle,
        CategoriesWrapper,
        Pagination,
        NewsCard
    },
    data() {
        return {
            news: newsJson
        }
    }
}
</script>

<style lang="scss" scoped>
.categories {
    .news-container {
        .news {
            width: calc(25% - 15px) !important;
        }
    }
}

@media(max-width: 991px) {
    .categories {
        .news-container {
            .news {
                width: calc(33% - 12px) !important;
            }
        }
    }
}

@media(max-width: 767px) {
    .categories {
        .news-container {
            gap: 10px;

            .news {
                width: calc(50% - 5px) !important;
            }
        }
    }
}
</style>