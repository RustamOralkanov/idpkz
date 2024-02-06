<template>
    <aside class="filter">
        <div class="filter-wrapper">
            <div class="filter-top">
                <h3 class="filter-top-title">Все фильтры</h3>
                <button class="filter-top-btn">
                    <CancelIcon :width="24" :height="24" fill="#7F7F7F" />
                </button>
            </div>
            <CategoryFilterItem v-for="(item, index) in 10" :key="index" :id="index" />
            <Button border_width="1px" border_color="#cd412c" mt="32px" color="#cd412c" fz="18px">Сбросить фильтр</Button>
        </div>
    </aside>
</template>

<script>
import CancelIcon from '../icons/CancelIcon.vue';

export default {
    name: "CategoryFilter",
    components: {
        CategoryFilterItem: () => import('@/components/Category/CategoryFilterItem.vue'),
        Button: () => import('@/components/Button.vue'),
        CancelIcon
    }
}
</script>

<style lang="scss" scoped>
.filter {
    padding: 16px;
    background-color: $white;
    border-radius: $radius;
    border: unset;

    &-top {
        display: none;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;

        &-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 0;
            text-transform: uppercase;
            color: $green;
        }

        &-btn {
            background-color: $grey;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: unset;
            border-radius: $radius;
            cursor: pointer;

            svg {
                flex: 0 0 auto
            }
        }
    }
}

@media (max-width: 1199px) {
    .filter {
        border-radius: 0;

        &-wrapper {
            padding: 112px 0 80px;
        }

        &-top {
            display: flex;
        }
    }
}
</style>