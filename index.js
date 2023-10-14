const serviceID = "service_otkjnz6";
const templateID = "template_pjcd6im";
const publicKey = "DvKxYkdJrFqcqTeXI";

emailjs.init(publicKey);

function togglePage() {
  const isLandingPage = document.querySelector(".landing-page").hidden;
  const isSuccessMessage = document.querySelector(".success-message").hidden;

  document.querySelector(".landing-page").hidden = !isLandingPage;
  document.querySelector(".success-message").hidden = !isSuccessMessage;
}

function validateEmail(email) {
  const validator = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  const isValid = !validator.test(email);

  if (isValid) document.querySelector(".input-group").classList.add("invalid");
  else document.querySelector(".input-group").classList.remove("invalid");

  return isValid;
}

function sendEmail() {
  const email = document.querySelector("input#email").value;

  const error = validateEmail(email);
  if (error) return;

  const templateParams = {
    reply_to: email,
  };

  emailjs.send(serviceID, templateID, templateParams).then(
    function () {
      togglePage();
      document.querySelector("input#email").value = "";
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
