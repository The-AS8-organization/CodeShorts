var catagories = document.querySelectorAll(".catagory");

catagories.forEach(catagory => catagory.onclick = () => {
    var subjectList = catagory.nextElementSibling;
    if (subjectList.style.display != "block") {
        subjectList.style.display = "block";

        if (catagory.classList.contains("btn-primary")) {
            catagory.style.borderColor = "#ea4f4f";
        } else {
            catagory.style.borderColor = "#000";
        }

    } else {
        subjectList.style.display = "none";

        if (catagory.classList.contains("btn-primary")) {
            catagory.style.borderColor = "#ccc";
        } else {
            catagory.style.borderColor = "#ea4f4f";
        }
    }
});
    