<template>
  <div>
    <vHeader/>
    <vForm vTitle="Андрій Андрійович"
           vDescription="На ваше электронное письмо отправляется одноразовый код.">
      <vInputGroup />
    </vForm>
  </div>
</template>

<script>
import vHeader from "@/components/layouts/vHeader";
import vForm from "@/components/Ui/vForm";
import vInputGroup from "@/components/Ui/vInputGroup";

export default {
  name: "Confirmation",
  components: {
    vHeader,
    vForm,
    vInputGroup
  },
}
</script>

<style scoped>

</style>