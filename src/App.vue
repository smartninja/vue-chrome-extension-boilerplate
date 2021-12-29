<template>
  <div class="app">
    <h1>SmartNinja Chrome Extension</h1>

    <template v-if="domIsReady">
      <p>Hello Ninja! :)</p>
    </template>
  </div>
</template>

<script>
import { domIsReady } from './utils/chrome'

export default {
  components: {},
  data() {
    return {
      domIsReady: false,
      tabId: ''
    }
  },
  mounted() {
    this.awaitReady()
  },
  methods: {
    async awaitReady() {
      await domIsReady()
      this.domIsReady = true
    },
  },
}
</script>

<style>

</style>