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
            ProductWrapper: () => import('@/components/product/ProductWrapper'),
            BlogWrapper: () => import('@/components/BlogWrapper'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                title: 'Agence cadre de vie'
            }
        },
    };
</script>


