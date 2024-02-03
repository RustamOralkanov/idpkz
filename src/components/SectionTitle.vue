<template>
    <h2 class="cards-title">{{ title }}</h2>
</template>

<script>
export default {
    name: 'CardsTitle',
    props: {
        title: {
            type: String,
            required: true,
            default: 'Title'
        },
    },
}
</script>

<style lang="scss" scoped>
.cards {
    &-title {
        color: $black;
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 0;
    }
}

@media (max-width: 991px) {
    .cards {
        &-title {
            font-size: 18px;
        }
    }
}
</style>