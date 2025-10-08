# 🚀 Create GitHub Repository from Terminal

## Option 1: Install GitHub CLI (Recommended - Easiest!)

### Step 1: Install GitHub CLI

**Download & Install:**
```powershell
# Open this URL in your browser:
https://cli.github.com/

# OR use winget (if you have it):
winget install --id GitHub.cli
```

### Step 2: Authenticate

After installation, restart PowerShell and run:
```powershell
gh auth login
```

Follow the prompts:
1. Choose: **GitHub.com**
2. Choose: **HTTPS**
3. Choose: **Login with a web browser**
4. Copy the code shown
5. Press Enter (browser opens)
6. Paste the code and authorize

### Step 3: Create Repository & Push

```powershell
# Create repository on GitHub and push in one command!
gh repo create BA-Training-Presentations --public --source=. --remote=origin --push
```

**Done!** 🎉 Your repository is created and pushed!

---

## Option 2: Manual Web + Terminal (No Extra Tools)

### Step 1: Create Repository on GitHub Website

1. **Go to:** https://github.com/new

2. **Fill in:**
   - Repository name: `BA-Training-Presentations`
   - Description: `Business Analysis training presentation system`
   - Public or Private: Your choice
   - ❌ **DON'T** check "Add a README file"
   - ❌ **DON'T** check "Add .gitignore"
   - ❌ **DON'T** check "Choose a license"

3. **Click:** "Create repository"

4. **Copy the URL** shown (looks like):
   ```
   https://github.com/pinacario/BA-Training-Presentations.git
   ```

### Step 2: Connect & Push from Terminal

Replace `pinacario` with your actual GitHub username:

```powershell
# Add all files
& "C:\Program Files\Git\cmd\git.exe" add .

# Commit everything
& "C:\Program Files\Git\cmd\git.exe" commit -m "Initial commit - Clean BA presentation system"

# Add remote (REPLACE 'pinacario' with YOUR username!)
& "C:\Program Files\Git\cmd\git.exe" remote add origin https://github.com/pinacario/BA-Training-Presentations.git

# Push to GitHub
& "C:\Program Files\Git\cmd\git.exe" push -u origin main
```

**When prompted for credentials:**
- Username: Your GitHub username
- Password: **Use a Personal Access Token** (not your password!)

### How to Get Personal Access Token:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Note: `BA Presentation Upload`
4. Expiration: 90 days (or your choice)
5. Scopes: Check ✅ **repo** (all sub-items)
6. Click "Generate token"
7. **COPY THE TOKEN** (you won't see it again!)
8. Use this token as your password when pushing

---

## Option 3: Use GitHub Desktop (Easiest - No Terminal!)

See **GITHUB_DESKTOP_GUIDE.md** - just 3 clicks! 🖱️

---

## 🎯 Quick Comparison

| Method | Difficulty | Setup Time | Best For |
|--------|-----------|------------|----------|
| **GitHub CLI** | Easy | 5 min (one-time) | Terminal lovers |
| **Web + Git** | Medium | 2 min | One-time upload |
| **GitHub Desktop** | Easiest | 3 min | Visual users |

---

## ✅ Recommended: GitHub CLI

**Why?** One command does everything:
```powershell
gh repo create BA-Training-Presentations --public --source=. --remote=origin --push
```

Creates repo + pushes code + sets up remote = DONE! 🎉

---

## 📋 After Upload

Once uploaded, your repository will be at:
```
https://github.com/YOUR-USERNAME/BA-Training-Presentations
```

**Enable GitHub Pages (Free Hosting):**
1. Go to repository Settings
2. Click "Pages" (left sidebar)
3. Source: Deploy from branch → main → /root
4. Save
5. Your site: `https://YOUR-USERNAME.github.io/BA-Training-Presentations/`

---

**Next:** Choose your preferred option above! 👆
