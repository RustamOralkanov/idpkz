<template>
    <div class="nav-cart-item">
        <a href="#" class="nav-cart-image">
            <img :src="img" :alt="title">
        </a>
        <div class="nav-cart-body">
            <h5 class="nav-cart-title">{{ title }}</h5>
            <span class="nav-cart-price">{{ price.toLocaleString() }} ₸</span>
        </div>
        <div class="nav-cart-delete">
            <button class="btn-hidden">
                <DeleteIcon :width="20" :height="20" />
            </button>
        </div>
    </div>
</template>

<script>
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
export default {
    name: 'NavCart',
    components: {
        DeleteIcon
    },
    props: {
        img: String,
        title: String,
        price: {
            type: Number,
            default: 100000
        },
    }
}
</script>

<style lang="scss" scoped>
.nav-cart {
    &-item {
        display: flex;
        gap: 10px;
        padding: 10px 0;
        border-bottom: 1px solid $grey;

        &:first-child {
            padding-top: 0;
        }
    }

    &-body {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 8px 0;
    }

    &-title {
        color: $black;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0;
        height: 37px;
    }

    &-price {
        color: $black;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    &-image {
        width: 100px;
        height: 100px;
        display: block;

        img {
            width: auto;
            height: 100%;
        }
    }
}
</style>