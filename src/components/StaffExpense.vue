<template>
    <v-col cols="12" class="staff-expense-col">
        <div class="header">
            <h2>Staff/Expense</h2>
        </div>
        <!-- constant_fte_weekly_hours -- input-->
        <custom-input type="decimal" :label="staffExpenseConstants.constant_fte_weekly_hours.label" :value="staffExpenseConstants.constant_fte_weekly_hours.defaultValue" @inputData="updateFteWeeklyHours"></custom-input>
        <!-- constant_fte_annual_hours -->
        <no-edit-text-field :label="staffExpenseConstants.constant_fte_annual_hours.label" :default_value="calculateFteAnnualHours | formatNumberTwoDecimal"></no-edit-text-field>
        <!-- constant_manager_salary -->
        <custom-input type="decimal" :label="staffExpenseConstants.constant_manager_salary.label" :value="staffExpenseConstants.constant_manager_salary.defaultValue" @inputData="updateManagerSalary"></custom-input>
        <!-- constant_manager_benefit -->
        <custom-input type="percent" :label="staffExpenseConstants.constant_manager_benefit.label" inner_icon="mdi-percent dark" :value="staffExpenseConstants.constant_manager_benefit.defaultValue" @inputData="updateManagerBenefit"></custom-input>
        <!-- constant_asstManager_per_manager -->
        <custom-input :label="staffExpenseConstants.constant_asstManager_per_manager.label" :value="staffExpenseConstants.constant_asstManager_per_manager.defaultValue" @inputData="updateAsstManagerPerManager"></custom-input>
        <!-- constant_asst_manager_salary -->
        <custom-input type="decimal" :label="staffExpenseConstants.constant_asst_manager_salary.label" :value="staffExpenseConstants.constant_asst_manager_salary.defaultValue" @inputData="updateAsstManagerSalary"></custom-input>
        <!-- constant_asst_manager_benefit -->
        <custom-input type="percent" :label="staffExpenseConstants.constant_asst_manager_benefit.label" inner_icon="mdi-percent dark" :value="staffExpenseConstants.constant_asst_manager_benefit.defaultValue" @inputData="updateAsstManagerBenefit"></custom-input>
        <!-- constant_lowSkilled_fte_per_asstManager -->
        <custom-input :label="staffExpenseConstants.constant_lowSkilled_fte_per_asstManager.label" :value="staffExpenseConstants.constant_lowSkilled_fte_per_asstManager.defaultValue" @inputData="updateLowSkilledFtePerAsstManager"></custom-input>
        <!-- constant_annual_lowSkilled_fte_per_asstManager_hours -->
        <no-edit-text-field :label="staffExpenseConstants.constant_annual_lowSkilled_fte_per_asstManager_hours.label" :default_value="calculateAnnualLowSkilledFtePerAsstManagerHours() | formatNumberTwoDecimal"></no-edit-text-field>
        <!-- other_salary -->
        <custom-input :label="staffExpenseConstants.other_salary.label" :value="staffExpenseConstants.other_salary.defaultValue" @inputData="updateOtherSalary"></custom-input>
        <!-- other_salary -->
        <custom-input type="percent" :label="staffExpenseConstants.other_benefit.label" inner_icon="mdi-percent dark" :value="staffExpenseConstants.other_benefit.defaultValue" @inputData="updateOtherBenefit"></custom-input>
    </v-col>
</template>

<script>

import NoEditTextField from "./field-types/no-edit-text-field"
import CustomInput from "./field-types/custom-input-field.vue"
import formatNumbers from "@/mixins/format.number.js"

export default {
    name: 'app-staff-expense',
    mixins: [formatNumbers],
    components: {
        'custom-input': CustomInput,
        'no-edit-text-field': NoEditTextField
    },
    computed: {
        staffExpenseConstants(){
            return this.$store.getters.categoryStaffExpenseConstants;
        },
        calculateFteAnnualHours(){
            return this.$store.getters.calculateConstantFteAnnualHours;
        }
    },
    methods: {
        updateFteWeeklyHours(value){
            this.$store.dispatch('updateFteWeeklyHours', value)
        },
        updateManagerSalary(value){
            this.$store.dispatch('updateManagerSalary', value)
        },
        updateManagerBenefit(value){
            this.$store.dispatch('updateManagerBenefit', value)
        },
        updateAsstManagerPerManager(value){
            this.$store.dispatch('updateAsstManagerPerManager', value)
        },
        updateAsstManagerSalary(value){
            this.$store.dispatch('updateAsstManagerSalary', value)
        },
        updateAsstManagerBenefit(value){
            this.$store.dispatch('updateAsstManagerBenefit', value)
        },
        updateLowSkilledFtePerAsstManager(value){
            this.$store.dispatch('updateLowSkilledFtePerAsstManager', value)
        },
        updateOtherSalary(value){
            this.$store.dispatch('updateOtherSalary', value)
        },
        updateOtherBenefit(value){
            this.$store.dispatch('updateOtherBenefit', value)
        },
        calculateAnnualLowSkilledFtePerAsstManagerHours(){
            return this.$store.getters.calculateConstantAnnualLowSkilledFtePerAsstManagerHours(this.$store.getters.calculateConstantFteAnnualHours);
        }
    }
}
</script>

<style lang="scss">
    .staff-expense-col{
        .header{
            padding-bottom: 10px;
            h2{
                color: #666666;
                font-size: 20px;
            }
        }
    }
</style>