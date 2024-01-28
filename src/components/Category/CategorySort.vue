<template>
    <div class="category-sort">
        <div class="category-sort-item">
            Сортировка по: <a class="category-sort-item-select" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                популярности
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="?price=min">цене</a></li>
                <li><a class="dropdown-item" href="#">рейтингу</a></li>
                <li><a class="dropdown-item" href="#">алфавиту</a></li>
            </ul>
        </div>
        <div class="category-sort-item">
            Показывать по:<a class="category-sort-item-select" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                12
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">24</a></li>
                <li><a class="dropdown-item" href="#">36</a></li>
                <li><a class="dropdown-item" href="#">48</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "CategorySort"
}
</script>

<style lang="scss" scoped>
.category-sort {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    &-item {
        position: relative;
        background-color: $white;
        border-radius: $radius;
        padding: 5px 16px;
        font-size: 16px;

        .dropdown-menu {
            border: unset;
            box-shadow: $shadow;

            &.show {
                transform: unset !important;
                width: 100%;
                top: 34px !important;
                z-index: 9 !important;
            }
        }

        &-select {
            color: $red;
            font-size: 16px;
            font-weight: 700;
            transition: $transition;

            &:focus {
                color: $yellow !important;
            }
        }
    }
}
</style>