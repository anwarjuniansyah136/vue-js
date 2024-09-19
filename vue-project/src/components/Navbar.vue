import { RouterView } from 'vue-router';

import { RouterLink } from 'vue-router';
<template>
  <RouterLink to="/">DashBoard</RouterLink>
  <RouterLink to="/about">about</RouterLink>
  <RouterLink to="/user">user</RouterLink>
</template>

<style scoped>
    a{
        margin-left: 10px;
        text-decoration: none;
        color: blue;
    }
    a:hover{
        color: red;
        text-decoration: underline;
    }
</style>