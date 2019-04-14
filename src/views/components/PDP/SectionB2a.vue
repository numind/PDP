<template>
<div>

      <h4>Allievi con altri Bisogni Educativi Speciali</h4>
      <h5>Descrizione delle abilità e dei comportamenti<small><br>Rientrano in questa sezione eventuali altre tipologie di disturbo evolutivo specifico e le situazioni di svantaggio
        socioeconomico, culturale e linguistico citate dalla c.m. n. 8 del 06/03/2013. Possono essere qui presi in
        considerazione anche i ragazzi in situazione di malattia, con o senza ospedalizzazione, o in situazione di
        istruzione domiciliare.</small>
      </h5>
      <h4>1) DOCUMENTAZIONE GIÀ IN POSSESSO (<a href>vedi qui</a>): <i class="text-danger">Aggiustare il link</i></h4>
      <div class="row">
        <div class="col">
          <base-input placeholder="Diagnosi clinica" :valid="null" v-model="sheet.diagnosiClinica" label="Diagnosi clinica"></base-input>       
        </div>
      </div>
      <div class="row">
        <div class="col">
          <base-input placeholder="Contatto" :valid="null" v-model="sheet.diagnosiClinicaContatto" label="Eventuale contatto con operatore sanitario"></base-input>       
        </div>
      </div>

    <div class="row">
        <div class="col">
          <base-input placeholder="Documentazione di altri servizi non sanitari (tipologia)" :valid="null" v-model="sheet.tipologiaDocAltri" label="Documentazione di altri servizi non sanitari (tipologia)"></base-input>       
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label>Data della relazione del consiglio di classe/team</label>
            <base-input addon-left-icon="ni ni-calendar-grid-58" v-model="sheet.ddn">
              <flat-picker slot-scope="{focus, blur}"
                          @on-open="focus"
                          @on-close="blur"
                          :config="{allowInput: true}"
                          class="form-control datepicker"
                          v-model="sheet.dataRelazioneConsiglio"
                          label="Data della relazione">
              </flat-picker>
            </base-input>   
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col">
          <h4>2) INFORMAZIONI SPECIFICHE DESUNTE DAI DOCUMENTI SOPRA INDICATI</h4>
          <textarea class="form-control" rows="3" placeholder="INFORMAZIONI SPECIFICHE DESUNTE DAI DOCUMENTI SOPRA INDICATI" v-model="sheet.InfoDaDoc"></textarea>     
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col">
          <h4>3) DESCRIZIONE DELLE ABILITÀ E DEI COMPORTAMENTI OSSERVABILI A SCUOLA DA PARTE DEI DOCENTI DI CLASSE</h4>
          <ul>
              <li>per gli allievi con svantaggio socioeconomico, linguistico e culturale, senza diagnosi specialistica,
              si suggerisce la compilazione della griglia osservativa di pag. 8;</li>
              <li>per gli allievi con Disturbi Evolutivi Specifici si suggerisce l’osservazione e la descrizione del
              comportamento e degli apprendimenti sulla base delle priorità di ciascuna disciplina, anche
              utilizzando gli indicatori predisposti nella Sezione B parte I;</li>
              <li>per gli allievi che usufruiscono dei servizi di scuola in ospedale, istruzione domiciliare o per altre
              situazioni di malattia, si suggerisce la compilazione delle sezioni B (pag. 9); C2 e D1, da parte del
              consiglio di classe/team e di eventuali altri consigli/docenti coinvolti (scuola in ospedale, ecc..).</li>
          </ul>
          <br>
          <i>(Adattamento da Trinchero R., 2010)</i>
        </div>
      </div>

</div>   
</template>

<script>
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";

export default {
  props: {
    sheet: {
      type: Object,
      required: true    
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  components:
    {Tabs, TabPane, flatPicker}
  
}
</script>