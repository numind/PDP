<template>
<div class="container ct-example-row">
  <div class="row">
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">Edit</th>
        <th scope="col">Name</th>
        <th scope="col">Inserito il</th>
        <th scope="col">id</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(p, index) in List.sheets" :key="index">    
        <td>
          <router-link tag="base-button" class="nav-link" type="warning"  :to="{name: 'pdpSheet', params:{id: p._id}}"  :disabled="p.isActive">Edit</router-link>
        </td>
        <td>{{ p.name }}</td>
        <td>{{ p.registered }}</td>

        <th scope="row">{{ p._id }}</th>
      </tr>
    </tbody>
  </table>
  <base-pagination :page-count="10" size="sm"></base-pagination>
  </div>
</div>
</template>
<script>

import List from '../../../static/pdp/list.json';

export default {
  data() {
    return {
     List
    }
  },
  created: function(){
       
    },

    methods:{
     goto(id) {
       this.$router.push({path: '/', params: {id: id}})
     }
    }
}
</script>