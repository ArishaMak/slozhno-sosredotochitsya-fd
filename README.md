https://github.com/ArishaMak/slozhno-sosredotochitsya-fd
Описание проекта
«Сложно сосредоточиться» — проект из модуля адаптивной вёрстки курса Fullstack Developer от Yandex Practicum (спринт 3). Это одностраничный сайт о продуктивности и фокусе, с разделами о причинах отвлечений, советах по концентрации и галереей изображений. Сайт адаптивный (mobile-first), с поддержкой светлой и тёмной тем (ручное переключение + авто по системным настройкам через prefers-color-scheme). Фон фиксированный, декоративные элементы (уголки, REC), резиновая сетка на Grid/Flexbox. Всё стилизовано с переменными CSS для тем, без JS-библиотек.

Возможности
Адаптивность: Mobile-first, breakpoints на 768px и 1024px. Резиновые размеры с clamp(), Grid для секций/галереи. Нет горизонтального скролла.
Темы: Тёмная (основная) и светлая. Авто-переключение по prefers-color-scheme. Ручное: кнопки "Неон" (dark), "День" (light), "Авто". Активная кнопка с границей и pointer-events: none.
Интерактив: Hover/focus на ссылках (тень, граница). Декоративные элементы: уголки (псевдоэлементы), REC (абсолют, скрыто для скринридеров via aria-hidden).
Оптимизации: Lazy-loading для галереи, логические свойства (margin-block), фавиконы (ico/SVG/PNG).
Доступность: focus-visible, семантика (sections, articles), alt для img.

Технологии
Верстка:
HTML5 (семантика, meta color-scheme).
CSS3 (Grid/Flexbox, clamp(), variables, prefers-color-scheme, background-attachment: fixed, text-shadow, pseudo-elements).

Шрифты: Подключение в fonts.css (переменные для family/weight).
Инструменты:

Figma (макет).
Git/GitHub (версионный контроль).


Стили: Разделены: globals.css (reset), variables.css (темы), style.css (основное), dark/light.css (переопределения).

Чистый vanilla CSS, без фреймворков.
