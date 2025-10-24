#!/bin/bash

echo "🚀 Preparing react-native-swiper-reanimated for NPM publication..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Run this script from the project root."
    exit 1
fi

# Check if git is clean
if ! git diff-index --quiet HEAD --; then
    echo "❌ Error: Git working directory is not clean. Commit your changes first."
    exit 1
fi

# Run TypeScript check
echo "🔍 Running TypeScript check..."
npm run typecheck
if [ $? -ne 0 ]; then
    echo "❌ TypeScript check failed. Fix errors before publishing."
    exit 1
fi

# Run linting
echo "🧹 Running linter..."
npm run lint
if [ $? -ne 0 ]; then
    echo "⚠️  Linting warnings found, but continuing..."
fi

# Show what will be published
echo "📦 Preview of package contents:"
npm pack --dry-run

# Ask for confirmation
echo ""
read -p "🤔 Do you want to proceed with publishing? (y/N): " confirm
if [[ $confirm != [yY] && $confirm != [yY][eE][sS] ]]; then
    echo "❌ Publishing cancelled."
    exit 1
fi

# Publish to npm
echo "🚀 Publishing to npm..."
npm publish

if [ $? -eq 0 ]; then
    echo "✅ Successfully published react-native-swiper-reanimated!"
    echo "📦 You can now install it with: npm install react-native-swiper-reanimated"
    
    # Create git tag
    VERSION=$(node -p "require('./package.json').version")
    git tag "v$VERSION"
    git push origin "v$VERSION"
    echo "🏷️  Created git tag v$VERSION"
else
    echo "❌ Publishing failed. Check the errors above."
    exit 1
fi