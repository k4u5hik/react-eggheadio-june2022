---
id: 77l2cisli3p4nctt8hozff9
title: '2022-06-24'
desc: ''
updated: 1656067185748
created: 1656067172881
traitIds:
  - journalNote
---

## Using lazy initializer with useState

In review, the problem that we're solving here is that reading into localStorage is not necessary, except for the initial render of our component. We turn our initial value argument here into a function so that React will call it only when it's necessary to get that initial value, which is only on the first render.
