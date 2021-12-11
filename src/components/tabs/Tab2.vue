<template>
  <div>
    <div class="form">
      <div class="form-inner">
        <div class="form-item" v-for="(item,index) in form" :key="index">
          <div class="row">
            <div class="w-49">
              <vInput vLabel="Выберите дату"
                      vName="date"
              :error="item.time.error">
                <date-picker :class="{error: item .time.error}" v-model="item.time.val" range></date-picker>
              </vInput>
            </div>
            <div class="w-49">
              <vInput vLabel="Выберите время"
                      vName="date" :error="item.time1.error">
                <date-picker :class="{error: item.time1.error}" type="time" v-model="item.time1.val" range></date-picker>
              </vInput>
            </div>
          </div>
          <div class="row mt-17">
            <vInput
                vLabel="Цель визита"
                vName="textarea" :error="item.textarea.error">
              <textarea :class="{error: item.textarea.error}" v-model="item.textarea.val" @keyup="checkInput(form)"></textarea>
            </vInput>
          </div>
          <div class="input-checkbox " :class="{error: item.checkbox.error}">
            <input type="checkbox" :id="`checkbox_${index}`" v-model="item.checkbox.val">
            <label :for="`checkbox_${index}`">Вход с оружием</label>
          </div>
          <div class="w-49">
            <vInput
                v-model="item.comment.val"
                vLabel="Комментарий"
                vName="comment" :error="item.comment.error"/>
          </div>
        </div>

      </div>
    </div>
    <div class="wrapper">
      <vBtn @click="add" btn-class="btn-grey btn-full">Добавьте новый вход</vBtn>
      <div class="input-checkbox">
        <input type="checkbox" id="checkbox1" v-model="checkbox1">
        <label for="checkbox1">Целостность данных подтверждает</label>
      </div>
      <div class="input-checkbox">
        <input type="checkbox" id="checkbox2" v-model="checkbox2">
        <label for="checkbox2">С правилами поведения в селе соглашаются</label>
      </div>
      <div class="form-btns">
        <vBtn @click="SET_TABS(0)" btn-class="btn-grey">Вернуться</vBtn>
        <vBtn @click="save" btn-class="btn-primary">Сохранить</vBtn>
      </div>
    </div>
  </div>
</template>

<script>
import vInput from "@/components/Ui/vInput";
import vBtn from "@/components/Ui/vBtn";
import {required} from "vuelidate/lib/validators";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import {mapActions} from "vuex";

export default {
  name: "Tab2",
  components: {vInput, vBtn, DatePicker},
  validations: {
    name: {
      required
    },
    surname: {
      required
    },
    number: {
      required
    },
    phone: {
      required
    },
    phone1: {
      required
    },
    comment: {
      required
    }
  },
  data() {
    return {
      checkbox1: false,
      checkbox2: false,
      errors: false,
      form: [
        {
          time: {
            val: null,
            error: false
          },
          time1: {
            val: null,
            error: false
          },
          textarea: {
            val: null,
            error: false
          },
          comment: {
            val: null,
            error: false
          },
          checkbox: {
            val: false,
            error: false
          }
        }
      ]
    };
  },
  methods: {
    ...mapActions({
      SET_TABS: "SET_TABS",
    }),
    add() {
      this.form.push({
        time: {
          val: null,
          error: false
        },
        time1: {
          val: null,
          error: false
        },
        textarea: {
          val: null,
          error: false
        },
        comment: {
          val: null,
          error: false
        },
        checkbox: {
          val: false,
          error: false
        }
      })
    },
    checkInput(val) {
      this.errors = false
      val.forEach(item => {
        for (let i in item) {
          if (item[i].val === null || item[i].val === false) {
            item[i].error = true
          } else {
            item[i].error = false
          }
        }
      })
      val.forEach(item => {
        for (let i in item) {
          if (item[i].error) {
            this.errors = true
          }
        }
      })
    },
    save() {
      this.checkInput(this.form)
      if(!this.errors ){
        alert('save')
      }
    }
  }
}
</script>

<style lang="scss" scoped>


.form {
  max-width: 752px;
  width: 100%;
  box-shadow: 0px 8px 20px rgba(56, 69, 93, 0.1), 0px 4px 9px rgba(56, 69, 93, 0.08), 0px 2px 5px rgba(56, 69, 93, 0.0596107), 0px 1px 3px rgba(56, 69, 93, 0.05), 0px 0.598509px 1.5px rgba(56, 69, 93, 0.0403893), 0px 0.249053px 1px rgba(56, 69, 93, 0.03);
  border-radius: 4px;
  margin: 0 auto;

  &-footer,
  &-inner {
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  &-left {
    width: 78%;
  }

  &-right {
    width: 20%;
  }

  &-footer {
    background: #F7F8FA;
  }

  &-item {
    padding-bottom: 30px;

    &:nth-last-child(1) {
      border-bottom: 0px solid #CFD3DE;
      margin-bottom: 0;
    }
  }
}

</style>