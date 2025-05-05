document.addEventListener("DOMContentLoaded", () => {
    const sceneElement = document.getElementById("scene")
    const messageContainer = document.getElementById("message-container")
    const nextButton = document.getElementById("next-button")
    const restartButton = document.getElementById("restart-button")
  
    let currentScene = 0
    const totalScenes = 3
    let isTransitioning = false
  
    // Initialize the first scene
    renderScene(currentScene)
  
    // Event listeners
    nextButton.addEventListener("click", nextScene)
    restartButton.addEventListener("click", restartStory)
  
    function nextScene() {
      if (currentScene < totalScenes - 1 && !isTransitioning) {
        isTransitioning = true
  
        // Clear current scene
        clearMessages()
  
        // Hide next button during transition
        nextButton.classList.add("hidden")
  
        // Show walking animation
        showWalkingAnimation()
  
        // After walking animation, show next scene
        setTimeout(() => {
          currentScene++
          renderScene(currentScene)
          isTransitioning = false
        }, 6000)
      }
    }
  
    function restartStory() {
      currentScene = 0
      clearMessages()
      nextButton.classList.remove("hidden")
      restartButton.classList.add("hidden")
      renderScene(currentScene)
    }
  
    function renderScene(sceneIndex) {
      sceneElement.innerHTML = ""
  
      switch (sceneIndex) {
        case 0:
          renderPierScene()
          break
        case 1:
          renderBeachScene()
          break
        case 2:
          renderRestaurantScene()
          break
      }
    }
  
    function showWalkingAnimation() {
      sceneElement.innerHTML = `
              <div class="walking-scene">
                  <div class="walking-ground"></div>
                  
                  <div class="tree" style="left: 10%;">
                      <div class="tree-trunk"></div>
                      <div class="tree-top"></div>
                  </div>
                  
                  <div class="tree" style="left: 30%;">
                      <div class="tree-trunk"></div>
                      <div class="tree-top"></div>
                  </div>
                  
                  <div class="tree" style="left: 70%;">
                      <div class="tree-trunk"></div>
                      <div class="tree-top"></div>
                  </div>
                  
                  <div class="tree" style="left: 90%;">
                      <div class="tree-trunk"></div>
                      <div class="tree-top"></div>
                  </div>
                  
                  <div class="cloud" style="width: 100px; height: 60px; top: 20%; left: 20%;"></div>
                  <div class="cloud" style="width: 80px; height: 50px; top: 15%; left: 50%;"></div>
                  <div class="cloud" style="width: 120px; height: 70px; top: 25%; left: 80%;"></div>
                  
                  <div class="walking-boyfriend boyfriend">
                      <div class="boyfriend-head"></div>
                      <div class="boyfriend-hair"></div>
                      <div class="boyfriend-eye left"></div>
                      <div class="boyfriend-eye right"></div>
                      <div class="boyfriend-mouth"></div>
                      <div class="boyfriend-body"></div>
                      <div class="boyfriend-arm left"></div>
                      <div class="boyfriend-arm right"></div>
                      <div class="boyfriend-leg left"></div>
                      <div class="boyfriend-leg right"></div>
                      <div class="walking-boyfriend-heart">❤️</div>
                  </div>
              </div>
          `
  
      // Show hearts periodically
      let heartIndex = 0
      const hearts = document.querySelectorAll(".walking-boyfriend-heart")
  
      const heartInterval = setInterval(() => {
        if (heartIndex < hearts.length) {
          hearts[heartIndex].style.opacity = "1"
          heartIndex++
        } else {
          clearInterval(heartInterval)
        }
      }, 1000)
    }
  
    function renderPierScene() {
      sceneElement.innerHTML = `
              <div class="pier-scene">
                  <div class="sun"></div>
                  <div class="ocean">
                      <div class="wave"></div>
                  </div>
                  
                  <div class="pier">
                      <div class="pier-post" style="left: 10%;"></div>
                      <div class="pier-post" style="left: 30%;"></div>
                      <div class="pier-post" style="left: 50%;"></div>
                      <div class="pier-post" style="left: 70%;"></div>
                      <div class="pier-post" style="left: 90%;"></div>
                  </div>
                  
                  <div class="boyfriend" style="bottom: calc(20% + 30px); left: 30%;">
                      <div class="boyfriend-head"></div>
                      <div class="boyfriend-hair"></div>
                      <div class="boyfriend-eye left"></div>
                      <div class="boyfriend-eye right"></div>
                      <div class="boyfriend-mouth"></div>
                      <div class="boyfriend-body"></div>
                      <div class="boyfriend-arm left"></div>
                      <div class="boyfriend-arm right"></div>
                      <div class="boyfriend-leg left"></div>
                      <div class="boyfriend-leg right"></div>
                  </div>
                  
                  <div class="girlfriend" style="bottom: calc(20% + 30px); right: 30%;">
                      <div class="girlfriend-head"></div>
                      <div class="girlfriend-hair"></div>
                      <div class="girlfriend-eye left"></div>
                      <div class="girlfriend-eye right"></div>
                      <div class="girlfriend-mouth"></div>
                      <div class="girlfriend-body"></div>
                      <div class="girlfriend-arm left"></div>
                      <div class="girlfriend-arm right"></div>
                      <div class="girlfriend-leg left"></div>
                      <div class="girlfriend-leg right"></div>
                  </div>
              </div>
          `
  
      // Initially hide the next button
      nextButton.classList.add("hidden")
  
      // Show message after a delay
      setTimeout(() => {
        showMessage(
          "Desde el primer día sentí que te conocía desde hace mucho; la confianza y la fluidez con la que hablamos es inolvidable.",
        )
  
        // Show next button after message appears
        setTimeout(() => {
          nextButton.classList.remove("hidden")
        }, 1000)
      }, 2000)
    }
  
    function renderBeachScene() {
      sceneElement.innerHTML = `
              <div class="beach-scene">
                  <div class="beach-sun"></div>
                  <div class="sand"></div>
                  
                  <div class="palm-tree" style="left: 10%;">
                      <div class="palm-trunk"></div>
                      <div class="palm-leaf"></div>
                      <div class="palm-leaf"></div>
                      <div class="palm-leaf"></div>
                      <div class="palm-leaf"></div>
                  </div>
                  
                  <div class="palm-tree" style="right: 10%;">
                      <div class="palm-trunk"></div>
                      <div class="palm-leaf"></div>
                      <div class="palm-leaf"></div>
                      <div class="palm-leaf"></div>
                      <div class="palm-leaf"></div>
                  </div>
                  
                  <div class="boyfriend" style="bottom: 30%; left: 40%;">
                      <div class="boyfriend-head"></div>
                      <div class="boyfriend-hair"></div>
                      <div class="boyfriend-eye left"></div>
                      <div class="boyfriend-eye right"></div>
                      <div class="boyfriend-mouth"></div>
                      <div class="boyfriend-body"></div>
                      <div class="boyfriend-arm left" style="transform: rotate(30deg);"></div>
                      <div class="boyfriend-arm right" style="transform: rotate(-30deg);"></div>
                      <div class="boyfriend-leg left" style="transform: rotate(45deg);"></div>
                      <div class="boyfriend-leg right" style="transform: rotate(-45deg);"></div>
                  </div>
                  
                  <div class="girlfriend" style="bottom: 30%; left: 50%;">
                      <div class="girlfriend-head"></div>
                      <div class="girlfriend-hair"></div>
                      <div class="girlfriend-eye left"></div>
                      <div class="girlfriend-eye right"></div>
                      <div class="girlfriend-mouth"></div>
                      <div class="girlfriend-body"></div>
                      <div class="girlfriend-arm left" style="transform: rotate(30deg);"></div>
                      <div class="girlfriend-arm right" style="transform: rotate(-30deg);"></div>
                      <div class="girlfriend-leg left" style="transform: rotate(45deg);"></div>
                      <div class="girlfriend-leg right" style="transform: rotate(-45deg);"></div>
                  </div>
                  
                  <div class="book book1"></div>
                  <div class="book book2"></div>
                  
                  <div class="kiss-animation">
                      <div class="heart">❤️</div>
                  </div>
              </div>
          `
  
      // Initially hide the next button
      nextButton.classList.add("hidden")
  
      // Show first message
      setTimeout(() => {
        showMessage(
          "Siempre supe que esto no era un juego, por lo que tuve que aclarar la importancia de Dios en nuestras vidas.",
        )
      }, 2000)
  
      // Show kiss animation and second message
      setTimeout(() => {
        const kissAnimation = document.querySelector(".kiss-animation")
        kissAnimation.style.opacity = "1"
  
        setTimeout(() => {
          showMessage("No podía resistirme; desde el día que me diste el mango supe que tenías que casarte conmigo.")
  
          // Show next button after all messages appear
          setTimeout(() => {
            nextButton.classList.remove("hidden")
          }, 1000)
        }, 1000)
      }, 6000)
    }
  
    function renderRestaurantScene() {
      sceneElement.innerHTML = `
              <div class="restaurant-scene">
                  <div class="restaurant-wall"></div>
                  <div class="restaurant-floor"></div>
                  
                  <div class="restaurant-table">
                      <div class="restaurant-table-cloth"></div>
                  </div>
                  
                  <div class="pizza">
                      <div class="pizza-crust"></div>
                      <div class="pizza-cheese"></div>
                      <div class="pizza-topping" style="top: 30px; left: 30px;"></div>
                      <div class="pizza-topping" style="top: 50px; left: 60px;"></div>
                      <div class="pizza-topping" style="top: 40px; left: 45px;"></div>
                      <div class="pizza-topping" style="top: 20px; left: 55px;"></div>
                      <div class="pizza-topping" style="top: 60px; left: 25px;"></div>
                      <div class="pizza-slice" style="transform: rotate(45deg);"></div>
                      <div class="pizza-slice" style="transform: rotate(90deg);"></div>
                      <div class="pizza-slice" style="transform: rotate(135deg);"></div>
                      <div class="pizza-slice" style="transform: rotate(180deg);"></div>
                  </div>
                  
                  <div class="boyfriend" style="bottom: 40%; left: 35%;">
                      <div class="boyfriend-head"></div>
                      <div class="boyfriend-hair"></div>
                      <div class="boyfriend-eye left"></div>
                      <div class="boyfriend-eye right"></div>
                      <div class="boyfriend-mouth"></div>
                      <div class="boyfriend-body"></div>
                      <div class="boyfriend-arm left" style="transform: rotate(30deg);"></div>
                      <div class="boyfriend-arm right" style="transform: rotate(-30deg);"></div>
                      <div class="boyfriend-leg left"></div>
                      <div class="boyfriend-leg right"></div>
                  </div>
                  
                  <div class="girlfriend" style="bottom: 40%; left: 65%;">
                      <div class="girlfriend-head"></div>
                      <div class="girlfriend-hair"></div>
                      <div class="girlfriend-eye left"></div>
                      <div class="girlfriend-eye right"></div>
                      <div class="girlfriend-mouth"></div>
                      <div class="girlfriend-body"></div>
                      <div class="girlfriend-arm left" style="transform: rotate(30deg);"></div>
                      <div class="girlfriend-arm right" style="transform: rotate(-30deg);"></div>
                      <div class="girlfriend-leg left"></div>
                      <div class="girlfriend-leg right"></div>
                  </div>
              </div>
          `
  
      // Hide next button for this scene
      nextButton.classList.add("hidden")
  
      // Show boyfriend's question
      setTimeout(() => {
        showMessage("¿Quieres ser mi novia?", "boyfriend")
      }, 3000)
  
      // Show girlfriend's answer
      setTimeout(() => {
        showMessage("Sí.", "girlfriend")
      }, 5000)
  
      // Show final message
      setTimeout(() => {
        clearMessages()
        showFinalMessage()
      }, 8000)
    }
  
    function showMessage(text, type = "") {
      clearMessages()
  
      const messageElement = document.createElement("div")
      messageElement.className = `message ${type}`
      messageElement.textContent = text
  
      messageContainer.appendChild(messageElement)
  
      // Trigger reflow to ensure the transition works
      messageElement.offsetHeight
  
      // Show the message with animation
      messageElement.classList.add("show")
    }
  
    function clearMessages() {
      messageContainer.innerHTML = ""
    }
  
    function showFinalMessage() {
      const finalMessage = document.createElement("div")
      finalMessage.className = "final-message"
      finalMessage.textContent = "Esto solo es: The 1st edition."
  
      sceneElement.appendChild(finalMessage)
  
      // Trigger reflow to ensure the transition works
      finalMessage.offsetHeight
  
      // Show the message with animation
      finalMessage.classList.add("show")
  
      // Show restart button
      setTimeout(() => {
        restartButton.classList.remove("hidden")
      }, 2000)
    }
  })
  