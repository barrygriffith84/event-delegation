// Lightning Exercise
// document.querySelector("#my-todo-list").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `<h1>My To Do List</h1>`
// })

// document.querySelector("#family-todo-list").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `<h1>Family To Do List</h1>`
// })

// document.querySelector("#completed-tasks").addEventListener("click", function(){
//     document.querySelector("#page-content").innerHTML = `<h1>Completed Tasks</h1>`
// })





// Practice
// Practice: SPA Navigation Bar
// Setup

// Use the basicProj command to create a new project with an index.html file, a script file, and a CSS sheet.
// Requirements

//     In your index.html file, create a navigation bar with four links:
//         "Home"
//         "Contact Me"
//         "About Me"
//         "Projects"
//     When the user clicks on any given link, they should see an h1 element with an appropriate heading and some lorem ipsum text. For example, when the user clicks on the "Home" link, they should see a heading that says "Home" and some dummy text.
//         All content should be rendered and removed dynamically with JavaScript
//         You should only have one HTML document.
//     In the "Contact Me" section, the user should see a form with two inputs: one for the user's name and one for their message. They should also see a button that says "Send".
//     When the user clicks the "Send" button, the message inputs should clear and they should see a confirmation message below the form that says "Your message has been sent"





function buildTaskForm(){
    return `
    <form>
        <input id="name-input" type="text" placeholder="Name" />
        <input id="message-input" type="text" placeholder="Message" />
    </form>
    <button id="contact-me-submit-btn">Submit</button>
    `
}

document.querySelector("#home").addEventListener("click", function(){
    document.querySelector("#page-content").innerHTML="<h1>Home</h1> <p>Lorem ipsum dolor sit amet</p>"
})

document.querySelector("#contact-me").addEventListener("click", function(){
    const pageContentContainer = document.querySelector("#page-content")
    pageContentContainer.innerHTML= "<h1>Contact Me</h1> <p>Lorem ipsum dolor sit amet</p>"
    pageContentContainer.innerHTML+= buildTaskForm();

})

document.querySelector("#about-me").addEventListener("click", function(){
    document.querySelector("#page-content").innerHTML="<h1>About Me</h1> <p>Lorem ipsum dolor sit amet</p>"
})

document.querySelector("#projects").addEventListener("click", function(){
    document.querySelector("#page-content").innerHTML="<h1>Projects</h1> <p>Lorem ipsum dolor sit amet</p>"
})

document.querySelector("body").addEventListener("click", function(){
    if(event.target.id === `contact-me-submit-btn`){
    document.querySelector("#page-content").innerHTML += "<p>Your message has been sent</p>"}
})







