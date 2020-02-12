<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <div class="create-post">
    <label for="create-post">Add new Post..</label>
    <input type ="text" id="create-post" v-model="text">
    <button v-if="this.isEdit == false" @click.prevent = "submit">Submit</button>
    <button v-else type="button" @click.prevent="updatePost" class="btn btn-primary btn-block  mt-3">
              Update
            </button>
    </div>
    <hr>
    <p class="error" v-if="error">{{error}}</p>
    <div class="posts-container">
     <div class="post"
     v-for="(hobbydb, index) in hobbydbs"
     :item= "hobbydb"
     :index= "index"
     :key="hobbydb._id">
      <p class="text">{{hobbydb.title}}</p>
      <!-- <button v-on:click="editPost(post.text, post._id)" class=" btn btn-info ">Edit</button>
     <button @click="deletePost(post._id)" class="btn btn-danger">Delete</button> -->
     </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PostComponent',
   data () {
     return {
       hobbydbs: [],
       error: '',
       text: '',
       id: '',
       isEdit: false
     }
   },
   created () {
     axios.get('http://localhost:1337/hobbydb')
     .then((response) => {
       console.log(response.data);
       this.posts = response.data
     }).catch((error)=>{
       console.log(error)
     })
   },
//    methods: {
//      submit () {
//     let newdata = {
//       text: this.text
//     }
//     console.log(newdata)
//     axios.post('http://localhost:5000/api/posts', newdata )
//     .then((response) => {
//        console.log(response.data);
//      }).catch((error)=>{
//        console.log(error)
//      })
//       window.location.reload()
//    },
//    deletePost (id) {
//      axios.delete(`http://localhost:5000/api/posts/${id}`)
//     .then((response)=>{
//       console.log(response)
//     }).catch((error)=>{
//       console.log(error)
//     })
//     window.location.reload()
// },
   editPost(text, id) {
        this.id = id
      this.text = text
      this.isEdit = true
     
   },
//     updatePost() {
//       axios.put(`http://localhost:5000/api/posts/${this.id}`,{text:this.text})
//        .then((response) => {
//          this.isEdit = false
//        console.log(response.data);
//      }).catch((error)=>{
//        console.log(error)
//      })
//       window.location.reload()
//     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding:  10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color:  #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
