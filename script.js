<script>
  function typeWriter(elementId, text, speed = 100) {
    let i = 0;
    function typing() {
      if (i < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }

  // Example usage for different pages:
  window.onload = function () {
    // Home page title
    if (document.getElementById("homeTitle")) {
      typeWriter("homeTitle", "Welcome to Delphina's Website", 80);
    }

    // About page title
    if (document.getElementById("aboutTitle")) {
      typeWriter("aboutTitle", "About Us - Technology & Machine Learning", 80);
    }

    // Contact page title
    if (document.getElementById("contactTitle")) {
      typeWriter("contactTitle", "Get in Touch with Us", 80);
    }
  };
</script>
