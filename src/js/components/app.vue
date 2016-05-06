
<template lang="jade">

div
  h1( align="center") Vue Ripple

  ripple-button Click On Me!

  h4( align="center" )
    a( href="https://github.com/BosNaufal/vue-ripple" ) Fork Me On Github!

</template>

<script>

  require('../../sass/main.sass');
  import { rippleButton } from './index.js';

  export default {
    components: { rippleButton }
  };


</script>
