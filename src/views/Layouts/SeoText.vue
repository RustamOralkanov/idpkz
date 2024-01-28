<template>
    <section class="seo mt-90">
        <div class="container">
            <div class="cards-top" v-if="isActive">
                <SectionTitle :title="title" />
            </div>
            <div class="seo-wrapper">
                <p class="seo-text">
                    Компания <b>ТОО Scinla Computers</b> официальный
                    партнер ведущих производителей компьютерной техники
                    таких как:
                    <b>
                        GEIL, INTEL, AOC, Ciber Power, TP-Link,
                        Microsoft, SEAGATE, LENOVO, HP, PHILIPS, Western
                        Digital, Ubiquiti, D-Link, Ship, DELL
                    </b>
                </p>
                <ul class="seo-list">
                    <li>У нас представлен полный ассортимент компьютерной техники.</li>
                    <li>Наши цены одни из самых демократичных на рынке РК.</li>
                    <li>Широкие логистические возможности, позволяют поставлять "специфическое" оборудование нашим
                        корпоративным клиентам.</li>
                    <li>На сегодняшний день нашими клиентами являются крупнейшие компании Казахстана.</li>
                    <li>Являемся плательщиками НДС.</li>
                    <li>Отгружаем товар во все регионы РК.</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from '../../components/SectionTitle.vue';

export default {
    name: 'SeoText',
    components: { SectionTitle },
    props: {
        title: {
            type: String,
            default: "SEO текст",
        },
        isActive: {
            type: Boolean,
            required: false,
            default: true
        }
    }
}
</script>

<style lang="scss" scoped>
.seo {
    &-wrapper {
        padding: 20px;
        background-color: $white ;
        border-radius: $radius;
    }
}
</style>