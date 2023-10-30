document.addEventListener("DOMContentLoaded", function() {

    try {
        const selector = document.getElementById("project-selector");
        const slider = document.getElementById("projects-slider");
        var projects = { 
            "web_crawler_1st_attempt": {
                "link": "https://github.com/Augusto008/web_crawler_1st_attempt",
                "description": "Web crawler with php",
                "img": "assets/images/me.jpg",
                "technical": {
                    "title" : "Programming languages",
                    "text" : "PHP"
                }
            },
            "email_sender": {
                "link": "https://github.com/Augusto008/email_sender",
                "description": "",
                "img": "assets/images/me.jpg",
                "technical": {
                    "title" : "Programming languages",
                    "text" : "Javascript"
                }
            }
        };
    
        for (const project in projects) {
            let count = document.getElementsByClassName("projects");
            let show = "";
            let aria_current = "";
            if(count.length === 0) {
                show = "active";
                aria_current = "aria_current=\"true\"";
            }

            selector.innerHTML += `<option value="${project}" data-bs-target="#my-projects" data-bs-slide-to="${selector.length}" aria-label="${project}" ${aria_current}>${project}</option>`;
            slider.innerHTML += `<div class="carousel-item projects ${show}">
                    <div class="card mx-auto col-10">
                        <div class="row g-0" style="max-height: 320px; height: 32vw;">
                            <div class="col-4 m-0 p-1 h-100 d-flex justify-content-center align-items-center">
                                <img src="${projects[project].img}" class="object-fit-contain rounded m-0 p-0 mh-100" alt="${project}">
                            </div>
                            <div class="col-8 overflow-scroll" style="max-height: 100%;">
                                <div class="card-body">
                                    <h5 class="card-title">${project}</h5>
                                    <p class="card-text">${projects[project].description}</p>
                                    <a class="card-text" href="${projects[project].link}"><small class="text-body-secondary">Link to Project</small></a><br>
                                    <button class="mt-4 btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#proj" aria-controls="proj">Technical Details</button>
                                </div>
                            </div>
                        </div>
                        <div id="proj" class="accordion-collapse collapse" data-bs-parent="#my-projects" style="height: 60vw; overflow: scroll;">
                            <div class="accordion-body">
                                <div id="general-info">
                                    <h5>This Project was created using:</h5>
                                    <ul class="row">
                                        <li>Markup Languages</li>
                                        <li>Programming Languages</li>
                                        <li>Frameworks</li>
                                        <li>APIs</li>
                                        <li>Dependencies</li>
                                        <li>Database</li>
                                        <li>styles</li>
                                        <li>More</li>
                                    </ul>
                                </div>
                            </div>
                        </div>                          
                    </div>
                </div>`;
        }
    } catch (error) {
        console.log(error.message);
    }
    
});