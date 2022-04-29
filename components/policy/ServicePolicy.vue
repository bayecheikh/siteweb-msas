<template>

    <div class="">
        <div class="row align-items-center pt-30 pb-30 pl-100 d-flex justify-content-start">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <h1 class="card-title text-blue custom-title">Le Volume du Financement  par piliers et par région (en F.CFA)</h1>
            </div>
        </div>
        <div class="row align-items-start d-flex">
            <div class="col-lg-5 col-md-5 col-sm-12 mr-0 pr-0">
                <div class="custom-top-card pt-3 pb-3 pl-100">Tous les piliers : <span class="custom-chiffre">20 000 000 000</span></div>
                <ul class="list-group list-group-flush pl-100">
                    <li class="list-group-item pl-0">Gouvernance du systeme de santé</li>
                    <li class="list-group-item pl-0">Infrastructures et équipements</li>
                    <li class="list-group-item pl-0">Prestation de services</li>
                    <li class="list-group-item pl-0">Financement Santé Action sociale</li>
                    <li class="list-group-item pl-0">Gestion des produits de santé</li>
                    <li class="list-group-item pl-0">Ressources humaines en santé</li>
                    <li class="list-group-item pl-0">Gestion des ressources sanitaires</li>
                </ul>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-12 m-0 p-0 d-flex justify-content-center" style="background-color: #5e99f2;background-repeat: no-repeat; background-size: cover; min-height: 300px;">
                <img src="/img/senegal-svg-map.svg" height="400" alt="carte senegal">
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        mounted: function() {
            this.getListMission()
        },
        methods: {
            getUrlImage(url){
                return url.substring(str.indexOf('drupal-api') + 1);
            },
            getListMission(){
                this.progress=true
                this.$axios.$get('/api/missions?_format=json')
                .then(async (response) => {
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données Reçu ++++++: ', response)
                    this.missions = response

                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    console.log('Requette envoyé ')
                });
            }
        },
        data() {
            return {
                siteUrl:process.env.siteUrl,
                missions: []
            }
        },
    };
</script>
<style scoped>
.custom-title{
    font-weight: 600;
}
.custom-top-card{
  box-shadow: -3px 1px 11px -9px;
  margin-bottom: 10px;
}
</style>
