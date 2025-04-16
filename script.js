document.addEventListener("DOMContentLoaded", function() {
    AOS.init();  // Initialize AOS library
  
    // Dynamic Project List
    const projects = [
      {
        title: "Twitter Sentiment Analysis",
        description: "This project proposes a hate speech detection system using LSTM algorithm.",
        link: "https://github.com/Rajiv1711/Twitter_Sentiment_Analysis.git"
      },
      {
        title: "To-Do List",
        description: "A simple Android To-Do List app built with Kotlin.",
        link: "https://github.com/Rajiv1711/Todo_List.git"
      },
      {
        title: "Portfolio Website",
        description: "A responsive and interactive portfolio website using HTML, CSS, and Bootstrap.",
        link: "https://github.com/Rajiv1711/Potfolio-Website.git"
      },
      {
        title: "Next Word Prediction",
        description: "This project is a simpler version of autocomplete keyboard.",
        link: "https://github.com/Rajiv1711/Next_Word_prediction.git"
      },
      {
        title: "Driver's Drowsiness Sensor",
        description: "This is a Embedded technology Project for the safety of overnight drivers.",
        link: "https://github.com/Rajiv1711/Driver-s-Drowsiness-Sensor-ET-.git"
      }
    ];
  
    const projectContainer = document.getElementById('projects-list');
    projects.forEach(project => {
      const projectCard = `
        <div class="col-md-4 mb-3" data-aos="fade-up">
          <div class="card bg-dark text-light">
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.description}</p>
              <a href="${project.link}" target="_blank" class="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>`;
      
      projectContainer.innerHTML += projectCard;
    });
  
    // Google Sheets Form Submission
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxfDotKr4EjxzVG5c4956tKFIG7uz8izeWpRVwcNRTyuuRI2uA3pV-fBfJ1iEsyS_nd/exec';
    document.querySelectorAll('.add-link-btn').forEach(button => {
      button.addEventListener('click', () => {
          const link = prompt('Enter the certification link:');
          if (link) {
              const certDiv = button.parentElement;
              const newLink = document.createElement('a');
              newLink.href = link;
              newLink.textContent = 'Added Certification Link';
              newLink.className = 'view-certificate-btn';
              certDiv.appendChild(newLink);
          }
      });
  });
  
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');  // Add this line for testing
      
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => data[key] = value);
      
        fetch(scriptURL, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(response => response.json())
        .then(result => {
          console.log(result);  // Add this line for debugging response
          if (result.result === 'success') {
            responseMessage.innerHTML = 'Your message has been sent successfully!';
            form.reset();
          } else {
            responseMessage.innerHTML = 'Oops! Something went wrong. Please try again.';
          }
        })
        .catch(error => {
          console.log(error);  // Add this line for debugging errors
          responseMessage.innerHTML = 'Oops! Something went wrong. Please try again.';
        });
    });      
});
  