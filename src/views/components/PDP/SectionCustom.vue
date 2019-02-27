<template>
<div>
    <div class="row">
      <div class="col">
        <h2>SEZIONE A <small>(comune a tutti gli allievi)</small></h2>
        <h4>Dati Anagrafici e Informazioni Essenziali di Presentazione dell’Allievo</h4>
      </div>
    </div>
</div>
</template>
<script>

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