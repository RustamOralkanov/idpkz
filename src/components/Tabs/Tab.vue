<!-- Tab.vue -->
<template>
    <div v-show="isActive" class="tab-body">
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
    },
    computed: {
        isActive() {
            return this.$parent.activeTab === this.index;
        },
        index() {
            return this.$parent.tabs.indexOf(this);
        },
    },
};
</script>

<style lang="scss" scoped>
.tab {
    &-body {
        padding: 30px;
    }
}

@media (max-width: 1199px) {
    .tab {
        &-body {
            p {
                font-size: 14px;
            }
        }
    }
}
</style>
  