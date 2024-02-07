<template>
    <main>
        <div class="container">
            <ul class="breadcrumbs">
                <li class="breadcrumb">
                    <router-link to="/">Главная</router-link>
                </li>
                <li class="breadcrumb">
                    <router-link to="/categories">Категорий</router-link>
                </li>
                <li class="breadcrumb">
                    {{ getPreviousPageName() }}
                </li>
                <li class="breadcrumb active">
                    {{ pageProductName }}
                </li>
            </ul>
        </div>

        <section class="product-info">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8">
                        <div class="product-info-main bg">
                            <div class="product-info-articul">Артикул: 1980567</div>
                            <h2 class="product-info-name">
                                Ноутбук Lenovo Thinkpad E15 15,6"FHD/Ryzen 5-5625U/8Gb/512Gb/Win11 pro (21ED003MRT)
                            </h2>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="product-info-images">
                                        <div class="product-info-images-main">
                                            <img src="https://www.idpkz.kz/upload/images/61349_538276_14.jpg" alt="image">
                                            <div class="product-info-images-labels">
                                                <span class="product-info-images-label green">В наличий</span>
                                                <span class="product-info-images-label red">Скидка</span>
                                            </div>
                                        </div>
                                        <div class="product-info-thumbnails">
                                            <div class="product-info-thumbnail" v-for="item in 4">
                                                <img src="https://cdn.evrika.com/storage/products/images/medium/kAweLsoy6V3KJZhsR1Alaw1bkoowhZohQwW8Cn42.jpg.webp?v=1697108414/f_auto"
                                                    alt="image">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="product-info-wrapper">
                                        <div class="product-info-stars">
                                            <star-rating :star-size="24" :show-rating="false" :rating="3" />
                                        </div>
                                        <!-- ///// -->
                                        <div class="product-actions desktop-hide">
                                            <div class="product-actions-id">Код: ID79342</div>
                                            <div class="product-actions-price">
                                                Цена
                                                <div class="prices">
                                                    <div class="old">314 990 ₸</div>
                                                    <div class="new">279 990 ₸</div>
                                                </div>
                                            </div>
                                            <div class="product-actions-count">
                                                Количество
                                                <div class="counter">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                        viewBox="0 0 30 30" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M7.5 2.5H22.5C25.2614 2.5 27.5 4.73858 27.5 7.5V22.5C27.5 25.2614 25.2614 27.5 22.5 27.5H7.5C4.73858 27.5 2.5 25.2614 2.5 22.5V7.5C2.5 4.73858 4.73858 2.5 7.5 2.5ZM24.7097 24.7097C25.2958 24.1237 25.625 23.3288 25.625 22.5V7.5C25.625 6.6712 25.2958 5.87634 24.7097 5.29029C24.1237 4.70424 23.3288 4.375 22.5 4.375H7.5C5.77411 4.375 4.375 5.77411 4.375 7.5V22.5C4.375 23.3288 4.70424 24.1237 5.29029 24.7097C5.87634 25.2958 6.6712 25.625 7.5 25.625H22.5C23.3288 25.625 24.1237 25.2958 24.7097 24.7097Z"
                                                            fill="black" />
                                                        <path
                                                            d="M20.3 14.0625H9.7C9.18223 14.0625 8.7625 14.4822 8.7625 15C8.7625 15.5178 9.18223 15.9375 9.7 15.9375H20.3C20.8178 15.9375 21.2375 15.5178 21.2375 15C21.2375 14.4822 20.8178 14.0625 20.3 14.0625Z"
                                                            fill="black" />
                                                    </svg>
                                                    <input type="number" value="1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                        viewBox="0 0 30 30" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M7.5 2.5H22.5C25.2614 2.5 27.5 4.73858 27.5 7.5V22.5C27.5 25.2614 25.2614 27.5 22.5 27.5H7.5C4.73858 27.5 2.5 25.2614 2.5 22.5V7.5C2.5 4.73858 4.73858 2.5 7.5 2.5ZM24.6302 24.6302C25.1951 24.0652 25.5125 23.299 25.5125 22.5V7.5C25.5125 6.70104 25.1951 5.93479 24.6302 5.36984C24.0652 4.80489 23.299 4.4875 22.5 4.4875H7.5C5.83624 4.4875 4.4875 5.83624 4.4875 7.5V22.5C4.4875 23.299 4.80489 24.0652 5.36984 24.6302C5.9348 25.1951 6.70104 25.5125 7.5 25.5125H22.5C23.299 25.5125 24.0652 25.1951 24.6302 24.6302Z"
                                                            fill="black" />
                                                        <path
                                                            d="M20 14.0625H15.9375V10C15.9375 9.48223 15.5178 9.0625 15 9.0625C14.4822 9.0625 14.0625 9.48223 14.0625 10V14.0625H10C9.48223 14.0625 9.0625 14.4822 9.0625 15C9.0625 15.5178 9.48223 15.9375 10 15.9375H14.0625V20C14.0625 20.5178 14.4822 20.9375 15 20.9375C15.5178 20.9375 15.9375 20.5178 15.9375 20V15.9375H20C20.5178 15.9375 20.9375 15.5178 20.9375 15C20.9375 14.4822 20.5178 14.0625 20 14.0625Z"
                                                            fill="black" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="product-actions-info">
                                                <div>
                                                    <DeliveryIcon :width="24" :height="24" />
                                                    Доставка: завтра
                                                </div>
                                                <div>
                                                    <PackIcon :width="24" :height="24" />
                                                    Есть на складе
                                                </div>
                                            </div>
                                            <div class="product-actions-btns">
                                                <button class="btn product-actions-btn">Добавить в корзину</button>
                                                <button class="favorite">
                                                    <FavoriteIcon :width="24" :height="24" fill="none" stroke="#3ab54a" />
                                                </button>
                                            </div>
                                        </div>
                                        <!-- ///// -->
                                        <div class="product-info-characteristics">
                                            <h3 class="product-info-characteristics-title">Характеристики</h3>
                                            <div class="product-info-characteristics-descr">
                                                <span class="item">Диагональ дисплея, дюйм:</span>
                                                <span class="item-accent">15.6</span>
                                            </div>
                                            <div class="product-info-characteristics-descr">
                                                <span class="item">Разрешение экрана:</span>
                                                <span class="item-accent">FHD 1920x1080</span>
                                            </div>
                                            <div class="product-info-characteristics-descr">
                                                <span class="item">Серия процессора:</span>
                                                <span class="item-accent">Core i7</span>
                                            </div>
                                            <div class="product-info-characteristics-descr">
                                                <span class="item">Объем SSD: </span>
                                                <span class="item-accent">512 ГБ</span>
                                            </div>
                                            <div class="product-info-characteristics-all">
                                                Все технические характеристики
                                            </div>
                                        </div>
                                        <p class="product-info-descr">
                                            Сайт носит информационный характер и не является публичной офертой.
                                            Характеристики и
                                            комплектация могут изменяться производителем без предупреждения.
                                            Интернет-магазин не
                                            несет ответственности за частичное несоответсвие характеристик и фото, указанных
                                            на
                                            нашем сайте, с действительными. Просьба уточнять характеристики у менеджеров
                                            компании. Все цены с учетом НДС.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="product-actions bg mobile-hide">
                            <div class="product-actions-id">Код: ID79342</div>
                            <div class="product-actions-price">
                                Цена
                                <div class="prices">
                                    <div class="old">314 990 ₸</div>
                                    <div class="new">279 990 ₸</div>
                                </div>
                            </div>
                            <div class="product-actions-count">
                                Количество
                                <div class="counter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M7.5 2.5H22.5C25.2614 2.5 27.5 4.73858 27.5 7.5V22.5C27.5 25.2614 25.2614 27.5 22.5 27.5H7.5C4.73858 27.5 2.5 25.2614 2.5 22.5V7.5C2.5 4.73858 4.73858 2.5 7.5 2.5ZM24.7097 24.7097C25.2958 24.1237 25.625 23.3288 25.625 22.5V7.5C25.625 6.6712 25.2958 5.87634 24.7097 5.29029C24.1237 4.70424 23.3288 4.375 22.5 4.375H7.5C5.77411 4.375 4.375 5.77411 4.375 7.5V22.5C4.375 23.3288 4.70424 24.1237 5.29029 24.7097C5.87634 25.2958 6.6712 25.625 7.5 25.625H22.5C23.3288 25.625 24.1237 25.2958 24.7097 24.7097Z"
                                            fill="black" />
                                        <path
                                            d="M20.3 14.0625H9.7C9.18223 14.0625 8.7625 14.4822 8.7625 15C8.7625 15.5178 9.18223 15.9375 9.7 15.9375H20.3C20.8178 15.9375 21.2375 15.5178 21.2375 15C21.2375 14.4822 20.8178 14.0625 20.3 14.0625Z"
                                            fill="black" />
                                    </svg>
                                    <input type="number" value="1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M7.5 2.5H22.5C25.2614 2.5 27.5 4.73858 27.5 7.5V22.5C27.5 25.2614 25.2614 27.5 22.5 27.5H7.5C4.73858 27.5 2.5 25.2614 2.5 22.5V7.5C2.5 4.73858 4.73858 2.5 7.5 2.5ZM24.6302 24.6302C25.1951 24.0652 25.5125 23.299 25.5125 22.5V7.5C25.5125 6.70104 25.1951 5.93479 24.6302 5.36984C24.0652 4.80489 23.299 4.4875 22.5 4.4875H7.5C5.83624 4.4875 4.4875 5.83624 4.4875 7.5V22.5C4.4875 23.299 4.80489 24.0652 5.36984 24.6302C5.9348 25.1951 6.70104 25.5125 7.5 25.5125H22.5C23.299 25.5125 24.0652 25.1951 24.6302 24.6302Z"
                                            fill="black" />
                                        <path
                                            d="M20 14.0625H15.9375V10C15.9375 9.48223 15.5178 9.0625 15 9.0625C14.4822 9.0625 14.0625 9.48223 14.0625 10V14.0625H10C9.48223 14.0625 9.0625 14.4822 9.0625 15C9.0625 15.5178 9.48223 15.9375 10 15.9375H14.0625V20C14.0625 20.5178 14.4822 20.9375 15 20.9375C15.5178 20.9375 15.9375 20.5178 15.9375 20V15.9375H20C20.5178 15.9375 20.9375 15.5178 20.9375 15C20.9375 14.4822 20.5178 14.0625 20 14.0625Z"
                                            fill="black" />
                                    </svg>
                                </div>
                            </div>
                            <div class="product-actions-info">
                                <div>
                                    <DeliveryIcon :width="24" :height="24" />
                                    Доставка: завтра
                                </div>
                                <div>
                                    <PackIcon :width="24" :height="24" />
                                    Есть на складе
                                </div>
                            </div>
                            <div class="product-actions-btns">
                                <button class="btn product-actions-btn">Добавить в корзину</button>
                                <button class="favorite">
                                    <FavoriteIcon :width="24" :height="24" fill="none" stroke="#3ab54a" />
                                </button>
                            </div>
                        </div>
                        <div class="product-btns bg" :style="{ marginTop: 24 + 'px' }">
                            <Button fz="16px" color="#7f7f7f" border_color="#7f7f7f">
                                Получить скидку
                            </Button>
                            <Button fz="16px" mt="8px" color="#7f7f7f" border_color="#7f7f7f">
                                Задать вопрос
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="product-tabs">
            <div class="container">
                <Tabs>
                    <tab label="Описание">
                        <p>
                            <b>
                                Ноутбук Lenovo Thinkpad E15 15,6*FHD/Ryzen 5-5625U/8Gb/512Gb/Win11 pro (21ED003MRT)
                            </b>
                        </p>
                        <p>Ноутбук ThinkPad E15 может работать целый день без подзарядки, поэтому вы не будете привязаны к
                            своему рабочему столу. А с помощью технологии быстрой зарядки аккумулятор можно зарядить на 80 %
                            всего за час — например, во время обеда. Работайте в любое время и в любом месте!</p>
                        <div class="row" :style="{ marginTop: 30 + 'px' }">
                            <div class="col-xl-6 product-characteristic" v-for="item in 18">
                                <div>Диагональ дисплея, дюйм:</div>
                                <div>15.6</div>
                            </div>
                        </div>
                    </tab>
                    <tab label="Доставка и оплата">
                        <p>Самовывоз – получение товара в офисе компании, в течение 2-х дней после подтверждения заказа
                            обслуживающим менеджером.</p>
                        <p>Курьерская доставка по Алматы – доставка осуществляется по адресу указанному при оформлении
                            заказа,
                            заранее оговаривается время и день доставки в рамках рабочего дня (с 08-00 до 17-00) , в том
                            числе и
                            в день оформления заказа, при наличии свободных курьеров. Стандартный срок доставки 2-3 рабочих
                            дня.
                            Стоимость ДОСТАВКИ по городу Алматы 1000 тг при заказе до 100 000тг , свыше 100 000тг доставка
                            БЕСПЛАТНАЯ. Стандартный срок ДОСТАВКИ два - три рабочих дня.</p>
                        <p>
                            Курьерская доставка по Казахстану – доставка осуществляется по указанному в заказе адресу, по
                            принципу «от двери до двери» во все регионы Казахстана через транспортную компанию «DPD
                            Казахстан».
                            Подробнее с ТАРИФАМИ на перевозку Вы можете ознакомиться ПРОЙДЯ ПО ССЫЛКЕ :
                            https://www.dpd.kz/services/
                        </p>
                        <p>Наличный расчет : Оплата производится в национальной валюте Тенге. По факту оплаты мы выдаем
                            товарный чек и все необходимые бухгалтерские документы, подтверждающие факт покупки товара.
                        </p>
                        <p>Оплата на счет компании через сервис KASPI : Данный способ оплаты возможен с помощью мобильного
                            приложения Kaspi. Менеджеры нашей компании высылают счет либо QR код с расчетного счета Kaspi
                            оформленного на нашу компанию. Счет либо QR автоматически определяется у покупателя в приложении
                            Kaspi. Далее покупатель производит оплату удобным для него способом.</p>
                        <p> Безналичный расчет: Данный способ оплаты осуществляется на основании выставленного счета на
                            оплату
                            после предоставления клиентом реквизитов.</p>
                    </tab>
                    <tab label="Гарантия и возврат">
                        <p>Наша компания гарантирует обмен / возврат товара надлежащего качества в течение 14 календарных
                            дней с момента покупки, если он не был в употреблении, сохранены его товарный вид,
                            потребительские свойства, упаковка, пломбы, ярлыки (статья 30 пункт 1 закона РК «О защите прав
                            потребителя»).</p>
                        <p>
                            Возврат/обмен товара надлежащего качества осуществляется при предоставлении клиентом следующих
                            документов:
                        </p>
                        <p>
                            1. Кассовый чек и другие документы, подтверждающий покупку в магазине;
                        </p>
                        <p>
                            2. Заявление покупателя на возврат/обмен товара на имя директора магазина с указанием причины
                            возврата/обмена;
                        </p>
                        <p>
                            3. Гарантийный талон (если предусмотрен). Возврат/обмен товара ненадлежащего качества
                            (подразумевается товар, который неисправен и не может обеспечить исполнение своих функциональных
                            качеств) осуществляется при предоставлении клиентом следующих документов: (статья 30 пункт 2
                            закона РК «О защите прав потребителя»)
                        </p>
                        <p>
                            4. Акт от Авторизованного сервисного центра с подтверждением заявленного дефекта и отсутствием
                            нарушений правил эксплуатации;
                        </p>
                        <p>
                            5. Заключение организации, имеющей право на оказание услуг по независимой экспертизе (наличие
                            номера лицензии обязательно). Возврату/обмену не подлежат: Товары надлежащего качества, которые
                            были в употреблении (статья 30 пункт 1 закона РК «О защите прав потребителя»).
                        </p>
                    </tab>
                </Tabs>
            </div>
        </section>

        <HomeProducts title="Похожие товары" />
        <Recently title="Просмотренные товары" />
    </main>
