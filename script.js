document.addEventListener("DOMContentLoaded", function() {
    const descriptionDiv = document.querySelector(".description");
    const descriptionText = document.getElementById("descriptionText");
    const closeButton = document.getElementById("closeButton");
    const gridContainer = document.querySelector(".gridContainer");

    const colleges = [
        {
            name: "seneca",
            link: "https://www.senecapolytechnic.ca/about/"
        },
        {
            name: "georgian",
            link: "https://www.georgiancollege.ca/",
        },
        {
            name: "georgeBrown",
            link: "https://www.georgebrown.ca/about/campuses-locations/casa-loma",
        },
        {
            name: "fleming",
            link: "https://www.flemingcollegetoronto.ca/",
        },
    ];

    function displayDescription(collegeID) {
        const college = colleges.find(college => college.name === collegeID);

        if (college) {
            if (college.link) {
                window.location.href = college.link;
            } else {
                descriptionDiv.style.display = "block";
                gridContainer.style.filter = "blur(5px)";
                descriptionText.textContent = college.description;
            }
        }
    }

    function hideDescription() {
        descriptionDiv.style.display = "none";
        gridContainer.style.filter = "none";
    }

    closeButton.addEventListener("click", hideDescription);

    document.querySelectorAll(".collegeImage").forEach(element => {
        element.addEventListener("click", function () {
            displayDescription(this.id);
        });
    });
});
