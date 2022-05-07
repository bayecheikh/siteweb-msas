<template>   
    <div class="bg-white">
        <div class="container bg-white">
        <div class="row align-items-start pt-30 pb-30 d-flex justify-content-start">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <p class="card-title text-blue custom-title">Les indicateurs du financement de la Santé</p>
            </div>
        </div>
        <div class="container">
            <div class="row align-items-start d-flex pb-10">
                <div class="col-md-3 col-lg-3 col-sm-12 custom-card-box border-right">
                    <div class="box d-flex flex-column align-items-start">
                        <p class="card-title text-blue">MOBILISATION DES RESSOURCES</p>
                        <p>Elle est un processus intégré comprenant la planification stratégique pour absorber les écarts de financement, l’identification des opportunités sur la base d’une analyse de l’environnement externe et des capacités internes</p>
                        <a class="btn btn-outline-primary custom-text-btn" href="#">Lire plus</a>
                    </div>
                </div>
                <div class="col-md-9 col-lg-9 col-sm-12 custom-card-box custom-bg-grey">
                    <div class="box d-flex flex-column align-items-start">
                        <BarChart :data="barChartData" :options="barChartOptions" :styles="{height: '250px', position: 'relative',width:'100%'}"/>
                    </div>                       
                </div>

            </div>
            
        </div>
        
    </div>           
    </div>    
</template>

<script>
import BarChart from "~/components/BarChart.vue";
    export default {
        components: { BarChart },
        mounted: function() {
            //this.getListMission()
        },
        computed:{
            styles: function(){
                return {
                    'left':this.x+'px',
                    'top':this.y-70+'px'
                }
            }
        },
        data() {
            return {
                siteUrl:process.env.siteUrl,
                missions: [],
                barChartData: {
                    labels: ["Etat", "PTF", "Collectivités territoriales(CT)","ONG et associations","Secteur privé sanitaire","Secteur privé non sanitaire"
                    ],
                    datasets: [
                        {
                            label: "Mobilisation",
                            backgroundColor: "#0034CC",
                            data: [3,7,4,4,5,6]
                        },
                        {
                            label: "Engagement",
                            backgroundColor: "#60C3FF",
                            data: [4,3,4,3,4,6]
                        }
                    ]
                },
                barChartOptions: {
                   scales: {
                        yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true
                        }
                        }],
                        xAxes: [{
                        gridLines: {
                            display: false
                        }
                        }]
                    },
                    legend: {
                        display: true
                    },
                    responsive: true,
                    maintainAspectRatio: false
                },
            }
        },

        methods: {
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
        }
    };
</script>
<style scoped>
path {
  fill: #ffffff;
  cursor: pointer;
  -webkit-transition: all 150ms;
  -moz-transition: all 150ms;
  -o-transition: all 150ms;
  transition: all 150ms;
}
path:hover {
  opacity: 0.85;
}
.lan {
  fill-opacity: 1;
  stroke: rgb(0, 0, 0);
  stroke-opacity: 1;
  stroke-miterlimit:22.926;
  stroke-width: 0.5;
}

.description {
  pointer-events: none;
  position: absolute;
  font-size: 18px;
  text-align: center;
  background: rgba(255, 255, 255, 0.795);
  padding: 50px;
  padding-top: 15px;
  z-index: 5;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  color: #21669e;
  border-radius: 5px;
  box-shadow: 0 0 0 1px #eee;
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.description.active {
  display: block;
}
.description:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  width: 0;
  height: 0;
  margin-left: -10px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid white;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 1em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.custom-text-btn{
    font-size: 14px !important;
}
.custom-card-box {
  border: solid 2px #99A9B4;
  padding: 27px;
  max-height: 100%;
}
.border-right {
  border-right: 1px;
}
.box{
    width: 100%;
}
.custom-bg-grey{
  background-color: #F2F2F2;
}
.custom-section{
    background-color: #EEF3FB;
}
.bg-white{
    background-color: #fff;
}
</style>
