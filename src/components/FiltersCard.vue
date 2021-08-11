<template>
    <div class="filters">
        <p class="filters__text">Projects</p>
        <div class="filters__buttons">
            <div v-for="filter in filters" :key="filter.index">
                <button
                    class="button"
                    v-on:click="setFilter(filter)"
                >

                    {{filter}}
                </button>
            </div>
            <p>{{getFilter}}</p>
        </div>
    </div>
</template>

<script>
    import { store, mutations } from '@/store.js'

    export default {
        name: "FiltersCard",
        props: {
            filters: {
                type: Array,
                required: true
            }
        },
        computed: {
          getFilter() {
              return store.filter;
          }
        },
        methods: {
            setFilter(filter) {
                mutations.setFilter(filter);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .filters {
        @extend %card;
        display: flex;
        flex-direction: column;
        gap: 16px;

        &__text {
            font: {
                weight: 500;
                size: $font-size-l;
            }
        }

        &__buttons {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }
    }

    .button {
        background-color: $color-primary;
        color: $color-background-secondary;
        padding: 8px 22px;

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