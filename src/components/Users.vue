<template>
  <div class="overflow-auto container">
    <div>
      <Loader v-if="isLoading" />
      <b-table
        v-else
        id="my-table"
        :fields="fields"
        :current-page="currentPage"
        :items="allUsers"
        :per-page="20"
        small
      >
      </b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="20"
        aria-controls="my-table"
      >
      </b-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Loader from "./Loader.vue";
export default {
  name: "Users",
  components: {
    Loader,
  },
  data() {
    return {
      currentPage: 1,
      fields: [
        {
          key: "id",
          sortable: true,
          label: "ID",
        },
        "lastName",
        "firstName",
        "phone",
        "email",
      ],
    };
  },
  computed: {
    ...mapActions(["getUsers", "updateLoaderTip"]),
    ...mapGetters(["allUsers", "countPerPage", "isLoading"]),
    ...mapMutations(["updateIsLoading"]),
    rows() {
      if (this.allUsers.length != 0) {
        this.updateIsLoading;
      }
      return this.allUsers.length;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