</template>

<script>
export default {
    name: 'ProductView',
    components: {
        StarRating: () => import('vue-star-rating'),
        DeliveryIcon: () => import('@/components/icons/DeliveryIcon.vue'),
        PackIcon: () => import('@/components/icons/PackIcon.vue'),
        Tabs: () => import('@/components/Tabs/Tabs.vue'),
        Tab: () => import('@/components/Tabs/Tab.vue'),
        FavoriteIcon: () => import('@/components/icons/FavoriteIcon.vue'),
        Button: () => import('@/components/Button.vue'),
        HomeProducts: () => import('../Home/HomeProducts.vue'),
        Recently: () => import('../Layouts/Recently.vue'),

    },
    data() {
        return {
            pageProductName: this.$route.params.product,
        }
    },
    methods: {
        getPreviousPageName() {
            if (this.$router.history.current.matched.length > 1) {
                const previousRoute = this.$router.history.current.matched[
                    this.$router.history.current.matched.length - 2
                ];
                return previousRoute.name;
            } else {
                return 'Нет предыдущей страницы';
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.product-characteristic {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    div {
        color: $dark-grey;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        &:last-child {
            font-weight: 700;
            color: $black;
        }
    }
}

.product-tabs {
    margin-top: 70px;
}

.product-actions {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-id {
        color: $dark-grey;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding-bottom: 11px;
        border-bottom: 1px solid $grey;
    }

    &-price,
    &-count {
        font-size: 24px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-price {
        .prices {
            display: flex;
            gap: 8px;
            align-items: flex-end;

            .old {
                font-size: 18px;
                font-weight: 300;
                color: $dark-grey;
                text-decoration: line-through;
                line-height: 1;
            }

            .new {
                font-size: 24px;
                font-weight: 700;
                color: $green;
                line-height: 1;
            }
        }
    }

    &-info {
        display: flex;
        gap: 8px;
        flex-direction: column;

        div {
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 14px;
        }
    }

    &-btns {
        display: flex;
        gap: 8px;

        .favorite {
            width: 45px;
            border: 1px solid $green;
            background-color: unset;
            border-radius: $radius;
            flex: 1 0 auto;
            transition: $transition;

            &:hover {
                background-color: $green;

                svg {
                    fill: $red
                }
            }

            &.active {
                background-color: $green;

                svg {
                    fill: $red;

                    path {
                        stroke: $red
                    }
                }
            }
        }
    }

    &-btn {
        width: 100%;
        height: 45px;
    }
}

.product-info {
    .bg {
        background-color: $white;
        border-radius: $radius;
        padding: 16px;
    }

    &-articul {
        color: $dark-grey;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 18px;
    }

    &-name {
        color: $black;
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 30px;
    }

    &-images {
        position: relative;

        &-labels {
            position: absolute;
            top: 16px;
            left: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        &-label {
            padding: 4px 16px;
            border-radius: $radius;
            color: $white;
            font-size: 14px;
            font-weight: 400;

            &.red {
                background-color: $red;
            }

            &.green {
                background-color: $green
            }
        }

        &-main {
            border: 1px solid $grey;
            border-radius: $radius;
            width: 100%;
            padding: 8px;

            img {
                max-width: 400px;
                width: 100%;
                max-height: 400px;
                height: 100%;
                object-fit: contain;
            }
        }
    }

    &-thumbnails {
        display: flex;
        gap: 20px;
        align-items: center;
        margin-top: 20px;
    }

    &-thumbnail {
        max-width: 100px;
        width: 100%;
        max-height: 100%;
        height: 100%;
        border-radius: $radius;
        border: 1px solid $grey;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
        }
    }

    &-stars {
        margin-bottom: 24px;
    }

    &-characteristics {
        &-title {
            color: $black;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 26px;
        }

        &-descr {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .item {
                font-size: 16px;
                font-weight: 400;
                margin-bottom: 8px;

                &-accent {
                    font-weight: 700;
                    font-size: 18px;
                    color: $green;
                }
            }
        }

        &-all {
            color: $green;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin-top: 44px;
            cursor: pointer
        }
    }

    &-descr {
        display: block;
        color: $dark-grey;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        margin-bottom: 0;
        position: absolute;
        bottom: 0
    }

    &-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
    }
}

@media (max-width: 1400px) {
    .product-info {
        &-descr {
            font-size: 12px;
            line-height: 120%;
        }
    }
}

@media (max-width: 1199px) {
    .product-info {
        .bg {
            padding: 16px;
        }

        &-articul {
            margin-bottom: 16px;
        }

        &-name {
            font-size: 16px;
        }

        &-images {

            &-labels {
                top: 10px;
                left: 10px;
            }

            &-label {
                padding: 2px 8px;
                font-size: 12px;
                font-weight: 300;
            }

            &-main {

                img {
                    display: block;
                    margin: 0 auto;
                }
            }
        }

        &-thumbnails {
            display: flex;
            gap: 5px;
            align-items: center;
            margin-top: 5px;
            margin-bottom: 30px;
        }

        &-thumbnail {
            max-width: 100px;
            width: 100%;
            max-height: 100%;
            height: 100%;
            border-radius: $radius;
            border: 1px solid $grey;
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
            }
        }

        &-stars {
            margin-bottom: 24px;
        }

        &-characteristics {
            &-title {
                font-size: 18px;
            }

            &-descr {
                gap: 8px;

                .item {
                    font-size: 14px;
                    margin-bottom: 0;

                    &-accent {
                        font-size: 16px;
                    }
                }
            }

            &-all {
                margin-top: 16px;
            }
        }

        &-descr {
            position: unset;
            margin-top: 30px;
        }
    }

    .product-actions {
        gap: 14px;
        margin-bottom: 30px;

        &-id {
            font-size: 12px;
            padding-bottom: 10px;
        }

        &-price,
        &-count {
            font-size: 18px;
        }

        &-price {
            .prices {
                gap: 5px;

                .old {
                    font-size: 16px;
                }

                .new {
                    font-size: 20px;
                }
            }
        }

        &-info {
            gap: 4px;

            div {
                gap: 5px;
            }
        }

        &-btns {

            .favorite {
                width: 45px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;
                transition: $transition;
            }
        }
    }

    .product-characteristic {

        div {
            font-size: 14px;
        }
    }
}
</style>