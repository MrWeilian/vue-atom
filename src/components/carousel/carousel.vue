<template>
    <Carousel v-model="value"
            :autoplay="autoplay"
            :dots="dots"
            :trigger="trigger"
            loop
            :autoplay-speed="5000">
        <slot></slot>
    </Carousel>
</template>
<script>
    export default {
        props: {
            autoplay: {
                type: Boolean,
                default: false
            },
            dots: {
                type: String,
                default: 'inside'
            },
            trigger: {
                type: String,
                default: 'click'
            }
        },
        data () {
            return {
                value: 0                
            }
        }
    }
</script>