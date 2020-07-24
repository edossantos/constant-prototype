import Vue from 'vue'
import Vuex from 'vuex'
import CONSTANTS_DATA from "@/data/constants.js"

import { getDataByCategory, calculateConstant } from "./data.utils"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    constants: CONSTANTS_DATA[0].fields
  },
  getters: {
    categoryTimeConstants: state => {
      return getDataByCategory(state, "Time")
    },
    categoryHeatCoolingConstants: state => {
      return getDataByCategory(state, "Heat/Cooling")
    },
    categoryWeightMeasuresConstants: state => {
      return getDataByCategory(state, "Weights and Measures")
    },
    categoryStaffExpenseConstants: state => {
      return getDataByCategory(state, "Staff Expense")
    },
    calculateConstantDaysInMonth: state => {
      //Logic from constant_days_in_month => calculate: this.constants.constant_days_in_year / this.constants.constant_months_in_year
      return calculateConstant(state, 'constant_days_in_month', state.constants['constant_days_in_year'].defaultValue / state.constants['constant_months_in_year'].defaultValue);
    },
    calculateConstantWeeksInMonth: state => (daysInMonthCalcNumber) =>{
      //Logic from constant_weeks_in_month => calculate: this.constant_days_in_month / this.constants.constant_days_in_week 
      //(DATA ERROR: this.constant_days_in_month should be this.constants.constant_days_in_month)
      return calculateConstant(state, 'constant_weeks_in_month', daysInMonthCalcNumber / state.constants['constant_days_in_week'].defaultValue); 
    },
    calculateConstantBtusPerKwatt: state => {
      //Logic from constant_btus_per_kwatt => calculate: this.constants.constant_btus_per_watt * this.constants.constant_watts_per_kwatt
      return calculateConstant(state, 'constant_btus_per_kwatt', state.constants['constant_btus_per_watt'].defaultValue * state.constants['constant_watts_per_kwatt'].defaultValue);
    },
    calculateConstantFteAnnualHours: state => {
      //Logic from constant_btus_per_kwatt => calculate: this.constants.constant_fte_weekly_hours * (this.constants.constant_days_in_year / this.constants.constant_days_in_week)
      return calculateConstant(state, 'constant_fte_annual_hours', state.constants['constant_fte_weekly_hours'].defaultValue * (state.constants['constant_days_in_year'].defaultValue / state.constants['constant_days_in_week'].defaultValue));
    },
    calculateConstantAnnualLowSkilledFtePerAsstManagerHours: state => (constantFteAnnualHours) => {
      //Logic from constant_annual_lowSkilled_fte_per_asstManager_hours => calculate: (this.constants.constant_lowSkilled_fte_per_asstManager + 1) * this.constant_fte_annual_hours
      return calculateConstant(state, 'constant_annual_lowSkilled_fte_per_asstManager_hours', (state.constants['constant_lowSkilled_fte_per_asstManager'].defaultValue + 1 ) * constantFteAnnualHours);
    }
  },
  mutations: {
    UPDATE_SANIDATE_CONCENTRATION: (state, payload) => {
      state.constants['constant_sanidate_concentration'].defaultValue = payload
    },
    UPDATE_CHAMBERS_PER_VFU: (state, payload) => {
      state.constants['constant_chambers_per_vfu'].defaultValue = payload
    },
    UPDATE_BASIN_PER_CHAMBER: (state, payload) => {
      state.constants['constant_basin_per_chamber'].defaultValue = payload
    },
    UPDATE_BASIN_PER_VFU: (state, payload) => {
      state.constants['constant_basin_per_vfu'].defaultValue = payload
    },
    UPDATE_FTE_WEEKLY_HOURS: (state, payload) => {
      state.constants['constant_fte_weekly_hours'].defaultValue = payload
    },
    UPDATE_MANAGER_SALARY: (state, payload) => {
      state.constants['constant_manager_salary'].defaultValue = payload
    },
    UPDATE_MANAGER_BENEFIT: (state, payload) => {
      state.constants['constant_manager_benefit'].defaultValue = payload
    },
    UPDATE_ASSTMANAGER_PER_MANAGER: (state, payload) => {
      state.constants['constant_asstManager_per_manager'].defaultValue = payload
    },
    UPDATE_ASSTMANAGER_SALARY: (state, payload) => {
      state.constants['constant_asst_manager_salary'].defaultValue = payload
    },
    UPDATE_ASSTMANAGER_BENEFIT: (state, payload) => {
      state.constants['constant_asst_manager_benefit'].defaultValue = payload
    },
    UPDATE_LOW_SKILLED_FTE_PER_ASSTMANAGER: (state, payload) => {
      state.constants['constant_lowSkilled_fte_per_asstManager'].defaultValue = payload
    },
    UPDATE_OTHER_SALARY: (state, payload) => {
      state.constants['other_salary'].defaultValue = payload
    },
    UPDATE_OTHER_BENEFIT: (state, payload) => {
      state.constants['other_benefit'].defaultValue = payload
    }
  },
  actions: {
    updateSanidateConcentration: (context, payload) => {
      context.commit('UPDATE_SANIDATE_CONCENTRATION', payload)
    },
    updateChambersPerVfu: (context, payload) => {
      context.commit('UPDATE_CHAMBERS_PER_VFU', payload)
    },
    updateBasinPerChamber: (context, payload) => {
      context.commit('UPDATE_BASIN_PER_CHAMBER', payload)
    },
    updateBasinPerVfu: (context, payload) => {
      context.commit('UPDATE_BASIN_PER_VFU', payload)
    },
    updateFteWeeklyHours: (context, payload) => {
      context.commit('UPDATE_FTE_WEEKLY_HOURS', payload)
    },
    updateManagerSalary: (context, payload) => {
      context.commit('UPDATE_MANAGER_SALARY', payload)
    },
    updateManagerBenefit: (context, payload) => {
      context.commit('UPDATE_MANAGER_BENEFIT', payload)
    },
    updateAsstManagerPerManager: (context, payload) => {
      context.commit('UPDATE_ASSTMANAGER_PER_MANAGER', payload)
    },
    updateAsstManagerSalary: (context, payload) => {
      context.commit('UPDATE_ASSTMANAGER_SALARY', payload)
    },
    updateAsstManagerBenefit: (context, payload) => {
      context.commit('UPDATE_ASSTMANAGER_BENEFIT', payload)
    },
    updateLowSkilledFtePerAsstManager: (context, payload) => {
      context.commit('UPDATE_LOW_SKILLED_FTE_PER_ASSTMANAGER', payload)
    },
    updateOtherSalary: (context, payload) => {
      context.commit('UPDATE_OTHER_SALARY', payload)
    },
    updateOtherBenefit: (context, payload) => {
      context.commit('UPDATE_OTHER_BENEFIT', payload)
    }
  },
  modules: {
    //TODO: Divide store into modules.
  }
})
