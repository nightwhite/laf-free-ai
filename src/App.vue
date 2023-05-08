<script setup>
import { RouterView } from "vue-router";
import { getCurrentInstance } from 'vue';
const { proxy } =getCurrentInstance();
const cloud = proxy.$cloud;

// const test = async () =>{
//   console.log(111);
//   const db = cloud.database();
//   const _ = db.command
//   // const res = await db.collection('test').get();
//   const res = await db.collection('test').aggregate()
//   .lookup({
//     from: 'test2',
//     localField: 'name',
//     foreignField: 'name',
//     as: 'test21',
//   })
//   .end();

//   console.log(res);
// }
// test();
</script>

<template>
  <RouterView />
</template>

<style scoped>
html{
  padding: 0;
  margin: 0;
}
</style>
