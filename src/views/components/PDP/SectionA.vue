<template>
<div>
    <div class="row">
      <div class="col">
        <h2>SEZIONE A <small>(comune a tutti gli allievi)</small></h2>
        <h4>Dati Anagrafici e Informazioni Essenziali di Presentazione dell’Allievo</h4>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <base-input placeholder="Cognome" :valid="null" v-model="sheet.cognome" label="Cognome dell'Allievo"></base-input>       
      </div>
      <div class="col">
        <base-input placeholder="Nome" :valid="null" v-model="sheet.nome" label="Nome dell'Allievo"></base-input>       
      </div>
    </div>

    <div class="row">
      <div class="col">
        <base-input placeholder="Luogo di nascita" :valid="null" v-model="sheet.ldn" label="Luogo di Nascita"></base-input>       
      </div>
      <div class="col">
        <label>Data di Nascita</label>
        <base-input addon-left-icon="ni ni-calendar-grid-58" v-model="sheet.ddn">
          <flat-picker slot-scope="{focus, blur}"
                      @on-open="focus"
                      @on-close="blur"
                      :config="{allowInput: true}"
                      class="form-control datepicker"
                      v-model="sheet.ddn"
                      label="Data di Nascita">
          </flat-picker>
        </base-input>    
      </div>
    </div>

    <div class="row">
        <div class="col">
          <label>Lingua Madre</label>
          <select class="custom-select"  v-model="sheet.lingua">
          <option v-for="lingua in Lingue" :key="lingua">
            {{ lingua }}
          </option>
          </select>  
        </div>
        <div class="col">
          <label>Eventuale Bilinguismo</label>
          <select class="custom-select"  v-model="sheet.bilingua">
          <option v-for="lingua in Lingue" :key="lingua">
            {{ lingua }}
          </option>
          </select>      
        </div>
    </div>
    <hr>
</div>
</template>
<script>
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Lingue from '../../../static/pdp/lingue.json';

export default {
  data() {
    return {
      Lingue
    }
  },
  props: {
    sheet: {
      type: Object,
      required: true    
    }
  },
  components: {flatPicker}
}
</script>