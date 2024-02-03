<template>
    <section class="brands mt-90">
        <div class="container">
            <div class="cards-top">
                <SectionTitle :title="title" />
            </div>
            <div class="brands-wrapper">
                <a :href="brand.link" class="brands-item" v-for="(brand, index) in brands" :key="index">
                    <img :src="brand.imgUrl" alt="brand" />
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from '../../components/SectionTitle.vue';
import JSONBrands from '../../datas/brands.json'
export default {
    name: 'HomeBrands',
    components: {
        SectionTitle
    },
    data() {
        return {
            brands: JSONBrands
        }
    },
    props: {
        title: {
            type: String,
            default: 'Title'
        }
    }

}
</script>

<style lang="scss" scoped>
.brands {
    &-wrapper {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    &-item {
        display: block;
        width: calc(25% - 15px);
        height: 150px;
        background-color: $white;
        border-radius: $radius;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: $transition;

        &:hover {
            box-shadow: $shadow;
        }

        img {
            display: block;
            max-height: 100px;
            height: 100%;
            max-width: calc(100% - 25%);
            width: auto;
            object-fit: contain;
        }
    }
}

@media (max-width: 991px) {
    .brands {
        &-item {
            width: calc(33% - 12px);
            height: 150px;
        }
    }
}

@media (max-width: 767px) {
    .brands {
        &-wrapper {
            gap: 10px;
        }

        &-item {
            width: calc(50% - 5px);
            height: 150px;
        }
    }
}

@media (max-width: 576px) {
    .brands {

        &-item {
            height: 100px;

            img {
                max-height: 60px;
                height: 100%;
                max-width: calc(100% - 25%);
            }
        }
    }
}
</style>