<template>
    <main>
        <section class="success">
            <div class="container">
                <div class="success-wrapper">
                    <SuccessIcon :width="100" :height="100" />
                    <h2 class="success-title">Ваш заказ оформлен</h2>
                    <p>Наши менеджеры свяжутся с вами в ближайшее время</p>
                    <Button color="#7F7F7F" border_color="#7F7F7F" border_width="1px" width="205px">Перейти в
                        каталог</Button>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Button from '../../components/Button.vue';
import SuccessIcon from '../../components/icons/SuccessIcon.vue';

export default {
    name: "SuccessView",
    components: {
        SuccessIcon,
        Button
    }
}
</script>

<style lang="scss" scoped>
.success {
    &-wrapper {
        background-color: $white;
        border-radius: $radius;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 160px 0;
        gap: 16px;
    }

    &-title {
        margin-bottom: 0;
        font-size: 40px;
    }

    p {
        font-size: 16px;
        margin-bottom: 0;
        color: $dark-grey;
    }
}
</style>