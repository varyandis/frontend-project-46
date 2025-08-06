### Hexlet tests and linter status:
[![Actions Status](https://github.com/varyandis/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/varyandis/frontend-project-46/actions)
[![Node CI](https://github.com/varyandis/frontend-project-46/actions/workflows/lint-check.yml/badge.svg)](https://github.com/varyandis/frontend-project-46/actions/workflows/lint-check.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=varyandis_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=varyandis_frontend-project-46)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=varyandis_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=varyandis_frontend-project-46)


# Gendiff

**Gendiff** — CLI-утилита для сравнения конфигурационных файлов. Она определяет различия между двумя структурами данных и предоставляет результат в нескольких форматах, удобных как для человека, так и для последующей обработки программами.

---

## Возможности

- Поддержка форматов: `json`, `yaml`
- Работа с вложенными структурами
- Вывод различий в форматах:
  - `stylish` (по умолчанию)
  - `plain`
  - `json`

---

## Примеры использования

### Сравнение JSON-файлов (stylish по умолчанию)

```bash
gendiff file1.json file2.json
```

**file1.json**

```json
{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}
```

**file2.json**

```json
{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}
```

**Вывод:**

```json
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
```
[![asciicast](https://asciinema.org/a/M6zw5nrgMTRNLbQEFjEMLm4pn.svg)](https://asciinema.org/a/M6zw5nrgMTRNLbQEFjEMLm4pn)

---

### Сравнение YAML-файлов

```bash
gendiff file1.yml file2.yml
```

**file1.yml**

```yaml
host: hexlet.io
timeout: 50
proxy: 123.234.53.22
follow: false
```

**file2.yml**

```yaml
timeout: 20
verbose: true
host: hexlet.io
```

**Вывод:**

```json
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
```
[![asciicast](https://asciinema.org/a/YfSgX90C7gdwFyQLP4prd8SuE.svg)](https://asciinema.org/a/YfSgX90C7gdwFyQLP4prd8SuE)

---

### Формат plain

```bash
gendiff --format plain file1.json file2.json
```

**Вывод:**

```
Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true
```
[![asciicast](https://asciinema.org/a/VZSJZs4ByF8q6s2XWdDTSGta6.svg)](https://asciinema.org/a/VZSJZs4ByF8q6s2XWdDTSGta6)

---

### Формат json

```bash
gendiff --format json file1.json file2.json
```

**Вывод:**

```json
[
  {
    "key": "follow",
    "type": "removed",
    "value": false
  },
  {
    "key": "timeout",
    "type": "changed",
    "value1": 50,
    "value2": 20
  },
  {
    "key": "verbose",
    "type": "added",
    "value": true
  }
]
```
[![asciicast](https://asciinema.org/a/Khbb5Po0Q3oAbboHvKhSSxLyT.svg)](https://asciinema.org/a/Khbb5Po0Q3oAbboHvKhSSxLyT)

---

## Установка

```bash
git clone https://github.com/yourname/frontend-project-46.git
cd frontend-project-46
make install
make link
```

После этого команда `gendiff` будет доступна глобально.

---

## Подключение как библиотеки

```js
import genDiff from '@hexlet/code';

const result = genDiff(filepath1, filepath2, 'plain');
console.log(result);
```

---

## Используемые технологии

- Node.js
- Commander.js
- Lodash
- Jest
- GitHub Actions
- SonarQube

---

## CI и тесты

- Поддержка автоматических тестов (Jest)
- Проверка линтера (`make lint`)
- Интеграция с GitHub Actions
- Отправка покрытия кода в SonarQube

```bash
make test     # запуск тестов
make lint     # запуск линтера
```

&#x20;

---

## Примеры с вложенными структурами

**file1.json**

```json
{
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true
  },
  "group1": {
    "baz": "bas"
  }
}
```

**file2.json**

```json
{
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": null
  },
  "group1": {
    "baz": "bars"
  }
}
```

**Вывод:**

```json
{
  common: {
    + follow: false
      setting1: Value 1
    - setting2: 200
    - setting3: true
    + setting3: null
  }
  group1: {
    - baz: bas
    + baz: bars
  }
}
```

---
