# GitHub Pages Deployment Guide

## Quick Start

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Configure Base Path (If Needed)

**Only if your repo name is NOT your username.github.io:**

1. Open `next.config.js`
2. Uncomment and update the basePath:
   ```js
   basePath: '/your-repo-name',
   assetPrefix: '/your-repo-name/',
   ```

**Example:**
- If your repo is: `https://github.com/username/InvoiceGenerator`
- Use: `basePath: '/InvoiceGenerator'`

### Step 3: Choose Deployment Method

#### Option A: Automatic (GitHub Actions) - Recommended ✅

1. **Push your code:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repo → **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save

3. **Done!** The workflow will deploy automatically on every push.

#### Option B: Manual Deployment

1. **Build:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages:**
   - Go to **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: `gh-pages`
   - Folder: `/ (root)`

## Your Site URL

After deployment, your site will be available at:

- **If repo name matches username:** `https://username.github.io`
- **If repo has a name:** `https://username.github.io/repo-name`

## Troubleshooting

### Blank Page / Broken CSS

**Problem:** Base path not configured correctly.

**Solution:**
1. Check your repository name
2. Update `basePath` in `next.config.js`
3. Rebuild and redeploy

### 404 Errors

**Problem:** GitHub Pages not enabled or wrong branch.

**Solution:**
1. Go to Settings → Pages
2. Ensure source is set correctly
3. Wait a few minutes for deployment

### Build Fails

**Problem:** Dependencies or Node version issue.

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Testing Locally

Before deploying, test the static export:

```bash
npm run build
npx serve out
```

Visit `http://localhost:3000` to verify everything works.

