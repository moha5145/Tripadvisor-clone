const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("loded");
  $.querySelector("#login").addEventListener("click", () => {
    console.log("clicked");
    $.querySelector(".modal").classList.remove("hidden");
    $.querySelector("body").classList.add("disable");
    $.querySelector(".main-nav").classList.add("hide-main-nav");
  });

  $.querySelector("#icon-times").addEventListener("click", () => {
    console.log("clicked");
    $.querySelector(".main-nav").classList.remove("hide-main-nav");
    $.querySelector(".modal").classList.add("hidden");
    $.querySelector("body").classList.remove("disable");
  });

  $.querySelector("#contactForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#description").value,
    };

    const response = await axios.post("https://email-form-tripadvisor.herokuapp.com/form", data);
    alert(response.data.message);
    console.log(response.data, data);
  });
});
