<script setup>
import { ref } from 'vue'

const { initialCount } = defineProps({
  msg: String,
  initialCount: Number,
});

const methods = ref({
  increment: () => {
    console.log('increment');
    count.value++;
  },
});

const count = ref(initialCount || 0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="methods.increment">The count is: {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
