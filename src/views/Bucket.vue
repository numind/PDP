<template>
    <div>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">Add New BUCKET
                                    <span>to manage your shared money</span>
                                </h1>
                                <p class="lead  text-white">Choose a name and description and add partecipants</p>
                                <div class="row">
                                    <div class="col-lg-12 col-sm-6">
                                        <base-input placeholder="Name" required v-model="bucket.name"></base-input>
                                        <base-input placeholder="Description" required v-model="bucket.description"></base-input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-9 col-sm-6">
                                        <base-input placeholder="Add partecipant Email" required v-model="bucket.email"></base-input>                                                                    
                                    </div>
                                    <div class="col-lg-2 col-sm-6">
                                        <base-button class="btn-3" type="neutral" icon="ni ni-fat-add" @click="addPartecipants">Add</base-button>                                              
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 col-sm-6">
                                        <base-button class="btn-3" type="neutral" icon="ni ni-bag-17" @click="saveBucket">Save</base-button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <card shadow class="shadow-lg--hover mt-5">
                                    <div class="d-flex px-3">
                                        <div>
                                            <icon name="ni ni-send" gradient="success" color="white" shadow
                                                rounded></icon>
                                        </div>
                                        <div class="pl-4">
                                            <p class="title text-success" v-for="p in bucket.partecipants">{{ p }}</p>                                        
                                            <!--<a href="#" class="text-success">Learn more</a>-->
                                        </div>
                                    </div>
                                </card>          
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>

export default {
    data () {
      return {
          bucket:{
              name: '',
              description: '',
              email: '',
              partecipants: ['scamisassi@gmail.com', 'pippo@gmail.com']
          }
      }
    },
    methods: {
        addPartecipants: function(){
            this.bucket.partecipants.push(this.bucket.email)
        },
        saveBucket: function(){
            this.bucket.created = Date.now()
            this.bucket.createdBy = 'user'
            
            this.$http.post('', this.bucket)
            .then(data => {
              console.log(data)
            }, error => {
              console.log('error: ', error)
            })
        }
    }
};
</script>
<style>
</style>
