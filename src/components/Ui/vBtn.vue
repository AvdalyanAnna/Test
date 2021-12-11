<template>
  <button class="btn" :class="btnClass" @click.prevent="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "vBtn",
  props: {
    btnClass: {
      type: String,
      default: 'btn'
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  color: #409FFF;
  background: transparent;
  border: none;
  min-width: 178px;
  cursor: pointer;

  &-primary {
    background: #409FFF;
    color: #fff;
  }

  &-green {
    background: #29CC44;
    color: #fff;
  }

  &-full {
    max-width: 752px;
    width: 100%;
    margin: 20px auto;
  }

  &-grey {
    border: 1px solid #929BAA;
    color: #929BAA;
  }
}
</style>