<template>
  <div class="menu">
    <Navbar />
  </div>

  <div class="main">
    <RouterView />
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';

  export default {
    components : {
      Navbar
    }
  }
</script>

<style>
  body{
    margin: 0;
  }
</style>

<style scoped>
  .menu{
    background-color: #eee;
    line-height: 2.5;
  }
  .main{
    padding: 10px;
  }
</style>

<!-- <template>
  <Student @response="(whatever) => selectedStudent = whatever" studentName="Andi" />
  <br>
  <Student @response="(whatever) => selectedStudent = whatever" studentName="Budi" />
  <br>
  <Student @response="(whatever) => selectedStudent = whatever" studentName="Ani" />
  <Student @response="showData" studentName="Andi">ini adalah nilai slot dari parent</Student>
  <br>
  <Student @response="showData" studentName="Budi"></Student>
  <br>
  <Student @response="showData" studentName="Ani"></Student>
  <p>Student yang di pilih adalah {{ selectedStudent }}</p>
</template>

<script>
  import Student from './components/Student.vue'

  export default{
    components : {
      Student
    },
    data(){
      return {
        selectedStudent: ''
      }
    },
    methods : {
      showData(whatever){
        this.selectedStudent = whatever
      }
    }
  }
</script> -->