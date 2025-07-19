function changeBackgroundFromImg(imgId, text, description) {
    const imgElement = document.getElementById(imgId);
    const imgSrc = imgElement.getAttribute('src');
    document.getElementById('background').style.backgroundImage = `url('${imgSrc}')`;
    document.getElementById('text').innerText = text;
    document.getElementById('description').innerText = description;
  }



