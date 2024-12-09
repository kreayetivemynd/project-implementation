document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded successfully.");
});

document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
            button.addEventListener('click', () => {
                const extraContent = button.previousElementSibling;
                if (extraContent.classList.contains('d-none')) {
                    extraContent.classList.remove('d-none');
                    extraContent.style.maxHeight = '200px'; // Animate content appearance
                    button.textContent = "Read Less";
                } else {
                    extraContent.style.maxHeight = '0';
                    setTimeout(() => extraContent.classList.add('d-none'), 300); // Add delay to hide completely
                    button.textContent = "Read More";
                }
            });
        });
    });

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("gallery-form");
    const submittedEntries = document.getElementById("submittedEntries");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
            form.classList.add("was-validated");
        } else {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const shoeModel = document.getElementById("shoeModel").value;
            const description = document.getElementById("description").value;

            // Display Submitted Data
            const entry = document.createElement("li");
            entry.innerHTML = `
                <strong>${name}</strong> (Email: ${email}) submitted:
                <br>Shoe Model: ${shoeModel}
                <br>Description: ${description}
                <hr>
            `;
            submittedEntries.appendChild(entry);

            // Reset the form
            form.reset();
            form.classList.remove("was-validated");
        }
    });
});


const imageUpload = document.getElementById("imageUpload");
imageUpload.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Display the image preview
            const previewContainer = document.getElementById("submittedEntries");
            const previewImage = document.createElement("img");
            previewImage.src = e.target.result;
            previewImage.alt = "Uploaded Preview";
            previewImage.style.maxWidth = "150px";
            previewImage.classList.add("img-thumbnail", "mr-2", "mb-2");

            previewContainer.appendChild(previewImage);
        };
        reader.readAsDataURL(file);
    }
});

if (document.getElementById("funFactsModal")) {
    setTimeout(() => {
        $('#funFactsModal').modal('show');
    }, 3);
}

const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});