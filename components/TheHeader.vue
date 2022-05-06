<template>
    <div>
        <header class="header-area header-padding-1 sticky-bar header-res-padding clearfix" :class="{'is-sticky': isSticky}">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-2 col-md-6 col-4">
                        <div class="logo">
                            <n-link to="/">
                                <img src="/img/logo/logo.png" alt="logo">
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
                    <div class="col-lg-2 col-md-6 col-8">
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
        </header>
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @toggleAsideMenu="navOpen = !navOpen" v-if="navOpen" />
    </div>
</template>

<script>
    export default {
        components: {
            Navigation: () => import("@/components/Navigation")
        },

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
        }
    };
</script>
