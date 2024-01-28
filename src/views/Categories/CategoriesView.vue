<template>
    <section class="categories">
        <div class="container">
            <Breadcrumbs />
            <SectionTitle title="Категорий" />
            <CategoriesWrapper>
                <CategoriesItem v-for="category in categories" :key="category.id" :title="category.name"
                    :img="category_image" :path="category.path" />
            </CategoriesWrapper>
            <HomeBrands title="Бренды" />
            <SeoText :isActive="false" />
        </div>
    </section>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import CategoriesWrapper from '@/components/Categories/CategoriesWrapper.vue';
import CategoriesItem from '@/components/Categories/CategoriesItem.vue';
import SeoText from '../Layouts/SeoText.vue';

import categoriesJson from '@/datas/categories.json'
import CategoryImage from '@/assets/images/category.png'
import HomeBrands from "../Home/HomeBrands.vue";


export default {
    name: 'Categories',
    components: {
        Breadcrumbs,
        SectionTitle,
        CategoriesWrapper,
        CategoriesItem,
        HomeBrands,
        SeoText
    },
    data() {
        return {
            categories: categoriesJson,
            category_image: CategoryImage
        }
    }
}
</script>

<style lang="scss" scoped></style>