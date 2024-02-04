<template>
    <router-link :to="{ name: 'category', params: { category: path } }" class="categories-item">
        <div class="categories-item-img">
            <img :src="img" :alt="title">
        </div>
        <h4 class="categories-item-title">
            {{ title }}
        </h4>
        <ChevronIcon class="categories-item-chevron" />
    </router-link>
</template>

<script>
import ChevronIcon from '../icons/ChevronIcon.vue';

export default {
    name: 'CategoriesItem',
    props: {
        img: {
            type: String,
            default: 'Image'
        },
        title: {
            type: String,
            default: 'Title'
        },
        path: {
            type: String,
            default: 'Path'
        }
    },
    components: { ChevronIcon }
}
</script>

<style lang="scss" scoped>
.categories-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    background-color: $white;
    border-radius: $radius;
    width: calc(25% - 15px);
    height: 240px;
    padding: 20px;
    transition: $transition;

    &:hover {
        box-shadow: $shadow;
    }

    &-title {
        color: $black;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 0;
    }

    &-img {
        max-height: 150px;
        width: auto;
        height: 100%;
    }

    &-chevron {
        display: none;
    }
}

@media (max-width: 992px) {
    .categories-item {
        width: calc(33% - 12px);
    }
}

@media (max-width: 767px) {
    .categories-item {
        width: calc(50% - 10px);

        &-img {
            max-height: 120px;
            width: auto;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
}

@media (max-width: 576px) {
    .categories-item {
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        height: fit-content;
        padding: 10px 20px;
        position: relative;

        &-img {
            max-height: 40px;
            width: 40px;
            height: 100%;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        &-chevron {
            display: block;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: rotate(90deg) translateX(-50%);
        }
    }
}
</style>