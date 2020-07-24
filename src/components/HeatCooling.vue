<template>
    <v-col cols="12" class="heat-cooling-col">
    <div class="header">
        <h2>Heat/Cooling</h2>
    </div>
    <!-- constant_btus_per_watt -->
    <no-edit-text-field :label="heatCoolingConstants.constant_btus_per_watt.label" :default_value="heatCoolingConstants.constant_btus_per_watt.defaultValue | formatNumberTwoDecimal"></no-edit-text-field>
    <!-- constant_btus_per_kwatt -->
    <no-edit-text-field :label="heatCoolingConstants.constant_btus_per_kwatt.label" :default_value="calculateBtusPerKwatt | formatNumberTwoDecimal"></no-edit-text-field>
    <!-- constant_btus_per_cooling_ton -->
    <no-edit-text-field :label="heatCoolingConstants.constant_btus_per_cooling_ton.label" :default_value="heatCoolingConstants.constant_btus_per_cooling_ton.defaultValue | formartNumberToThousand"></no-edit-text-field> 
    <!-- constant_watts_per_kwatt -->
    <no-edit-text-field :label="heatCoolingConstants.constant_watts_per_kwatt.label" :default_value="heatCoolingConstants.constant_watts_per_kwatt.defaultValue | formartNumberToThousand"></no-edit-text-field> 
    </v-col>
</template>

<script>
import NoEditTextField from "./field-types/no-edit-text-field"
import formatNumbers from "@/mixins/format.number.js"

export default {
    name: 'app-heat-cooling',
    mixins: [formatNumbers],
    components: {
        'no-edit-text-field': NoEditTextField
    },
    computed: {
        heatCoolingConstants(){
            return this.$store.getters.categoryHeatCoolingConstants
        },
        calculateBtusPerKwatt(){
            return this.$store.getters.calculateConstantBtusPerKwatt
        }
    }
}
</script>

<style lang="scss">
    .heat-cooling-col{
        .header{
            padding-bottom: 10px;
            h2{
                color: #666666;
                font-size: 20px;
            }
        }
    }
</style>