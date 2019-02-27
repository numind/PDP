<template>
<div>

    <div class="row">
      <div class="col">
       <h1>Scheda di <strong>{{ sheet.name }}</strong></h1>
       <hr>
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