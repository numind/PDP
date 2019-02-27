<template>
<div>
    <div class="row">
      <div class="col">
        <h4>2)	INFORMAZIONI GENERALI FORNITE DALLA FAMIGLIA / ENTI AFFIDATARI <br><small>(ad esempio percorso scolastico pregresso, ripetenze, …)</small></h4>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <textarea class="form-control"  rows="3" placeholder="Informazioni generali" v-model="sheet.infoGeneraliExt"></textarea>
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