  <template>
  <div id="signin">
    <div class="container-fluid">
    <div class="container">
      <div class="formBox">
        <form @submit.prevent="onSubmit">
            <div class="row">
              <div class="col-sm-12">
                  <router-link to="/"><h2>Don't have an account / Click to SignUp</h2></router-link>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="inputBox">
                  <label for="email" style="font-size: 15px; margin-top: 20px">Email</label>
                  <input type="email" id="email"  v-model="email" class="input">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="inputBox">
                  <label for="password" style="font-size: 15px; margin-top: 20px">Password</label>
                  <input type="password" id="password"  v-model="password" class="input">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="button">
                  <button type="submit">Sign In</button>
                  </div>
              </div>
            </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  </template>
  <script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }
        console.log(formData)
        this.$store.dispatch('login', {email: formData.email, password: formData.password})
      }
    }
  }
  </script>
  <style>
  .container{
  width: 50%;
  margin-bottom: 60px
  }
  .formBox{
  margin-top: 40px;
  padding: 40px;
  }
  .formBox  h2{
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 50px;
  font-size: 20px;
  }
  .inputBox{
  position: relative;
  box-sizing: border-box;
  margin-bottom: 50px;
  }
  .inputBox .inputText{
  position: absolute;
    font-size: 24px;
    line-height: 50px;
    transition: .5s;
    opacity: .5;
  }

  .inputBox .input{
  position: relative;
  width: 100%;
  height: 50px;
  background: transparent;
  border: none;
    outline: none;
    font-size: 15px;
    border-bottom: 1px solid rgba(0,0,0,.5);

  }
  .focus .inputText{
  transform: translateY(-30px);
  font-size: 18px;
  opacity: 1;
  color: #dce9eb;

  }
  textarea{
  height: 100px !important;
  }
  .button button{
  border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
    width: 100%;
    height: 50px; 
    border-radius: 10px;
    outline: none;
    font-size: 15px
  }
    .button button:hover,
    .button button:active {
      background: rgb(81, 199, 91);
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