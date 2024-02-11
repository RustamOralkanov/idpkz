<template>
    <div class="my-profile">
        <h2 class="user-username">Мои данные</h2>
        <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 ">
                <div class="input-field">
                    <label>Имя</label>
                    <input type="text" class="input-style" value="Имя">
                </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-12">
                <div class="input-field">
                    <label>Фамилия</label>
                    <input type="text" class="input-style" value="Фамилия">
                </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-12">
                <div class="input-field">
                    <label>Email</label>
                    <input type="text" class="input-style" value="Email">
                </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-12">
                <div class="input-field">
                    <label>Телефон</label>
                    <input type="text" class="input-style" value="+7 (777) 777-77-77">
                </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-12">
                <div class="input-field">
                    <label>Новый пароль</label>
                    <input type="text" class="input-style" value="Новый пароль">
                    <img src="@/assets/icons/eye.svg" alt="eye" class="password">
                </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-12">
                <div class="input-field">
                    <label>Подтвердить пароль</label>
                    <input type="text" class="input-style" value="Подтвердить пароль">
                    <img src="@/assets/icons/eye.svg" alt="eye" class="password">
                </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-12">
                <div class="input-field">
                    <label>Улица, № дома</label>
                    <input type="text" class="input-style" value="Улица, № дома">
                </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-12">
                <div class="input-field">
                    <label>Квартира / Офис</label>
                    <input type="text" class="input-style" value="Квартира / Офис">
                </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-12 col-12 ">
                <button class="btn w-50">Сохранить</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyProfile'
}
</script>

<style lang="scss" scoped>
.my-profile {
    background-color: $white;
    border-radius: $radius;
    padding: 16px;

    .user-username {
        margin-bottom: 24px;
    }

    .input-field {
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        position: relative;

        label {
            font-weight: 500;
        }

        img {
            position: absolute;
            width: 20px;
            height: 20px;
            object-fit: contain;
            right: 12px;
            bottom: calc(25px - 10px);
            cursor: pointer;
        }
    }

    .btn {
        height: 50px;
        margin-top: 40px;
    }
}

@media (max-width: 991px) {
    .my-profile {

        .input-field {
            font-size: 14px;

            label {
                font-size: 16px;
            }

            img {
                padding: 4px;
                width: 26px;
                height: 26px;
                bottom: calc(25px - 13px);
            }
        }

        .btn {
            height: 50px;
            margin-top: 40px;
            width: 100% !important;
        }
    }
}
</style>