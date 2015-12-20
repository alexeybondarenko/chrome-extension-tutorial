# Стилізація сайту

Так як ми хочемо поміняти тільки невелика кількість стилів сайту, то ми не будемо прибирати основний файл стилів, а лише доповнимо його своїми властивостями.

Для цього створимо файл `style.css` в кореневій папці проекту.

## Поліпшення читаності тексту

Так як ми хочемо поліпшити читабельність тексту ресурсів скористаємося вкладеністю селектора `# mod-resource-view`, який присутній тільки на сторінках з лекціями


```
# mod-resource-view #page #content {
  background-color: transparent;
  font: normal 15px / 150% Georgia, 'Times New Roman', serif;
  max-width: 50em;
  margin: 0 auto;
}
```

### Результат

#### До

<img alt="Moodle Before" src="images/moodle-before.png" width="100%">

#### Після

<img alt="Moodle After" src="images/moodle-after.png" width="100%">

[Установка розширення](./ tutorial-3.html)
