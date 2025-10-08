# ✅ Git Installed - Next Steps

## 🔄 Step 1: Restart PowerShell/VS Code

Git was just installed, but PowerShell needs to be restarted to recognize it.

**Choose ONE:**

### Option A: Restart VS Code (Easiest)
1. Close VS Code completely
2. Reopen VS Code
3. Open Terminal (Ctrl + `)
4. Git should now work!

### Option B: Close and Reopen PowerShell Terminal
1. In VS Code, click the trash icon next to PowerShell terminal tab
2. Click the "+" icon to open a new terminal
3. Git should now work!

---

## ✅ Step 2: Verify Git Works

Run this command in the new terminal:
```powershell
git --version
```

**Expected output:**
```
git version 2.x.x
```

If you see this, Git is ready! ✅

---

## 🚀 Step 3: Configure Git (First Time Only)

Replace with YOUR information:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Example:**
```powershell
git config --global user.name "Pat Nacario"
git config --global user.email "pat.nacario@example.com"
```

---

## 📤 Step 4: Initialize Git Repository

```powershell
# Make sure you're in the Presentation folder
cd "C:\Users\pinacario\Desktop\Presentation"

# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Clean BA presentation system"
```

---

## 🌐 Step 5: Create GitHub Repository

1. Go to: https://github.com/new
2. Sign in to GitHub (or create account if you don't have one)
3. Fill in:
   - **Repository name:** `BA-Training-Presentations`
   - **Description:** `Business Analysis training presentation decks`
   - **Public or Private:** Choose based on your preference
   - ⚠️ **IMPORTANT:** Do NOT check "Initialize with README" (we already have one)
4. Click "**Create repository**"

GitHub will show you some commands - **ignore them**, use ours below instead.

---

## 🔗 Step 6: Connect to GitHub and Push

**Replace YOUR-USERNAME with your actual GitHub username:**

```powershell
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/BA-Training-Presentations.git
git push -u origin main
```

**Example (if your username is "pnacario"):**
```powershell
git branch -M main
git remote add origin https://github.com/pnacario/BA-Training-Presentations.git
git push -u origin main
```

---

## 🔐 Authentication

When you run `git push`, you'll be asked to authenticate:

### Option 1: Browser Authentication (Easiest)
A browser window will open asking you to sign in to GitHub. Just sign in and authorize.

### Option 2: Personal Access Token
If browser doesn't open:
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: "Presentation Upload"
4. Check scope: `repo`
5. Click "Generate token"
6. Copy the token
7. When git asks for password, paste the token

---

## ✅ Done!

After pushing, your repository will be live at:
```
https://github.com/YOUR-USERNAME/BA-Training-Presentations
```

---

## 🌐 BONUS: Enable GitHub Pages (Free Hosting)

1. Go to your repository on GitHub
2. Click "Settings"
3. Click "Pages" in left sidebar
4. Under "Source", select "main" branch
5. Click "Save"

Your live site will be at:
```
https://YOUR-USERNAME.github.io/BA-Training-Presentations/
```

---

## 🔄 Future Updates

To push changes later:

```powershell
git add .
git commit -m "Updated slides"
git push
```

---

## 🆘 Troubleshooting

### "Git is not recognized" (even after restart)
- Close ALL VS Code windows
- Completely exit VS Code from taskbar
- Reopen VS Code
- Try `git --version` again

### "Fatal: not a git repository"
```powershell
git init
```

### "Remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/BA-Training-Presentations.git
```

### "Permission denied"
- Use HTTPS URL (not SSH): `https://github.com/...`
- Or set up personal access token (see Authentication section above)

---

## 📋 Complete Command Sequence

Here's everything in order (copy/paste one at a time):

```powershell
# 1. Configure Git (replace with your info)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 2. Initialize repository
git init

# 3. Add all files
git add .

# 4. Create first commit
git commit -m "Initial commit - Clean BA presentation system"

# 5. Create repository on github.com first (see Step 5 above)

# 6. Connect and push (replace YOUR-USERNAME)
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/BA-Training-Presentations.git
git push -u origin main
```

---

## ✨ Summary

1. ✅ Git installed
2. ⏳ **Next:** Restart VS Code or terminal
3. ⏳ Verify: `git --version`
4. ⏳ Configure Git (name & email)
5. ⏳ Run commands above
6. ⏳ Create GitHub repository
7. ⏳ Push to GitHub
8. 🎉 Done!

**Start by restarting VS Code, then come back to this guide!**
