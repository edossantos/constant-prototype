<template>
    <v-col cols="12" class="time-col">
        <div class="header">
            <h2>Time</h2>
        </div>
        <!-- constant_days_in_year -->
        <no-edit-text-field :label="timeConstants.constant_days_in_year.label" :default_value="timeConstants.constant_days_in_year.defaultValue | formatNumberTwoDecimal"></no-edit-text-field>
        <!-- constant_days_in_month -->
        <no-edit-text-field :label="timeConstants.constant_days_in_month.label" :default_value="calculateDaysInMonths | formatNumberTwoDecimal"></no-edit-text-field>
        <!-- constant_days_in_week -->    
        <no-edit-text-field :label="timeConstants.constant_days_in_week.label" :default_value="timeConstants.constant_days_in_week.defaultValue"></no-edit-text-field>
        <!-- constant_months_in_year -->
        <no-edit-text-field :label="timeConstants.constant_months_in_year.label" :default_value="timeConstants.constant_months_in_year.defaultValue"></no-edit-text-field>
        <!-- constant_weeks_in_month -->
        <no-edit-text-field :label="timeConstants.constant_weeks_in_month.label" :default_value="calculateWeeksInMonth() | formatNumberTwoDecimal"></no-edit-text-field>
        <!-- constant_hours_per_day -->
        <no-edit-text-field :label="timeConstants.constant_hours_per_day.label" :default_value="timeConstants.constant_hours_per_day.defaultValue"></no-edit-text-field>
        <!-- constant_minutes_per_hour -->
        <no-edit-text-field :label="timeConstants.constant_minutes_per_hour.label" :default_value="timeConstants.constant_minutes_per_hour.defaultValue"></no-edit-text-field>
        <!-- constant_second_per_minute -->
        <no-edit-text-field :label="timeConstants.constant_second_per_minute.label" :default_value="timeConstants.constant_second_per_minute.defaultValue"></no-edit-text-field>
    </v-col>
</template>

<script>
import formatNumbers from "@/mixins/format.number.js"
import NoEditTextField from "./field-types/no-edit-text-field"

export default {
    name: "app-time",
    mixins: [formatNumbers],
    components: {
        'no-edit-text-field': NoEditTextField
    },
    computed: {
        timeConstants(){
            return this.$store.getters.categoryTimeConstants;
        },
        calculateDaysInMonths(){
            return this.$store.getters.calculateConstantDaysInMonth;
        }
    },
    data(){
        return{
            timeData: {}
        }
    },
    created(){
        this.$nextTick(()=>{
            this.timeData = this.time_data
        })
    },
    methods: {
        calculateWeeksInMonth(){
            return this.$store.getters.calculateConstantWeeksInMonth(this.$store.getters.calculateConstantDaysInMonth);
        }
    }
}
</script>

<style lang="scss">
    .time-col{
        .header{
            padding-bottom: 10px;
            h2{
                color: #666666;
                font-size: 20px;
            }
        }
    }
</style>