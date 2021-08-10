<template>
    <div class="skill-card">
        <p class="skill-card__title">{{title}}</p>
        <div class="skill-card__skills-layout">
            <div v-for="skill in skills" :key="skill.index">
                <SkillLevel v-bind:label="skill.label" v-bind:lvl="skill.lvl"/>
            </div>
        </div>
    </div>
</template>

<script>
    import SkillLevel from "@/components/SkillLevel";
    export default {
        name: "SkillsCard",
        components: {SkillLevel},
        props: {
            title: {
                type: String,
                required: true
            },
            skills: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .skill-card {
        display: flex;
        flex-direction: column;
        gap: 15px;

        @extend %card;

        &__title {
            text-transform: uppercase;
            font: {
                weight: 700;
                size: $font-size-l;
            }
            color: $color-text;
            width: max-content;
        }

        &__skills-layout {
            display: flex;
            gap: 15px;
            flex-direction: column;
            flex-wrap: wrap;
            height: 100%;
            min-height: 0;
            min-width: 0;
            width: auto;
        }
    }
</style>