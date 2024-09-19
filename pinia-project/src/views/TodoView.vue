<template>
    <h3 style="width: 500px; text-align: center; margin-inline-start: 40px;">Add List</h3>
    <form @submit.prevent="todoStore.addTodo(newTodo)">
        <input type="text"  v-model="newTodo" placeholder="add new todo">
        <input type="submit" value="Add">
    </form>
    <div style="width: 500px; padding-inline-start: 40px;">
        <h3 style="text-align: center;">List Matkul</h3>
    </div>
    <div class="getters-button">
        <button @click="show = 'show'">Show All</button>
        <button @click="show = 'done'">Done</button>
        <button @click="show = 'undone'">Undone</button>
    </div>
    <div v-if="show == 'show'">
        <ul>
            <li v-for="item in todoStore.showAll">
                <span>
                    {{ item.name }}
                </span>
                <span>
                    <button v-if="!item.isDone" @click="todoStore.setAsDone(item.name)">set as done</button>
                    <button v-if="item.isDone" @click="todoStore.setAsUnDone(item.name)">set as undone</button>
                </span>
            </li>
        </ul>
    </div>
    <div v-if="show == 'done'">
        <ul>
            <li v-for="item in todoStore.done">
                <span>
                    {{ item.name }}
                </span>
                <span>
                    <button v-if="!item.isDone" @click="todoStore.setAsDone(item.name)">set as done</button>
                    <button v-if="item.isDone" @click="todoStore.setAsUnDone(item.name)">set as undone</button>
                </span>
            </li>
        </ul>
    </div>
    <div v-if="show == 'undone'">
        <ul>
            <li v-for="item in todoStore.unDone">
                <span>
                    {{ item.name }}
                </span>
                <span>
                    <button v-if="!item.isDone" @click="todoStore.setAsDone(item.name)">set as done</button>
                    <button v-if="item.isDone" @click="todoStore.setAsUnDone(item.name)">set as undone</button>
                </span>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .getters-button{
        display: flex;
        justify-content: center;
        gap: 10px;
        width: 500px;
        padding-inline-start: 40px;
    }
    .getters-button button{
        padding: 10px;
    }
    form{
        width: 500px;
        padding-inline-start: 40px;
        margin-bottom: 40px;
    }
    form input{
        padding: 10px;
    }
    form input:first-child{
        width: 80%;
        margin: 0px 10px;
    }
    ul{
        list-style: none;
        width: 500px;
    }
    li{
        border: 1px solid black;
        margin: 10px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }
</style>
<script>
    import {useTodoStore} from '../stores/TodoStore'

    export default {
        setup(){
            const todoStore = useTodoStore()
            return {todoStore}
        },
        data(){
            return {
                newTodo: '',
                show: 'show'
            }
        }
    }
</script>