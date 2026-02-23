#!/usr/bin/env bash
set -euo pipefail

# ============================================
# Spear GTM Docs — Local Build & Serve
# Stateless: ensures all deps/tools are present
# ============================================

REQUIRED_NODE_MAJOR=18

echo "==> Checking prerequisites..."

# --- Check Node.js ---
if ! command -v node &>/dev/null; then
  echo "ERROR: Node.js is not installed."
  echo "  Install via: https://nodejs.org/ or 'nvm install 20'"
  exit 1
fi

NODE_VERSION=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$NODE_VERSION" -lt "$REQUIRED_NODE_MAJOR" ]; then
  echo "ERROR: Node.js >= $REQUIRED_NODE_MAJOR required (found v$(node -v))"
  echo "  Upgrade via: nvm install 20"
  exit 1
fi
echo "  Node.js $(node -v) ✓"

# --- Check npm ---
if ! command -v npm &>/dev/null; then
  echo "ERROR: npm is not installed."
  exit 1
fi
echo "  npm $(npm -v) ✓"

# --- Install dependencies if needed ---
if [ ! -d "node_modules" ] || [ "package.json" -nt "node_modules/.package-lock.json" ]; then
  echo "==> Installing dependencies..."
  npm install
else
  echo "==> Dependencies up to date ✓"
fi

# --- Build ---
echo "==> Building site..."
npm run build

echo ""
echo "==> Build complete! Output in ./dist/"
echo ""

# --- Serve ---
echo "==> Starting local preview server..."
echo "    http://localhost:4321/spear-gtm/"
echo ""
npm run preview
