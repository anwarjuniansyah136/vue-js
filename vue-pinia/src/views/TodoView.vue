<template>
    <h1>ini halaman list</h1>
    <br>
    {{ todoStore.count }}
    <br>
    <button @click="todoStore.increment">Add</button>
</template>

<script>
    import { useTodoStore } from '../stores/todoStore'

    export default {
        setup(){
            const todoStore = useTodoStore()

            return { todoStore }
        }
    }
</script>