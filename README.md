# TinyString Kit

A lightweight JavaScript utility package that provides simple and reusable functions for working with strings.

Built as a beginner npm package project to explore JavaScript modules, npm package development, local installation, and reusable functions.

## ✨ Features

TinyString Kit currently provides three utility functions:

- **capitalizeFirst()** – Capitalizes the first character of a string.
- **reverseText()** – Reverses a string.
- **countWords()** – Counts the words in a string.

## 📦 Installation

Install the package using npm:

```bash
npm install tiny-string-kit
```

## 🚀 Usage

Import the functions into your JavaScript project:

```javascript
import {
    capitalizeFirst,
    reverseText,
    countWords
} from "tiny-string-kit";
```

### 1. capitalizeFirst()

Capitalizes the first character of a string.

```javascript
console.log(capitalizeFirst("sakuna"));

// Output: Sakuna
```

### 2. reverseText()

Reverses the characters in a string.

```javascript
console.log(reverseText("hello"));

// Output: olleh
```

### 3. countWords()

Counts the words in a string.

```javascript
console.log(countWords("I love JavaScript"));

// Output: 3
```

## 🛠️ Technologies

- JavaScript
- Node.js
- npm
- ES Modules

## 📁 Project Structure

```text
tiny-string-kit/
│
├── index.js
├── package.json
├── README.md
│
└── test/
    └── index.test.js
```

## 🎯 Project Goals

This project was created to learn the fundamentals of building and managing npm packages, including:

- Creating reusable JavaScript modules.
- Exporting and importing functions.
- Configuring package.json.
- Installing local npm packages.
- Testing packages in separate projects.
- Preparing packages for publishing.

## 👨‍💻 Author

**Sakuna Thejan**

Software Engineering Student | JavaScript Developer

---

*TinyString Kit – Small utilities, simple solutions.*
