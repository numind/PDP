<template>
<div>

  <tabs fill class="flex-column flex-md-row">
    <tab-pane :title="item.title"  v-for="(item, index) in Schema.diagnosi" :key="index">

      <textarea class="form-control" rows="3" placeholder="Informazioni generali"></textarea><br>
          <div v-for="(sect, indexS) in item.subsections" :key="indexS">
          <card class="border-1" shadow>
            <div class="row" >
              <div class="col">
                <h5>{{ sect.title }}</h5>
                <textarea class="form-control" rows="3" placeholder="Informazioni generali"></textarea>
              </div>
              <div class="col">
                <label for=""></label>
                <base-radio :name="r" class="mb-3" v-for="(r, indexR) in sect.val" :key="indexR" v-model="sheet[sect.title]">
                    {{ r }}
                </base-radio>        
              </div>
            </div>
          </card>
          <br>
          </div>

    </tab-pane>
  </tabs>


</div>   
</template>

<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";

import Schema from '../../../static/pdp/schemab1.json';

export default {
  props: {
    sheet: {
      type: Object,
      required: true    
    }
  },
  data() {
    return {
      Schema
    }
  },
  mounted() {
    console.log(this.Schema, this. sheet)
  },
  components:
    {Tabs, TabPane}
  
}
</script>