<template>
  <v-container fluid>
    <v-card class="pa-3">
      <v-row no-gutters>
        <v-col>
          <v-card class="pa-3" outlined>
            col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            col
          </v-card>
        </v-col>
      </v-row>
      <v-row dense :style="{ height: '120px' }" class="red" align="start">
        <v-col>
          <v-card class="pa-3" outlined>
            col
          </v-card>
        </v-col>
        <v-col align-self="end">
          <v-card class="pa-3" outlined>
            col
          </v-card>
        </v-col>
        <v-col align-self="center">
          <v-card class="pa-3" outlined>
            col
          </v-card>
        </v-col>
      </v-row>
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
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped></style>
