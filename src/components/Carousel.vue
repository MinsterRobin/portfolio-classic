<template>
    <div class="carousel" >
        <transition-group :name="transitionName" tag="div" class="carousel__container">
            <div :key="currentSlide" class="carousel__slides-container">
                <slot v-for="item in displayedCards" :item="item" class="carousel__card-container">

                </slot>
            </div>
        </transition-group>

        <div class="carousel__buttons">
            <button class="button" @click="slide(-1)">Prev</button>
            <div v-for="nSlide in getNumberOfSlides" :key="nSlide">
                <button @click="slideTo(nSlide - 1)">{{nSlide}}</button>
            </div>
            <button class="button" @click="slide(1)">Next</button>
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
                if (screen.width < 768) {
                    this.nItemsBySlide = 1;
                } else if (screen.width < 1024) {
                    this.nItemsBySlide = 2;
                } else {
                    this.nItemsBySlide = 3;
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
        min-height: 300px;

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
            justify-content: space-between;
            border: 1px solid;
        }

        &__buttons {
            display: flex;
        }
    }

    .button {
        position: relative;
        cursor: pointer;
    }

    /*------------------------*/
    /* TRANSITIONS */
    .slide-next-enter-active, .slide-next-leave-active {
        transition: transform 0.5s ease-in-out;
    }


    .slide-next-enter {
        transform: translate(100%);
    }
    .slide-next-enter-to {
        transform: translate(-100%);
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
    /*------------------------*/
</style>