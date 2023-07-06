import updateApi from "../api/update.api";
import Swal from "sweetalert2";

const updateFunction = async (items) => {
  if (items.length === 1) {
    let value;
    await Swal.fire({
      title: "Update Item",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Update",
      cancelButtonColor: "#F93B55",
      showLoaderOnConfirm: true,
      preConfirm: async (newValue) => {
        await updateApi({ ID: items[0].ID, value: newValue })
          .then((data) => {
            if (data.error) {
              Swal.showValidationMessage(`Incorrect value`);
            } else {
              return { status: "Success", value: newValue };
            }
          })
          .catch((err) => {
            Swal.showValidationMessage(`Request error`);
          });
      },
      allowOutsideClick: async () => !Swal.isLoading(),
    }).then(async (result) => {
      if (await result.isConfirmed) {
        value = { ID: items[0].ID, value: result.value };
      }
    });

    return value;
  } else if (items.length === 0)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You must select a value!",
    });
  else
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You can only update one value!",
    });
};

export default updateFunction;
