document.addEventListener("DOMContentLoaded", function () {

    try {
        const softSkills = [
            "Proactivity",
            "Positivity",
            "Criativity",
            "Problem Solving Ability",
            "Critical Thinking",
            "Result Orientation",
            "Emocional Control",
            "Flexibility",
            "Resiliency",
            "Ethic",
            "Communication",
            "Team Work",
            "Empathy",
            "Emocional Intelligence",
            "Collaboratio",
            "Overview",
        ]
        const softSkillsList = document.getElementById("soft-skills-list");
    
        softSkills.sort();
        
        softSkills.forEach(skill => {
            softSkillsList.innerHTML += `<li class="col py-1 px-2">${skill}</li>`;
        });
    } catch (error) {
        const list = document.getElementById("hard-skills-list");
        list.innerHTML = "<h2 class='text-center'>Something is go wrong.<br>Come back another time.</h2>";
    }

});