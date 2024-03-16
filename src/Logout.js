import Swal from "sweetalert2";
const Logout = () => {
  let timerInterval;
  Swal.fire({
    title: "Session Expired!",
    html: "Redirecting to Login Page  in <b></b> milliseconds. Please Login again",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
  localStorage.removeItem("UserEmail");
};

export default Logout;
