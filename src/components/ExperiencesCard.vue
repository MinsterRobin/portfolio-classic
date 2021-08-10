<template>
    <div class="experiences-card">
        <p class="experiences-card__title">Experiences</p>
        <div class="experiences-card__content">
            <Experience
                logo="logo-adidas.jpg"
                date="Feb 2017 - Current"
                title="Front-end developer"
                description="Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
            />
            <Experience
                logo="logo-h&m.png"
                date="Aug 2016 - Feb 2018"
                title="Full-stack developer"
                description="Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
            />
            <Experience
                logo="logo-nivea.png"
                date="Jun 2015 - Aug 2016"
                title="Junior front-end developer"
                description="Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
            />
        </div>
    </div>
</template>

<script>
    import Experience from "@/components/Experience";
    export default {
        name: "ExperiencesCard",
        components: {Experience}
    }
</script>

<style lang="scss" scoped>
    .experiences-card {
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
            gap: 30px;
        }
    }
</style>