<template>
    <ul>
        <li v-for='(link, i) in menus' :key='i'>
            <nuxt-link :to="link.url">{{ link.title }}<i :class="link.submenu && 'fa fa-angle-down'"></i></nuxt-link>
            <ul class="mega-menu mega-menu-padding row" v-if="link.submenu">
                <li v-for='(link, i) in link.submenu' :key='i' >
                    <nuxt-link :to="link.url" v-if="!link.submenu">{{ link.title }}<i :class="link.submenu && 'fa fa-angle-down'"></i></nuxt-link>
                    <ul v-if="link.submenu">
                        <li class="mega-menu-title">
                            <nuxt-link :to="link.url">{{ link.title }}</nuxt-link>
                        </li>
                        <li v-for='(link, i) in link.submenu' :key='i'>
                            <nuxt-link :to="link.url">{{ link.title }}</nuxt-link>
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
                        title: 'Accueil'
                    },
                    {
                        url: '/',
                        title: 'Financement'
                    },
                    {
                        url: '/',
                        title: 'Indicateurs'
                    }
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
        }
    }
</script>
<style scoped>
.main-menu nav ul li ul.mega-menu {
  margin-left: -100%;
}
</style>