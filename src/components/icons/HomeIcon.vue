
<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 25" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M12.4857 2.82894C12.2057 2.59088 11.7943 2.59088 11.5143 2.82894L4.51426 8.77894C4.51418 8.77901 4.5141 8.77908 4.51402 8.77915L1.51426 11.3289C1.19866 11.5972 1.16028 12.0705 1.42855 12.3861C1.69681 12.7017 2.17013 12.7401 2.48574 12.4718L4.25 10.9722V19.4004C4.25 20.3669 5.0335 21.1504 6 21.1504H18C18.9665 21.1504 19.75 20.3669 19.75 19.4004V10.9722L21.5143 12.4718C21.8299 12.7401 22.3032 12.7017 22.5715 12.3861C22.8397 12.0705 22.8013 11.5972 22.4857 11.3289L19.4857 8.77894L12.4857 2.82894ZM18.25 9.69722L12 4.38472L5.75 9.69722V19.4004C5.75 19.5385 5.86193 19.6504 6 19.6504H18C18.1381 19.6504 18.25 19.5385 18.25 19.4004V9.69722Z"
            :fill="fill" />
    </svg>
</template>

<script>
export default {
    name: 'HomeIcon',
    props: {
        width: {
            type: Number,
            default: 32
        },
        height: {
            type: Number,
            default: 32
        },
        fill: {
            type: String,
            default: 'black'
        },
        stroke: {
            type: String,
            default: 'black'
        }
    }
}
</script>