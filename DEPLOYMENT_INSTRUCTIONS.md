# 🚀 Portfolio Deployment Instructions

## Your portfolio is ready to deploy! Follow these simple steps:

---

## Option 1: GitHub Pages (Recommended)

### Step 1: Create GitHub Repository
1. Go to: https://github.com/new
2. **Repository name:** `portfolio` (or `vivekinturi.github.io` for custom URL)
3. **Public** (keep it selected)
4. **DO NOT** check "Add a README file"
5. Click **"Create repository"**

### Step 2: Push Your Code
Copy and paste these commands one by one in your terminal:

```bash
cd /Users/vivekinturi/Documents/Portfolio

# Connect to your GitHub repository (replace YOUR-USERNAME if needed)
git remote add origin https://github.com/Vivek2531/portfolio.git

# Push your code
git push -u origin main
```

**If you named it `vivekinturi.github.io`:**
```bash
git remote add origin https://github.com/Vivek2531/vivekinturi.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to: https://github.com/Vivek2531/portfolio (or your repo URL)
2. Click **"Settings"** tab (top right)
3. Click **"Pages"** in left sidebar
4. Under **"Source"**:
   - Select branch: **main**
   - Select folder: **/ (root)**
5. Click **"Save"**

**Your site will be live at:**
- `https://vivek2531.github.io/portfolio/`
- OR `https://vivekinturi.github.io/` (if you used that name)

**Wait 2-3 minutes for deployment to complete!**

---

## Option 2: Netlify Drop (EASIEST - No Commands!)

### Super Simple Drag & Drop:
1. Go to: https://app.netlify.com/drop
2. Sign up (free - use GitHub or email)
3. **Drag the entire Portfolio folder** onto the webpage
4. **DONE!** Your site is live!

**You'll get:**
- Instant deployment
- Free URL: `random-name.netlify.app`
- Can customize name later in settings
- HTTPS automatically

---

## Option 3: Vercel (Another Easy Option)

1. Go to: https://vercel.com/new
2. Sign up with GitHub
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

**Your site will be live at:**
- `https://portfolio-username.vercel.app`

---

## 🎉 After Deployment:

### Update Contact Form (if using Netlify):
Netlify supports actual form submissions! Update your form to:

```html
<form name="contact" method="POST" data-netlify="true">
  <!-- your form fields -->
</form>
```

---

## Need Help?

If you get stuck:
1. Check if you're logged into GitHub
2. Make sure the repository is public
3. GitHub Pages takes 2-3 minutes to deploy
4. Clear browser cache if site doesn't show

---

## Your Portfolio Files:
✅ index.html - Main page
✅ styles.css - Styling
✅ script.js - Interactivity  
✅ Vivek_Inturi_Cloud-DevOps-SRE_Engineer.pdf - Resume
✅ README.md - Documentation

**Everything is ready to deploy!** 🚀

