<template>
    <div class="hobbie">
        <div class="hobbie__image" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/' + image + '') + ')' }"/>
        <p class="hobbie__text--title">{{title}}</p>
        <p class="hobbie__text">{{description}}</p>
    </div>
</template>

<script>
    export default {
        name: "Hobbie",
        props: {
            image: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
        }
    }
</script>

<style lang="scss" scoped>
    .hobbie {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;

        &__image {
            flex: 1;
            min-width: 250px;
            min-height: 140px;
            width: 100%;
            background-size: cover;
            background-position: center;
            margin-bottom: 16px;

            border-radius: 12px;
        }

        &__text {
            font: {
                weight: 500;
                size: $font-size-m;
            }
            color: $color-text-secondary;

            &--title {
                font: {
                    weight: 600;
                    size: $font-size-l;
                }
                color: $color-text-tertiary;
            }
        }
    }
</style>