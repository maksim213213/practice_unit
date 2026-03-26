# Practice Unit Testing Project

This project implements a robust development environment focused on unit testing, code coverage analysis, and automated quality control.
## Prerequisites

- Node.js 18+ (Node.js 20 recommended)
- npm 9+

## Core Stack
* **Testing:** Mocha, Chai
* **Reporting:** Mochawesome, c8 (Code Coverage)
* **Linting:** ESLint
* **Automation:** Husky, lint-staged, Babel

## Installation and scripts
1. Install dependencies:
   ```bash
   npm install

2. Run unit tests and generate the Mochawesome report:
    ```bash
    npm test 

2. Perform code coverage analysis (Target: >80%)
    ```bash
    npm run coverage

2. Run static code analysis to identify and fix style errors.
    ```bash
    npm run eslint