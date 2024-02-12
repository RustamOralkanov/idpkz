import { defineStore } from "pinia";

export const useFooterStore = defineStore("footer", {
    state: () => {
        return {
            contacts: {
                title: "Контакты",
                address: "г.Алматы, Макатаева 117 А, БЦ 'Лотос' 519 офис",
                phone: "+7 (727) 313 21 30",
                mail_one: "shop@idp.kz",
                mail_two: "zakaz@idp.kz",
            },
            socials: {
                facebook:
                    "https://www.facebook.com/pages/IDP-KAZAKHSTAN/419380921867778",
                vk: "https://vk.com/idpkz",
                twitter: "https://twitter.com/IDPartners1",
            },
            navigation: {
                title: "Навигация",
                links: [
                    {
                        name: "Главная",
                        link: "/",
                    },
                    {
                        name: "Доставка и оплата",
                        link: "/page/delivery",
                    },
                    {
                        name: "Гарантия и возврат",
                        link: "/page/guarantee",
                    },
                    {
                        name: "Юридическим лицам",
                        link: "/page/legal",
                    },
                    {
                        name: "Распродажа",
                        link: "/page/sale",
                    },
                    {
                        name: "Контакты",
                        link: "/page/contacts",
                    },
                ],
            },
            useful: {
                title: "Полезное",
                links: [
                    {
                        name: "Товары в сравнении",
                        link: "/",
                    },
                    {
                        name: "Избранные товары",
                        link: "/favorite",
                    },
                    {
                        name: "Новости",
                        link: "/news",
                    },
                    {
                        name: "Авторизация лицам",
                        link: "/auth",
                    },
                ],
            },
            copyright: {
                text: "Сайт носит информационный характер и не является публичной офертой. Характеристики и комплектация могут изменяться производителем без предупреждения. Интернет-магазин не несет ответственности за частичное несоответсвие характеристик и фото, указанных на нашем сайте, с действительными. Просьба уточнять характеристики у менеджеров компании. Все цены с учетом НДС.",
            },
        };
    },
});
