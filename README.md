# QA Automation Portfolio - Playwright Tests

## 📋 Project Overview
Automated test suite for SauceDemo (https://www.saucedemo.com/) using Playwright.  
Covers core e-commerce flows: login, cart, and checkout.

## 🧪 Test Coverage
| Feature | Test Cases |
|---------|------------|
| Login | Valid login, invalid login, empty credentials |
| Cart | Add single item, add multiple items, remove items |
| Checkout | Complete checkout flow |

## 🛠️ Tech Stack
- Playwright (cross-browser testing)
- JavaScript
- GitHub Actions (CI/CD - coming soon)

## 🚀 How to Run Tests

### Prerequisites
- Node.js (v16 or later)
- npm

### Installation
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
npm install
npm install @playwright/test
npx playwright install
