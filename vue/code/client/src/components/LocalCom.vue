<template>
    <div>我是局部属性 {{newName}} 动态获取 {{name2}}</div>
</template>

<script>
export default {
  name: 'LocalCom',
    data () {
      return {
        comname: 'localname'
      }
    },
    props: {
        newName: String,
        name2:String
    }
}
</script>

<style>
</style>

