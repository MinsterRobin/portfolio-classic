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
                    <p class="profil__text--light">billy@example.com</p>
                    <p class="profil__text--light">(+603) 546 624 342</p>
                </div>
            </div>

            <p class="profil__text--light">Self-motivated developer, who is willing to learn and create outstanding UI applications.
                <br><br>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Profil"
    }
</script>

<style lang="scss" scoped>
    .tamere {
        height: 100%;
    }
    .profil {
        display: flex;
        background-color: $color-background-secondary;
        border-radius: 12px;
        gap: 20px;
        flex-wrap: wrap;
        padding: 20px;


        &__picture {
            min-width: 220px;
            min-height: 220px;
            max-height: 300px;
            max-width: 300px;
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
        }
    }

</style>