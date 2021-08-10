<template>
    <div class="hobbies-card">
        <p class="hobbies-card__title">Hobbies</p>
        <div class="hobbies-card__content">
            <Hobbie
                image="gaming.jpg"
                title="Gaming"
                description="Quisque feugiat malesuada molestie."
            />
            <Hobbie
                    image="cooking.jpg"
                    title="Cooking"
                    description="Quisque feugiat malesuada molestie."
            />
            <Hobbie
                    image="biking.jpg"
                    title="Biking"
                    description="Quisque feugiat malesuada molestie."
            />
        </div>
    </div>
</template>

<script>
    import Hobbie from "@/components/Hobbie";
    export default {
        name: "HobbiesCard",
        components: {Hobbie}
    }
</script>

<style lang="scss" scoped>
    .hobbies-card {
        @extend %card;
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 100%;

        &__title {
            width: max-content;
            font: {
                weight: 500;
                size: $font-size-xl;
            }
        }

        &__content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 60px;
        }
    }
</style>