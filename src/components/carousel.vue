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
      slides: [
        {
          title: 'I am Slide A',
          id: 1
        },
        {
          title: 'I am Slide B',
          id: 2
        },
        {
          title: 'I am Slide C',
          id: 3
        },
        {
          title: 'I am Slide D',
          id: 4
        },
        {
          title: 'I am Slide E',
          id: 5
        }
      ]
    }
  },
  methods: {
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }
  }
}
</script>
<style>
.carousel-view {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  width: 100%;
  min-height: 25em;
}
.slide {
  flex: 0 0 20em;
  height: 20em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1em dashed #000;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}

</style>