<template>
    <ul>
        <li v-for='(link, i) in menus' :key='i'>
            <a @click.prevent="goToSection(link.idSection)" :href="link.url">{{ link.title }}<i :class="link.submenu && 'fa fa-angle-down'"></i></a>
            <ul class="mega-menu mega-menu-padding row" v-if="link.submenu">
                <li v-for='(link, i) in link.submenu' :key='i' >
                    <a :href="link.url" v-if="!link.submenu">{{ link.title }}<i :class="link.submenu && 'fa fa-angle-down'"></i></a>
                    <ul v-if="link.submenu">
                        <li class="mega-menu-title">
                            <a :href="link.url">{{ link.title }}</a>
                        </li>
                        <li v-for='(link, i) in link.submenu' :key='i'>
                            <a :href="link.url">{{ link.title }}</a>
                        </li>
                    </ul>
                </li>
            </ul>  
        </li>       
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                menus: [
                    {
                        url: '/',
                        title: 'Accueil',
                        idSection: 'accueil',
                    },
                    {
                        url: '/',
                        title: 'Financement',
                        idSection: 'financements',
                    },
                    
                    {
                        url: '/',
                        title: 'Dimensions',
                        idSection: 'dimensionsdelasante',
                    },
                    {
                        url: '/',
                        title: 'Indicateurs',
                        idSection: 'indicateurs',
                    },
                    
                    
                    
                ]
            }
        },
        mounted() {
            let getSiblings = function (e) {
                let siblings = []; 
                if(!e.parentNode) {
                    return siblings;
                }
                let sibling  = e.parentNode.firstChild;
                while (sibling) {
                    if (sibling.nodeType === 1 && sibling !== e) {
                        siblings.push(sibling);
                    }
                    sibling = sibling.nextSibling;
                }
                return siblings;
            };

            const subMenuToggle = document.querySelectorAll('.submenu-toggle');
            subMenuToggle.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    if(!this.classList.contains('active')) {
                        this.classList.add('active')
                        this.nextElementSibling.classList.add('active')
                        this.closest('li').classList.add('active')
                        getSiblings(this.closest('li')).forEach(function(item) {
                            item.classList.remove('active')
                            item.querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child) {
                                child.classList.remove('active')
                            })
                        })
                    } else {
                        this.closest('li').classList.remove('active')
                        this.closest('li').querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child) {
                            child.classList.remove('active')
                        })
                    }
                })
            })
        },
        methods: {
            goToSection(value) {
                document.getElementById(value).scrollIntoView({
                    behavior: "smooth",
                    top:8
                });
            }
        }
    }
</script>
<style scoped>

</style>