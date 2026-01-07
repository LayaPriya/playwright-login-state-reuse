# Global Authentication Setup for Test Automation

This repository demonstrates a scalable approach to handling authentication in test automation by using a global login setup and reusing the authenticated state across multiple test cases.

## Problem Statement

Repeated login steps in every test:
- Increase execution time
- Create maintenance overhead

## Solution

A global authentication mechanism is implemented that:
- Logs in once before the test suite runs
- Saves authentication state (cookies/local storage)
- Reuses the state across all test cases

## Tech Stack

- Playwright
- JavaScript
- Node.js

## Project Structure

global-auth-test-setup/
- global-setup/       → Global login logic
- tests/              → Test cases using authenticated state
- playwright.config.js
- README.md

## How It Works

1. Global setup performs login
2. Authentication state is saved to a file
3. Tests load the saved state
4. No repeated UI login steps

## How to Run

### Prerequisites

- Node.js (v18 or later recommended)
- npm (comes with Node.js)
- Git

### Setup

Clone the repository:
git clone https://github.com/LayaPriya/playwright-login-state-reuse.git

Navigate to the project directory:
Install dependencies:
npm install

### Execute Tests

Run all tests:
npx playwright test

Run tests in headed mode:
npx playwright test --headed

After execution, open the HTML report:
npx playwright show-report


## Benefits

- Faster test execution
- Improved stability
- Scalable for large test suites
- Clean separation of concerns

## Future Enhancements

- Support multiple user roles
- Environment-based credential handling
- API-based authentication



