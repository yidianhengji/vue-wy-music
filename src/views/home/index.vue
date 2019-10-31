<template>
  <div>{{data}}</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {}
    };
  },
  mounted() {
    this.submiBtn();
  },
  methods: {
    submiBtn() {
      axios
        .get("http://localhost:3000/user/detail?uid=123360043")
        .then(response => {
          this.data = response;
        });
      axios
        .get("http://localhost:3000/user/subcount?uid=123360043")
        .then(response => {
          this.data = response;
        });
    }
  }
}
</script>
