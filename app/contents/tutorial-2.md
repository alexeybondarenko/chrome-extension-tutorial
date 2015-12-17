# Стилизация сайта

Так как мы хотим поменять только небольшое количество стилей сайта, то мы не будем убирать основной файл стилей, а лишь дополним его своими свойствами.

Для этого создадим файл `style.css` в корневой папке проекта.

## Улучшение читаемости текста

Так как мы хотим улучшить читабельность текста ресурсов воспользуемся вложенностью селектора `#mod-resource-view`, который присутствует только на страницах с лекциями


```
#mod-resource-view #page #content {
  background-color: transparent;
  font: normal 15px/150% Georgia, 'Times New Roman', serif;
  max-width: 50em;
  margin: 0 auto;
}
```

### Результат

#### До

<img alt="Moodle Before" src="images/moodle-before.png" width="100%">

#### После

<img alt="Moodle After" src="images/moodle-after.png" width="100%">

[Установка расширения](./tutorial-3.html)
