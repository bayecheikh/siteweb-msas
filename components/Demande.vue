<template>
<div>
    <button type="button" class="btn btn-outline-primary custom-btn-outline-primary mr-2" @click="onClickDemande">
        DEMANDE D'INFORMATION</button>
    <modal name="demande" width="50%" :scrollable="true" height=auto>
        <div class="container pt-15 pb-15" v-if="isPageLoad">
            <div class="custom-row-2">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="contact-form">
                        <div class="contact-title mb-30">
                            <h2>Ecrivez-nous</h2>
                        </div>
                        <div class="contact-form-style">
                            <div class="row">
                                <div class="col-lg-6">
                                    <input name="firstname" placeholder="Prénom*" type="text" v-model="modelPreRempli.firstname" required>
                                </div>
                                <div class="col-lg-6">
                                    <input name="lastname" placeholder="Nom*" type="text" v-model="modelPreRempli.lastname" required>
                                </div>
                                <div class="col-lg-6">
                                    <input name="email" placeholder="Email*" type="email" v-model="modelPreRempli.email">
                                </div>
                                <div class="col-lg-6">
                                    <input name="telephone" placeholder="Téléphone*" type="number" v-model="modelPreRempli.telephone" required>
                                </div>
                                <div class="col-lg-12">
                                    <input name="subject" placeholder="Objet*" type="text" v-model="modelPreRempli.subject" required>
                                </div>
                                <div class="col-lg-12">
                                    <textarea name="message" placeholder="Votre Message*" v-model="modelPreRempli.message" required></textarea>
                                    <button class="submit" @click="submitDemande">ENVOYEZ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </modal>
</div>
</template>

<script>
    export default { 
        data() {
            return {
                isPageLoad:false,
                load: false,
                model : {
                    firstname:'',
                    lastname:'',
                    email:'',
                    telephone:'',
                    subject:'',
                    message:'',
                },
                modelPreRempli : {
                    firstname:'Cheikh',
                    lastname:'Gueye',
                    email:'bayecheikh@gmail.com',
                    telephone:'778688784',
                    subject:'Demande d\'infos',
                    message:'Je veux des infos',
                }
            }
        },

        methods: {
            onClickDemande() {
                //alert('click')
                this.isPageLoad=true
                this.$modal.show('demande');
            },
            submitDemande(){
                this.load=true
                console.log('Données demande formulaire ++++++: ', {...this.modelPreRempli})
                this.$axios.$post('/ajoutDemande',{...this.modelPreRempli})
                .then(async (response) => {
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données demande Reçu ++++++: ', response)

                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    console.log('Requette envoyé ')
                });
            },
        },
    };
</script>