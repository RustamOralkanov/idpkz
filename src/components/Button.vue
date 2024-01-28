<template>
    <div class="idp-btn" :style="buttonStyles">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        bg: String,
        color: String,
        fz: String,
        width: String,
        mt: String,
        border_color: String,
        border_width: String,
    },
    computed: {
        buttonStyles() {
            return {
                backgroundColor: this.bg,
                color: this.color,
                fontSize: this.fz,
                width: this.width,
                marginTop: this.mt,
                borderColor: this.border_color,
                borderWidth: this.border_width,
            };
        },
    },
}
</script>

<style lang="scss" scoped>
.idp-btn {
    border-radius: $radius;
    background: unset;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $grey;
    cursor: pointer
}
</style>