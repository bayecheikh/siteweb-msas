<template>
    <div class="home-page-wrapper bg-grey">
        <HeaderWithTopbar/>
        <HeroSlider />
        <FinancementParRegion />
        <IndicateurFinancement />
        <FinancementGlobal />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            HeroSlider: () => import('@/components/sliders/HeroSlider'),
            FinancementParRegion : () => import('@/components/sections/FinancementParRegion'),
            IndicateurFinancement : () => import('@/components/sections/IndicateurFinancement'),
            FinancementGlobal : () => import('@/components/sections/FinancementGlobal'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                title: 'Ministère de la santé et de l\'action sociale'
            }
        },
    };
</script>


