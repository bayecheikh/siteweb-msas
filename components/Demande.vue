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
                                    <input name="firstname" placeholder="Prénom*" type="text" v-model="model.firstname" required>
                                </div>
                                <div class="col-lg-6">
                                    <input name="lastname" placeholder="Nom*" type="text" v-model="model.lastname" required>
                                </div>
                                <div class="col-lg-6">
                                    <input name="email" placeholder="Email*" type="email" v-model="model.email">
                                </div>
                                <div class="col-lg-6">
                                    <input name="telephone" placeholder="Téléphone*" type="number" v-model="model.telephone" required>
                                </div>
                                <div class="col-lg-12">
                                    <input name="subject" placeholder="Objet*" type="text" v-model="model.subject" required>
                                </div>
                                <div class="col-lg-12">
                                    <textarea name="message" placeholder="Votre Message*" v-model="model.message" required></textarea>
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
                console.log('Données demande formulaire ++++++: ', {...this.model})
                this.$axios.$post('/ajoutDemande',{...this.model})
                .then(async (response) => {
                    await this.$modal.hide('demande');
                    this.$toast.success("Message envoyé avec succès").goAway(3000)
                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    //alert('Message envoyé avec succès')
                    
                });
            },
        },
    };
</script>