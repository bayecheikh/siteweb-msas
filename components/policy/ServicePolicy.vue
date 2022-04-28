<template>
    <div class="support-area pt-60 pb-90">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <p class="card-title text-blue">Le Volume du Financement  par piliers et par région (en F.CFA)</p>
                    <div class="">
                        <p class="custom-title-slider">Le financement de la santé</p>
                        <hr class="custom-hr">
                        <p class="custom-text-slider">
                            C’est l’apport de ressources financières aux prestataires
                        </p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 m-0 p-0" style="background-image: url('/img/slider/slide1.png');background-repeat: no-repeat; background-size: cover; min-height: 300px;">
                </div>
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
.height-100{
    height: 100% !important;
    box-shadow: 0px -6px 22px 0 #e9ecef;
    padding: 14px;
}
.custom-title{
    font-weight: 600;
    color: #1f8389;
}
.custom-sub-title{
    font-weight: 500;
    color: #1f8389;
    font-size: 20px;
}
.text-blue {
    font-weight: 600;
    font-size: 17px;
    color: #3378e1;
}
</style>
