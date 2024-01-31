<template>
    <header class="payment-header">
        <div class="container">
            <div class="payment-header-back" @click="() => $router.push('/cart')">
                <ChevronIcon :width="24" :height="24" />
                Вернуться в корзину
            </div>
            <div class="payment-header-logo" @click="() => $router.push('/')">
                <img src="../../assets/images/logo.png" alt="logo">
            </div>
        </div>
    </header>
</template>

<script>
import ChevronIcon from '../../components/icons/ChevronIcon.vue';

export default {
    name: 'PaymentHeader',
    components: { ChevronIcon }
}
</script>

<style lang="scss" scoped>
.payment-header {
    background-color: $white;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 0;

    .container {
        position: relative;
    }

    &-logo {
        height: 50px;
        width: fit-content;
        margin: 0 auto;
        cursor: pointer;

        img {
            width: auto;
            height: 100%;
        }
    }

    &-back {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 16px;
        cursor: pointer;

        svg {
            transform: rotate(-90deg);
        }
    }
}
</style>