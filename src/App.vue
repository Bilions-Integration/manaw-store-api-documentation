<template>
  <div>
    <div class="navbar">
      <div class="logo">
        <img src="/logo.png" class="mr-3" alt="" style="width: 35px" />
        <div class="logo-text-div">
          <small>&nbsp;</small>
          <span class="logo-text">Manaw Store</span>
          <small>Developer</small>
        </div>
      </div>
    </div>
    <LeftSideBar />
    <div class="main-content">
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>


<script>
import LeftSideBar from "./components/LeftSideBar.vue";
export default {
  components: {
    LeftSideBar,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #f9f9f9;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.905);
}

.navbar {
  height: 60px;
  background: rgb(79 78 227);
  position: fixed;
  left: 0px;
  bottom: 0px;
  top: 0px;
  width: 100%;
  z-index: 2;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 20px;
}

.logo-text-div {
  display: flex;
  flex-direction: column;
}
.logo-text-div small {
  font-size: 8px;
  position: relative;
  top: -5px;
}
.logo-text {
  font-family: "The Nautigal", cursive;
  font-size: 25px;
  margin-bottom: 0px;
}

.main-content {
  margin-left: 230px;
  margin-top: 60px;
  padding: 20px;
}
.main-content .container {
  max-width: 900px;
  margin: 0 auto;
}
</style>