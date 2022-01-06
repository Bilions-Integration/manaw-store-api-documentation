<template>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sapiente
    tempore in labore repellendus aut odio mollitia ut temporibus voluptatum,
    nostrum, blanditiis praesentium quos nobis illum culpa voluptatem vero
    repudiandae.
  </div>
</template>


<script>
export default {
  watch: {
    $route: function () {
      this.init();
    },
  },
  data() {
    return {
      page: null,
      html: "",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.page = this.$route.params.type;
      console.log(this.page);
    },
  },
};
</script>