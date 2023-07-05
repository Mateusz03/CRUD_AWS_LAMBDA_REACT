const changeFunction = (e, item) => {
  if (e.target.checked) {
    for (let j = 0; j < item.length; j++) {
      document.getElementById(item[j].ID + "Box").checked = true;
    }
    return true;
  } else {
    for (let j = 0; j < item.length; j++) {
      document.getElementById(item[j].ID + "Box").checked = false;
    }
    return false;
  }
};

export default changeFunction;
