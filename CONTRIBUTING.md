# Contributing to AAA Converter 🚀

Thank you for your interest in contributing to AAA Converter! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)

## 🤝 Code of Conduct

This project follows a code of conduct that we expect all contributors to follow. Please be respectful and constructive in all interactions.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/converter.git
   cd converter
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/Aninhassain/converter.git
   ```

## 🔧 Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to `http://localhost:3000`

## 🎯 How to Contribute

### Types of Contributions

We welcome several types of contributions:

- **🐛 Bug Fixes**: Fix existing issues
- **✨ New Features**: Add new converters or functionality
- **📚 Documentation**: Improve README, comments, or guides
- **🎨 UI/UX Improvements**: Enhance the user interface
- **⚡ Performance**: Optimize code and performance
- **🧪 Testing**: Add tests and improve test coverage

### Contribution Workflow

1. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

2. **Make your changes** following our coding standards

3. **Test your changes**:
   ```bash
   npm run build
   npm run dev
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add new volume converter feature"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

## 📝 Coding Standards

### TypeScript Guidelines

- Use TypeScript for all new code
- Define proper types for all functions and variables
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### React Guidelines

- Use functional components with hooks
- Follow the existing component structure
- Use proper prop types
- Keep components focused and single-purpose

### Styling Guidelines

- Use Tailwind CSS for all styling
- Follow the existing color scheme and design patterns
- Ensure responsive design for all screen sizes
- Use consistent spacing and typography

### File Structure

```
src/
├── app/                    # Next.js app directory
│   ├── [converter]/       # Individual converter pages
│   └── page.tsx           # Home page
└── components/             # React components
    └── [Converter].tsx    # Converter components
```

### Naming Conventions

- **Files**: PascalCase for components (`Volume.tsx`)
- **Components**: PascalCase (`const Volume = () => {}`)
- **Functions**: camelCase (`handleValueChange`)
- **Variables**: camelCase (`fromValue`, `toValue`)
- **Constants**: UPPER_SNAKE_CASE (`CONVERSION_FACTORS`)

## 🔄 Pull Request Process

### Before Submitting

- [ ] Code follows the project's coding standards
- [ ] Self-review of your code
- [ ] Code is properly commented
- [ ] Corresponding changes to documentation
- [ ] Changes generate no new warnings
- [ ] Added tests for new functionality (if applicable)

### PR Template

When creating a pull request, please include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] All existing tests pass
- [ ] New tests added (if applicable)

## Screenshots (if applicable)
Add screenshots to help explain your changes

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code
- [ ] My changes generate no new warnings
```

## 🐛 Issue Guidelines

### Bug Reports

When reporting bugs, please include:

- **Clear description** of the problem
- **Steps to reproduce** the issue
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Environment details** (browser, OS, etc.)

### Feature Requests

When requesting features, please include:

- **Clear description** of the feature
- **Use case** and why it would be valuable
- **Implementation ideas** (if you have any)
- **Screenshots or mockups** (if applicable)

## 🧪 Testing

### Manual Testing

Before submitting a PR, please test:

- [ ] All existing converters work correctly
- [ ] New features work as expected
- [ ] Responsive design on different screen sizes
- [ ] No console errors
- [ ] Build process completes successfully

### Adding New Converters

When adding a new converter:

1. **Create the component** in `src/components/[Converter].tsx`
2. **Add the route** in `src/app/[converter]/page.tsx`
3. **Update the converters page** to include the new converter
4. **Update the main page** if needed
5. **Test all conversion scenarios**

## 📚 Documentation

### Code Comments

- Add JSDoc comments for complex functions
- Explain conversion formulas and calculations
- Document any special logic or edge cases

### README Updates

- Update feature lists when adding new converters
- Add setup instructions for new dependencies
- Update project structure if needed

## 🎨 Design Guidelines

### Color Scheme

- **Primary**: Blue (#3B82F6)
- **Secondary**: Various (Green, Red, Purple, Orange)
- **Background**: Blue gradient (from-blue-50 to-indigo-100)
- **Text**: Gray-900 for headings, Gray-600 for descriptions

### Component Structure

Each converter should follow this structure:

```tsx
const Converter = () => {
  // State management
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('default_unit');
  const [toUnit, setToUnit] = useState<string>('target_unit');

  // Units array
  const units = [
    { value: 'unit1', label: 'Unit 1', symbol: 'u1' },
    // ... more units
  ];

  // Conversion factors
  const conversionFactors = {
    unit1: 1,
    // ... more factors
  };

  // Conversion function
  const convert = (value: number, from: string, to: string): number => {
    // Conversion logic
  };

  // Event handlers
  const handleFromValueChange = (value: string) => {
    // Handle value change
  };

  // ... other handlers

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      {/* Component JSX */}
    </div>
  );
};
```

## 🚀 Getting Help

If you need help or have questions:

1. **Check existing issues** for similar problems
2. **Create a new issue** with detailed information
3. **Join discussions** in the repository
4. **Contact maintainers** if needed

## 📄 License

By contributing to AAA Converter, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to AAA Converter! 🎉
