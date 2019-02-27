<template>
  <div class="container align-items-center">
    <h1 class="text-center">Guida alla compilazione</h1>
    <br><br>
    <div v-for="section in Docs.sections">
      <h2>{{ section.title }} &nbsp;<small class="text-muted">{{ section.subtitle }}</small></h2>
      <h4>{{ section.description }}</h4>
      <p v-if="section.note">Note per la compilazione: {{ section.note }}</p>
      <div v-for="subsection in section.subsections">
          <h2 class="display-4"> > {{ subsection.title }} &nbsp;<small class="text-muted">{{ subsection.subtitle }}</small></h2>
          <h4 class="display-4">{{ subsection.description }}</h4>
          <p v-if="subsection.note">Note per la compilazione: {{ subsection.note }}</p>
      </div>
      <hr>
    </div>
   
  </div>
</template>
<script>

import Docs from '../../../static/pdp/docs.json';

export default {
  data() {
    return {
     Docs
    }
  },
  created: function(){
       
    },

    methods:{
     
    }
}
</script>