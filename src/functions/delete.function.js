import deleteApi from "../api/delete.api";
import Swal from "sweetalert2";

const deleteFunction = async (items) => {
  if (Array.isArray(items) && items.length) {
    let result;
    let itemsArr = [];
    items.map((e) => {
      itemsArr.push({ ID: e.ID });
      return "Ok";
    });
    await Swal.fire({
      icon: "warning",
      title: "Delete",
      text: "Are you sure you want to delete these values?",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonColor: "#F93B55",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        await deleteApi(itemsArr)
          .then((data) => {
            if (data.error) {
              Swal.showValidationMessage(`Delete error`);
            } else {
              result = { status: "Success" };
            }
          })
          .catch((err) => {
            Swal.showValidationMessage(`Request error`);
          });
      },
    });
    return result;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You must select at least one value!",
    });
  }
  return { error: "Incorrect value" };
};

export default deleteFunction;
