<template>
    <div class="hello">
        <div>我是全局属性 {{gloname}}</div>
        <button v-on:click="testEmit">发射事件</button>
    </div>
</template>

<script>
export default {
  name: 'GlobalCom',
    data: function () {
      return {
        comname: 'globalname'
      }
    },
    props: {
        gloname:String
    },
    methods: {
        testEmit: function() {
            alert("ready")
            this.$emit("demo-emit")
        }
    },
    computed: {
    }
}
</script>

<style>
</style>

