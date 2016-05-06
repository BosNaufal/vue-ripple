# Vue Ripple
[Vue](http://vuejs.org/) Component to Make Google Material Design Ripple Effect. It's adopted from [angular-ripple](https://github.com/nelsoncash/angular-ripple)

[DEMO](https://bosnaufal.github.io/vue-ripple)

## Install
You can import [vue-ripple](./src/js/components/index.js) to your vue component file like [this](./src/js/components/app.js) and process it with your preprocessor.;


You can install it via NPM
```bash
npm install vue-ripple
```


## Usage
Usage With Predefined Ripple Button
```html

<template>
  <div>
    <ripple-button> Click On Me! </ripple-button>
  </div>
</template>

<script>

  require('../../sass/main.sass');
  import { rippleButton } from './index.js';

  export default {
    components: { rippleButton }
  };

</script>
```

Usage Standalone Ripple Component
```html
<template>
  <button
    class="Ripple-parent"
    @mouseup="handleClick"
    @touchend="handleClick">
      Click On Me!
      <ripple v-bind:cursor-pos="cursorPos"></ripple>
  </button>
</template>


<script>

  import { ripple } from 'vue-ripple';

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
```

## Props
##### cursorPos (Object)
You need to describe the cursor position ( when parent is clicked ) with the structure like the object bellow
```javascript
let cursorPos = {
  top: e.clientY,
  left: e.clientX
}
```

## Thank You for Making this useful~

## Let's talk about some projects with me
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
