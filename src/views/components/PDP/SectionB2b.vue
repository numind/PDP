<template>
<div>
    <h5> vedere cos'è la legenda sopra questa sezione</h5>

    <tabs fill class="flex-column flex-md-row">
    <tab-pane :title="item.title"  v-for="(item, index) in Schema.infoSignificant" :key="index">


      <div v-for="(question, indexS) in item.questions" :key="indexS">
      <card class="border-1" shadow>
        <div class="row" ><h5>{{ question.q }}</h5></div>
        <div class="row" >
          
          <!-- textarea -->
          <div class="col" v-if="question.type=='textarea'">           
            <textarea class="form-control" rows="3" v-model="sheet[item.cod + '_' + question.id]"></textarea>
          </div>

          <!-- text -->
          <div class="col" v-if="question.type=='text'">           
            <base-input :valid="null" v-model="sheet[item.cod + '_' + question.id]" ></base-input>              
          </div>

          <!-- checkbox -->
          <div class="col" v-if="question.type=='radio'">        
            <base-radio :name="r" class="mb-3" v-for="(r, indexR) in question.r" :key="indexR" v-model="sheet[item.cod + '_' + question.id]">
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
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

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
  },
  components:
    {Tabs, TabPane, flatPicker}
  
}
</script>