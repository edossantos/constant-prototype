<template>
    <v-col cols="12" class="weights-measures-col">
        <div class="header">
            <h2>Weights/Measures</h2>
        </div>
        <!-- constant_days_in_year -->
        <no-edit-text-field :label="weightMeasuresConstants.constant_ounces_per_pound.label" :default_value="weightMeasuresConstants.constant_ounces_per_pound.defaultValue | formartNumberToThousand"></no-edit-text-field>
        <!-- constant_grams_per_ounce -->
        <no-edit-text-field :label="weightMeasuresConstants.constant_grams_per_ounce.label" :default_value="weightMeasuresConstants.constant_grams_per_ounce.defaultValue | formartNumberToThousand"></no-edit-text-field>
        <!-- constant_grams_per_pound -->
        <no-edit-text-field :label="weightMeasuresConstants.constant_grams_per_pound.label" :default_value="weightMeasuresConstants.constant_grams_per_pound.defaultValue | formatNumberTwoDecimal"></no-edit-text-field>
        <!-- constant_sanidate_concentration - input -->
        <custom-input type="decimal" :label="weightMeasuresConstants.constant_sanidate_concentration.label" :value="weightMeasuresConstants.constant_sanidate_concentration.defaultValue" @inputData="updateSanidateConcentration"></custom-input>
        <!-- constant_ml_per_gallon -->
        <no-edit-text-field :label="weightMeasuresConstants.constant_ml_per_gallon.label" :default_value="weightMeasuresConstants.constant_ml_per_gallon.defaultValue | formatNumberTwoDecimal"></no-edit-text-field>
        <!-- constant_chambers_per_vfu - input -->
        <custom-input type="decimal" :label="weightMeasuresConstants.constant_chambers_per_vfu.label" :value="weightMeasuresConstants.constant_chambers_per_vfu.defaultValue" @inputData="updateChambersPerVfu"></custom-input>
        <!-- constant_basin_per_chamber - input -->
        <custom-input :label="weightMeasuresConstants.constant_basin_per_chamber.label" :value="weightMeasuresConstants.constant_basin_per_chamber.defaultValue" @inputData="updateBasinPerChamber"></custom-input>
        <!-- constant_basin_per_vfu - input -->
        <custom-input :label="weightMeasuresConstants.constant_basin_per_vfu.label" :value="weightMeasuresConstants.constant_basin_per_vfu.defaultValue" @inputData="updateBasinPerVfu"></custom-input>     
    </v-col>
</template>

<script>
import NoEditTextField from "./field-types/no-edit-text-field"
import CustomInput from "./field-types/custom-input-field.vue"
import formatNumbers from "@/mixins/format.number.js"

export default {
    name: 'app-weights-measures',
    mixins: [formatNumbers],
    components: {
        'custom-input': CustomInput,
        'no-edit-text-field': NoEditTextField
    },
    computed: {
        weightMeasuresConstants(){
            return this.$store.getters.categoryWeightMeasuresConstants;
        }
    },
    methods: {
        updateSanidateConcentration(value){
            this.$store.dispatch('updateSanidateConcentration', value)
        },
        updateChambersPerVfu(value){
            this.$store.dispatch('updateChambersPerVfu', value)
        },
        updateBasinPerChamber(value){
            this.$store.dispatch('updateBasinPerChamber', value)
        },
        updateBasinPerVfu(value){
            this.$store.dispatch('updateBasinPerVfu', value)
        },
        
    }
}
</script>

<style lang="scss">
    .weights-measures-col{
        .header{
            padding-bottom: 10px;
            h2{
                color: #666666;
                font-size: 20px;
            }
        }
    }
</style>