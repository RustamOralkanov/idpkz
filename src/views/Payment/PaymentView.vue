<template>
    <main>
        <section class="payment">
            <div class="container">
                <SectionTitle title="Оформление заказа" />
                <div class="row payment-group">
                    <div class="col-xl-4">
                        <div class="payment-wrapper">
                            <h3 class="payment-title">Ваши данные</h3>
                            <div class="payment-options">
                                <div class="option active">Физическое лицо</div>
                                <div class="option">Юридическое лицо</div>
                            </div>
                            <div class="payment-input">
                                <label for="name">Имя <span>*</span></label>
                                <input type="text" id="name" value="Иванов Иван Иванович" placeholder="Ваше имя">
                            </div>
                            <div class="payment-input">
                                <label for="name">ИИН/БИН <span>*</span></label>
                                <input type="text" id="name" value="123456789111" placeholder="Ваше имя">
                            </div>
                            <div class="payment-input">
                                <label for="name">Номер телефона <span>*</span></label>
                                <input type="text" id="name" value="+7 (777) 777 77 77" placeholder="Ваш номер телефона">
                            </div>
                            <div class="payment-input">
                                <label for="name">E-mail <span>*</span></label>
                                <input type="text" id="name" value="test@example.com" placeholder="Ваш e-mail">
                            </div>
                            <div class="payment-input">
                                <label for="name">Комментарий</label>
                                <textarea type="text" id="name" value="Иванов Иван Иванович"
                                    placeholder="Комментарий к вашему заказу"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="payment-wrapper">
                            <h3 class="payment-title">Способ получения</h3>
                            <div class="payment-options">
                                <div class="option active">Доставка</div>
                                <div class="option">Самовывоз</div>
                            </div>
                            <div class="payment-infos">
                                <div class="payment-info">
                                    <ClockIcon :width="18" :height="18" fill="#3AB54A" /> Время доставки с <span>9:00 -
                                        20:00</span>
                                </div>
                                <div class="payment-info">
                                    <DeliveryIcon :width="18" :height="18" /> Ожидаемая доставка: <span>завтра</span>
                                </div>
                            </div>
                            <div class="payment-input">
                                <label for="name">Адрес <span>*</span></label>
                                <input type="text" id="name" value="г. Алматы, ул. Макатаева 158"
                                    placeholder="Ваш адрес доставки">
                            </div>
                        </div>
                        <div class="payment-wrapper">
                            <h3 class="payment-title">Способ оплаты</h3>
                            <div class="payment-radio">
                                <input type="radio" name="payment">
                                <label for="payment">Онлайн-оплата картой</label>
                            </div>
                            <div class="payment-radio">
                                <input type="radio" name="payment">
                                <label for="payment">Оплата через Kaspi QR</label>
                            </div>
                            <div class="payment-radio">
                                <input type="radio" name="payment">
                                <label for="payment">Вышлите счет в каспи</label>
                            </div>
                            <div class="payment-radio">
                                <input type="radio" name="payment">
                                <label for="payment">Картой при получении</label>
                            </div>
                            <div class="payment-radio">
                                <input type="radio" name="payment">
                                <label for="payment">Наличными</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="payment-wrapper">
                            <h3 class="payment-title">Сумма к оплате</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import ClockIcon from '../../components/icons/ClockIcon.vue';
import DeliveryIcon from '../../components/icons/DeliveryIcon.vue';

export default {
    name: 'PaymentView',
    components: {
        SectionTitle: () => import('@/components/SectionTitle.vue'),
        ClockIcon,
        DeliveryIcon
    }
}
</script>

<style lang="scss" scoped>
.payment {
    &-group {
        margin-top: 40px;
    }

    &-wrapper {
        background-color: $white;
        padding: 16px;
        border-radius: $radius;
        margin-bottom: 24px;
    }

    &-title {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 16px;
    }

    &-options {
        display: flex;
        background-color: $grey;
        border-radius: $radius;
        margin-bottom: 16px;

        .option {
            flex: 1 0 auto;
            text-align: center;
            cursor: pointer;
            font-size: 16px;
            line-height: 1;
            transition: $transition;
            border-radius: $radius;
            box-sizing: border-box;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                color: $green;
                border: 1px solid $green;
                border-radius: $radius;
                background-color: $white;
            }

            &.active {
                color: $green;
                border: 1px solid $green;
                border-radius: $radius;
                background-color: $white;
            }
        }
    }

    &-input {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &:not(:last-child) {
            margin-bottom: 16px;
        }

        label {
            font-weight: 500;
            font-size: 16px;

            span {
                color: $red;
            }
        }

        input,
        textarea {
            background-color: $grey;
            height: 45px;
            width: 100%;
            border: unset;
            border-radius: $radius;
            padding: 0 8px;
            font-size: 14px;

            &::placeholder {
                font-size: 14px;
            }
        }

        textarea {
            height: 100px;
            padding: 8px;
        }
    }

    &-infos {
        display: flex;
        gap: 8px;
        flex-direction: column;
        margin-bottom: 16px;
    }

    &-info {
        display: flex;
        gap: 5px;
        align-items: center;
        font-size: 14px;

        span {
            font-weight: 600;
        }
    }

    &-radio {
        display: flex;
        gap: 5px;
        align-items: center;
        margin-bottom: 8px;
        position: relative;

        input {
            width: 20px;
            height: 20px;
            z-index: 2;
            opacity: 0;

            &:checked+label::before {
                background-color: $green;
            }
        }

        label {
            &:after {
                content: '';
                display: block;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                border: 1px solid $green;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
            }

            &:before {
                content: '';
                display: block;
                border-radius: 50%;
                width: 14px;
                height: 14px;
                position: absolute;
                background-color: $grey;
                top: 50%;
                transform: translateY(-50%);
                left: 3px;
            }
        }
    }
}
</style>