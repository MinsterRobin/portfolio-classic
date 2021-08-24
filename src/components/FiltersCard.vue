<template>
    <div class="filters">
        <p class="filters__text">{{title}} ({{nItems}})</p>
        <div class="filters__buttons">
            <div v-for="filter in filters" :key="filter.index">
                <button
                    class="button"
                    v-on:click="setFilter(filter)"
                    v-bind:class="{'button--active': getFilter === filter}"
                    >{{filter}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { store, mutations } from '@/store.js'

    export default {
        name: "FiltersCard",
        props: {
            title: {
                type: String,
                required: true
            },
            nItems: {
                type: Number
            },
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
        background-color: $color-background-secondary;
        color: $color-text;
        border: solid 1px $color-text;
        padding: 8px 22px;
        border-radius: $border-radius;
        cursor: pointer;

        font: {
            family: $font-family-primary;
            weight: 500;
            size: $font-size-l;
        }

        &--active {
            background-color: $color-primary;
            color: $color-background-secondary;
            border: none;
        }

    }
</style>