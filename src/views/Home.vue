<template>
  <div class="home">

<div>我是子组件的页面</div>
<p>{{Msg}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  
  props:["Msg"]
});
</script>
