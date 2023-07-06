import Swal from "sweetalert2";
import createApi from "../api/create.api";

const addFunction = async () => {
  let data;
  await Swal.fire({
    title: "Create Item",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Update",
    cancelButtonColor: "#F93B55",
    showLoaderOnConfirm: true,
    preConfirm: async (newValue) => {
      try {
        const response = await createApi({ value: newValue });
        if (response.error) {
          Swal.showValidationMessage(`Incorrect valuel`);
        } else {
          data = { status: "Success", value: newValue, ID: response.ID };
        }
      } catch (err) {
        Swal.showValidationMessage(`Request error`);
      }
    },
    allowOutsideClick: async () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      return data;
    } else if (result.dismiss === "cancel") {
      return;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Server error!",
      });
    }
  });
  return data;
};
export default addFunction;
