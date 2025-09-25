#!/bin/bash

# Pre-commit Check Script
# This script runs all the pre-commit checks manually for easier development testing
# Usage: ./pre-commit-check.sh

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}🔍 $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_header() {
    echo -e "${BLUE}"
    echo "=================================================="
    echo "🚀 Pre-commit Quality Checks"
    echo "=================================================="
    echo -e "${NC}"
}

# Change to the correct directory
cd "$(dirname "$0")"

print_header

# 1. Install/Update Dependencies
print_step "Installing/updating npm dependencies..."
if npm install; then
    print_success "Dependencies installed successfully"
else
    print_error "npm install failed"
    exit 1
fi

echo ""

# 2. Code Formatting with Prettier
print_step "Running Prettier code formatting..."
if npx prettier --write "../src/**/*.{js,jsx,css,scss,json,md}" --no-error-on-unmatched-pattern; then
    print_success "Code formatting completed successfully"
else
    print_error "Prettier formatting failed"
    exit 1
fi

echo ""

# 2. ESLint checking and fixing
print_step "Running ESLint checks and auto-fixes..."
if npx eslint ../src/ --fix --format=compact; then
    print_success "ESLint checks passed"
else
    print_error "ESLint found issues that couldn't be auto-fixed"
    echo ""
    print_warning "Run 'npx eslint ../src/' to see detailed error information"
    exit 1
fi

echo ""

# 3. Running tests
print_step "Running test suite..."
if npm run test:ci; then
    print_success "All tests passed"
else
    print_error "Tests failed"
    exit 1
fi

echo ""

# 4. Final verification - run lint-staged on staged files (if any)
if git diff --cached --quiet; then
    print_warning "No staged files found - skipping lint-staged verification"
else
    print_step "Running lint-staged verification on staged files..."
    if npx lint-staged; then
        print_success "Lint-staged verification passed"
    else
        print_error "Lint-staged verification failed"
        exit 1
    fi
fi

echo ""
echo -e "${GREEN}"
echo "=================================================="
echo "🎉 All pre-commit checks passed successfully!"
echo "Your code is ready for commit."
echo "=================================================="
echo -e "${NC}"
