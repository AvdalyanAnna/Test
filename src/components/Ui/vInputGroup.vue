<template>
  <div>
    <div class="form-group">
      <label>Код подтверждения</label>
      <div class="input-group">
        <input v-for="(item,index) in inputs" :key="index"
               :name="item.name"
               :id="item.name"
               maxlength="1"
               type="number"
               @input="checkLength(index)"
               v-model="item.value">
      </div>
    </div>
    <div class="buttons-group">
      <vBtn btn-class="btn-grey">Отменить</vBtn>
      <vBtn @click="save" btn-class="btn-green">Подтвердить</vBtn>
    </div>
  </div>
</template>

<script>
import vBtn from "@/components/Ui/vBtn";

export default {
  name: "vInputGroup",
  components: {vBtn},
  data() {
    return {
      inputs: [
        {
          name: 'test1',
          value: '',
        },
        {
          name: 'test1',
          value: '',
        },
        {
          name: 'test1',
          value: '',
        },
        {
          name: 'test1',
          value: '',
        },
        {
          name: 'test1',
          value: '',
        }
      ]
    }
  },
  computed: {
    number() {
      return Math.floor(Math.random() * 90000) + 10000
    }
  },
  mounted() {
    console.log(this.number)
  },
  methods: {
    checkLength(index){
      if(this.inputs[index].value !== ''){
          this.inputs[index].value = this.inputs[index].value[0]
      }
    },
    save(){
      let num = ''
      this.inputs.forEach(item => num+=item.value)
      if(this.number === +num){
        this.$router.push('/new')
      }else{
        alert('неправильный код')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input-group{
  display: flex;
  justify-content: space-between;
  input{
    text-align: center;
    margin-right: 35px;
    &:nth-last-child(1){
      margin-right: 0;
    }
  }
}
.form-group {
  label {
    display: block;
    font-size: 14px;
    line-height: 24px;
  }

  input {
    border: 1px solid #CFD3DE;
    border-radius: 4px;
    outline: none;
    display: block;
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    padding: 7px;

    &::placeholder {
      color: #CFD3DE;
    }
  }
}
</style>