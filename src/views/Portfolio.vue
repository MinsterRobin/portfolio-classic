<template>
    <div class="layout">
        <Profil/>
        <SkillsCard v-bind:title="skillsCards[0].title" v-bind:skills="skillsCards[0].skills"/>
        <BlogCard image="blog.jpg" title="test" description="test" link="dev.to"/>
    </div>
</template>

<script>
    import Profil from "@/components/Profil";
    import SkillsCard from "@/components/SkillsCard";
    import BlogCard from "@/components/BlogCard";

    export default {
        name: "Portfolio",
        components: {BlogCard, SkillsCard, Profil},
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