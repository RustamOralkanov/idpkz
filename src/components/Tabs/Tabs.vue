
<template>
    <div class="tab-wrapper">
        <div class="tab-buttons">
            <button v-for="(tab, index) in tabs" :key="index" @click="changeTab(index)"
                :class="{ 'active': activeTab === index }">{{ tab.label }}</button>
        </div>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            activeTab: 0,
            tabs: [],
        };
    },
    methods: {
        changeTab(index) {
            this.activeTab = index;
        },
    },
    created() {
        this.tabs = this.$children;
    },
};
</script>
  
<style lang="scss" scoped>
.tab {
    &-wrapper {
        background-color: $white;
        border-radius: $radius;
        overflow: hidden;
    }

    &-buttons {
        display: flex;
        align-items: center;
        border-bottom: 1px solid $grey;

        button {
            width: 33.33%;
            padding: 14px 0;
            border: unset;
            background-color: unset;
            transition: $transition;
            font-size: 16px;
            font-weight: 400;

            &.active {
                background-color: $green;
                color: $white;
            }
        }
    }
}
</style>
  