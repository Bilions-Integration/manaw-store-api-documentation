<template>
  <div class="left-sidebar">
    <div class="p-5">
      <!--  -->
      <div class="lists">
        <div class="list" v-for="(list, index) in lists" :key="index">
          <router-link class="single-a" :to="list.path" v-if="list.path">{{
            list.name
          }}</router-link>
          <span v-else>{{ list.name }}</span>
          <template v-if="list.sub_lists">
            <ul>
              <li v-for="(sub, subIndex) in list.sub_lists" :key="subIndex">
                <router-link :to="sub.path">{{ sub.name }}</router-link>
              </li>
            </ul>
          </template>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import lists from "./sidebars";
export default {
  data() {
    return {
      lists,
    };
  },
};
</script>

<style scoped>
.left-sidebar {
  width: 230px;
  background: white;
  position: fixed;
  left: 0px;
  bottom: 0px;
  top: 50px;
  border-right: 2px solid #f9f9f9;
  overflow: auto;
  padding-top: 30px;
}
.lists {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #767676;
  padding: 7px 10px;
  border-radius: 10px;
  cursor: pointer;
}

.list span {
  font-size: 14px;
}

.list ul {
  margin-top: 10px;
  margin-left: -45px;
  list-style: none;
}

.list ul li {
  padding: 5px;
  color: #767676;
  font-size: 13px;
}

.list ul li a {
  color: #767676;
  text-decoration: none;
}

.list ul li a.active {
  color: rgb(78, 78, 228);
}

.list .single-a {
  color: #767676;
  text-decoration: none;
}

.list .single-a.active {
  color: rgb(78, 78, 228);
}

.list span {
  color: rgb(24, 24, 24);
}

.list.active span {
  color: rgb(24, 24, 24);
  font-weight: bold;
}

.mr-3 {
  margin-right: 10px;
}

.mb-3 {
  margin-bottom: 10px;
}

.p-5 {
  padding: 20px;
}
</style>