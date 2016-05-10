<template lang="jade">

div(
  v-bind:class="'Ripple ' + ( animate ? 'is-reppling' : '' )"
  v-bind:style="{ top: top + 'px', left: left + 'px', width: width + 'px', height: height + 'px'}" )

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


  require('../../sass/_Ripple.sass');

  export default {

    props: {
      cursorPos: {
        type: Object,
        default: {
          top: 0,
          left: 0
        },
        required: true
      }
    },

    data(){
      return{
        animate: false,
        width: 0,
        height: 0,
        top: 0,
        left: 0
      }
    },

    watch: {
      cursorPos(val,old) {
        // If Has Animated, set state to "false" First
        if(this.animate){
          this.animate = false
          // Wait for DOM update
          this.$nextTick(() => {
            this.reppling(val) // Then Reppling
          })
        }
        // else, Do Reppling
        else this.reppling(val)
      }
    },

    methods: {
      reppling(cursorPos){

        // Get the element
        let $ripple = this.$el
        let $button = $ripple.parentElement

        let buttonStyle = window.getComputedStyle($button)
        let buttonPos = $button.getBoundingClientRect()

        let buttonWidth = $button.offsetWidth
        let buttonHeight = $button.offsetHeight

        // Make a Square Ripple
        let rippleWidthShouldBe = Math.max(buttonHeight,buttonWidth)

        // Make Ripple Position to be center
        let centerize = rippleWidthShouldBe / 2

        this.animate = true
        this.width = rippleWidthShouldBe
        this.height = rippleWidthShouldBe
        this.top = cursorPos.top - buttonPos.top - centerize
        this.left = cursorPos.left - buttonPos.left - centerize
      }
    }

  };

</script>
