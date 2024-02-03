<template>
    <section class="features">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4" v-for="(feature, index) in features" :key="index">
                    <div class="features-item">
                        <img :src="feature.img" :alt="feature.title">
                        <h2 class="features-item-title">{{ feature.title }}</h2>
                        <h5 class="features-item-descr">
                            {{ feature.description }}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Package from '@/assets/icons/featuresPack.svg'
import Delivery from '@/assets/icons/delivery.svg'
import Discount from '@/assets/icons/discount.svg'

export default {
    name: "HomeFeatures",
    data() {
        return {
            features: [
                { img: Package, title: 'АССОРТИМЕНТ', description: 'Поставки от прямых производителей' },
                { img: Delivery, title: 'ДОСТАВКА', description: 'Доставка по всему Казахстану' },
                { img: Discount, title: 'НИЗКИЕ ЦЕНЫ', description: 'Цены ниже рыночных' },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.features {
    margin-top: 24px;

    &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: $white;
        border-radius: $radius;
        height: 200px;

        img {
            width: 40px;
            height: 40px;
            margin-bottom: 16px;
        }

        &-title {
            color: $black;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 8px;
            text-align: center;
        }

        &-descr {
            color: $black;
            font-size: 16px;
            text-align: center;
            margin-bottom: 0;
        }
    }
}

@media (max-width: 1200px) {
    .features {
        margin-top: 24px;

        &-item {
            height: 180px;
            padding: 0 65px;
        }
    }
}

@media (max-width: 991px) {
    .features {
        &-item {
            padding: 0 35px;

            img {
                width: 30px;
                height: 30px;
            }

            &-title {
                font-size: 16px;
            }

            &-descr {
                font-size: 14px;
            }
        }
    }
}

@media (max-width: 767px) {
    .features {
        &-item {
            padding: 0 25px;
            margin-bottom: 16px;
            height: 125px;
        }
    }
}
</style>