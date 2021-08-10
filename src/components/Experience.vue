<template>
    <div class="experience">
        <img class="experience__logo" v-bind:src="require('@/assets/' + logo)" alt="Experience logo">
        <div class="experience__description">
            <p class="experience__text experience__text--date">{{date}}</p>
            <p class="experience__text experience__text--title">{{title}}</p>
            <p class="experience__text">{{description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Experience",
        props: {
            logo: {
                type: String,
                required: true
            },
            date: {
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
    .experience {
        flex: 1;
        display: flex;
        min-width: 250px;

        gap: 20px;
        flex-wrap: wrap;

        &__logo {
            width: 84px;
            height: 84px;
            object-fit: contain;
        }

        &__description {
            flex: 2;
        }

        &__text {
            font: {
                weight: 500;
                size: $font-size-m;
            }

            color: $color-text-secondary;

            &--date {
                font-size: $font-size-s;
            }

            &--title {
                font-weight: 600;
                color: $color-text-tertiary;
                margin-top: 12px;
                margin-bottom: 33px;
            }
        }
    }
</style>