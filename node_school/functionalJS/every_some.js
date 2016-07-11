function checkUserValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(elem, index, arr){
      return goodUsers.some(function(val, idx, good_arr){
        return val.id === elem.id; 
      });
    });
  }
}

module.exports = checkUserValid;