<template>
    <aside class="filter">
        <CategoryFilterItem v-for="(item, index) in 10" :key="index" :id="index" />
        <Button border_width="1px" border_color="#cd412c" mt="32px" color="#cd412c" fz="18px">Сбросить фильтр</Button>
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
</style>