<template>
    <div class="carousel" >
        <transition-group :name="transitionName" tag="div" class="carousel__container">
            <div :key="currentSlide" class="carousel__slides-container">
                <div v-for="slide in displayedCards" v-bind:key="slide.index" class="carousel__card-container">
                    <div class="carousel__card"
                         :class="slide.className"
                    >
                        Coucou {{slide.className}}
                    </div>
                </div>
            </div>
        </transition-group>

        <button class="button" @click="slide(-1)">Prev</button>
        <button class="button" @click="slide(1)">Next</button>
        <div v-for="nSlide in getNumberOfSlides" :key="nSlide">
            <button @click="slideTo(nSlide - 1)">{{nSlide}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        data() {
            return {
                direction : 1,
                currentSlide: 0,
                transitionName: "fade",
                nItemsBySlide: 3,
                slides: [
                    { className: "blue" },
                    { className: "red" },
                    { className: "yellow" },
                    { className: "green"},
                    { className: "black"},
                    { className: "grey"},
                    { className: "black"},
                    { className: "grey"}
                ]
            }
        },
        computed: {
            displayedCards () {
                return this.slides.slice(this.currentSlide * this.nItemsBySlide, (this.currentSlide * this.nItemsBySlide) + this.nItemsBySlide);
            },
            getNumberOfSlides() {
                return Math.ceil(this.slides.length / this.nItemsBySlide);
            }
        },
        methods: {
            slide(dir) {
                dir === 1 ? (this.transitionName = "slide-next") : (this.transitionName = "slide-prev");
                let nSlides = Math.ceil(this.slides.length / this.nItemsBySlide);
                this.currentSlide = ((this.currentSlide + dir) % nSlides);
            },
            slideTo(n) {
                this.transitionName = "slide-next";
                this.currentSlide = n;
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
        height: 500px;

        &__container {
            position: relative;
            height: 100%;
        }

        &__card-container {
            width: 100%;
            height: 100%;
        }

        &__card {
            @extend %card;
            color: white;
            width: 100%;
            height: 100%;
        }

        &__slides-container {
            width: 100%;
            height: 100%;
            position: absolute;

            display: flex;
            justify-content: space-between;
            border: 1px solid;
        }
    }

    .button {
        position: relative;
        cursor: pointer;
    }

    /* TRANSITIONS */
    .slide-next-enter-active, .slide-next-leave-active {
        transition: transform 0.5s ease-in-out;
    }

    .slide-next-enter {
        transform: translate(100%);
    }
    .slide-next-leave-to {
        transform: translate(-100%);
    }

    .slide-prev-enter-active, .slide-prev-leave-active {
        transition: transform 0.5s ease-in-out;
    }

    .slide-prev-enter {
        transform: translate(100%);
    }
    .slide-prev-leave-to {
        transform: translate(-100%);
    }

    .blue {
        background-color: blue;
    }

    .red {
        background-color: red;
    }

    .yellow {
        background-color: yellow;
    }

    .green {
        background-color: green;
    }

    .black {
        background-color: black;
    }

    .grey {
        background-color: grey;
    }
</style>