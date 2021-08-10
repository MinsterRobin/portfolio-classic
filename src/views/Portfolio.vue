<template>
    <div class="layout">
        <Profil/>
        <SkillsCard v-bind:title="skillsCards[0].title" v-bind:skills="skillsCards[0].skills"/>
        <BlogCard
                image="blog.jpg"
                title="How to organize your CSS"
                description="In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
                            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
                link="dev.to"/>
        <ExperiencesCard />
    </div>
</template>

<script>
    import Profil from "@/components/Profil";
    import SkillsCard from "@/components/SkillsCard";
    import BlogCard from "@/components/BlogCard";
    import ExperiencesCard from "@/components/ExperiencesCard";

    export default {
        name: "Portfolio",
        components: {ExperiencesCard, BlogCard, SkillsCard, Profil},
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 280px;
        gap: 20px;
    }

</style>