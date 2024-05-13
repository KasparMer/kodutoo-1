function updateClock() {
  const now = new Date();

  const timeElement = document.getElementById('time');
  timeElement.textContent = now.toLocaleTimeString();

  const dateElement = document.getElementById('date');
  dateElement.textContent = formatDate(now); // Värskendame kuupäeva formaati

  const dayElement = document.getElementById('day');
  dayElement.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });

  const yearElement = document.getElementById('year');
  yearElement.textContent = now.getFullYear();
}

function formatDate(date) {
  // Võtame kasutaja määratud kuupäevaformaadi
  const dateStyle = localStorage.getItem('dateStyle');
  
  if (dateStyle === 'DD/MM/YY') {
    return `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear().toString().slice(-2)}`;
  } else if (dateStyle === 'MM/DD/YY') {
    return `${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}/${date.getFullYear().toString().slice(-2)}`;
  } else {
    // Kui pole kasutaja määratud, tagastame vaikimisi formaadi
    return date.toLocaleDateString();
  }
}

// Update clock every second
setInterval(updateClock, 1000);

// Listen for user input to change clock attributes
document.addEventListener('DOMContentLoaded', function() {
  const clock = document.getElementById('clock');
  const changeFontButton = document.getElementById('changeFontButton');
  const changeBackgroundColorButton = document.getElementById('changeBackgroundColorButton');
  const changeDateStyleButton = document.getElementById('changeDateStyleButton');
  const changeTextSizeButton = document.getElementById('changeTextSizeButton');
  const changeTextColorButton = document.getElementById('changeTextColorButton');
  const changeClockBackgroundColorButton = document.getElementById('changeClockBackgroundColorButton');

  clock.addEventListener('click', function() {
    clock.classList.toggle('large');
  });

  changeFontButton.addEventListener('click', function() {
    const font = prompt('Palun sisesta uus font:', 'Arial, sans-serif');
    if (font) {
      document.body.style.fontFamily = font;
    }
  });

  changeBackgroundColorButton.addEventListener('click', function() {
    const color = prompt('Palun sisesta uus taustavärv:', '#f0f0f0');
    if (color) {
      document.body.style.backgroundColor = color;
    }
  });

  changeDateStyleButton.addEventListener('click', function() {
    const dateStyle = prompt('Vali kuupäeva formaat (DD/MM/YY või MM/DD/YY):', 'DD/MM/YY');
    if (dateStyle === 'DD/MM/YY' || dateStyle === 'MM/DD/YY') {
      localStorage.setItem('dateStyle', dateStyle);
      const dateElement = document.getElementById('date');
      dateElement.textContent = formatDate(new Date());
    } else {
      alert('Vigane kuupäeva formaat! Vali DD/MM/YY või MM/DD/YY.');
    }
  });

  changeTextSizeButton.addEventListener('click', function() {
    const textSize = prompt('Sisesta uus teksti suurus (nt. 16px):', '24px');
    if (textSize) {
      const elements = document.querySelectorAll('.clock div');
      elements.forEach(element => {
        element.style.fontSize = textSize;
      });
    }
  });

  changeTextColorButton.addEventListener('click', function() {
    const textColor = prompt('Palun sisesta uus teksti värv (nt. #ff0000):', '#000000');
    if (textColor) {
      const elements = document.querySelectorAll('.clock div');
      elements.forEach(element => {
        element.style.color = textColor;
      });
    }
  });

  changeClockBackgroundColorButton.addEventListener('click', function() {
    const color = prompt('Palun sisesta uus kella taustavärv:', '#ffffff');
    if (color) {
      clock.style.backgroundColor = color;
    }
  });

 // Call updateClock initially to show current time
 updateClock();
});
