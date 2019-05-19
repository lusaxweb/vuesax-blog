---
sidebar: auto
title: Date in more simple times
date: 2019-05-19 14:15:00
excerpt: Data is a property that we normally use in almost all the components in the past, to simplify further the implementation in our code we can do thanks to the new syntax of es6 and the arrow functions.
autor: luisDanielRoviraContreras
type: post
tips: true
tags:
  - Data
  - es6
  - vue
---

Data is a property that we normally use in almost all the components in the past, to simplify further the implementation in our code we can do thanks to the new syntax of es6 and the arrow functions

Let's see the example of how it is usually used and how we can make it simpler

### Traditional

```html
/*
Template ...
*/

<script>
export default {
  data () {
    return {
      myDataProp: 0
    }
  },
}
</script>

/*
Styles ...
*/
```

### A little simpler

```html
/*
Template ...
*/

<script>
export default {
  data:() => ({
    myDataProp: 0
  }),
}
</script>

/*
Styles ...
*/
```
