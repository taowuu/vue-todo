<template>
  <div>
    <h1 style="font-size: 60px; color: rgba(0,0,0,0.7);"> Todo </h1>
    <nav>
      <router-link id="a1" to="/">create todo</router-link>
      <router-link id="a2" to="/todo-info">todo info</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
div {
  margin: 0 auto;
  width: 500px;
  text-align: center;

}
a {
  text-decoration: none;
  color: white;
  background-color: #1ba1e2;
  font-size: 25px;
  width: 170px;
  padding: 4px;
  /* padding-left: 1px; */
  border-radius: 2px;
}
nav {
  overflow: hidden;
  /* border: 1px solid red; */
}
#a1 {
  float: left;
  margin-left: 65px;
}
#a2 {
  float: right;
  margin-right: 65px;

}
</style>
