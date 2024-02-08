<template>
    <div class="cart-empty">
        <AlertIcon :width="100" :height="100" fill="#7F7F7F" />
        <h3 class="cart-empty-title">{{ title }}</h3>
        <p v-show="text.length > 1">{{ text }}</p>
        <button class="cart-empty-back" @click="$router.push('categories')">Перейти в каталог</button>
    </div>
</template>

<script>
export default {
    name: 'Empty',
    components: {
        Recently: () => import('@/views/Layouts/Recently.vue'),
        AlertIcon: () => import('@/components/icons/AlertIcon.vue'),
    },
    props: {
        title: {
            type: String,
            default: 'Title'
        },
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.cart {
    &-empty {
        background-color: $white;
        border-radius: $radius;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        padding: 180px 0;

        p {
            margin-bottom: 0;
            color: $dark-grey;
        }

        &-title {
            margin-bottom: 0;
            color: $black;
            font-size: 40px;
            font-weight: 500;
        }

        &-back {
            color: $dark-grey;
            font-size: 16px;
            font-weight: 400;
            background-color: unset;
            padding: 16px 32px;
            border-radius: $radius;
            border: 1px solid $dark-grey;
            transition: $transition;

            &:hover {
                background-color: $green;
                color: $white;
                border-color: $green
            }
        }
    }
}

@media (max-width: 991px) {
    .cart {
        &-empty {
            padding: 130px 20px;

            p {
                text-align: left;
            }

            &-title {
                text-align: center;
                font-size: 32px;
            }

            &-back {
                padding: 12px 32px;
                text-align: center;
            }
        }
    }

}
</style>