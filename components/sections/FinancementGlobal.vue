<template>   

    <div class="bg-blue">
        <div class="container">
            <div class="row align-items-start pt-30 pb-30 d-flex justify-content-start">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <p class="text-white custom-title">Le Volume du Financement  global par sources</p>
                </div>
            </div>
            <div class="container">
                <div class="row pb-25 d-flex justify-content-between">
                    <div class="bg-white mb-3 col-2 p-0">
                        <div class="card-header bg-white">Etat</div>
                        <div class="card-body">
                            <h5 class="card-title text-blue">12 000 000 000</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>    
                            </div>
                            <p>Mobilisation</p>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>    
                            </div>
                            <p>Engagement</p>
                        </div>
                    </div>
                    <div class="bg-white mb-3 col-2 p-0">
                        <div class="card-header bg-white">Collectivités Territoriales(CT)</div>
                        <div class="card-body">
                            <h5 class="card-title text-blue">6 000 000 000</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>    
                            </div>
                            <p>Mobilisation</p>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>    
                            </div>
                            <p>Engagement</p>
                        </div>
                    </div>
                    <div class="bg-white mb-3 col-2 p-0">
                        <div class="card-header bg-white">Secteur privé</div>
                        <div class="card-body">
                            <h5 class="card-title text-blue">3 000 000 000</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>    
                            </div>
                            <p>Mobilisation</p>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>    
                            </div>
                            <p>Engagement</p>
                        </div>
                    </div>
                    <div class="bg-white mb-3 col-2 p-0">
                        <div class="card-header bg-white">ONG et associations</div>
                        <div class="card-body">
                            <h5 class="card-title text-blue">2 500 000 000</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>    
                            </div>
                            <p>Mobilisation</p>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>    
                            </div>
                            <p>Engagement</p>
                        </div>
                    </div>
                    <div class="bg-white mb-3 col-2 p-0">
                        <div class="card-header bg-white">Partenaires techniques financiers(PTF)</div>
                        <div class="card-body">
                            <h5 class="card-title text-blue">9 600 000 000</h5>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>    
                            </div>
                            <p>Mobilisation</p>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>    
                            </div>
                            <p>Engagement</p> 
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
                            ticks: {
                            fontSize: 8
                        },
                        gridLines: {
                            display: false
                        }
                        }]
                    },
                    legend: {
                        display: true,
                        position:'bottom',
                        align: "start"
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
  border: solid 2px #99A9B44A;
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
