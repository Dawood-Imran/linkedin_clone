document.getElementById("input--email").addEventListener("focus", function() {
    document.getElementById("label--email").classList.add("transform")
  })
  
  document.getElementById("input--email").addEventListener("blur", function() {
    if (document.getElementById("input--email").value === "")
      document.getElementById("label--email").classList.remove("transform")
  })
  
  document.getElementById("input--password").addEventListener("focus", function() {
    document.getElementById("label--password").classList.add("transform")
  })
  
  document.getElementById("input--password").addEventListener("blur", function() {
    if (document.getElementById("input--password").value === "")
      document.getElementById("label--password").classList.remove("transform")
  })