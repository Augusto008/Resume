document.addEventListener("DOMContentLoaded", function() {

    try {
        const selector = document.getElementById("project-selector");
        const slider = document.getElementById("projects-slider");
        var projects = { 
            "web_crawler_1st_attempt": {
                "link": "https://github.com/Augusto008/web_crawler_1st_attempt",
                "video": "",
                "description": "My first attempt building a web crawler with php",
                "img": "assets/icons/spider-web-crawler.svg",
                "technical": {
                    "Programming languages" : "PHP",
                }
            },
            "email_sender": {
                "link": "https://github.com/Augusto008/email_sender",
                "video": "",
                "description": `&#160&#160&#160&#160It's an API that can send emails automatically from multiple email addresses, registering the successes and failures in the database.<br>
                                &#160&#160&#160&#160Templates and the data the will be added to them are stored in the database and, when requested, will be revalidated and sended. If something go wrong, the status will point it and the error will be stored.`,
                "img": "assets/icons/email_sender.svg",
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
                "description": "React and nextjs tests",
                "img": "assets/icons/react-nextjs.svg",
                "technical": {

                }
            },
            "C-Language": {
                "link": "https://github.com/Augusto008/C-Language",
                "video": "",
                "description": "C language fundaments tests",
                "img": "assets/icons/c.svg",
                "technical": {
                    "Programming languages": "C language",
                }
            },
            "gerador-de-curriculos": {
                "link": "https://github.com/Augusto008/gerador-de-curriculos",
                "video": "",
                "description": "My first try to create a resume generator",
                "img": "assets/icons/resume.svg",
                "technical": {

                }
            },
            "Resume": {
                "link": "https://github.com/Augusto008/Resume",
                "video": "",
                "description": "This page codes",
                "img": "assets/icons/right-employee.svg",
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
        
        const key_value_projects = Object.entries(projects);
        key_value_projects.sort((a, b) => a[0].localeCompare(b[0]));
        sort_projects = Object.fromEntries(key_value_projects);
    
        for (const project in sort_projects) {
            let count = document.getElementsByClassName("projects");
            let show = "";
            let video = "";
            let aria_current = "";
            if(count.length === 0) {
                show = "active";
                aria_current = "aria_current=\"true\"";
            }
            if(projects[project].video) {
                video = ` | <a class="card-text text-decoration-none text-dark" target="_blank" href="${projects[project].video}">Project Video</a>`;
            }

            selector.innerHTML += `<option value="${project}" data-bs-target="#my-projects" data-bs-slide-to="${selector.length}" aria-label="${project}" ${aria_current}>${project}</option>`;
            slider.innerHTML += `<div id="${project}" class="carousel-item projects ${show}">
                    <div class="card mx-auto col-10">
                        <div class="row g-0" style="max-height: 320px; height: 32vw;">
                            <div class="col-4 m-0 p-1 h-100 d-flex justify-content-center align-items-center">
                                <img src="${projects[project].img}" class="object-fit-contain rounded m-0 p-0 w-100 h-100 mw-100 mh-100" alt="${project}">
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
                if (projects[project].technical[item]) {
                    list.innerHTML += `<li><h6>${item}</h6><p>${projects[project].technical[item]}</p></li>`;
                }
            }
        }

        selector.addEventListener("change", function() {
            const selectedProject = selector.value;

            let carouselItems = document.querySelectorAll('.carousel-item.projects');
            carouselItems.forEach(item => item.classList.remove('active'));

            let selectItem = document.getElementById(selectedProject);
            if (selectItem) {
                selectItem.classList.add('active');
            }
        });
    } catch (error) {
        const projects = document.getElementById("my-projects");
        projects.innerHTML = "<h1 class='text-center'>Something is go wrong.<br>Come back another time.</h1>";
    }
    
});