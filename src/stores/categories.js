import { defineStore } from "pinia";

import Smartphones from "@/assets/icons/smartphones.svg";
import Laptops from "@/assets/icons/laptops.svg";
import Tv from "@/assets/icons/tv.svg";
import Server from "@/assets/icons/server.svg";
import Household from "@/assets/icons/hometech.svg";
import SmallHousehold from "@/assets/icons/smallHousehold.svg";
import Accessories from "@/assets/icons/accessories.svg";
import TechSupply from "@/assets/icons/techsupply.svg";
import Security from "@/assets/icons/security.svg";

export const useCategoriesStore = defineStore(
    "categories",
    {
        state: () => {
            return {
                categories: [
                    {
                        id: 0,
                        title: "Смартфоны и гаджеты",
                        img: Smartphones,
                        subcategories: [
                            {
                                subtitle: "Смартфоны",
                                path: "/smartphones",
                            },
                            {
                                subtitle:
                                    "Аксессуары для смартфонов",
                                path: "/smartphone-accessories",
                            },
                            {
                                subtitle:
                                    "Игровые аксессуары",
                                path: "/gaming-accessories",
                            },
                            {
                                subtitle:
                                    "Чехлы для смартфонов",
                                path: "/smartphone-cases",
                            },
                            {
                                subtitle: "Защитные пленки",
                                path: "/screen-protectors",
                            },
                            {
                                subtitle:
                                    "Зарядные устройства",
                                path: "/chargers",
                            },
                            {
                                subtitle: "Наушники",
                                path: "/headphones",
                            },
                            {
                                subtitle:
                                    "Bluetooth-гарнитуры",
                                path: "/bluetooth-headsets",
                            },
                            {
                                subtitle: "Умные часы",
                                path: "/smartwatches",
                            },
                            {
                                subtitle:
                                    "Видеорегистраторы",
                                path: "/dash-cams",
                            },
                        ],
                    },
                    {
                        id: 1,
                        title: "Ноутбуки и компьютеры",
                        img: Laptops,
                        subcategories: [
                            {
                                subtitle: "Ноутбуки",
                                path: "/laptops",
                            },
                            {
                                subtitle:
                                    "Компьютерные комплектующие",
                                path: "/computer-components",
                            },
                            {
                                subtitle: "Мониторы",
                                path: "/monitors",
                            },
                            {
                                subtitle: "Видеокарты",
                                path: "/gpus",
                            },
                            {
                                subtitle:
                                    "Оперативная память",
                                path: "/ram",
                            },
                            {
                                subtitle: "Жесткие диски",
                                path: "/hard-drives",
                            },
                            {
                                subtitle: "SSD-накопители",
                                path: "/ssd-drives",
                            },
                            {
                                subtitle: "Процессоры",
                                path: "/processors",
                            },
                            {
                                subtitle:
                                    "Материнские платы",
                                path: "/motherboards",
                            },
                            {
                                subtitle: "Корпусы",
                                path: "/cases",
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Телевизоры, аудио и видео",
                        img: Tv,
                        subcategories: [
                            {
                                subtitle: "Телевизоры",
                                path: "/tvs",
                            },
                            {
                                subtitle: "Наушники",
                                path: "/headphones",
                            },
                            {
                                subtitle: "Игровые консоли",
                                path: "/gaming-consoles",
                            },
                            {
                                subtitle:
                                    "Акустические системы",
                                path: "/speakers",
                            },
                            {
                                subtitle: "Усилители",
                                path: "/amplifiers",
                            },
                            {
                                subtitle: "Проигрыватели",
                                path: "/players",
                            },
                            {
                                subtitle: "Ресиверы",
                                path: "/receivers",
                            },
                            {
                                subtitle: "Проекторы",
                                path: "/projectors",
                            },
                            {
                                subtitle:
                                    "Кабели и адаптеры",
                                path: "/cables-adapters",
                            },
                            {
                                subtitle: "Диктофоны",
                                path: "/voice-recorders",
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: "Серверное оборудование",
                        img: Server,
                        subcategories: [
                            {
                                subtitle:
                                    "Серверные стойки",
                                path: "/server-racks",
                            },
                            {
                                subtitle: "Серверы",
                                path: "/servers",
                            },
                            {
                                subtitle: "Хранение данных",
                                path: "/data-storage",
                            },
                            {
                                subtitle:
                                    "Сетевое оборудование",
                                path: "/network-equipment",
                            },
                            {
                                subtitle:
                                    "Источники бесперебойного питания",
                                path: "/ups",
                            },
                            {
                                subtitle:
                                    "Системы хранения",
                                path: "/storage-systems",
                            },
                            {
                                subtitle:
                                    "Программное обеспечение",
                                path: "/software",
                            },
                            {
                                subtitle:
                                    "Серверные процессоры",
                                path: "/server-processors",
                            },
                            {
                                subtitle:
                                    "Серверные жесткие диски",
                                path: "/server-hard-drives",
                            },
                            {
                                subtitle:
                                    "Серверная память",
                                path: "/server-ram",
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: "Бытовая техника",
                        img: Household,
                        subcategories: [
                            {
                                subtitle: "Принтеры",
                                path: "/printers",
                            },
                            {
                                subtitle: "Пылесосы",
                                path: "/vacuum-cleaners",
                            },
                            {
                                subtitle: "Холодильники",
                                path: "/refrigerators",
                            },
                            {
                                subtitle:
                                    "Стиральные машины",
                                path: "/washing-machines",
                            },
                            {
                                subtitle:
                                    "Микроволновые печи",
                                path: "/microwaves",
                            },
                            {
                                subtitle:
                                    "Кофеварки и чайники",
                                path: "/coffee-makers-kettles",
                            },
                            {
                                subtitle: "Кухонные плиты",
                                path: "/cookers",
                            },
                            {
                                subtitle:
                                    "Климатическая техника",
                                path: "/climate-equipment",
                            },
                            {
                                subtitle:
                                    "Мелкая бытовая техника",
                                path: "/small-household-appliances",
                            },
                            {
                                subtitle: "Утюги",
                                path: "/irons",
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: "Мелкобытовая техника",
                        img: SmallHousehold,
                        subcategories: [
                            {
                                subtitle:
                                    "Электронные книги",
                                path: "/ebook-readers",
                            },
                            {
                                subtitle: "Фотоаппараты",
                                path: "/cameras",
                            },
                            {
                                subtitle: "Видеокамеры",
                                path: "/video-cameras",
                            },
                            {
                                subtitle: "Аудиорекордеры",
                                path: "/audio-recorders",
                            },
                            {
                                subtitle: "Наушники",
                                path: "/headphones",
                            },
                            {
                                subtitle:
                                    "Портативные колонки",
                                path: "/portable-speakers",
                            },
                            {
                                subtitle: "Экшн-камеры",
                                path: "/action-cameras",
                            },
                            {
                                subtitle: "Гироскутеры",
                                path: "/hoverboards",
                            },
                            {
                                subtitle: "Электросамокаты",
                                path: "/electric-scooters",
                            },
                            {
                                subtitle: "Умные очки",
                                path: "/smart-glasses",
                            },
                        ],
                    },
                    {
                        id: 6,
                        title: "Комплектующие",
                        img: Accessories,
                        subcategories: [
                            {
                                subtitle:
                                    "Компьютерные комплектующие",
                                path: "/computer-components",
                            },
                            {
                                subtitle:
                                    "Игровые аксессуары",
                                path: "/gaming-accessories",
                            },
                            {
                                subtitle:
                                    "Аксессуары для смартфонов",
                                path: "/smartphone-accessories",
                            },
                            {
                                subtitle:
                                    "Зарядные устройства",
                                path: "/chargers",
                            },
                            {
                                subtitle:
                                    "Кабели и адаптеры",
                                path: "/cables-adapters",
                            },
                            {
                                subtitle: "Сумки и рюкзаки",
                                path: "/bags-backpacks",
                            },
                            {
                                subtitle:
                                    "Геймерская периферия",
                                path: "/gaming-peripherals",
                            },
                            {
                                subtitle: "Наушники",
                                path: "/headphones",
                            },
                            {
                                subtitle:
                                    "Чехлы и защитные пленки",
                                path: "/cases-screen-protectors",
                            },
                            {
                                subtitle:
                                    "Стойки и держатели",
                                path: "/stands-holders",
                            },
                        ],
                    },
                    {
                        id: 7,
                        title: "Электронное оборудование",
                        img: TechSupply,
                        subcategories: [
                            {
                                subtitle: "Мониторы",
                                path: "/monitors",
                            },
                            {
                                subtitle: "Видеокарты",
                                path: "/gpus",
                            },
                            {
                                subtitle: "Процессоры",
                                path: "/processors",
                            },
                            {
                                subtitle:
                                    "Сетевое оборудование",
                                path: "/network-equipment",
                            },
                            {
                                subtitle: "Жесткие диски",
                                path: "/hard-drives",
                            },
                            {
                                subtitle: "SSD-накопители",
                                path: "/ssd-drives",
                            },
                            {
                                subtitle:
                                    "Оперативная память",
                                path: "/ram",
                            },
                            {
                                subtitle: "Корпусы",
                                path: "/cases",
                            },
                            {
                                subtitle: "Блоки питания",
                                path: "/power-supplies",
                            },
                            {
                                subtitle: "Звуковые карты",
                                path: "/sound-cards",
                            },
                        ],
                    },
                    {
                        id: 8,
                        title: "Системы безопасности",
                        img: Security,
                        subcategories: [
                            {
                                subtitle:
                                    "Камеры видеонаблюдения",
                                path: "/security-cameras",
                            },
                            {
                                subtitle: "Сигнализации",
                                path: "/alarms",
                            },
                            {
                                subtitle: "Замки и сейфы",
                                path: "/locks-safes",
                            },
                            {
                                subtitle: "Домофоны",
                                path: "/intercoms",
                            },
                            {
                                subtitle:
                                    "Охранная техника",
                                path: "/security-equipment",
                            },
                            {
                                subtitle:
                                    "Контроль доступа",
                                path: "/access-control",
                            },
                            {
                                subtitle: "Видеодомофоны",
                                path: "/video-intercoms",
                            },
                            {
                                subtitle:
                                    "Датчики безопасности",
                                path: "/security-sensors",
                            },
                            {
                                subtitle: "Интернет-камеры",
                                path: "/internet-cameras",
                            },
                            {
                                subtitle:
                                    "Охранное программное обеспечение",
                                path: "/security-software",
                            },
                        ],
                    },
                ],
            };
        },
    }
);
