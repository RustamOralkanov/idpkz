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

@media (max-width: 767px) {
    .category-wrapper {
        gap: 10px;

        .card {
            width: calc(33% - 6px) !important;
        }
    }
}

@media (max-width: 576px) {
    .category-wrapper {
        gap: 10px;

        .card {
            width: 100% !important;
        }
    }
}
</style>