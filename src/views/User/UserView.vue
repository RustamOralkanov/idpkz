<template>
    <main class="user">
        <section>
            <div class="container">
                <Breadcrumbs />
                <SectionTitle title="Личный кабинет" />
                <div class="row user-info">
                    <div class="col-xxl-3 col-xl-3 col-lg-12">
                        <div class="user-links">
                            <div class="user-username">Евгений Орлов</div>
                            <div class="user-email">eorlov@domain.kz</div>
                            <div class="user-links-wrapper">
                                <router-link to="/user/profile" class="user-link">
                                    <UserIcon :width="24" :height="24" fill="black" />
                                    Профиль
                                </router-link>
                                <span v-if="hover">This is a secret message.</span>
                                <router-link to="/user/purchases" class="user-link">
                                    <CartIcon :width="24" :height="24" />
                                    Покупки
                                </router-link>
                                <router-link to="/user/favorites" class="user-link">
                                    <FavoriteIcon :width="24" :height="24" fill="none" />
                                    Избранное
                                </router-link>
                                <router-link to="/user/recently" class="user-link">
                                    <ClockIcon :width="24" :height="24" />
                                    Недавние
                                </router-link>
                                <div class="user-link">
                                    <ExitIcon :width="24" :height="24" />
                                    Выйти
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-9 col-xl-9 col-lg-12">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import UserIcon from '../../components/icons/UserIcon.vue';
import CartIcon from '../../components/icons/CartIcon.vue';
import ClockIcon from '../../components/icons/ClockIcon.vue';
import FavoriteIcon from '../../components/icons/FavoriteIcon.vue';
import ExitIcon from '../../components/icons/ExitIcon.vue';

export default {
    name: 'User',
    components: {
        Breadcrumbs,
        SectionTitle,
        UserIcon,
        CartIcon,
        ClockIcon,
        FavoriteIcon,
        ExitIcon
    },
    data() {
        return {
            isHover: true,
            hover: false
        }
    },
    methods: {
        hoverLink(value) {
            console.log(value);
            this.isHover = value;
        },
    },
    computed: {
        linkColor() {
            return this.isHover ? 'white' : 'black';
        },
    },
}
</script>

<style lang="scss">
.user {
    &-info {
        margin-top: 60px !important;
    }

    &-links {
        background-color: $white;
        border-radius: $radius;
        padding: 16px;

        &-wrapper {
            display: flex;
            flex-direction: column;
            gap: 8px;

            .router-link-exact-active {
                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: $green;
                    right: 6px;
                }
            }
        }
    }

    &-link {
        font-size: 16px;
        color: $black;
        padding: 6px 0;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: $transition;
        border-radius: $radius;
        position: relative;

        &:hover {
            &::after {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: $green;
                right: 6px;
            }
        }
    }

    &-username {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 8px;
        line-height: 1;
        color: $black;
    }

    &-email {
        font-size: 16px;
        color: $dark-grey;
        padding-bottom: 16px;
        margin-bottom: 16px;
        border-bottom: 1px dashed $dark-grey;
    }
}

@media (max-width: 1199px) {
    .user {
        &-info {
            margin-top: 30px !important;
        }

        &-links {
            margin-bottom: 24px;

            &-wrapper {
                flex-direction: row;
                overflow: auto;
                gap: 10px;

                .router-link-exact-active {
                    font-weight: 600;
                    color: $green;

                    &::after {
                        content: unset;
                    }
                }
            }
        }

        &-link {
            flex: 1 0 auto;
        }
    }
}

@media (max-width: 991px) {
    .user {

        &-links {

            &-wrapper {
                .router-link-exact-active {
                    font-weight: 600;
                    color: $green;

                    &::after {
                        content: unset;
                    }
                }
            }
        }

        &-link {
            font-size: 15px;
            flex-direction: column;
            align-items: center;
            padding: 0;
            text-align: center;
            flex: 1 0 75px;
            gap: 8px;

            &:hover {
                &::after {
                    content: none;
                }
            }
        }

        &-username {
            font-size: 18px;
        }

        &-email {
            font-size: 14px;
            color: $dark-grey;
        }
    }
}
</style>