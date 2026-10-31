const mySkills = [
    "HTML: Creating and structuring web pages.",
    "CSS: Styling websites and creating attractive layouts.",
    "JavaScript: Adding interactivity and functionality to websites.",
    "C#: Developing applications using object-oriented programming concepts.",
    "SQL and Databases: Working with databases and writing queries.",
    "Kotlin: Developing Android applications.",
    "Cybersecurity: Understanding information security principles and secure development practices.",
    "Responsive Web Design: Designing websites that adapt to different screen sizes.",
    "Problem-Solving: Analysing problems and developing practical software solutio"
]
const ulEl = document.getElementById("ul-el")
const messageEl = document.getElementById("message-btn")

messageEl.addEventListener("click", function(){
    alert("Thank you for visiting my portfolio!")
})

for (i = 0; i < mySkills.length ; i++) {
    ulEl.innerHTML += "<li>" + mySkills[i] + " " + "</li>"
}