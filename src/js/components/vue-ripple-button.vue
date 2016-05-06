<template lang="jade">

button(
  ref="button"
  class="Ripple-parent"
  @mouseup="handleClick"
  @touchend="handleClick")

  slot

  ripple( v-bind:cursor-pos="cursorPos" )

</template>


<script>

/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
  * Licensed Under MIT (http://opensource.org/licenses/MIT)
  *
  * Vue Ripple - Version 1.0.0
  *
  * Adopted from : https://github.com/nelsoncash/angular-ripple
  *
  */

  import ripple from './vue-ripple.vue';

  export default {

    data(){
      return{
        cursorPos: {}
      }
    },

    components: { ripple },

    methods: {
      handleClick(e){
        // Get Cursor Position
        this.cursorPos = {
          top: e.clientY,
          left: e.clientX
        }
      }
    }

  };

</script>
