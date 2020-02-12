import axios from 'axios'

const url = 'http://localhost:5000/api/posts/';

class PostService {
    //get
  static getPosts() {
          return new Promise((resolve, reject) => {
            try{ 
            (async () => {
            const res = await axios.get(url)
            const data = res.data
            resolve(
                data.map(post => ({
                    ...post,
                    createdAt: new Date(post.createdAt)
                }))
            )
            })
            }catch (err){
              reject(err)
            }
  })
}


//   async function myFunction() {
//     let array = await getAsyncArray();
//     return new Promise((resolve, reject) => {
//       eachLimit(array, 500, (item, callback) => {
//         // do other things that use native promises.
//       }, error => {
//         if (error) return reject(error);
//         // resolve here passing the next value.
//       });
//     });
//   }









//     //add
//    static insertPost(text){
//        return axios.post(url, {
//             text
//        })
//    }
//     //update
//     static updatePost(id){
//         return axios.put(`${url}${id}`, {
//              text
//         })
//     }
//     //delete
//     static deletePost(id){
//         return axios.delete(`${url}${id}`)
//     }
}

export default PostService;