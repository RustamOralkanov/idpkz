<template>
    <section class="main">
        <div class="container">
            <div class="row">
                <div class="col-4 offset-4">
                    <form class="main-wrapper">
                        <h2 class="main-title">Авторизация
                        </h2>
                        <div class="input-fields">
                            <label for="name"></label>
                            <input type="text" placeholder="Email или номер телефона" class="input-style">
                        </div>
                        <div class="input-fields">
                            <label for="password"></label>
                            <input type="password" placeholder="Пароль" class="input-style">
                            <span class="forget">Забыли?</span>
                        </div>
                        <button class="btn w-100 main-btn">Войти</button>
                        <div class="registration">
                            Нет аккаунта? <div class="reg">Зарегистрироваться</div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-4 offset-4">

                    <form class="main-wrapper">
                        <h2 class="main-title main-reg-title">Регистрация
                        </h2>
                        <p class="main-text">Зарегистрируйтесь на нашем сайте и получите ряд преимуществ при заказе</p>
                        <div class="payment-options">
                            <div class="option active">Физическое лицо</div>
                            <div class="option">Юридическое лицо</div>
                        </div>
                        <div class="input-fields">
                            <label for="name"></label>
                            <input type="text" placeholder="Ваше имя" class="input-style">
                        </div>
                        <div class="input-fields">
                            <label for="email"></label>
                            <input type="email" placeholder="Email" class="input-style">
                        </div>
                        <div class="input-fields">
                            <label for="bin"></label>
                            <input type="text" placeholder="ИИН/БИН" class="input-style">
                        </div>
                        <div class="input-fields">
                            <label for="phone"></label>
                            <input type="number" placeholder="Номер телефона" class="input-style">
                        </div>
                        <div class="input-fields">
                            <label for="password"></label>
                            <input type="password" placeholder="Пароль" class="input-style">
                        </div>
                        <div class="input-fields">
                            <label for="password"></label>
                            <input type="password" placeholder="Повторите пароль" class="input-style">
                        </div>
                        <button class="btn w-100 main-btn">Зарегистрироваться</button>
                        <div class="registration">
                            Уже регистрировались? <div class="reg">Войти в аккаунт</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main {
    padding: 160px 0 60px;

    &-wrapper {
        background-color: $white;
        border-radius: $radius;
        padding: 16px;
    }

    &-title {
        font-size: 32px;
        margin-bottom: 40px;
    }

    &-reg {
        &-title {
            margin-bottom: 24px;
        }
    }

    &-text {
        font-size: 14px;
        line-height: 1.4;
    }

    .input-fields {
        margin-bottom: 16px;
        position: relative;

        input {
            font-weight: 400;
            font-size: 16px;
        }

        .forget {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 14px;
            font-weight: 500;
            color: $green;
            cursor: pointer;
            transition: $transition;

            &:hover {
                color: $red;
            }
        }
    }

    &-btn {
        height: 45px;
    }

    .registration {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: $black;
        font-weight: 300;
        margin-top: 16px;

        .reg {
            font-weight: 600;
            cursor: pointer;
            transition: $transition;

            &:hover {
                color: $green;
            }
        }
    }

    .payment-options {
        display: flex;
        background-color: $grey;
        border-radius: $radius;
        margin-bottom: 16px;

        .option {
            flex: 1 0 auto;
            text-align: center;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
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
}
</style>