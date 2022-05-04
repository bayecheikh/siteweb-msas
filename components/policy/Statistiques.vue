<template>

    <div class="">
        <div class="row align-items-center pt-30 pb-30 pl-100 d-flex justify-content-start">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <h1 class="card-title text-blue custom-title">Le Volume du Financement  dimension et par source</h1>
                <hr class="custom-hr">
            </div>
        </div>
        <div class="row align-items-start d-flex pl-100 pr-100">
            <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-12">
                    <div class="">
                    <div class="single-mission mb-30">
                        <h3 class="card-title text-blue custom-title">title</h3>
                        <p>desc</p>
                    </div>
                    </div>
                </div>
                <div class="col-lg-7 col-md-7 col-sm-12">
                     <div class="container">
                        <bar-chart :data="barChartData" :options="barChartOptions" :height="200" />
                    </div>
                </div>
                </div>
        </div>
    </div>

</template>

<script>
import BarChart from '@/components/BarChart'
const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

    export default {
  components: {
    BarChart
  },
        mounted: function() {
            this.getListMission()
        },
        data() {
    return {
      barChartData: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
          {
            label: 'Income',
            // backgroundColor: ["red", "orange", "yellow"],
            backgroundColor: [chartColors.red, chartColors.orange, chartColors.yellow],
            data: [10, 15, 20]
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Monthly Income'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    }
  },

        methods: {
            getInfo(item){
                this.modelRegion.title = item.title
                this.modelRegion.id = item.id
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
.land {
  fill-opacity: 1;
  stroke: rgb(0, 0, 0);
  stroke-opacity: 1;
  stroke-width: 0.5;
}
</style>
