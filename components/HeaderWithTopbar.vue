<template>
    <div>
        <header class="header-area">
            <div class="header-top-area header-padding-2 d-none d-lg-block custom-bg">
                <div class="container">
                    <div class="header-top-inner row">
                        <div class="col-10">
                            <p class="text-white">PLATEFORME NUMERIQUE DE SUIVI DU FINANCEMENT DE LA SANTE AU SENEGAL</p>
                        </div>
                        <div class="col-2 d-flex justify-content-between">
                            <span class="text-white">Nous suivre sur : </span>
                            <a href="#"><i class="fa fa-facebook text-white"></i></a>
                            <a href="#"><i class="fa fa-twitter text-white"></i></a>
                            <a href="#"><i class="fa fa-linkedin text-white"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-padding-1 sticky-bar header-res-padding clearfix" :class="{'is-sticky': isSticky}">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-6 col-4">
                            <div class="logo">
                                <n-link to="/">
                                    <img src="/img/logo/logo.png" alt="flone logo">
                                </n-link>
                            </div>
                        </div>
                        <div class="col-lg-8 d-none d-lg-block">
                            <div class="main-menu">
                                <nav>
                                    <Navigation />
                                </nav>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
        </header>
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @toggleAsideMenu="navOpen = !navOpen" v-if="navOpen" />
    </div>
</template>

<script>
    export default {
        components: {
            Navigation: () => import("@/components/Navigation"),
            MiniCart: () => import("@/components/MiniCart"),
        },

        props: ['containerClass'],

        computed: {
        },

        data() {
            return {
                isSticky: false,
                isOpenSearch: false,
                isOpenAccountSettings: false,
                openCart: false,
                navOpen: false
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scroll = window.scrollY
                if(scroll >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },
    };
</script>
<style scoped>
.header-top-area {
  border-bottom: 0px !important;
  background: #00173f !important;
}
.text-white{
    color: #fff;
}
</style>