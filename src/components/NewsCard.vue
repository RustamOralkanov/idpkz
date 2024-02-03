<template>
    <div class="card news">
        <div class="news-img">
            <img :src="img.length === 0 ? imageNotFound : img" :alt="title" />
            <span class="news-img-label">
                {{ date }}
            </span>
        </div>
        <div class="news-body">
            <a :href="link" class="news-title">
                {{ title }}
            </a>
            <p class="news-descr">
                {{ description }}
            </p>
            <a :href="link" class="news-btn btn">Узнать больше</a>
        </div>
    </div>
</template>

<script>
import noImage from '@/assets/images/no-image.png'

export default {
    name: 'NewsCard',
    components: {},
    props: {
        date: {
            type: String,
            default: '14.10.2023'
        },
        title: {
            type: String,
            default: 'Title'
        },
        description: {
            type: String,
            default: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis consequuntur ab, velit tempora quibusdam cumque explicabo ullam aliquam eius corporis, fugit eligendi voluptate accusantium, esse voluptatum aperiam sunt porro pariatur!'
        },
        link: {
            type: String,
            default: '#'
        },
        img: {
            type: String,
            default: noImage
        }
    },
    data() {
        return {
            imageNotFound: noImage
        }
    }
}
</script>

<style lang="scss" scoped>
.news {
    width: 309px !important;

    &-img {
        height: 170px;
        width: 100%;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &-label {
            background-color: $green;
            position: absolute;
            bottom: 0;
            left: 0;
            color: $white;
            font-size: 12px;
            line-height: 1;
            padding: 4px 16px;
            border-radius: 0 7px 0 0;
        }
    }

    &-body {
        padding: 16px;
    }

    &-title {
        color: $black;
        font-size: 18px;
        font-weight: 700;
        line-height: 18px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 16px;
    }

    &-descr {
        color: $black;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 24px;
    }

    &-btn {
        font-size: 14px;
    }
}

@media (max-width: 1400px) {
    .news {
        width: 264px !important;
    }
}

@media (max-width: 1200px) {
    .news {
        width: 298px !important;
    }
}

@media (max-width: 991px) {
    .news {
        width: 217px !important;

        &-img {
            height: 130px;
            width: 100%;
            position: relative;

            &-label {
                font-size: 10px;
            }
        }

        &-body {
            padding: 10px;
        }

        &-title {
            color: $black;
            font-size: 14px;
            -webkit-line-clamp: 2;
            height: 36px;
        }

        &-descr {
            height: 67px;
            line-height: 13px;
            margin-bottom: 16px;
        }

        &-btn {
            font-size: 12px;
            font-weight: 400;
            width: 100%;
        }
    }
}

@media (max-width: 767px) {
    .news {
        width: 253px !important;
    }
}

@media (max-width: 576px) {
    .news {
        width: 178px !important;
    }
}
</style>