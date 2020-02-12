<template>
<div>
  <h1 style="color: white">Welcome to Vue Hobby</h1>
    <div class="container">
            
        <div class="col-xs-10 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
             <form>
            <div class="row">
                <div class="col-xs-10 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="form-group">
                        <label for="age" style="font-size: 15px; color:white">First Name</label>
                        <input
                                type="text"
                                id="firstname"
                                class="form-control"
                                v-model="firstname"
                                 style="font-size: 15px">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-10 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="form-group">
                        <label for="age" style="font-size: 15px; color:white">Last Name</label>
                        <input
                                type="text"
                                id="lastname"
                                class="form-control"
                                v-model="lastname"
                                 style="font-size: 15px">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-10 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="form-group">
                        <label for="age" style="font-size: 15px; color:white">Hobby</label>
                        <input
                                type="text"
                                id="title"
                                class="form-control"
                                v-model="title"
                                style="font-size: 15px">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-10 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="form-group">
                        <label for="age" style="font-size: 15px; color:white">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="age"
                                 style="font-size: 15px">
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="button">
        <button v-if="isEdit === false" @click.prevent="submit">Add new record</button>
        <button type="submit" v-else @click.prevent="update"> Update record</button>
        </div>
                </div>
            </div>
             </form>
        </div>
      <div class="wrapper"
        v-for="item in hobbydb"
        :key="item.id">
         <table class="table table-bordered table-light">
  <thead>
    <tr>
      <th scope="col" style="font-size: 20px"></th>
      <th scope="col" style="font-size: 20px">First Name</th>
      <th scope="col" style="font-size: 20px">Last Name</th>
      <th scope="col" style="font-size: 20px">Hobby</th>
      <th scope="col" style="font-size: 20px">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td style="font-size: 15px"> {{item.firstname}} </td>
      <td style="font-size: 15px"> {{item.lastname}} </td>
      <td style="font-size: 15px"> {{item.title}} </td>
      <td style="font-size: 15px"> {{item.age}} </td>
      <td>
            <button v-on:click="edit(item.id, item.title, item.firstname,
             item.lastname, item.age)" class=" btn btn-info ">Edit</button>
            <button v-on:click="deleteRecord(item.id)" class=" btn btn-danger ">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
   name: 'Hobby',
   data () {
     return {
       hobbydb: [],
       error: '',
       title:'',
       firstname:'',
       lastname:'',
       age:'',
       id: '',
       isEdit: false,
     }
   },
   created () {
     axios.get('http://localhost:1337/hobbydb')
     .then((response) => {
       console.log(response.data);
       this.hobbydb = response.data
     }).catch((error)=>{
       console.log(error)
     })
   },
   methods: {
        submit () {
    let newdata = {
       title: this.title,
    firstname: this.firstname,
    lastname: this.lastname,
    age: this.age
    }
    console.log(newdata)
    axios.post('http://localhost:1337/hobbydb', newdata )
    .then((response) => {
       console.log(response.data);
     }).catch((error)=>{
       console.log(error)
     })
      window.location.reload()
   },
       edit(id, title, firstname,
       lastname, age) {
          this.id = id
          this.title = title,
          this.firstname = firstname,
          this.lastname = lastname,
          this.age = age
          this.isEdit = true
       },
       
       update () {
            let newdata = {
            title: this.title,
            firstname: this.firstname,
            lastname: this.lastname,
            age: this.age
    }
        console.log(newdata)
        axios.put(`http://localhost:1337/hobbydb/${this.id}`, newdata )
        .then((response) => {
       console.log(response.data);
        }).catch((error)=>{
        console.log(error)
        })
        window.location.reload()
       },

       deleteRecord (id) {
        axios.delete(`http://localhost:1337/hobbydb/${id}`)
        .then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
        window.location.reload()
       }
   },
}
</script>
<style>
.container {
    background-color: rgb(80, 81, 117);
    padding: 20px
}
.form{
    margin-top: 10px;
}
.table{
    margin: 10px;
    margin-left: 0px
}
.button button{
  border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
    width: 85%;
    height: 50px; 
    border-radius: 10px;
    outline: none;
    font-size: 15px;
    margin-bottom: 10px
}
   .button button:hover,
   .button button:active {
    background: rgb(53, 152, 177);
    color: white;
  }
  .button button[disabled],
  .button button[disabled]:hover,
  .button button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>
