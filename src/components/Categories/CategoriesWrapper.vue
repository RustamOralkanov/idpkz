<template>
    <div class="categories-wrapper">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'CategoriesWrapper'
}
</script>

<style lang="scss" scoped>
.categories-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 40px;
}

@media (max-width: 576px) {
    .categories-wrapper {
        gap: 8px;
    }
}
</style>