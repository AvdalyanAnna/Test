<template>
  <div>
    <vHeader/>
    <Tabs :items="TABS" />
    <Tab1 v-if="TABS[0].status"></Tab1>
    <Tab2 v-else></Tab2>
  </div>
</template>

<script>
import vHeader from "@/components/layouts/vHeader";
import Tabs from "@/components/Ui/Tabs";
import Tab1 from "@/components/tabs/Tab1";
import Tab2 from "@/components/tabs/Tab2";
import { mapGetters } from "vuex";
export default {
  name: "New",
  components:{
    Tabs,
    vHeader,
    Tab1,
    Tab2
  },
  data(){
    return {

    }
  },
  computed:{
    ...mapGetters({
      TABS: "GET_TABS",
    })
  },
  methods:{

  }

}
</script>

<style scoped>

</style>