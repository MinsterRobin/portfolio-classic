<template>
    <div class="skill-level">
        <p class="skill-level__label">{{label}}</p>
        <div class="skill-level__bar-container">
            <div class="skill-level__bar-progress" v-bind:style="{width: lvl + '%'}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SkillLevel",
        props: {
            label: {
                type: String,
                required: true
            },
            lvl: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .skill-level {
        display: flex;
        align-items: center;
        gap: 20px;
        width: auto;
        min-width: 0;

        &__label {
            font: {
                weight: 500;
                size: $font-size-m;
            }
            color: $color-text;
            flex: 1;
        }

        &__bar-container {
            position: relative;
            background-color: #C4C4C4;
            height: 9px;
            border-radius: 12px;
            width: 100%;
            flex: 2;
        }

        &__bar-progress {
            background-color: $color-primary;
            height: 9px;
            border-radius: 12px;
        }
    }
</style>