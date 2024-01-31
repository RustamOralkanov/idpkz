<template>
    <div class="cart-item">
        <router-link :to="{ name: 'product', params: { product: 'title' } }" class="cart-item-img">
            <img src="../../assets/images/no-image.png" alt="image">
            <div class="cart-item-label">Скидка</div>
        </router-link>
        <div class="cart-item-body">
            <router-link :to="{ name: 'product', params: { product: 'title' } }" class="cart-item-title">
                Ноутбук Lenovo Thinkpad E15 15,6" FHD/Ryzen 5-5625U/8Gb 512Gb/Win11 pro (21ED003MRT)
            </router-link>
            <div class="cart-item-prices">
                <div class="new">279 990 ₸</div>
                <div class="old">314 990 ₸</div>
            </div>
        </div>
        <div class="cart-item-actions">
            <div class="cart-item-favorite">
                <FavoriteIcon stroke="#7F7F7F" fill="none" />
            </div>
            <div class="counter">
                <MinusIcon fill="#7F7F7F" :height="30" :width="30" />
                <input type="number" value="1">
                <PlusIcon fill="#7F7F7F" :height="30" :width="30" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    components: {
        FavoriteIcon: () => import('@/components/icons/FavoriteIcon.vue'),
        MinusIcon: () => import('@/components/icons/MinusIcon.vue'),
        PlusIcon: () => import('@/components/icons/PlusIcon.vue'),
    }
}
</script>

<style lang="scss" scoped>
.cart-item {
    display: flex;
    gap: 20px;
    border-bottom: 1px dashed $grey;
    margin-bottom: 16px;

    &:last-child {
        border-bottom: unset;
        margin-bottom: 0;
    }

    &-img {
        position: relative;
        width: 150px;
        height: 150px;

        img {
            width: auto;
            height: 100%;
            display: block;
            margin: 0 auto;
            object-fit: contain;
        }
    }

    &-label {
        position: absolute;
        top: 0;
        left: 0;
        background-color: $red;
        border-radius: $radius;
        color: $white;
        font-size: 12px;
        font-weight: 400;
        padding: 2px 10px;
    }

    &-title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        color: $black;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        height: 38px;
    }

    &-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px 0;
    }

    &-prices {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        margin-bottom: 16px;

        .new {
            color: $green;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 0;
        }

        .old {
            color: $dark-grey;
            text-decoration: line-through;
            font-size: 18px;
            font-weight: 300;
            margin-bottom: 0;
        }
    }

    &-actions {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        padding: 16px 0;

        .counter {
            background-color: unset;

            input {
                color: $dark-grey;
                font-size: 20px;
                font-weight: 700;
                width: 45px;
            }
        }
    }

    &-favorite {
        cursor: pointer;
        transition: $transition;

        &:hover {
            svg {
                fill: $red !important;

                path {
                    stroke: $red !important;
                }
            }
        }

        &.active {
            svg {
                fill: $red !important;

                path {
                    stroke: $red !important;
                }
            }
        }
    }
}
</style>