<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="width" viewBox="0 0 100 100" fill="none">
        <path
            d="M37.2763 75.9775C35.8328 75.9765 34.4342 75.476 33.3179 74.5608L14.6513 59.2691C12.0989 57.0518 11.7725 53.2067 13.9148 50.5909C16.057 47.9751 19.891 47.5372 22.5679 49.6025L37.0263 61.4358L78.693 23.0608C80.2591 21.1986 82.7636 20.4146 85.112 21.0514C87.4604 21.6883 89.2257 23.6301 89.6365 26.0284C90.0473 28.4267 89.0289 30.8454 87.0263 32.2275L41.5263 74.3108C40.375 75.3896 38.854 75.9861 37.2763 75.9775Z"
            fill="#3AB54A" />
    </svg>
</template>

<script>
export default {
    name: "SuccessIcon",
    props: {
        width: {
            type: Number,
            default: 32
        },
        height: {
            type: Number,
            default: 32
        },
    }
}
</script>

<style lang="scss" scoped></style>