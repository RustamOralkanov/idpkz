<template>
    <div class="banners-button-prev btn" :style="{ transform: reversed ? 'rotate(180deg)' : '' }" @click="handleClick">
        <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 24"
            :fill="color ? color : 'none'">
            <path
                d="M10.9498 19.5201C11.0931 19.6553 11.2828 19.7304 11.4798 19.7301C11.6761 19.7318 11.8643 19.6521 11.9998 19.5101C12.1428 19.3708 12.2234 19.1797 12.2234 18.9801C12.2234 18.7805 12.1428 18.5894 11.9998 18.4501L6.29975 12.75H19.52C19.9342 12.75 20.27 12.4142 20.27 12C20.27 11.5858 19.9342 11.25 19.52 11.25H6.29756L12.0098 5.52006C12.1528 5.38077 12.2334 5.18965 12.2334 4.99006C12.2334 4.79048 12.1528 4.59935 12.0098 4.46006C11.717 4.16761 11.2426 4.16761 10.9498 4.46006L3.94981 11.4601C3.65736 11.7529 3.65736 12.2272 3.94981 12.5201L10.9498 19.5201Z"
                :fill="color ? color : 'white'" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'ArrowBtnPrev',
    props: {
        width: {
            type: Number,
            default: 24
        },
        height: {
            type: Number,
            default: 24
        },
        reversed: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
        }
    },
    methods: {
        handleClick() {
            this.$emit('nextClicked');
        },
    }
}
</script>

<style lang="scss" scoped>
.banners-button {

    &-prev,
    &-next {
        width: 40px;
        height: 40px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 8;
    }
}

@media (max-width: 991px) {
    .banners-button {

        &-prev,
        &-next {
            width: 30px;
            height: 30px;
        }
    }
}
</style>