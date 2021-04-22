<template>
<!--<div class="main">
  <div class="menu">
    <p><a @click="toggleUpload"><i class="fas fa-image"></i></a></p>
    <h2>{{user.firstName}} {{user.lastName}} <a @click="logout"><i class="fas fa-sign-out-alt"></i></a></h2>
    <uploader :show="show" @close="close" @uploadFinished="uploadFinished" />
  </div>
  <image-gallery :photos="photos" />
  <p v-if="error">{{error}}</p>
</div>-->

<div class="main">
  <div class="menu">
    <p><a @click="toggleUpload"><i class="fas fa-image"><img src="../../public/calculator.jpg"></i></a></p>
    <h2>{{user.firstName}} {{user.lastName}} <a @click="logout"><i class="fas fa-sign-out-alt"></i></a></h2>
    <AddNumber :show="show" @close="close" @uploadFinished="uploadFinished" />
  </div>
  <ViewAllNumbers :numbers="numbers" />
  <p v-if="error">{{error}}</p>
</div>
</template>


<script>
import axios from 'axios';
import AddNumber from '@/components/AddNumber.vue';
import ViewAllNumbers from '@/components/ViewAllNumbers.vue';
export default {
  name: 'MyNumbers',
  components: {
    AddNumber,
    ViewAllNumbers
  },
  data() {
    return {
      show: false,
      numbers: [],
      error: '',
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  created() {
    this.getNumbers();
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
        async getNumbers() {
      try {
        this.response = await axios.get("/api/numbers");
        this.numbers = this.response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    close() {
      this.show = false;
    },
    toggleUpload() {
      this.show = true;
    },
    async uploadFinished() {
      this.show = false;
      this.getNumbers();
    },
  }
}
</script>


<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
}

.menu h2 {
  font-size: 14px;
}
</style>