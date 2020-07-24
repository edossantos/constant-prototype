const CONSTANTS_DATA = [{ 
            "name": "constants",
            "fields": {
                "constant_days_in_year": {
                    "label": "Days in Year",
                    "type": "float",
                    "defaultValue": 365.24218967,
                    "readOnly": true,
                    "category": "Time"
                },
                "constant_days_in_month": {
                    "label": "Days In Month",
                    "type": "float",
                    "calculate": "this.constants.constant_days_in_year / this.constants.constant_months_in_year",
                    "readOnly": true,
                    "category": "Time"
                },
                "constant_days_in_week": {
                    "label": "Days in a Week",
                    "type": "int",
                    "defaultValue": 7,
                    "readOnly": true,
                    "category": "Time"
                },
                "constant_months_in_year": {
                    "label": "Months in Year",
                    "type": "int",
                    "defaultValue": 12,
                    "readOnly": true,
                    "category": "Time"
                },
                "constant_weeks_in_month": {
                    "label": "Weeks in a month",
                    "type": "float",
                    "calculate": "this.constant_days_in_month / this.constants.constant_days_in_week",
                    "readOnly": true,
                    "category": "Time"
                },

                "constant_btus_per_watt": {
                    "label": "Btu's Per Watt",
                    "type": "float",
                    "defaultValue": 3.412142,
                    "readOnly": true,
                    "category": "Heat/Cooling"
                },
                "constant_btus_per_kwatt": {
                    "label": "BTUs (kW)",
                    "type": "float",
                    "calculate": "this.constants.constant_btus_per_watt * this.constants.constant_watts_per_kwatt",
                    "readOnly": true,
                    "category": "Heat/Cooling"
                },
                "constant_btus_per_cooling_ton": {
                    "label": "Btus Per Cooling Ton",
                    "type": "int",
                    "defaultValue": 12000,
                    "readOnly": true,
                    "category": "Heat/Cooling"
                },
                "constant_watts_per_kwatt": {
                    "label": "Watts/KW",
                    "type": "int",
                    "defaultValue": 1000,
                    "readOnly": true,
                    "category": "Heat/Cooling"
                },
                "constant_ounces_per_pound": {
                    "label": "Ounces per Pound",
                    "type": "int",
                    "defaultValue": 16,
                    "readOnly": true,
                    "category": "Weights and Measures"
                },
                "constant_grams_per_ounce": {
                    "label": "Grams Per Ounce",
                    "type": "int",
                    "defaultValue": 28,
                    "readOnly": true,
                    "category": "Weights and Measures"
                },
                "constant_grams_per_pound": {
                    "label": "Grams Per Pound",
                    "type": "float",
                    "defaultValue": 453.593,
                    "readOnly": true,
                    "category": "Weights and Measures"
                },
                "constant_sanidate_concentration": {
                    "label": "Sanidate Concentration",
                    "type": "float",
                    "defaultValue": 30000,
                    "readOnly": false,
                    "category": "Weights and Measures"
                },
                "constant_ml_per_gallon": {
                    "label": "Ml per Gallon",
                    "type": "float",
                    "defaultValue": 3785.41,
                    "readOnly": true,
                    "category": "Weights and Measures"
                },
                "constant_hours_per_day": {
                    "label": "Hours Per Day",
                    "type": "int",
                    "defaultValue": 24,
                    "readOnly": true,
                    "category": "Time"
                },
                "constant_minutes_per_hour": {
                    "label": "Minutes Per Hour",
                    "type": "int",
                    "defaultValue": 60,
                    "readOnly": true,
                    "category": "Time"
                },
                "constant_second_per_minute": {
                    "label": "Seconds Per Minute",
                    "type": "int",
                    "defaultValue": 60,
                    "readOnly": true,
                    "category": "Time"
                },
                "constant_chambers_per_vfu": {
                    "label": "Chambers Per VFU",
                    "type": "int",
                    "defaultValue": 2,
                    "readOnly": false,
                    "category": "Weights and Measures"
                },
                "constant_basin_per_chamber": {
                    "label": "Basins Per Chamber",
                    "type": "int",
                    "defaultValue": 2,
                    "readOnly": false,
                    "category": "Weights and Measures"
                },
                "constant_basin_per_vfu": {
                    "label": "Basins per VFU / MVFU",
                    "type": "int",
                    "defaultValue": 4,
                    "readOnly": false,
                    "category": "Weights and Measures"
                },
                "constant_fte_weekly_hours": {
                    "label": "FTE Weeekly Hours",
                    "type": "float",
                    "defaultValue": 40,
                    "readOnly": false,
                    "category": "Staff Expense"
                },
                "constant_fte_annual_hours": {
                    "label": "FTE (Annual Hour Equivalent) ",
                    "type": "float",
                    "calculate": "this.constants.constant_fte_weekly_hours * (this.constants.constant_days_in_year / this.constants.constant_days_in_week)",
                    "readOnly": true,
                    "category": "Staff Expense"
                },
                

                "constant_manager_salary": {
                    "label": "Manager Salary",
                    "type": "float",
                    "defaultValue": 65000,
                    "readOnly": false,
                    "category": "Staff Expense"
                },
                
                "constant_manager_benefit": {
                    "label": "Manager Benefit %",
                    "type": "percent",
                    "defaultValue": 2,
                    "readOnly": false,
                    "category": "Staff Expense"
                },

                "constant_asstManager_per_manager": {
                    "label": "# of Asst Managers Per Manager",
                    "type": "int",
                    "defaultValue": 4,
                    "readOnly": false,
                    "category": "Staff Expense"
                },

                "constant_asst_manager_salary": {
                    "label": "Assistant Manager Salary",
                    "type": "float",
                    "defaultValue": 45000,
                    "readOnly": false,
                    "category": "Staff Expense"
                },
                
                "constant_asst_manager_benefit": {
                    "label": "Manager Benefit %",
                    "type": "percent",
                    "defaultValue": 0,
                    "readOnly": false,
                    "category": "Staff Expense"
                },

                "constant_lowSkilled_fte_per_asstManager": {
                    "label": "Low Skilled FTE per Asst Mngr",
                    "type": "int",
                    "defaultValue": 6,
                    "readOnly": false,
                    "category": "Staff Expense"
                },

                "constant_annual_lowSkilled_fte_per_asstManager_hours": {
                    "label": "Low Skilled FTE + Asst Mngr Hours",
                    "type": "float",
                    "calculate": "(this.constants.constant_lowSkilled_fte_per_asstManager + 1) * this.constant_fte_annual_hours",
                    "category": "Staff Expense"
                },


                "other_salary": {
                    "label": "Other Salary",
                    "type": "float",
                    "defaultValue": 0,
                    "readOnly": false,
                    "category": "Staff Expense"
                },
                
                "other_benefit": {
                    "label": "Other Benefit %",
                    "type": "percent",
                    "defaultValue": 0,
                    "readOnly": false,
                    "category": "Staff Expense"
                }
            }
}];

export default CONSTANTS_DATA;