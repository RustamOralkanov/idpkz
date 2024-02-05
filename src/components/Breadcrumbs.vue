<template>
    <ul class="breadcrumbs">
        <li class="breadcrumb">
            <router-link to="/">Главная</router-link>
        </li>

        <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb">
            <router-link :to="crumb.to">{{ crumb.label }}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Breadcrumbs',
    data() {
        return {
            breadcrumbs: [],
        };
    },
    watch: {
        $route: "updateBreadcrumbs",
    },
    created() {
        this.updateBreadcrumbs();
    },
    methods: {
        updateBreadcrumbs() {
            const matchedRoutes = this.$route.matched;

            this.breadcrumbs = matchedRoutes.map(route => {
                return {
                    label: route.meta.breadcrumb || route.name,
                    to: route.path,
                };
            });
        },
    },
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
    padding: 16px 0 30px;
    margin-bottom: 0;

    .router-link-active,
    span {
        color: $dark-grey;
        font-size: 12px;
        font-weight: 400;
    }

    .router-link-exact-active {
        font-weight: 700;
        color: $black;
    }
}

@media (max-width: 991px) {
    .breadcrumbs {
        padding: 16px 0;

        .router-link-active,
        span {
            font-size: 10px;
        }
    }
}
</style>