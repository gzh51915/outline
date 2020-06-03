<template>
  <button>
      <slot/>
      <div class="footer"><slot name="footer"/></div>
  </button>
</template>
<script>
export default {
};
</script>