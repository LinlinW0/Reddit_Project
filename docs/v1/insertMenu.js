document.addEventListener("DOMContentLoaded", function() {
    var targetDiv = document.getElementById("targetDiv");
    // Header
    var htmlContent = '<style>#targetDiv ul {list-style-type: none;margin: 0;padding: 0;overflow: hidden;background-color: #333;}li {float: left;}li a {display: block;color: white;text-align: center;padding: 14px 16px;text-decoration: none;}li a:hover:not(.active) {background-color: #111;} .active {background-color: #773274;}</style><ul><li><a class="active" href="milestone1.html">EDA</a></li><li><a href="nlp.html">NLP</a></li><li><a href="ml.html">ML</a></li><li><a href="about.html">About</a></li></ul>';
    targetDiv.innerHTML = htmlContent;
  });
  