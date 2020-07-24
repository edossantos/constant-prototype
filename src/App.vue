<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
            <app-time></app-time>
        </v-col>
        <v-col cols="12" md="3">
            <app-heat-cooling></app-heat-cooling>  
        </v-col>
        <v-col cols="12" md="3">
            <app-weights-measures></app-weights-measures>  
        </v-col>
        <v-col cols="12" md="3">
            <app-staff-expense></app-staff-expense>  
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

import Time from "@/components/Time";
import HeatCooling from "@/components/HeatCooling"
import WeightsMeasures from "@/components/WeightsMeasures"
import StaffExpense from "@/components/StaffExpense"

export default {
  name: 'App',
  components: {
    "app-time": Time,
    "app-heat-cooling": HeatCooling,
    "app-weights-measures": WeightsMeasures,
    "app-staff-expense": StaffExpense
  }
};
</script>
