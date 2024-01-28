<template>
    <div class="filter-item">
        <div class="filter-item-title" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapseExample-${id}`"
            aria-expanded="false" aria-controls="collapseExample">
            Цена
            <ChevronIcon />
        </div>

        <div class="collapse" :id="`collapseExample-${id}`">
            <div class="filter-item-body">
                <div class="input-group" v-for="(item, index) in 10">
                    <input type="checkbox" :name="`price-${index}-${id}`" :id="`price-${index}-${id}`">
                    <label :for="`price-${index}-${id}`">от 3000 до 9000 ₸ </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoryFilterItem',
    components: {
        ChevronIcon: () => import('@/components/icons/ChevronIcon.vue')
    },
    props: {
        id: {
            type: Number,
            required: true,
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.filter-item {
    border-bottom: 1px solid $dark-grey;

    &-title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        color: $black;
        font-size: 18px;
        font-weight: 700;
    }

    &-body {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 16px 0 24px;
        height: 200px;
        overflow: auto;

        .input-group {
            display: flex;
            align-items: center;
            gap: 10px;
            position: relative;

            input {
                width: 24px;
                height: 24px;
                border-radius: 0;

                &:checked+label::after {
                    background-color: $green;
                    background-image: url('@/assets/icons/check.svg');
                    background-size: 18px;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            }

            label {
                color: $black;
                font-size: 16px;
                font-weight: 400;

                &:after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 0;
                    display: block;
                    width: 24px;
                    height: 24px;
                    border: 1px solid $black;
                }
            }
        }
    }
}
</style>