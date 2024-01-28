<template>
    <router-link :to="{ name: 'category', params: { category: path } }" class="categories-item">
        <div class="categories-item-img">
            <img :src="img" :alt="title">
        </div>
        <h4 class="categories-item-title">
            {{ title }}
        </h4>
    </router-link>
</template>

<script>
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
    }
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
}
</style>