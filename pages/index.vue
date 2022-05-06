<template>
    <div class="home-page-wrapper">
        <HeaderWithTopbar/>
        <HeroSlider />
        <ServicePolicy />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            //TheHeader: () => import('@/components/TheHeader'),
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            HeroSlider: () => import('@/components/hero/HeroSlider'),
            ServicePolicy: () => import('@/components/policy/ServicePolicy'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                title: 'Ministère de la santé et de l\'action sociale'
            }
        },
    };
</script>


