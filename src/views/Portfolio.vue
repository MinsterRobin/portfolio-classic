<template>
    <div class="portfolio">
        <Profil/>
        <SkillsCard v-bind:title="skillsCards[0].title" v-bind:skills="skillsCards[0].skills"/>
        <BlogCard
                image="blog.jpg"
                title="How to organize your CSS"
                description="In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
                            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
                link="dev.to"/>
        <ExperiencesCard />
        <HobbiesCard />

        <FiltersCard title="Projects" :n-items="projects.length" :filters="filters"/>
        <div class="portfolio__projects">
            <div class="portfolio__project-card-container" v-for="project in getArrayFiltered(projects, getFilter)" v-bind:key="project.index" >
                <ProjectCard
                    :image="project.image"
                    :tags="project.tags"
                    :title="project.title"
                    :description="project.description"
                />
            </div>
        </div>
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

    export default {
        name: "Portfolio",
        components: {FiltersCard, ProjectCard, HobbiesCard, ExperiencesCard, BlogCard, SkillsCard, Profil},
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
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 280px;
        gap: 20px;

        &__projects {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }

        &__project-card-container {
            flex-basis: 30%;
            flex-grow: 1;
        }
    }

</style>