import { _formatNumberTwoDecimal, _formartNumberToThousand } from "@/utils/format.numbers"
const formatNumbers = {
    filters: {
        formatNumberTwoDecimal(number) {
          return _formatNumberTwoDecimal(number);
      },
      formartNumberToThousand(number){
          return _formartNumberToThousand(number);
      }
    }
  }
  export default formatNumbers;