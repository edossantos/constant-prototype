<template>
  <div class="custom-input-field">
      <p class="label">{{label}}</p>
      <v-text-field 
       type="text"
       :prepend-inner-icon="inner_icon"
       :value="active?formatNewValue:formatDataNumber" 
       @blur="update" 
       @keyup.enter.stop="update" 
       @focus="active = true"></v-text-field>
  </div>
</template>

<script>
import { _formatNumberTwoDecimal, _formartNumberToThousand } from "@/utils/format.numbers"

export default {
    props: {
        value: {type: Number, default: 0},
        type: {default: ''},
        inner_icon: {default: ''},
        label: {type: String, default: ''}
    },
  data: function () {
    return {
      active: false,
      newValue: null
    }
  },
  computed: {
    formatNewValue() {
      if(this.type === 'decimal'){
            return _formatNumberTwoDecimal(this.value);
        }else if(this.type === 'thousands'){
            return _formartNumberToThousand(this.value);
        }else if(this.type === 'percent'){
          return Number(this.value).toFixed(2);
        }
        return this.value;
    },
    formatDataNumber() {
        if(this.type === 'decimal'){
            return _formatNumberTwoDecimal(this.value);
        }else if(this.type === 'thousands'){
            return _formartNumberToThousand(this.value);
        }else if(this.type === 'percent'){
          return Number(this.value).toFixed(2);
        }
        return this.value;
    }
  },
  methods: {
    update(event) {
      this.active = false
      var tempVal = event.target.value;
      this.newValue = Number(tempVal.replace(/[^0-9.]+/g,""));
      this.changed()
    },
    changed() {
      this.$emit('input', Number(this.newValue))
      this.$emit('inputData', Number(this.newValue))
    }
  },
  mounted(){
    this.newValue = this.value;
  }
}
</script>

<style lang="scss">
    .custom-input-field{
        .label{
            margin-bottom: 2px;
            color: #7d7d7d;
            font-weight: 600;
            font-size: 15px;
        }
        .v-text-field {
          padding-top: 0;
          margin-top: 0;
          .v-input__control{
            .v-input__slot{
              margin-bottom: 10px;
              .v-input__prepend-inner{
                .v-icon{
                  font-size: 15px;
                  color: #000000;
                }
              }
            }
            .v-text-field__details{
              display: none;
            }
          }
        }
    }
</style>