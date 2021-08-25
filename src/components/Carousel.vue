<template>
    <div class="carousel" >
        <transition-group :name="transitionName" tag="div" class="carousel__container">
            <div :key="currentSlide" class="carousel__slides-container">
                <div v-for="item in displayedCards"  :key="item.index" class="carousel__card-container">
                    <slot :item="item"/>
                </div>
            </div>
        </transition-group>

        <div class="carousel__controls">
            <button class="button" @click="slide(-1)"><i class="fas fa-arrow-left fa-1x" /></button>
            <div v-for="nSlide in getNumberOfSlides" :key="nSlide">
                <button
                        class="button"
                        @click="slideTo(nSlide - 1)"
                        v-bind:class="{'button--active': currentSlide === nSlide - 1}">

                    {{nSlide}}
                </button>
            </div>
            <button class="button" @click="slide(1)"><i class="fas fa-arrow-right fa-1x" /></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        props: {
            items: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                direction : 1,
                currentSlide: 0,
                transitionName: "fade",
                nItemsBySlide: 3
            }
        },
        created() {
            window.addEventListener('resize', this.setnItemsBySlide);
            this.setnItemsBySlide();
        },
        destroyed() {
            window.removeEventListener('resize', this.setnItemsBySlide);
        },
        computed: {
            displayedCards () {
                return this.items.slice(this.currentSlide * this.nItemsBySlide, (this.currentSlide * this.nItemsBySlide) + this.nItemsBySlide);
            },
            getNumberOfSlides() {
                return Math.ceil(this.items.length / this.nItemsBySlide);
            }
        },
        methods: {
            slide(dir) {
                dir === 1 ? (this.transitionName = "slide-next") : (this.transitionName = "slide-prev");
                let nSlides = Math.ceil(this.items.length / this.nItemsBySlide);
                this.currentSlide = ((this.currentSlide + dir) % nSlides + nSlides) % nSlides;
                let test = this.nItemsBySlide;
                console.log(test);
            },
            slideTo(n) {
                this.transitionName = "slide-next";
                this.currentSlide = n;
            },
            setnItemsBySlide() {
                if (window.innerWidth < 768) {
                    this.nItemsBySlide = 1;
                    this.currentSlide = 0;
                } else if (window.innerWidth < 1024) {
                    this.nItemsBySlide = 2;
                    this.currentSlide = 0;
                } else {
                    this.nItemsBySlide = 3;
                    this.currentSlide = 0;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .carousel {
        display: flex;
        flex-direction: column;
        overflow: hidden;

        width: 100%;
        gap: 20px;

        &__container {
            display: flex;
            position: relative;
            width: 100%;

        }

        &__slides-container {
            max-height: 100%;
            width: 100%;
            transition: max-height 0.5s ease-in-out;
            position: relative;
            gap: 20px;
            flex: 0 0 auto;

            display: flex;

        }

        &__controls {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }
    }

    .button {
        cursor: pointer;
        width: 36px;
        height: 36px;
        border: 1px solid $color-text;
        border-radius: 4px;

        &:hover {
            opacity: 0.7;
        }

        font: {
            family: $font-family-secondary;
            size: $font-size-xs;
            weight: 400;
        }
        color: $color-text;

        &--active {
            background-color: $color-primary;
            color: $color-background-secondary;
            border: none;
        }
    }

    .carousel__card-container {
        max-width: 500px;
        
        @media (max-width: 768px) {
            max-width: 100%;
        }
    }

    /*------------------------*/
    /* TRANSITIONS */
    .slide-next-enter-active, .slide-next-leave-active {
        transition: transform 0.5s ease-in-out;
    }

    .slide-next-enter-to {
        transform: translate(-100%);
    }

    .slide-next-enter {
        transform: translate(-200%);
    }

    .slide-next-leave-to {
        transform: translate(100%);
    }

    .slide-prev-enter-active, .slide-prev-leave-active {
        transition: transform 0.5s ease-in-out;
    }

    .slide-prev-enter-to {
        transform: translate(-100%);
    }

    .slide-prev-enter {
        transform: translate(0);
    }

    .slide-prev-leave-to {
        transform: translate(-100%);
    }
    /*------------------------*/
</style>