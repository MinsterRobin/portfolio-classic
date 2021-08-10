<template>
    <div class="blog-card">

        <div class="blog-card__picture" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/' + image + '') + ')' }"/>
        <div class="blog-card__content">
            <p class="blog-card__text blog-card__text--h2">Blog</p>
            <p class="blog-card__text blog-card__text--h1">{{title}}</p>
            <p class="blog-card__text">{{description}}</p>
            <a class="blog-card__link" v-bind:href="link">{{link}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogCard",
        props: {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .blog-card {
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        padding: 20px;
        background-color: $color-background-secondary;
        border-radius: 12px;
        gap: 30px;

        &__picture {
            flex: 1;
            min-width: 250px;
            min-height: 250px;
            height: auto;
            width: 100%;
            background-size: cover;
            background-position: center;

            border-radius: 12px;
        }

        &__content {
            flex: 1;
            min-width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 20px;
        }

        &__text {
            font: {
                size: $font-size-m;
                weight: 500
            };
            color: $color-text-secondary;

            &--h1 {
                font-size: $font-size-xl;
                color: $color-text;
            }


            &--h2 {
                color: #E0E0E0;
                font-size: $font-size-m;
                font-weight: 500;
            }
        }

        &__link {
            font: {
                weight: 500;
                size: $font-size-m;
            }
            color: $color-primary;
            text-decoration: none;
            justify-self: flex-end;
        }
    }
</style>