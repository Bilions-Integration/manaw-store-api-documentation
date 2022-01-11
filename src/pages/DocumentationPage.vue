<template>
  <div>
    <div v-html="html"></div>
  </div>
</template>


<script>
import axios from "axios";
import hljs from "highlight.js";
import "highlight.js/styles/foundation.css";

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
    async init() {
      this.html = "";
      this.page = this.$route.params.type ?? "introduction";
      let res = await axios.get(
        "https://api.manawstore.xyz/api/documentation",
        {
          params: { page: this.page },
        }
      );
      this.html = res.data.html;

      setTimeout(() => {
        document.querySelectorAll("pre").forEach((node) => {
          hljs.highlightElement(node);
          this.addCopyButton(node);
        });
      }, 10);
    },

    addCopyButton(node) {
      let btnText = "Copy";
      let btnTextSuccess = "Copied";
      // create a "copy" button
      let copyBtn = document.createElement("button");
      copyBtn.innerText = btnText;
      copyBtn.classList.add("copy-btn");

      setTimeout(() => {
        node.prepend(copyBtn);
      }, 500);
      copyBtn.addEventListener("click", async () => {
        // copy to clipboard
        if (navigator.clipboard) {
          const clone = node.cloneNode(true);
          const elems = clone.querySelectorAll(".copy-btn");
          for (const elem of elems) {
            elem.remove();
          }
          let text = clone.innerText;
          await navigator.clipboard.writeText(text);
        }
        copyBtn.innerText = btnTextSuccess;

        setTimeout(() => {
          copyBtn.innerText = btnText;
        }, 1000);
      });
    },
  },
};
</script>

<style>
pre {
  padding: 20px;
  border-radius: 5px;
  background: #eee;
}
table {
  width: 100%;
  border-spacing: 0;
  border-collapse: no-collapse !important;
}

th {
  background: #ededed;
}

tr th,
tr td {
  padding: 10px;
  border: 2px solid #e7e6e6;
  border-bottom: none;
  border-right: none;
}

th:first-child {
  border-top-left-radius: 10px;
}

th:last-child {
  border-top-right-radius: 10px;
  border-right: 2px solid #e7e6e6;
}

td:last-child {
  border-right: 2px solid #e7e6e6;
}

tr:last-child td {
  border-bottom: 2px solid #e7e6e6;
}

tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}

tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}
.copy-btn {
  display: none;
  position: absolute;
  margin-top: -27px;
  color: #878787;
  background: #eeeeee;
  border: 1px solid #d1d1d1;
  cursor: pointer;
  border-radius: 10px;
}
pre:hover .copy-btn {
  display: inline-block;
}

hr {
  border: none;
  border-top: 2px solid rgb(226, 225, 225);
}

ul {
  margin-left: -22px;
  list-style: circle;
}
</style>