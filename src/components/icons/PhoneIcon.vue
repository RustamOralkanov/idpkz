<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 19 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M4.48801 1.28143L7.49993 4.47732C7.87318 4.87363 7.87344 5.49463 7.50052 5.89127L6.04455 7.43982C6.95876 10.2348 9.00325 12.4708 11.5944 13.5281L11.8845 13.6407L13.2646 12.1729C13.6523 11.7606 14.2985 11.7427 14.708 12.133L17.7199 15.3289C18.0931 15.7252 18.0934 16.3462 17.7205 16.7428L16.9715 17.5395C15.6035 18.9944 13.5203 19.4045 11.6906 18.5789C9.1042 17.412 7.01722 15.9857 5.42964 14.3C3.84206 12.6143 2.49814 10.3976 1.39787 7.65009C0.650623 5.78412 0.974729 3.66885 2.21213 2.21538L2.37155 2.03721L3.04467 1.32128C3.43231 0.908989 4.07851 0.891147 4.48801 1.28143Z"
            :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>

<script>
export default {
    name: 'PhoneIcon',
    props: {
        width: {
            type: Number,
            default: 32
        },
        height: {
            type: Number,
            default: 32
        },
        stroke: {
            type: String,
            default: 'black'
        }
    }
}
</script>

<style lang="scss" scoped></style>