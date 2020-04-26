<template>
  <div class="home">
    {{msg}}
  </div>
</template>

<script lang="ts" >
import {Vue, Component} from 'vue-property-decorator'
@Component({})
export default class Home extends Vue {
  public msg = 'hello'
}
</script>