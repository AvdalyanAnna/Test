<template>
  <div>
    <div class="form">
      <div class="form-inner">
        <div class="form-left">
          <div class="row">
            <div class="w-49">
              <vInput
                  v-model="form.name.val"
                  vLabel="Имя"
                  vName="name"
                  :error="form.name.error"
                  @keyup="checkInput(form)"
              />
            </div>
            <div class="w-49">
              <vInput
                  v-model="form.surname.val"
                  vLabel="Фамилия"
                  vName="surname"
                  :error="form.surname.error"
                  @keyup="checkInput(form)"
              />
            </div>
          </div>
          <div class="row mt-17">
            <div class="w-49">
              <vInput
                  v-model="form.number.val"
                  vLabel="Номер удостоверения личности"
                  vName="number"
                  :error="form.number.error"
                  @keyup="checkInput(form)"
              />
            </div>
            <div class="w-49">
              <vInput
                  v-model="form.phone.val"
                  vLabel="Номер мобильного телефона"
                  vName="phone"
                  :error="form.phone.error"
                  @keyup="checkInput(form)"
              />
            </div>
          </div>
        </div>
        <div class="form-right">
          <label class="input-file" :class="{error: form.file.error}">
            <input type="file" @change="onFileImageChange" accept="image/png, image/gif, image/jpeg">
            <span>
              <vCamera/>
              Загрузить изображение
            </span>
            Максимальный размер файла
            Это 20mb
          </label>
        </div>
      </div>
      <div class="form-footer">
        <div class="w-49">
          <vInput
              vPlaceholder="Вид оружия"
              v-model="form.weapons.val"
              vName="weapons"
              :error="form.weapons.error"
              @keyup="checkInput(form)"
          />
        </div>
        <div class="w-49">
          <vInput
              vPlaceholder="234-56-789"
              v-model="form.phone1.val"
              vName="phone1"
              :error="form.phone1.error"
              @keyup="checkInput(form)"
          />
        </div>
      </div>
    </div>
    <div class="form-btns">
        <vBtn btn-class="btn-grey">Обратно</vBtn>
        <vBtn @click="save" btn-class="btn-primary">Далее</vBtn>
    </div>
  </div>
</template>

<script>
import vInput from "@/components/Ui/vInput";
import vCamera from "@/components/Ui/icons/vCamera";
import vBtn from "@/components/Ui/vBtn";
import {mapActions} from "vuex";

export default {
  name: "Tab1",
  components: {vInput, vCamera, vBtn},
  data() {
    return {
      errors: false,
      form: {
        name: {
          val: null,
          error: false
        },
        surname: {
          val: null,
          error: false
        },
        number: {
          val: null,
          error: false
        },
        phone: {
          val: null,
          error: false
        },
        file: {
          val: null,
          error: false
        },
        phone1: {
          val: null,
          error: false
        },
        weapons: {
          val: null,
          error: false
        }
      }
    }
  },
  methods: {
    ...mapActions({
      SET_TABS: "SET_TABS",
    }),
    checkInput(val) {
      this.errors = false
      for (let i in val) {
        if (val[i].val === null || val[i].val === false) {
          val[i].error = true
        } else {
          val[i].error = false
        }
      }
      for (let i in val) {
        if (val[i].error) {
          this.errors = true
        }
      }
    },
    onFileImageChange(e) {
        this.form.file.val = URL.createObjectURL(e.target.files[0]);
      this.checkInput(this.form)
      },
    save() {
      this.checkInput(this.form)
      if (!this.errors) {
        this.SET_TABS(1)
      }
    }
  }
}
</script>
