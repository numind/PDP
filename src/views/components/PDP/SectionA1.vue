<template>
<div>
    <div class="row">
      <div class="col">
        <h4>1)	INDIVIDUAZIONE DELLA SITUAZIONE DI BISOGNO EDUCATIVO SPECIALE DA PARTE DI:</h4>

        <p class="text-center"><base-button type="primary" @click="modals.modal0 = true" size="sm">Nuova registrazione</base-button></p>

        <modal :show.sync="modals.modal0" modal-classes="modal-dialog-centered modal-lg">
          <template slot="header">
              <h5 class="modal-title" id="exampleModalLabel">Registra nuova CERTIFICAZIONE</h5>
          </template>
          <div>
                  <div class="row">
        <div class="col">
          <base-input placeholder="Ente Certificatore" :valid="null" v-model="newSituation.ente" label="Ente Certificatore"></base-input>       
        </div>
              <div class="col">
          <base-input placeholder="ICD10" :valid="null" v-model="newSituation.ICD10" label="ICD10"></base-input>       
        </div>
      </div>
      <div class="row">
        <div class="col">
          <base-input placeholder="Redatta da" :valid="null" v-model="newSituation.certificatore" label="Redatta da"></base-input>       
        </div>
        <div class="col">
          <label>Redatta il</label>
          <base-input addon-left-icon="ni ni-calendar-grid-58" v-model="sheet.ddn">
          <flat-picker slot-scope="{focus, blur}"
                      @on-open="focus"
                      @on-close="blur"
                      :config="{allowInput: true}"
                      class="form-control datepicker"
                      v-model="newSituation.dataRedazione" >
          </flat-picker>
        </base-input>        
        </div>
      </div>
      <div class="row">
        <div class="col">
          <base-input placeholder="Aggiornamenti diagnostici" :valid="null" v-model="newSituation.aggDiagnostici" label="Aggiornamenti diagnostici"></base-input>       
        </div>
      </div>
      <div class="row">
         <div class="col">
          <base-input placeholder="Altre relazioni clicniche" :valid="null" v-model="newSituation.altreRelCliniche" label="Altre relazioni clicniche"></base-input>       
        </div>
        <div class="col">
          <base-input placeholder="Interventi Riabilitativi" :valid="null" v-model="newSituation.intervRiabilitativi" label="Interventi Riabilitativi"></base-input>       
        </div>
      </div>
          </div>
          <template slot="footer">
              <base-button type="warning" @click="modals.modal0 = false">Chiudi</base-button>
              <base-button type="primary" @click="saveNewReg">Salva</base-button>
          </template>
        </modal>        
      </div>
    </div>
    <div  v-for="situation in sheet.situations" :key="situation._id">
    <card type="Secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0" >
    
      <div class="row">
        <div class="col">
          <base-input placeholder="Ente Certificatore" :valid="null" v-model="situation.ente" label="Ente Certificatore"></base-input>       
        </div>
              <div class="col">
          <base-input placeholder="ICD10" :valid="null" v-model="situation.ICD10" label="ICD10"></base-input>       
        </div>
      </div>
      <div class="row">
        <div class="col">
          <base-input placeholder="Redatta da" :valid="null" v-model="situation.certificatore" label="Redatta da"></base-input>       
        </div>
        <div class="col">
          <label>Redatta il</label>
          <base-input addon-left-icon="ni ni-calendar-grid-58" v-model="sheet.ddn">
          <flat-picker slot-scope="{focus, blur}"
                      @on-open="focus"
                      @on-close="blur"
                      :config="{allowInput: true}"
                      class="form-control datepicker"
                      v-model="situation.dataRedazione" >
          </flat-picker>
        </base-input>        
        </div>
      </div>
      <div class="row">
        <div class="col">
          <base-input placeholder="Aggiornamenti diagnostici" :valid="null" v-model="situation.aggDiagnostici" label="Aggiornamenti diagnostici"></base-input>       
        </div>
      </div>
      <div class="row">
         <div class="col">
          <base-input placeholder="Altre relazioni clicniche" :valid="null" v-model="situation.altreRelCliniche" label="Altre relazioni clicniche"></base-input>       
        </div>
        <div class="col">
          <base-input placeholder="Interventi Riabilitativi" :valid="null" v-model="situation.intervRiabilitativi" label="Interventi Riabilitativi"></base-input>       
        </div>
      </div>
    
    </card>
    <br>
    </div>
</div>
</template>
<script>
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Modal from "@/components/Modal.vue";

export default {
  props: {
    sheet: {
      type: Object   
    }
  },
  data() {
    return {
      modals: {
        modal0: false
      },
      newSituation: {}
    }
  },
  methods:{
    saveNewReg: function() {
      this.sheet.situations.push(this.newSituation)
      this.newSituation = {}
      this.modals.modal0 = false
    }
  },
  components: {flatPicker, Modal}
}
</script>