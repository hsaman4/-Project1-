function story1Function(){
    let continues = document.getElementById("continue");
    let moreText = document.getElementById("more");
    let buttonText = document.getElementById("story1Button");
  
    if (continues.style.display === "none") {
      continues.style.display = "inline";
      buttonText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      continues.style.display = "none";
      buttonText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  