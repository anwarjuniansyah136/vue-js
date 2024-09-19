<template>
    <h1>ini halaman user {{$route.params.name}}</h1>
    <br>
    <RouterLink :to="'/user/' + $route.params.name + '/posts'">{{$route.params.name}}'s posts</RouterLink>
    <br>
    <RouterLink :to="'/user/' + $route.params.name + '/profil'">{{$route.params.name}}'s profil</RouterLink>
</template>