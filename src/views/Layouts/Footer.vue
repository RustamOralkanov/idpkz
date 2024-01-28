<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-xl-3">
                    <h5 class="footer-title">{{ footer.contacts.title }}</h5>
                    <ul class="footer-list">
                        <li class="footer-list-item">
                            <LocationIcon :width="24" :height="24" />
                            <a href="#">
                                {{ footer.contacts.address }}
                            </a>
                        </li>
                        <li class="footer-list-item">
                            <PhoneIcon :width="24" :height="20" />
                            <a :href="`tel:${(footer.contacts.phone).replaceAll(' ', '')}`">
                                {{ footer.contacts.phone }}
                            </a>
                        </li>
                        <li class="footer-list-item">
                            <MailIcon :width="24" :height="20" />
                            <a :href="`mailto:${(footer.contacts.mail_one)}`">
                                для юр. лиц: {{ footer.contacts.mail_one }}
                            </a>
                        </li>
                        <li class="footer-list-item">
                            <MailIcon :width="24" :height="20" />
                            <a :href="`mailto:${(footer.contacts.mail_two)}`">
                                для частных лиц: {{ footer.contacts.mail_two }}
                            </a>
                        </li>
                    </ul>
                    <div class="footer-socials">
                        <a :href="footer.socials.facebook" class="footer-social">
                            <FacebookIcon />
                        </a>
                        <a :href="footer.socials.twitter" class="footer-social">
                            <TwitterIcon />
                        </a>
                        <a :href="footer.socials.vk" class="footer-social">
                            <VkIcon />
                        </a>
                    </div>
                </div>
                <div class="col-xl-3">
                    <h5 class="footer-title">{{ footer.navigation.title }}</h5>
                    <ul class="footer-list">
                        <li class="footer-list-item" v-for="(link, index) in footer.navigation.links" :key="index">
                            <a :href="link.link">
                                {{ link.name }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-3">
                    <h5 class="footer-title">{{ footer.useful.title }}</h5>
                    <ul class="footer-list">
                        <li class="footer-list-item" v-for="(link, index) in footer.useful.links" :key="index">
                            <a :href="link.link">
                                {{ link.name }}
                            </a>
                        </li>
                        <li class="footer-list-item status">
                            <ClockIcon :width="18" :height="18" fill="white" />
                            <a href="#">
                                Статус заказа
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-3">
                    <h5 class="footer-title">Будьте в курсе новостей</h5>
                    <p class="footer-list-item-text">
                        Подпишитесь на последние обновления и узнавайте о новинках и специальных предложениях первыми
                    </p>
                    <form class="footer-form">
                        <input type="email" name="email" id="email" class="input-style" placeholder="Email">
                        <button class="btn footer-form-btn">Подписаться</button>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="footer-copyright">
                        <p>
                            {{ footer.copyright.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import LocationIcon from '@/components/icons/LocationIcon.vue'
import PhoneIcon from '@/components/icons/PhoneIcon.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
import TwitterIcon from '@/components/icons/TwitterIcon.vue'
import VkIcon from '@/components/icons/VkIcon.vue'
import ClockIcon from '@/components/icons/ClockIcon.vue'

export default {
    name: 'Footer',
    components: {
        LocationIcon,
        PhoneIcon,
        MailIcon,
        FacebookIcon,
        TwitterIcon,
        VkIcon,
        ClockIcon
    },
    props: {
        footer: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    border-top: 5px solid $green;
    background: $white;
    margin-top: 150px;
    padding: 50px 0 0px;

    &-title {
        color: $black;
        font-family: $roboto;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 24px;
    }

    &-list {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding-left: 0;
        margin-bottom: 30px;

        &-item {
            list-style-type: none;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            color: $black;

            a {
                color: $black;
                transition: $transition;
                font-size: 16px;

                &:hover {
                    color: $green;
                }
            }

            &-text {
                font-size: 14px;
                margin-bottom: 24px;
            }

            &.status {
                background-color: $green;
                width: fit-content;
                padding: 0 12px;
                border-radius: $radius;
                display: flex;
                gap: 8px;
                align-items: center;

                a {
                    color: $white;
                }
            }
        }
    }

    &-socials {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    &-form {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &-btn {
            height: 50px;
        }
    }

    &-copyright {
        padding: 33px 0;
        color: $dark-grey;
        font-size: 12px;
        font-weight: 400;
        border-top: 1px solid $green;
        margin-top: 90px;

        p {
            margin-bottom: 0;
        }
    }
}
</style>