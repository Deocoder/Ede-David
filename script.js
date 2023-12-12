document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hidden")

  function checkScroll() {
    elements.forEach((element) => {
      const position = element.getBoundingClientRect()

      if (position.top < window.innerHeight * 0.8) {
        element.classList.add("visible")
        element.classList.remove("hidden")
      }
    })
  }

  window.addEventListener("scroll", checkScroll)
  checkScroll() // Check on initial load
})

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Splide with initial options
  const splide = new Splide(".splide", {
    type: "carousel",
    perPage: 1, // Initial perPage value
    focus: "center", // Center the active slide
    autoplay: true,
  })

  splide.mount()

//   // Function to update perPage based on screen width
//   function updatePerPage() {
//     const screenWidth =
//       window.innerWidth ||
//       document.documentElement.clientWidth ||
//       document.body.clientWidth

//     // Set perPage to 1 for screens smaller than 768 pixels
//     // Otherwise, set it back to 3
//     splide.options.perPage = screenWidth < 768 ? 1 : 3

//     // Refresh the Splide instance with the new options
//     splide.refresh()
//   }

//   // Call the function initially and on window resize
//   updatePerPage()
//   window.addEventListener("resize", updatePerPage)
})
