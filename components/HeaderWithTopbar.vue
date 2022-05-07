<template>
    <div class="bg-white">
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
                    <div class="row d-flex justify-content-between">
                        <div class="col-lg-2 col-md-2 col-sm-12">
                            <div class="logo">
                                <n-link to="/">
                                    <img src="/img/logo/logo.png" alt="flone logo">
                                </n-link>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-12 d-none d-lg-block">
                            <div class="main-menu">
                                <nav>
                                    <Navigation />
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-between align-items-center">
                            <button class="btn btn-outline-primary custom-btn-outline-primary mr-2">DEMANDE D'INFORMATION</button>
                            <button class="btn btn-primary custom-btn-primary">SE CONNECTER</button>
                        </div>
                        <div class="col-lg-1 col-md-1 col-sm-12">
                            <div class="header-right-wrap">
                                <div class="same-style mobile-menu-toggler d-block d-lg-none">
                                    <button class="mobile-aside-button" @click="navOpen = !navOpen">
                                        <i class="pe-7s-menu"></i>
                                    </button>
                                </div>
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
            Navigation: () => import("@/components/Navigation")
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
.custom-btn-outline-primary {
  color: #3378e1 !important;
  border-color: #3378e1 !important;
}
.custom-btn-outline-primary:hover {
  color: #fff !important;
  border-color: #3378e1 !important;
  background-color: #3378e1 !important;
}
.custom-btn-primary{
  color: #fff !important;
  border-color: #3378e1 !important;
  background-color: #3378e1 !important;
}
.custom-btn-primary:hover{
  color: #fff !important;
  border-color: #00173f !important;
  background-color: #00173f !important;
}
</style>