<template>
    <div class="cart-item">
        <div class="cart-item-img">
            <img src="../../assets/images/no-image.png" alt="image">
            <div class="cart-item-label">Скидка</div>
        </div>
        <div class="cart-item-body">
            <h5 class="cart-item-title">
                Ноутбук Lenovo Thinkpad E15 15,6"FHD/Ryzen 5-5625U/8Gb/512Gb/Win11 pro (21ED003MRT)
            </h5>
            <div class="cart-item-prices">
                <div class="new">279 990 ₸</div>
                <div class="old">314 990 ₸</div>
            </div>
        </div>
        <div class="cart-item-actions">
            <div class="cart-item-favorite active">
                <FavoriteIcon />
            </div>
            <div class="counter">
                <MinusIcon fill="#7F7F7F" />
                <input type="number" value="1">
                <PlusIcon fill="#7F7F7F" />
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
}
</style>