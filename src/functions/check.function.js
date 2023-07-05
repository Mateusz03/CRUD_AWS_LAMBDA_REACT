const checkFunction = (e, IsCheck, handleItem) => {
  if (e.target.checked) {
    if (Array.isArray(IsCheck) && IsCheck.length === 0) {
      //   setIsCheck([handleItem]);
      return [handleItem];
    } else {
      let array = [...IsCheck];
      array.push(handleItem);
      //   setIsCheck(array);
      return array;
    }
  } else {
    return (prevIsCheck) => {
      const newArray = [...prevIsCheck];
      const index = newArray.findIndex((item) => item === handleItem);
      if (index !== -1) {
        newArray.splice(index, 1);
      }
      return newArray;
    };
  }
};

export default checkFunction;
