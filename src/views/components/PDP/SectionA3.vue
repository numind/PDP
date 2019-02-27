<template>
<div>
    <hr>
    <div class="row">
      <div class="col">
        <h4>CONTESTO 1: <strong>L'allievo/a </strong> <br><small>CENNI AUTOBIOGRAFICI
        INFORMAZIONI FORNITE DALL’ALUNNO/STUDENTE: MI PRESENTO<br><i>(Da compilare insieme agli allievi)</i></small></h4>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <textarea class="form-control"  rows="3" placeholder="Contesto" v-model="sheet.contesto1"></textarea>
      </div>
    </div>


     <hr>
    <div class="row">
      <div class="col">
        <h4>CONTESTO 2: <strong>CLIMA DI CLASSE </strong></h4>
        <p><small>I docenti possono descrivere alcuni aspetti caratterizzanti il clima di classe: relazioni e collaborazione tra pari,
modalità comunicative e di gestione della classe; livello di coinvolgimento di tutti gli insegnanti e dei genitori</small></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <textarea class="form-control"  rows="3" placeholder="Contesto" v-model="sheet.contesto2"></textarea>
      </div>
    </div>


    <hr>
    <div class="row">
      <div class="col">
        <h4>CONTESTO 3: <strong>EXTRASCUOLA </strong></h4>
        <p><small>  I docenti possono raccogliere informazioni significative, condivise con la famiglia e con altri soggetti coinvolti
(sanitari, allenatori, educatori,…) su interessi, difficoltà, punti di forza, aspettative, bisogni e modalità di
funzionamento dello studente in relazione ai contesti extrascolastici (famiglia, contesti sportivi, ludici,
associazionismo ecc..)</small></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <textarea class="form-control"  rows="3" placeholder="Contesto" v-model="sheet.contesto3"></textarea>
      </div>
    </div>
</div>
</template>
<script>

export default {
  props: {
    sheet: {
      type: Object,
      required: true    
    }
  }
}
</script>