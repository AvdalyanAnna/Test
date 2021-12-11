<template>
  <div>
    <vHeader/>
    <vForm vTitle="Войти"
           vDescription="Для того чтобы идентифицировать себя в системе, нужно ввести Email">
      <vInput
          v-model="$v.email.$model"
          vLabel="Email:"
          vName="email"
          vType="email"
          :error="$v.email.$error"
          vPlaceholder="example@example.com"/>
      <div class="buttons-group">
        <vBtn>Забыли пароль</vBtn>
        <vBtn @click="save" btn-class="btn-primary">Подать заявку</vBtn>
      </div>
    </vForm>
  </div>
</template>

<script>
import vHeader from "@/components/layouts/vHeader";
import vForm from "@/components/Ui/vForm";
import vInput from "@/components/Ui/vInput";
import vBtn from "@/components/Ui/vBtn";
import {required, email} from 'vuelidate/lib/validators'
export default {
  name: "Home",
  components: {
    vHeader,
    vForm,
    vInput,
    vBtn
  },
  data() {
    return {
      email: ''
    }
  },
  validations: {
    email: {
      required, email
    }
  },
  methods: {
    save() {
      // this.$v.email.$touch()
      // console.log(this.$v.email)
      if( this.$v.email.$model!== '' && !this.$v.email.$error){
        this.$router.push('/confirmation')
      }
    }
  }

}
</script>

