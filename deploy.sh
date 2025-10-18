#!/bin/bash

echo "🚀 Portfolio Deployment Helper"
echo "================================"
echo ""
echo "Choose your deployment method:"
echo "1) GitHub Pages (using Vivek2531 account)"
echo "2) Just show me the folder location for Netlify Drop"
echo ""
read -p "Enter your choice (1 or 2): " choice

if [ "$choice" = "1" ]; then
    echo ""
    echo "📝 Please complete these steps first:"
    echo "1. Go to: https://github.com/new"
    echo "2. Repository name: portfolio"
    echo "3. Keep it Public"
    echo "4. DO NOT add README"
    echo "5. Click 'Create repository'"
    echo ""
    read -p "Have you created the repository? (y/n): " created
    
    if [ "$created" = "y" ]; then
        echo ""
        echo "🔗 Adding GitHub remote..."
        git remote add origin https://github.com/Vivek2531/portfolio.git 2>/dev/null || echo "Remote already exists"
        
        echo ""
        echo "📤 Pushing to GitHub..."
        git push -u origin main
        
        echo ""
        echo "✅ Code pushed to GitHub!"
        echo ""
        echo "🌐 Now enable GitHub Pages:"
        echo "1. Go to: https://github.com/Vivek2531/portfolio"
        echo "2. Click 'Settings' → 'Pages'"
        echo "3. Source: main branch, / (root)"
        echo "4. Click 'Save'"
        echo ""
        echo "Your site will be live at: https://vivek2531.github.io/portfolio/"
    fi
    
elif [ "$choice" = "2" ]; then
    echo ""
    echo "📁 Your portfolio folder is at:"
    echo "   /Users/vivekinturi/Documents/Portfolio"
    echo ""
    echo "🌐 For Netlify Drop deployment:"
    echo "1. Go to: https://app.netlify.com/drop"
    echo "2. Sign up (free)"
    echo "3. Drag the 'Portfolio' folder onto the page"
    echo "4. Done! Your site is live instantly!"
    echo ""
    echo "Opening folder location..."
    open /Users/vivekinturi/Documents/Portfolio
fi

echo ""
echo "✨ Deployment helper complete!"

