<template>
  <div class="form-group" :class="{error:error}">
    <label v-if="vLabel !==''" :for="vName">{{ vLabel }}</label>
    <slot>
      <input :type="vType"
             :name="vName"
             :id="vName"
             :value="value"
             @keyup="$emit('keyup')"
             @input="$emit('input', $event.target.value)"
             :placeholder="vPlaceholder">
    </slot>
  </div>
</template>

<script>
export default {
  name: "vInput",
  props: {
    vName: {
      type: String,
      default: "id"
    },
    vType: {
      type: String,
      default: "text"
    },
    vLabel: {
      type: String,
      default: ""
    },
    vPlaceholder: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number]
    }
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  width: 100%;

  &.error {
    input {
      border: 1px solid #ff0000;
    }

    label {
      color: #ff0000;
    }
  }

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
    background: transparent;

    &::placeholder {
      color: #CFD3DE;
    }
  }
}
</style>