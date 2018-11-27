<template>
<carousel :perPageCustom="[[768, 3], [1024, 4]]"
          :navigationEnabled="true"
          :autoplay="true">
  <slide>
    Slide 1 Content
  </slide>
  <slide>
    Slide 2 Content
  </slide>
    <slide>
    Slide 3 Content
  </slide>
  <slide>
    Slide 4 Content
  </slide>
    <slide>
    Slide 5 Content
  </slide>
  <slide>
    Slide 6 Content
  </slide>
   <slide>
    Slide 1 Content
  </slide>
  <slide>
    Slide 2 Content
  </slide>
    <slide>
    Slide 3 Content
  </slide>
  <slide>
    Slide 4 Content
  </slide>
    <slide>
    Slide 5 Content
  </slide>
  <slide>
    Slide 6 Content
  </slide>
</carousel>
</template>
<script>
/**
 * Pagina con el carrousel 
 * https://ssense.github.io/vue-carousel/api/
 */
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  },
    
  data () {
    return {
     
    }
  }
}

</script>
<style>
</style>