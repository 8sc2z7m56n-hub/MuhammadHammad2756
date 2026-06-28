# Buggy Projects for Debugging & Testing Practice

This repository contains 3 different small projects written in HTML/CSS/JS, Python, and Node.js. Each project contains several intentional syntax, logical, runtime, and style bugs for you to find and resolve.

---

## 🛠️ Project 1: Buggy Calculator (HTML / CSS / JavaScript)
A browser-based calculator.
* **Location:** `project-1-calculator-web/`
* **How to run:** Open `index.html` in any web browser.
* **Bugs to find:**
  * UI styling & alignment issues (bad CSS grid columns).
  * Color contrast bugs (text input is unreadable).
  * Syntax errors in Javascript.
  * Runtime ReferenceErrors & logic errors when interacting with calculator buttons.

---

## 🐍 Project 2: Student Grade Manager (Python)
A terminal-based menu application for managing student grades.
* **Location:** `project-2-python-student-manager/`
* **How to run:** `python student_manager.py`
* **Bugs to find:**
  * Syntax error (missing colons/wrong syntax block).
  * TypeErrors (adding string types to integers).
  * KeyErrors (accessing invalid dictionary keys).
  * Error-handling issues (handling empty JSON files).

---

## 🟢 Project 3: Async User Fetcher (Node.js)
A script that fetches dummy user data from a mock REST API.
* **Location:** `project-3-async-user-fetcher/`
* **How to run:** 
  1. `npm install`
  2. `node fetch_users.js`
* **Bugs to find:**
  * Missing await keywords leading to Promise resolution errors.
  * Typos in variable names inside catch/error blocks.
  * Undefined property lookups (`namee`).
