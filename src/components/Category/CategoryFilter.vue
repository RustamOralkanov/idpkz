<template>
    <aside class="filter">
        <div class="filter-wrapper">
            <CategoryFilterItem v-for="(item, index) in 10" :key="index" :id="index" />
            <Button border_width="1px" border_color="#cd412c" mt="32px" color="#cd412c" fz="18px">Сбросить фильтр</Button>
        </div>
    </aside>
</template>

<script>
export default {
    name: "CategoryFilter",
    components: {
        CategoryFilterItem: () => import('@/components/Category/CategoryFilterItem.vue'),
        Button: () => import('@/components/Button.vue')
    }
}
</script>

<style lang="scss" scoped>
.filter {
    padding: 16px;
    background-color: $white;
    border-radius: $radius;
    border: unset;
}

@media (max-width: 1199px) {
    .filter {
        border-radius: 0;

        &-wrapper {
            padding: 80px 0 80px;
        }
    }
}
</style>