<template>
    <div class="portfolio">
        <Profil class="portfolio__profil"/>
        <SkillsCard class="portfolio__skills" v-bind:title="skillsCards[0].title" v-bind:skills="skillsCards[0].skills"/>
        <BlogCard
                class="portfolio__blog"
                image="blog.jpg"
                title="How to organize your CSS"
                description="In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
                            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
                link="dev.to"/>
        <HobbiesCard class="portfolio__hobbies"/>
        <ExperiencesCard class="portfolio__experiences"/>


        <FiltersCard class="portfolio__filters" title="Projects" :n-items="projects.length" :filters="filters"/>

        <Carousel class="portfolio__carousel" :items="getArrayFiltered(projects, getFilter)">
            <ProjectCard
                slot-scope="div"
                :image="div.item.image"
                :tags="div.item.tags"
                :title="div.item.title"
                :description="div.item.description"
            />
        </Carousel>
    </div>
</template>

<script>
    import Profil from "@/components/Profil";
    import SkillsCard from "@/components/SkillsCard";
    import BlogCard from "@/components/BlogCard";
    import ExperiencesCard from "@/components/ExperiencesCard";
    import HobbiesCard from "@/components/HobbiesCard";
    import ProjectCard from "@/components/ProjectCard";
    import FiltersCard from "@/components/FiltersCard";

    import {store} from '@/store.js'
    import Carousel from "@/components/Carousel";

    export default {
        name: "Portfolio",
        components: {Carousel, FiltersCard, ProjectCard, HobbiesCard, ExperiencesCard, BlogCard, SkillsCard, Profil},
        data() {
            return {
                skillsCards: [
                    {
                        title: "Front end",
                        skills: [
                            {
                                label: "React",
                                lvl: 70
                            },
                            {
                                label: "Javascript",
                                lvl: 90
                            },
                            {
                                label: "CSS",
                                lvl: 95
                            },
                            {
                                label: "Vue",
                                lvl: 65
                            },
                            {
                                label: "Redux",
                                lvl: 90
                            },
                            {
                                label: "React Native",
                                lvl: 95
                            }
                        ]
                    }
                ],
                projects: [
                    {
                        image: "cooking.jpg",
                        tags: ["HTML", "CSS", "responsive"],
                        title: "Recipe Blog",
                        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
                    },
                    {
                        image: "cooking.jpg",
                        tags: ["CSS", "responsive"],
                        title: "Recipe Blog",
                        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
                    },
                    {
                        image: "cooking.jpg",
                        tags: ["HTML", "responsive"],
                        title: "Recipe Blog",
                        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
                    },
                    {
                        image: "cooking.jpg",
                        tags: ["HTML", "CSS"],
                        title: "Recipe Blog",
                        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
                    }
                ],
                filters: ["ALL","HTML", "CSS", "responsive"]
            }
        },
        computed: {
            getFilter() {
                return store.filter;
            }
        },
        methods: {
            getArrayFiltered(array, filter) {
                if (filter === "ALL") {
                    return array;
                } else {
                    return  array.filter(item => item.tags.includes(filter));
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .portfolio {
        display: grid;
        grid-template:
                "a a a"
                "b c c"
                "d c c"
                "d e e"
                "f f f"
                "g g g";
        min-height: 100vh;
        min-width: 280px;
        gap: 20px;
        
        @media (max-width: 1024px) {
            grid-template:
                "a a"
                "b c"
                "d c"
                "e e"
                "f f"
                "g g";
        }

        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
        }

        &__profil {
            grid-area: a;
        }

        &__skills {
            grid-area: b;
        }

        &__blog {
            grid-area: d;
        }

        &__hobbies {
            grid-area: c;
        }

        &__experiences{
            grid-area: e;
        }

        &__filters {
            grid-area: f;
        }

        &__carousel {
            grid-area: g;
        }
    }

</style>