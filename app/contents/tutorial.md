# Старт проекту

Будь-яке розширення для Google Chrome містить `manifest.json`. Цей файл використовується для того, щоб браузер знав як працює ваше розширення і правильно підвантажуємий скрипти і стилі.

Наше розширення буде стилізувати сайт moodle.kpi.ua. Для цього ми вставимо всередину сторінки свій css-файл з потрібними стилями.

### Manifest.json
```
{
  "manifest_version": 2,

  "name": "Moodle Theme",
  "description": "This extension beautify Moodle site for readibility",
  "version": "1.0.0",

  "browser_action": {},
  "permissions": [
    "activeTab"
  ],
  "content_scripts": [
    {
      "matches": ["http://moodle.kpi.ua/*"],
      "css": ["style.css"]
    }
  ]
}
```

### Структура manifest.json

- `Name` - назва розширення
- `Description` - опис розширення
- `Version` - версія розширення
- `Permissions` - масив необхідних дозволів, необхідних розширенню для роботи
- `Content_scripts` - налаштовується сторінки на яких працюватиме наше розширення і які стилі і скрипти будуть працювати.

[Друга частина уроку →](./tutorial-2.html)
