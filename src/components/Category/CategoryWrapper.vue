<template>
    <div class="category-wrapper">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'CategoryWrapper'
}
</script>

<style lang="scss" scoped>
.category-wrapper {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    .card {
        width: calc(25% - 15px) !important;
    }
}
</style>