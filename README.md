# WebApp Template

This repository provides a simple template for web applications using Webpack. It includes basic configurations for ESLint (with Airbnb rules), Prettier, and an EditorConfig to enforce consistent coding styles.

## 📦 Installation

1. **Clone the Template**

   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/YOUR-GITHUB-USERNAME/webapp-template.git
   cd webapp-template
   ```

2. **Install Dependencies**

   Navigate to the project folder and install the necessary npm packages:

   ```bash
   npm install
   ```

## 🚀 Usage

**Development Server**

Start the Webpack development server:

```bash
npm start
```

This will open the project in your default browser.

**Build for Production**

To create a production-ready build:

```bash
npm run build
```

This will generate the output in the dist/ folder.

## 🛠 Code Formatting & Linting

**Linting with ESLint**

Check your code for errors and enforce coding rules:

```bash
npm run lint
```

**Code Formatting with Prettier**

Format all files in the project:

```bash
npm run format
```

## 🏗 Project Structure

```graphql
webapp-template/
├── src/
│   ├── index.js
│   ├── styles.css
│   ├── index.html
├── package.json
├── webpack.config.js
├── .eslintrc.json
├── .prettierrc
├── .editorconfig
├── .gitignore
├── README.md
```

## 🔧 Configuration

**Webpack**

Modify `webpack.config.js` to customize the build process.

**ESLint & Prettier**

Update `.eslintrc.json` and `.prettierrc` to adjust coding standards.

## 📄 License

This template is licensed under the MIT License.
