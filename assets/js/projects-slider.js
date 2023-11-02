document.addEventListener("DOMContentLoaded", function() {

    try {
        const selector = document.getElementById("project-selector");
        const slider = document.getElementById("projects-slider");
        var projects = { 
            "web_crawler_1st_attempt": {
                "link": "https://github.com/Augusto008/web_crawler_1st_attempt",
                "video": "",
                "description": "Web crawler with php",
                "img": "assets/images/me.jpg",
                "technical": {
                    "Programming languages" : "PHP",
                }
            },
            "email_sender": {
                "link": "https://github.com/Augusto008/email_sender",
                "video": "",
                "description": "",
                "img": "assets/images/me.jpg",
                "technical": {
                    "Markup Languages": "HTML",
                    "Stylesheets": "CSS",
                    "Programming languages": "JavaScript",
                    "Database": "SQL | PostgreSQL | Prisma",
                }
            },
            "react_nextjs": {
                "link": "https://github.com/Augusto008/react_nextjs",
                "video": "",
                "description": "project using react and nextjs",
                "img": "assets/images/me.jpg",
                "technical": {

                }
            },
            "C-Language": {
                "link": "https://github.com/Augusto008/C-Language",
                "video": "",
                "description": "",
                "img": "assets/images/me.jpg",
                "technical": {

                }
            },
            "gerador-de-curriculos": {
                "link": "https://github.com/Augusto008/gerador-de-curriculos",
                "video": "",
                "description": "",
                "img": "assets/images/me.jpg",
                "technical": {

                }
            },
            "projetoTenBrasil": {
                "link": "https://github.com/Augusto008/projetoTenBrasil",
                "video": "",
                "description": "",
                "img": "assets/images/me.jpg",
                "technical": {

                }
            },
            "Resume": {
                "link": "https://github.com/Augusto008/Resume",
                "video": "",
                "description": "",
                "img": "assets/images/me.jpg",
                "technical": {
                    "Markup Languages": "HTML",
                    "Programming Languages": "Javascript",
                    "Frameworks": "Bootstrap",
                    "APIs": "",
                    "Dependencies": "",
                    "Database": "",
                    "Stylesheet": "CSS",
                }
            }
        };
    
        for (const project in projects) {
            let count = document.getElementsByClassName("projects");
            let show = "";
            let video = "";
            let aria_current = "";
            if(count.length === 0) {
                show = "active";
                aria_current = "aria_current=\"true\"";
            }
            if(projects[project].video !== "") {
                video = ` | <a class="card-text text-decoration-none text-dark" target="_blank" href="${projects[project].video}">Project Video</a>`;
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
                                    <p><small class="text-dark"><a class="card-text text-decoration-none text-light" target="_blank" href="${projects[project].link}">Project Link</a>${video}</small></p>
                                    <button class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#proj" aria-controls="proj">Technical Details</button>
                                </div>
                            </div>
                        </div>
                        <div id="proj" class="accordion-collapse collapse" data-bs-parent="#my-projects" style="height: 60vw; overflow: scroll;">
                            <div class="accordion-body">
                                <div id="general-info">
                                    <h5>This Project was created using:</h5>
                                    <ul id="${project}-list" class="row">
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

            for (let item in projects[project].technical) {
                let list = document.getElementById(`${project}-list`);
                list.innerHTML += `<li><h6>${item}</h6><p>${projects[project].technical[item]}</p></li>`;
            }
        }
    } catch (error) {
        console.log(error.message);
    }
    
});