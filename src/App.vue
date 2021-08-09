<template>
    <div class="container">
        <Portfolio />
    </div>
</template>

<script>

import Portfolio from "@/views/Portfolio";
export default {
    name: 'App',
    components: {
        Portfolio,
    }
}
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "scss/main";
</style>
