<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 32 32" :fill="fill">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M28 11.3334C28 19.6592 16.0005 26.6667 16.0005 26.6667C16.0005 26.6667 4 19.5556 4 11.3502C4 8.00004 6.66667 5.33337 10 5.33337C13.3333 5.33337 16 9.33337 16 9.33337C16 9.33337 18.6667 5.33337 22 5.33337C25.3333 5.33337 28 8.00004 28 11.3334Z"
            :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>

<script>
export default {
    name: 'FavoriteIcon',
    props: {
        width: {
            type: Number,
            default: 32
        },
        height: {
            type: Number,
            default: 32
        },
        fill: {
            type: String,
            default: 'black'
        },
        stroke: {
            type: String,
            default: 'black'
        }
    }
}
</script>

<style lang="scss" scoped></style>