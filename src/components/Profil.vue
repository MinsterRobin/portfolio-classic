<template>
    <div class="profil">
        <img class="profil__picture" v-bind:src="require('@/assets/profil-picture.jpg')" alt="Profil Picture">

        <div class="profil__infos">
            <div class="profil__contact">
                <div>
                    <p class="profil__text">Billy Pearson</p>
                    <p class="profil__text--light">Front-end developer</p>
                </div>

                <div>
                    <p class="profil__text--light"><i class="fas fa-envelope fa-1x" /> billy@example.com</p>
                    <p class="profil__text--light"><i class="fas fa-phone fa-1x" /> (+603) 546 624 342</p>
                </div>
            </div>

            <p class="profil__text--light">Self-motivated developer, who is willing to learn and create outstanding UI applications.
                <br><br>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.Self-motivated developer, who is willing to learn and create outstanding UI applications.

                Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Profil"
    }
</script>

<style lang="scss" scoped>

    .profil {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;

        @extend %card;

        &__picture {
            min-width: 220px;
            min-height: 220px;
            max-height: 250px;
            max-width: 250px;
            height: 100%;
            border-radius: 12px;
            border: solid $color-primary 3px;
            flex: 1;
            align-self: center;
        }

        &__infos {
            display: flex;
            flex-direction: column;
            gap: 35px;
            min-width: 250px;
            flex: 3;
        }

        &__contact {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
        }

        &__text {
            font: {
                size: $font-size-xl;
                weight: 600;
            }
        }

        &__text--light {
            font: {
                size: $font-size-l;
                weight: 500;
            }
            color: $color-text-secondary;

            > i {
                margin-right: 15px;
            }
        }
    }

</style>