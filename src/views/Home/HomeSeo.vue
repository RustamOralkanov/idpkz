<template>
    <section class="seo">
        <div class="container">
            <article class="seo-wrapper">
                <h1 class="seo-main">
                    {{ seo.title }}
                </h1>
                <p class="seo-main-text" v-html="seo.description" />
            </article>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeSeo',
    data() {
        return {
            seo: {
                title: 'Интернет магазин Scinla Computers',
                description: 'Компания <b>ТОО Scinla Computers</b> официальный партнер ведущих производителей компьютерной техники таких как: <b> GEIL, INTEL, AOC, Ciber Power, TP-Link, Microsoft, SEAGATE, LENOVO, HP, PHILIPS, Western Digital, Ubiquiti, D-Link, Ship, DELL </b>'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.seo {
    margin-top: 24px;

    &-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 30px;
        background-color: $white;
        border-radius: $radius;
        padding: 60px;
    }

    &-main {
        text-align: center;
        font-size: 28px;
        font-weight: 700;
        color: $green;

        &-text {
            text-align: center;
            font-size: 20px;
            line-height: 170%;
        }
    }
}

@media (max-width: 991px) {
    .seo {

        &-wrapper {
            gap: 16px;
            background-color: $white;
            border-radius: $radius;
            padding: 30px;
        }

        &-main {
            font-size: 18px;

            &-text {
                font-size: 14px;
            }
        }
    }
}

@media (max-width: 767px) {
    .seo {
        margin-top: 0;

        &-wrapper {
            padding: 16px;
            gap: 10px;
        }

        &-main {
            font-size: 14px;
            margin-bottom: 0;

            &-text {
                font-size: 12px;
                line-height: 1.6;
            }
        }
    }
}
</style>