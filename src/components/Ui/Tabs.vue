<template>
  <div class="tabs">
    <div class="tabs-item" :class="{active:item.status}" v-for="(item,index) in items" :key="index">
      <div class="number">{{ index + 1 }}</div>
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    items: {
      type: Array,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: fit-content;
  margin: 0 auto;
  &::before{
    content: '';
    position: absolute;
    width: 50%;
    height: 1px;
    left: 50%;
    top: 45%;
    transform: translate(-50%,-50%);
    background: #CFD3DE;
  }
  &-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    &.active{
      color: #409FFF;
      .number{
        border: 1px solid #409FFF;
        &::before{
          background: #B3D9FF;
        }
      }
    }

  .number{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #fff;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #CFD3DE;
    &::before{
      content: '';
      position: absolute;
      width: 51px;
      height: 51px;
      border-radius: 50%;
      z-index: -1;
    }

  }
  }

}
</style>