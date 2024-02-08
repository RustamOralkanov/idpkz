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
    margin-bottom: 30px;
    z-index: 99;
    box-shadow: $shadow;

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

@media (max-width:991px) {

    .payment-header {

        &-logo {
            height: 30px;
            width: fit-content;
            margin: 0 0 0 auto;
            cursor: pointer;

            img {
                width: auto;
                height: 100%;
            }
        }

        &-back {
            gap: 8px;
            font-size: 12px;
            left: 12px;

            svg {
                width: 18px;
                height: 18px;
            }
        }
    }
}
</style>