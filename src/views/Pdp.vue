<template>
    <div>
 <base-nav v-for="menu in menus"
                  :key="menu.type"
                  :type="menu.type"
                  effect="dark"
                  expand
                  title="Default Color"
                  class=" fixed-top "
                  :content-id="`navbar-${menu.type}`">
            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="./index.html">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu" :target="`navbar-${menu.type}`">
                    </close-button>
                </div>
            </div>
            <component :is="menu.menuComponent"></component>
        </base-nav><br><br><br><br>
        <router-view></router-view>
    </div>
</template>
<script>

import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import Menu from "./components/PDP/Menu";

export default {
  name: "PDP",
  components: {
    BaseNav,
    Menu,
    CloseButton
  },
  data() {
    return {
      menus: [
        { type: "default", menuComponent: Menu }
        /* { type: "primary", menuComponent: Menu2 },
        { type: "success", menuComponent: Menu3 },
        { type: "danger", menuComponent: Menu4 },
        { type: "warning", menuComponent: Menu5 },
        { type: "info", menuComponent: Menu6 } */
      ]
    };
  }
};
</script>
