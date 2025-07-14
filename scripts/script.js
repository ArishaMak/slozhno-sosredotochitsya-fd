(function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('auto');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const themeButtons = [
    ...document.querySelectorAll('.header__theme-menu-button'),
  ];

  const currentActiveTheme = localStorage.getItem('theme') || 'auto';
  setActiveButton(themeButtons, currentActiveTheme);

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const chosenTheme = [...button.classList]
        .find((cn) => cn.includes('_type_'))
        .split('_type_')[1];
      setTheme(chosenTheme);
      setActiveButton(themeButtons, chosenTheme);
    });
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (localStorage.getItem('theme') === 'auto') {
      applyAutoTheme();
    }
  });
});

function setTheme(theme) {
  document.documentElement.className = '';

  if (theme === 'auto') {
    applyAutoTheme();
  } else {
    document.documentElement.classList.add(`theme-${theme}`);
  }
  localStorage.setItem('theme', theme);
}

function applyAutoTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('theme-dark');
  } else {
    document.documentElement.classList.add('theme-light');
  }
}

function setActiveButton(buttonsArray, theme) {
  buttonsArray.forEach((button) => {
    button.classList.remove('header__theme-menu-button_active');
    button.removeAttribute('disabled');
  });

  const target = buttonsArray.find((button) =>
    button.classList.contains(`header__theme-menu-button_type_${theme}`)
  );

  if (target) {
    target.classList.add('header__theme-menu-button_active');
    target.setAttribute('disabled', true);
  }
  else {
    const autoButton = document.querySelector(
      '.header__theme-menu-button_type_auto'
    );
    if (autoButton) {
      autoButton.classList.add('header__theme-menu-button_active');
      autoButton.setAttribute('disabled', true);
    }
  }
}