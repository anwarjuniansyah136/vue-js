import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo',{
    state : () => ({
        todolist: [
            {name:'Belajar HTML',isDone:false},
            {name:'Belajar CSS',isDone:false},
            {name:'Belajar JavaScript',isDone:false},
            {name:'Belajar PHP',isDone:false},    
        ]
    }),
    getters: {
        showAll(state){
            return state.todolist
        },
        done(state){
            return state.todolist.filter(item => item.isDone == true)
        },
        unDone(state){
            return state.todolist.filter(item => item.isDone == false)
        }
    },
    actions:{
        setAsDone(name){
            this.todolist.find(item => item.name == name).isDone = true
            // this.todolist[index].isDone = true
        },
        setAsUnDone(name){
            this.todolist.find(item => item.name == name).isDone = false
            // this.todolist[index].isDone = false
        },
        addTodo(data){
            let exist = this.todolist.filter(item => item.name == data)
            if(exist){
                alert("data ini sudah dipakai")
                return
            }
            this.todolist.push({
                name: data,
                isDone:false
            })
        }
    }
})