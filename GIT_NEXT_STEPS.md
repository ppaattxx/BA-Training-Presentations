# ✅ Git Installed - Next Steps

## 🔄 Step 1: Restart PowerShell

Git is installed, but PowerShell needs to be restarted to recognize it.

### How to Restart:
1. **Close this PowerShell terminal** (click the X or type `exit`)
2. **Open a new PowerShell terminal** in VS Code:
   - Click "Terminal" menu → "New Terminal"
   - Or press `` Ctrl + ` ``

---

## 📋 Step 2: Verify Git Installation

After restarting PowerShell, run:

```powershell
git --version
```

**Expected Output:**
```
git version 2.x.x.windows.x
```

If you see the version, Git is ready! ✅

---

## 🚀 Step 3: Upload to GitHub

Now you can follow the commands in **QUICK_START_GITHUB.md** (Option 2).

### Quick Command Reference:

```powershell
# 1. Configure Git (replace with your actual info)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 2. Initialize repository
git init

# 3. Add all files
git add .

# 4. Create first commit
git commit -m "Initial commit - Clean BA presentation system"

# 5. Go to github.com and create new repository
#    Name: BA-Training-Presentations
#    Don't initialize with README

# 6. Connect and push (replace YOUR-USERNAME)
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/BA-Training-Presentations.git
git push -u origin main
```

---

## ⚠️ About the LF/CRLF Warning

**This warning is NORMAL and SAFE to ignore:**

```
warning: in the working copy of 'BA1/data.js', LF will be replaced by CRLF the next time Git touches it
```

**What it means:**
- Windows uses CRLF (Carriage Return + Line Feed) for line endings
- Unix/Mac uses LF (Line Feed only)
- Git is automatically converting for you
- This is expected behavior on Windows

**You can safely continue** - your files will work perfectly! ✅

---

## 🎯 Quick Summary

1. ✅ Git is installed
2. ⏳ **Close and reopen PowerShell terminal**
3. ⏳ Run `git --version` to verify
4. ⏳ Follow Step 3 commands above
5. 🎉 Your project will be on GitHub!

---

## 💡 Alternative: Use GitHub Desktop

If you prefer a visual tool instead of commands:

1. Download: https://desktop.github.com/
2. Install and open
3. File → Add Local Repository
4. Browse to: `C:\Users\pinacario\Desktop\Presentation`
5. Click "Publish repository"

**Much easier if you're not comfortable with command line!**

---

**Next:** Close this terminal and open a new one, then run `git --version` 🚀
