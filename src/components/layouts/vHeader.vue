<template>
  <header>
  <div class="wrapper">
    <div class="logo">
      <router-link to="/">
        <img :src="require('@/assets/images/logo.svg')" alt="Logo">
      </router-link>
    </div>
  </div>
  </header>
</template>

<script>
export default {
  name: "vHeader"
}
</script>

<style lang="scss" scoped>
.logo{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
}
</style>