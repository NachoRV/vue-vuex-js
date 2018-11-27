<template>
  <div class="about">
    <h1>This is an about page</h1>
    <carousel></carousel>
  </div>
</template>
<script>
  import carousel from '@/components/carousel.vue';
  export default {
  name: 'about',
  components: {
    carousel,
  },
};
</script>