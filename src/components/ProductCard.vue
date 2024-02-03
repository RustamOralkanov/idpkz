<template>
    <div class="card">
        <div class="card-inner">
            <router-link :to="{ name: 'product', params: { product: title } }" class=" card-image">
                <img :src="img" :alt="title" />
            </router-link>
            <div class="card-label" v-if="discount">Скидка</div>
            <div class="card-favorite" :class="isFavorite ? 'active' : ''">
                <FavoriteIcon fill="none" :stroke="isFavorite ? 'red' : 'white'" />
            </div>
            <div class="card-body">
                <div class="card-partnumber">
                    p/n: {{ partNumber }}
                </div>
                <a href="#" class="card-name">
                    {{ title }}
                </a>
                <div class="card-prices">
                    <h5 class="card-prices-new">
                        {{ price.toLocaleString() }} ₸
                    </h5>
                    <h5 class="card-prices-old">
                        {{ oldPrice.toLocaleString() }} ₸
                    </h5>
                </div>
                <div class="card-delivery">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.6267 5.69999L13.9267 4.99999C13.5931 4.66265 13.141 4.46889 12.6667 4.45999H10V4.07332C10 3.0608 9.17918 2.23999 8.16666 2.23999H2.66666C2.39052 2.23999 2.16666 2.46385 2.16666 2.73999C2.16666 3.01613 2.39052 3.23999 2.66666 3.23999H8.14666C8.6069 3.23999 8.98 3.61309 8.98 4.07332V8.29332C8.98 8.56947 9.20385 8.79332 9.48 8.79332C9.75614 8.79332 9.98 8.56947 9.98 8.29332V5.45999H12.6467C12.8676 5.45911 13.0794 5.54816 13.2333 5.70666L13.9333 6.37332C14.0288 6.4723 14.0976 6.59387 14.1333 6.72666H11.3333C11.0572 6.72666 10.8333 6.95051 10.8333 7.22666C10.8333 7.5028 11.0572 7.72666 11.3333 7.72666H14.1667V10.56C14.1757 10.7867 14.092 11.0073 13.9347 11.1709C13.7774 11.3345 13.5602 11.4268 13.3333 11.4267H12.5933C12.4293 10.6575 11.7498 10.1077 10.9633 10.1077C10.1768 10.1077 9.49739 10.6575 9.33333 11.4267H5.77333C5.59389 10.6316 4.8618 10.0859 4.04862 10.1411C3.23543 10.1963 2.58377 10.8359 2.5134 11.6479C2.44302 12.4599 2.97493 13.2021 3.7665 13.3963C4.55807 13.5906 5.37312 13.179 5.68666 12.4267H9.42666C9.68652 13.0455 10.2922 13.448 10.9633 13.448C11.6345 13.448 12.2401 13.0455 12.5 12.4267H13.3333C14.3459 12.4267 15.1667 11.6058 15.1667 10.5933V6.99999C15.1676 6.51192 14.9731 6.04378 14.6267 5.69999ZM4.14666 12.32C3.92285 12.3309 3.71503 12.2041 3.62233 12.0001C3.52963 11.7961 3.57082 11.5562 3.72625 11.3948C3.88169 11.2334 4.11988 11.1832 4.32724 11.2681C4.5346 11.353 4.66913 11.5559 4.66666 11.78C4.66686 12.0706 4.43706 12.3092 4.14666 12.32ZM10.4543 11.981C10.5385 12.1861 10.7383 12.32 10.96 12.32C11.2593 12.32 11.503 12.0793 11.5067 11.78C11.5094 11.5583 11.3779 11.3569 11.1739 11.2702C10.9698 11.1835 10.7336 11.2286 10.5759 11.3844C10.4181 11.5402 10.3701 11.7759 10.4543 11.981Z"
                            fill="#3AB54A" />
                        <path
                            d="M7.16666 5.99999C7.16307 5.72535 6.9413 5.50358 6.66666 5.49999H1.33333C1.05719 5.49999 0.833328 5.72385 0.833328 5.99999C0.833328 6.27613 1.05719 6.49999 1.33333 6.49999H6.66666C6.9413 6.4964 7.16307 6.27463 7.16666 5.99999Z"
                            fill="#3AB54A" />
                        <path
                            d="M6.66666 7.49999H3.33333C3.05719 7.49999 2.83333 7.72385 2.83333 7.99999C2.83333 8.27613 3.05719 8.49999 3.33333 8.49999H6.66666C6.9428 8.49999 7.16666 8.27613 7.16666 7.99999C7.16666 7.72385 6.9428 7.49999 6.66666 7.49999Z"
                            fill="#3AB54A" />
                    </svg>
                    Доставка: {{ delivery }}
                </div>
                <button class="btn card-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M2.75 2C2.33579 2 2 2.33579 2 2.75C2 3.16421 2.33579 3.5 2.75 3.5H4.66442L5.02239 4.9319L6.80064 12.0449C5.77331 12.2531 5 13.1612 5 14.25C5 15.4926 6.00736 16.5 7.25 16.5H18.75C19.1642 16.5 19.5 16.1642 19.5 15.75C19.5 15.3358 19.1642 15 18.75 15H7.25C6.83579 15 6.5 14.6642 6.5 14.25C6.5 13.8358 6.83579 13.5 7.25 13.5H7.75H18.75C19.0942 13.5 19.3941 13.2658 19.4776 12.9319L21.4776 4.9319C21.5336 4.70785 21.4833 4.47048 21.3412 4.28844C21.199 4.1064 20.981 4 20.75 4H6.33558L5.97761 2.5681C5.89414 2.23422 5.59415 2 5.25 2H2.75ZM7.75 18C6.7835 18 6 18.7835 6 19.75C6 20.7165 6.7835 21.5 7.75 21.5C8.7165 21.5 9.5 20.7165 9.5 19.75C9.5 18.7835 8.7165 18 7.75 18ZM17.75 18C16.7835 18 16 18.7835 16 19.75C16 20.7165 16.7835 21.5 17.75 21.5C18.7165 21.5 19.5 20.7165 19.5 19.75C19.5 18.7835 18.7165 18 17.75 18Z"
                            fill="white" />
                    </svg>
                    В корзину
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import FavoriteIcon from './icons/FavoriteIcon.vue';

