document.addEventListener('DOMContentLoaded', function() {
  const quiz = document.querySelector('.quiz');
  const screens = quiz.querySelectorAll('.quiz__screen');
  const startButton = quiz.querySelector('.quiz__button--start');
  const nextButtons = quiz.querySelectorAll('.quiz__button--next');
  
  let currentScreenIndex = 0;
  const answers = {};
  
  function showScreen(index) {
    screens.forEach((screen, i) => {
      screen.classList.toggle('quiz__screen--active', i === index);
    });
  }
  
  startButton.addEventListener('click', function() {
    currentScreenIndex = 1;
    showScreen(currentScreenIndex);
  });
  
  document.querySelectorAll('.quiz__option-button').forEach(button => {
    button.addEventListener('click', function() {
      const parentOptions = this.closest('.quiz__options');
      parentOptions.querySelectorAll('.quiz__option-button').forEach(btn => {
        btn.classList.remove('selected');
      });
      
      this.classList.add('selected');
      
      const nextButton = this.closest('.quiz__screen').querySelector('.quiz__button--next');
      nextButton.disabled = false;
    });
  });
  
  nextButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      const currentScreenElement = this.closest('.quiz__screen'); 
      const selectedOption = currentScreenElement.querySelector('.quiz__option-button.selected');
      
      if (!selectedOption) return;
      
      answers[`question${index + 1}`] = selectedOption.dataset.value;
      
      currentScreenIndex = index + 2;
      showScreen(currentScreenIndex);
    });
  });
  
  showScreen(currentScreenIndex);
});