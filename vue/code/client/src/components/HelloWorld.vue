<template>
  <div class="hello">
    <div>{{teststr}}</div>

    <div v-html="message"></div>

    <p v-if="seen == 1">you can see me</p>
    <p v-else-if="seen == 2">you can see me 2</p>
    <p v-else> you can not see me</p>

    <pre><a v-bind:href="url">v-bind可以响应更新HTML属性，class，id，href，style等</a></pre>

    <input v-on:keyup.space="submit" type='v-model则是双向绑定，可用于input，select，textarea等' v-model='inputmsg'/>

    <button v-on:click="reverseMessage">v-on绑定监听事件，反转字符串</button>
    <!-- <button v-on:click.right="reverseMessage">v-on绑定监听事件，反转字符串</button> -->

    <div>{{teststr | daxie}}</div>

    <a :href="url">v-bind:可以直接缩写成:</a>
    <button @click="reverseMessage">v-on:可以缩写1成@</button>

    <ul>
      <li v-for="n in 10" :key="n">
        {{n}}
      </li>
    </ul>

    <ul>
      <li v-for="site in sites" :key="site.name">
        {{site.name}}
      </li>
    </ul>
    <ul>
      <li v-for="(site, key, index) in object" :key="site">
        {{key}} | {{site}} | {{index}}
      </li>
    </ul>

    <p>computed实例{{computed1}}</p>
    <p>computed实例,反转字符------:{{fanzhuan}}</p>
    <p>method是全刷新，而method会在相关的依赖属性发生改变时刷新</p>


    属性监听使用watch，类似setter
    千米：<input type='text' v-model='kilometers'>
    米  ：<input type='text' v-model="meters">

    <LocalCom v-bind:name2="teststr" newName='prop传值只能自上而下，不能从子级传到父级'></LocalCom>
    <GlobalCom @demo-emit="testtestemitcb" gloname="hahaha"></GlobalCom>
  </div>
</template>

<script>
import LocalCom from './LocalCom'
import GlobalCom from './GlobalCom'

export default {
  name: 'hello',
  components: {
    LocalCom,
    GlobalCom
  },
  data () {
    return {
      teststr: 'abcd',
      message: '<p>nice</p>',
      seen: 2,
      url: 'http://www.runoob.com',
      inputmsg: 'v-model则是双向绑定',
      sites: [
        {name: 'nameA'},
        {name: 'nameB'},
        {name: 'nameC'}
      ],
      object: {
        name: 'cai niao',
        url: 'http://www.runoob.com',
        slogan: 'you can just do it!'
      },
      computed1: 'abcde',
      kilometers: 0,
      meters: 0
    }
  },
  methods: {
    reverseMessage: function () {
      this.teststr = this.teststr.split('').reverse().join('')
    },
    testtestemitcb: function() {
      alert("子级传递事件到父级，需要将注册事件绑定到该组件上，因为内部的emit是用this来发射的！所以也只能在里面注册，但内部注册是不会被触发到，神tm奇")
    }
  },
  computed: {
    fanzhuan: function () {
      let str = this.inputmsg + ' | ' + this.computed1
      return str.split('').reverse().join('')
    }
  },
  filters: {
    daxie: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  watch: {
    kilometers: function (val) {
      this.kilometers = val
      this.meters = this.kilometers * 1000
    },
    meters: function (val) {
      this.meters = val
      this.kilometers = val / 1000
    }
  },
  mounted() {
    this.$on("demo-emit", ()=>{
      alert(3)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
