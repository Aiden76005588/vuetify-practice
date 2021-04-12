<template>
  <v-container>
    <v-card>
      <v-card-title>
        $vuetify.breakpoint.name :{{ $vuetify.breakpoint.name }}
      </v-card-title>
      <v-container>
        <v-card class="pa-3" outlined :height="height"></v-card>
      </v-container>
    </v-card>
    <v-card>
      <v-card-title>
        $vuetify.breakpoint.mobile :{{ $vuetify.breakpoint.mobile }}
      </v-card-title>
      <v-container>
        <v-card class="pa-3" outlined :height="height"></v-card>
      </v-container>
    </v-card>
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
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 100;
        case "sm":
          return 200;
        case "md":
          return 300;
        case "lg":
          return 400;
        default:
          return 500;
      }
    },
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped></style>
