<template>
    <div class="slider-area nav-style-1" id="accueil">
        <swiper :options="swiperOption" class="row">
            <swiper-slide class="single-slider col-12 bg-green bg-slide-1">
                    <div class="row d-flex">
                        <div class="col-lg-5 col-md-5 col-sm-12 custom-container pt-100 pb-100">
                            <!-- <div class="slider-animation-1">
                                <p class="custom-title-slider">{{item.title}}</p>
                                <hr class="custom-hr">
                                <p class="custom-text-slider">
                                    {{item.body}}
                                </p>
                                <div class="slider-btn btn-hover">
                                    <n-link :to="item.field_url">EN SAVOIR</n-link>
                                </div>
                            </div> -->
                            <div class="slider-animation-1">
                                <p class="custom-title-slider">Le financement de la santé, Une priorité pour tous les acteurs</p>
                                <hr class="custom-hr bg-white">
                                <p class="custom-text-slider">
                                    C’est l’apport de ressources financières aux prestataires pour leur permettre de se procurer les ressources réelles nécessaires à la production des soins et des services ou en d’autres termes, c’est l’apport d’argent destiné à financer les activités du secteur sanitaire
                                </p>
                                <div class="slider-btn">
                                    <a @click.prevent="goToSection('indicateurs')" href="/">EN SAVOIR</a>
                                </div>
                            </div>
                        </div>
                        <div class="bg-slide-1-1 col-lg-7 col-md-7 col-sm-12 m-0 p-0" >
                        </div>
                    </div>
            </swiper-slide>
           
            <!-- Swiper Navigation Start -->
            <div class="hero-slider-nav swiper-button-prev custom-nav">
                <i class="pe-7s-angle-left"></i>
            </div>
            <div class="hero-slider-nav swiper-button-next custom-nav">
                <i class="pe-7s-angle-right"></i>
            </div>
            <!-- Swiper Navigation End -->
        </swiper>
    </div>
</template>

<script>
    export default {
        mounted: function() {
            //this.getListSlider()
        },
        methods: {
            getListSlider(){
                this.progress=true
                this.$axios.$get('/api/sliders?_format=json')
                .then(async (response) => {
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données Reçu ++++++: ', response)
                    this.sliders = response

                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    console.log('Requette envoyé ')
                });
            },
            goToSection(value) {
                document.getElementById(value).scrollIntoView({
                    behavior: "smooth",
                    top:8
                });
            },
        },
        data() {
            return {
                sliders:[],
                swiperOption: {
                    loop: true,
                    speed: 750,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    autoplay: {
                        delay: 6000
                    },
                    effect: "fade",
                    fadeEffect: { 
                        crossFade: true 
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                }
            }
        },
    };
</script>
<style scoped>

</style>