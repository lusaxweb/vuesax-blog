---
sidebar: auto
title: Solution to loss of the `this` scope in Vuejs
date: 2019-05-21 24:54:00
excerpt: Solutions not to lose the global scope of vuejs 'this'.
autor: luisDanielRoviraContreras
type: post
tips: true
tags:
  - es6
  - vue
  - this
---

In the past we have a global scope `this` with which we can access the parent object of our beloved vuejs properties, functions, global variables, computed ...

there are times when the scope changes and we can not avoid it or we need it to be that way, for example a case like this:

```html
<script>
export default {
    data:() => ({
        myData: 1
    }),
    mounted() {
        this.myMethod()
    },
    methods:{
        myMethod() {
            window.addEventListener('click', function() {
                console.log('this >', this.myData)
            })
        }
    }
}
</script>
```

in the anterion code we are calling the method `myMethod` and adding an event to the global object` window` so far all perfect but when inside a javascript function that changes the scope to itself our `this` of times changes giving us an error

To solve this there are several options that we can choose, of course, this is in each developer

## Arrow functions

in the modern javascript we now have arrow functions that help us in a simpler and minified syntax of the functions but apart from that the arrow functions do not have a scrope which means that it will not change our `this` of vuejs more or less our function is I would see it to work perfectly

```html{11}
<script>
export default {
    data:() => ({
        myData: 1
    }),
    mounted() {
        this.myMethod()
    },
    methods:{
        myMethod() {
            window.addEventListener('click', () => {
                console.log('this >', this.myData)
            })
        }
    }
}
</script>
```

## Create Var

Also a solution if you need specifically the scope of the event or we can not use arrow functions is to create a variable that contains our object `this` of vuejs

```html{8,9,10}
<script>
export default {
    mounted() {
        this.myMethod()
    },
    methods:{
        myMethod() {
            let _this = this
            let self = this
            let that = this
            window.addEventListener('click', function() {
                console.log('this scope (function) >', this)
                console.log('this scope (vuejs) >', _this)
                console.log('this scope (vuejs) >', self)
                console.log('this scope (vuejs) >', that)
            })
        }
    }
}
</script>
```

the variable that contains our `this` object can really be any name, the three examples in the previous code are the most used for a convention in the code, for example in my case I use` _this` because it seems very reprecentative and intuitive

## Bind method

Another not so conventional way in these times having the new arrow functions is to use bind (myScope) to assign a scope to instantiate, let's see what an example would look like:

```html{10}
<script>
export default {
    mounted() {
        this.myMethod()
    },
    methods:{
        myMethod() {
            window.addEventListener('click', function() {
                console.log('this scope (vuejs) >', this)
            }.bind(this))
        }
    }
}
</script>
```

## Wrapping up

These are the three forms that I think are or would be the most usable and functionally viable to develop with vuejs and have everything more clear and resolved

although there may be more ways that are what I would use and therefore I share


