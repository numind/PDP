<template>
<div>

  <tabs fill class="flex-column flex-md-row">
    <tab-pane title="Allievi con altri Bisogni Educativi Speciali">
      <Section-B2a :sheet="sheet"></Section-B2a>
    </tab-pane>
    <tab-pane title="Allievi con BES determinati da una situazione di malattia">
      <Section-B2b :sheet="sheet"></Section-B2b>
    </tab-pane>
  </tabs>


</div>   
</template>

<script>
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";

import SectionB2a from './SectionB2a.vue'
import SectionB2b from './SectionB2b.vue'

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
    {Tabs, TabPane, flatPicker, SectionB2a, SectionB2b}
  
}
</script>