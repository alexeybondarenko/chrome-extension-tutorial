# Старт проекта

Любое расширения для Google Chrome содержит `manifest.json`. Этот файл используется для того, чтобы браузер знал как работает ваше расширение и правильно подгружал скрипты и стили. 

Наше расширение будет стилизировать сайт moodle.kpi.ua. Для этого мы вставим внутрь страницы свой css-файл с нужными стилями.

### manifest.json
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

- `name` - название расширения
- `description` - описание расширения
- `version` - версия расширения
- `permissions` - массив необходимых разрешений, необходимых расширению для работы
- `content_scripts` - настраивается страницы на которых будет работать наше расширение и какие стили и скрипты будут работать.

[Вторая часть урока →](./tutorial-2.html)
