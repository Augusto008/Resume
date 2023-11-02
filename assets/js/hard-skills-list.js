document.addEventListener("DOMContentLoaded", function() {
    try {
        const list = document.getElementById("hard-skills-list");

        const skills = {
            "Programming Logics": "",
            "Programming Languages": {
                "C": "c.svg",
                "Java": "java.svg",
                "JavaScript": "javascript.svg",
                "PHP": "php.svg",
            },
            "Database": {
                "SQL": "sql.svg",
                "PostgreSQL": "postgres.svg",
                "Prisma": "prisma-orm.svg",
            },
            "WEB Development": {
                "HTML": "html5.svg",
                "CSS": "css.svg",
                "jQuery": "jquery.svg",
                "RegEx": "regex.svg",
            },
            "Back End": {
                "NodeJS": "nodejs.svg",
                "CRON": "cron.svg",
            },
            "Tools": {
                "Laravel": "laravel.svg",
                "Bootstrap": "bootstrap.svg",
            },
            "Versioning": {
                "Git": "git.svg",
                "GitHub": "github.svg",
            }
        };

        for (let skill in skills) {
            list.innerHTML += `<li class="mb-3">
                ${skill}
                <ul id="${skill}-list" class="list-group list-group-horizontal flex-wrap">
                
                </ul>
            </li>`;

            if(skills[skill] !== "") {
                let list_content = document.getElementById(`${skill}-list`);
                for(let item in skills[skill]) {
                    list_content.innerHTML += `<li class="list-group-item" title="${item}">
                        <img class="m-auto" src="assets/icons/${skills[skill][item]}" width="auto" height="40px" alt="${item}">
                    </li>`;
                }
            }
        }
    } catch(error) {
        const list = document.getElementById("hard-skills-list");
        list.innerHTML = "<h2 class='text-center'>Something is go wrong.<br>Come back another time.</h2>";
    }
});