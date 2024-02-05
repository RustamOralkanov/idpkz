<template>
    <nav aria-label="pagination" class="pagination">
        <ArrowBtnPrev color="#333333" />
        <ul class="pagination-list">
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
        </ul>
        <ArrowBtnNext :reversed="true" color="#333333" />
    </nav>
</template>

<script>
import ArrowBtnNext from './ArrowBtnNext.vue';
import ArrowBtnPrev from './ArrowBtnPrev.vue';

export default {
    name: "Pagination",
    components: { ArrowBtnPrev, ArrowBtnNext }
}
</script>

<style lang="scss" scoped>
.pagination {
    background-color: $white;
    border-radius: $radius;
    padding: 16px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-list {
        list-style: none;
        display: flex;
        gap: 10px;
        padding-left: 0;
        margin-bottom: 0;

        .page-item {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid $black;
            border-radius: $radius;
            transition: $transition;

            &:hover {
                border: 1px solid $green;
                background-color: $green;

                .page-link {
                    color: $white;
                }
            }

            &.active {
                border: 1px solid $green;
                background-color: $green;

                .page-link {
                    color: $white;
                }
            }
        }

        .page-link {
            padding: 0;
            margin: 0;
            border: unset;
            color: $black;
            font-size: 16px;
            font-weight: 700;
            border-radius: 0;
            background-color: unset;
        }
    }

    .btn {
        background-color: unset;
        border: 1px solid $black;

        svg {
            fill: $black;
        }
    }
}

@media (max-width: 991px) {
    .pagination {
        padding: 10px;
        margin-top: 24px;

        &-list {
            gap: 5px;

            .page-item {
                width: 30px;
                height: 30px;
            }

            .page-link {
                font-size: 14px;
            }
        }
    }
}
</style>