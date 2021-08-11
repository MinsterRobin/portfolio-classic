<template>
    <div class="project">
        <div class="project__image" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/' + image ) + ')' }"/>
        <div class="project__description">
            <div class="project__tags">
                <div v-for="tag in tags" v-bind:key="tag.index">
                    <p class="project__text">#{{tag}}</p>
                </div>
            </div>
            <p class="project__text project__text--title">{{title}}</p>
            <p class="project__text">{{description}}</p>
            <div class="project__buttons">
                <button class="button">Demo</button>
                <button class="button button--outline">Code</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectCard",
        props: {
            title: {
                type: String,
                required: true
            },
            tags: {
                type: Array,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .project {
        @extend %card;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        width: 100%;

        &__image {
            flex: 1;
            min-width: 240px;
            min-height: 200px;
            width: 100%;
            height: auto;
            background-size: cover;
            background-position: center;

            border-radius: 12px;
        }

        &__description {
            flex: 4;
            min-width: 240px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        &__tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        &__text {
            color: $color-text-secondary;
            font: {
                weight: 500;
                size: $font-size-m;
            }

            &--title {
                color: $color-text-tertiary;
                font-size: $font-size-xl;
            }
        }

        &__buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;
        }
    }

    .button {
        background-color: $color-primary;
        color: $color-background-secondary;
        padding: 13px 40px;

        border: none;
        border-radius: $border-radius;

        font: {
            family: $font-family-primary;
            weight: 500;
            size: $font-size-l;
        }

        &--outline {
            background-color: $color-background-secondary;
            color: $color-primary;
            border: solid 1px $color-primary;
        }
    }
</style>