### Hexlet tests and linter status:
[![Actions Status](https://github.com/varyandis/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/varyandis/frontend-project-46/actions)

# 📘 Gendiff — Вычислитель отличий

**Gendiff** – программа, определяющая разницу между двумя структурами данных.

---

## 📦 Установка

```bash
git clone https://github.com/varyandis/frontend-project-46.git
make install
```

---

## 🚀 Использование

```bash
gendiff file1.json file2.json
```

### 📋 Пример вывода:

```
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
```

---

## 🎬 Пример работы (asciinema)

[![asciicast](https://asciinema.org/a/M6zw5nrgMTRNLbQEFjEMLm4pn.svg)](https://asciinema.org/a/M6zw5nrgMTRNLbQEFjEMLm4pn)

---
