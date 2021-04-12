<template>
  <v-container>
    <v-row>
      <v-col v-for="count in 12" :key="count" cols="6">
        <v-card class="pa-3">
          col
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped></style>
