<template>
  <div class="container ct-example-row">
  <Section-Header :sheet="sheet"></Section-Header> 
<tabs fill class="flex-column flex-md-row">
    <card shadow>
        <tab-pane title="Sezione A">
          <Section-A :sheet="sheet"></Section-A>  
          <Section-A1 :sheet="sheet"></Section-A1> 
          <Section-A2 :sheet="sheet"></Section-A2>
          <Section-A3 :sheet="sheet"></Section-A3>
        </tab-pane>

        <tab-pane title="Sezione B1">
          <Section-B1 :sheet="sheet"></Section-B1>
        </tab-pane>

        <tab-pane title="Sezione B2">
          B2
        </tab-pane>

        <tab-pane title="Sezione C">

        </tab-pane>

        <tab-pane title="Sezione D">

        </tab-pane>

        <tab-pane title="Sezione E">

        </tab-pane>

        <tab-pane title="Json SHEET">
          <div class="row">
            <div class="col">
              <hr>
              <pre>{{ sheet }}</pre>
            </div>
          </div>
        </tab-pane>
    </card>
</tabs>

  </div>
</template>
<script>

import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";

import SectionHeader from './SectionHeader.vue'
import SectionA from './SectionA.vue'
import SectionA1 from './SectionA1.vue'
import SectionA2 from './SectionA2.vue'
import SectionA3 from './SectionA3.vue'
import SectionB1 from './SectionB1.vue'

import List from '../../../static/pdp/list.json';

export default {
  components: {SectionA, SectionA1, SectionHeader, SectionA2, SectionA3, SectionB1, Tabs, TabPane},
  data() {
    return {
      errors: [],
      List,
      sheet: null
    }
  },
  created() {
    const id = this.$route.params.id
    this.sheet = List.sheets.filter((x) => {return x._id == id})[0]   
  }
}
</script>