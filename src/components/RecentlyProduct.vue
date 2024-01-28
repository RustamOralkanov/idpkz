<template>
    <div class="card card-viewed swiper-slide">
        <a href="#" class="card-viewed-img">
            <img :src="img" :alt="title" />
        </a>
        <div class="card-viewed-texts">
            <a :href="link" class="card-viewed-title">
                {{ title }}
            </a>
            <h5 class="card-viewed-price">{{ price.toLocaleString() }} ₸</h5>
        </div>
        <div class="card-viewed-favorite" :class="isFavorite ? 'active' : ''">
            <FavoriteIcon fill="none" :stroke="isFavorite ? '#cd412c' : '#cd412c'" />
        </div>
    </div>
</template>

<script>
import FavoriteIcon from './icons/FavoriteIcon.vue';

export default {
    name: 'RecentlyProduct',
    components: { FavoriteIcon },
    props: {
        img: {
            type: String,
            default: 'image'
        },
        title: {
            type: String,
            default: 'title'
        },
        price: {
            type: Number,
            default: 100000
        },
        isFavorite: {
            type: Boolean,
            default: false
        },
        link: {
            type: String,
            default: '#'
        },
    }
}
</script>

<style lang="scss" scoped>
.card {
    width: 309px !important;
    border: unset;
    overflow: hidden;
    transition: $transition;

    &:hover {
        box-shadow: $shadow;
    }

    &-viewed {
        display: flex !important;
        flex-direction: row;
        padding: 8px;
        gap: 8px;

        &-img {
            width: 80px;
            height: 80px;
            display: block;
            flex: 0 0 auto;

            img {
                max-width: 80px;
                width: 100%;
                height: auto;
            }
        }

        &-texts {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1 1 auto;
            padding: 8px 0;
        }

        &-title {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 0;
            color: $black;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 38px;
        }

        &-price {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 0;
            color: $black;
        }

        &-favorite {
            cursor: pointer;

            svg {
                path {
                    stroke: $red;
                }
            }

            &:hover {
                transition: $transition;

                svg {
                    fill: $red;
                }
            }

            &.active {
                transition: $transition;

                svg {
                    fill: $red;

                    path {
                        stroke: $red;
                    }
                }
            }
        }
    }
}
</style>