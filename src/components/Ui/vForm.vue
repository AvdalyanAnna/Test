<template>
  <form action="#">
    <h1>{{vTitle}}</h1>
    <p>{{vDescription}}</p>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "vForm",
  props:{
    vTitle:{
      type:String,
      default:"Войти"
    },
    vDescription:{
      type:String,
      default: "Для того чтобы идентифицировать себя в системе, нужно ввести номер своего мобильного телефона"
    }
  }
}
</script>

<style lang="scss" scoped>
form{
  max-width: 370px;
  width: 100%;
  margin: 0 auto;
  h1{
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    color: #38455D;
  }
  p{
    font-size: 14px;
    line-height: 20px;
    margin: 13px 0 18px;
  }
}
</style>