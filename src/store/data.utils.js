export const getDataByCategory = (state, categoryName) => {
    var category = {}
    Object.keys(state.constants).forEach(key => {
        const item = state.constants[key];
        if(item.category === categoryName){
            category[key] = item
        }
    });
    return category;
}

export const calculateConstant = (state, objKey, calculation) => {
    let calculationResult = 0;
    Object.keys(state.constants).filter(key => {
      if(key === objKey){
        calculationResult = calculation;
      }
    });
    return calculationResult;
  }

  export default { getDataByCategory, calculateConstant }