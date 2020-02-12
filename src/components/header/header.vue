<template>
<div>
  <header id="header2">
    <div class="logo2">
      <router-link to="/"><h1>Vue Hobby</h1></router-link>
    </div>
    <nav>
      <ul>
        <li v-if="!auth">
          <router-link to="/">Sign Up</router-link>
        </li>
        <li v-if="!auth">
          <router-link to="/signin">Sign In</router-link>
        </li>
        <li v-if="auth">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
         <li v-if="auth">
         <button class="logout" @click="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</div>
</template>
<script>
export default {
  computed: {
      auth () {
         return this.$store.getters.isAuthenticated
      }
  },
  methods: {
      logout () {
          this.$store.dispatch('logout')
      }
  },
}
</script>
<style scoped>
  #header {
    height: 40px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 0 20px;
  }
#header2 {
    height: 80px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color:   #898cbb;
    padding: 0 20px;
     /* #898cbb; */
  }
  .logo2 {
    font-weight: bold;
    color: black;
    margin-left: 50px;
    padding: 10px;
    margin-top: 10px;
    font-family: Bellefair;
  }
  .logo2 a {
    font-weight: bold;
    text-decoration: none;
    color: black;
  }
  .logo a {
    text-decoration: none;
    color: #1c2b40;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: #36425c;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 18px
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: rgb(81, 51, 151);
  }
.logout{
    background-color: transparent;
    border: none;
    font-size: 15px;
    color: rgb(69, 78, 163);
    cursor: pointer;
}
.logout:hover{
      color: red
}
</style>