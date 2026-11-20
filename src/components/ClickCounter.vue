<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="mt-6 flex items-center gap-3 rounded-xl bg-white/80 p-3 shadow-sm">
    <span class="text-sm text-gray-600">Vue + Tailwind island:</span>
    <button
      type="button"
      class="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-500"
      @click="count++"
    >
      Clicked {{ count }} times
    </button>
  </div>
</template>