export default {
    name: 'ProductCard',
    props: {
        img: String,
        partNumber: String,
        title: String,
        discount: Boolean,
        price: {
            type: Number,
            default: 100000
        },
        oldPrice: {
            type: Number,
            default: 100000
        },
        delivery: String,
        isFavorite: Boolean,
    },
    components: { FavoriteIcon },
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

    &-inner {
        display: flex;
        flex-direction: column;
        padding: 16px;
        position: relative;
        background-color: $white;
        border-radius: $radius;
    }

    &-image {
        width: 100%;
        max-height: 200px;
        height: 100%;
        margin-bottom: 8px;
        display: block;

        img {
            display: block;
            max-height: 200px;
            height: 100%;
            margin: 0 auto;
            object-fit: contain;
        }
    }

    &-label {
        background-color: $red;
        width: fit-content;
        position: absolute;
        top: 16px;
        left: 16px;
        color: $white;
        font-size: 12px;
        border-radius: $radius;
        padding: 3px 14px;
    }

    &-favorite {
        background-color: $green;
        width: fit-content;
        position: absolute;
        top: 16px;
        right: 16px;
        color: $white;
        border-radius: $radius;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover {
            svg {
                fill: $red;

                path {
                    stroke: $red;
                    transition: $transition;
                }
            }
        }

        svg {
            width: 24px;
            height: 24px;

            path {
                transition: $transition;
            }
        }

        &.active {
            svg {
                fill: $red;

                path {
                    stroke: $red !important;
                    transition: $transition;
                }
            }
        }
    }

    &-body {
        padding: 0;
    }

    &-partnumber {
        color: $dark-grey;
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 8px;
    }

    &-name {
        color: $black;
        font-size: 18px;
        font-weight: 600;
        line-height: 130%;
        margin-bottom: 16px;
        height: 52px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &-prices {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 16px;

        &-new {
            color: $black;
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 0;
        }

        &-old {
            color: $dark-grey;
            text-decoration: line-through;
            font-size: 14px;
            font-weight: 300;
            margin-bottom: 0;
        }
    }

    &-delivery {
        display: flex;
        align-items: center;
        gap: 8px;
        color: $black;
        font-size: 14px;
        margin-bottom: 16px;

        svg {
            width: 20px;
            height: 20px;
        }
    }

    &-btn {
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 18px;
        font-weight: 500;
    }

    &-viewed {
        display: flex;
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

@media (max-width: 1400px) {
    .card {
        width: 264px !important;
    }
}

@media (max-width: 1200px) {
    .card {
        width: 298px !important;
    }
}

@media (max-width: 991px) {
    .card {
        width: 217px !important;

        &-inner {
            padding: 8px;
        }

        &-image {
            max-height: 180px;

            img {
                max-height: 180px;
            }
        }

        &-label {
            top: 8px;
            left: 8px;
            font-size: 10px;
            padding: 3px 8px;
        }

        &-favorite {
            top: 8px;
            right: 8px;
            width: 24px;
            height: 24px;

            svg {
                width: 16px;
                height: 16px;
            }
        }

        &-partnumber {
            font-size: 10px;
        }

        &-name {
            font-size: 16px;
            font-weight: 400;
            height: 37px;
            margin-bottom: 14px;
            line-height: 1.2;
        }

        &-prices {
            flex-direction: column-reverse;
            gap: 2px;
            align-items: flex-start;
            margin-bottom: 12px;

            &-new {
                font-size: 16px;
            }

            &-old {
                font-size: 14px;
            }
        }

        &-delivery {
            gap: 4px;
            font-size: 10px;
            margin-bottom: 12px;

            svg {
                width: 14px;
                height: 14px;
            }
        }

        &-btn {
            height: 40px;
            display: flex;
            gap: 8px;
            font-size: 16px;
            font-weight: 400;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        &-viewed {
            display: flex;
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

        }
    }
}

@media (max-width: 767px) {
    .card {
        width: 253px !important;
    }
}

@media (max-width: 576px) {
    .card {
        width: 178px !important;
    }
}
</style>