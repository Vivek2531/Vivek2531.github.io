# 🔧 Configuration Guide

## API Keys and Configuration

Your portfolio uses a separate configuration file to manage API keys and settings.

### File: `config.js`

This file contains all configurable settings:

```javascript
const CONFIG = {
    WEB3FORMS_ACCESS_KEY: '1ec75090-c145-4810-b9ee-4b04443b5ec6',
    CONTACT_EMAIL: 'vivekinturi27@gmail.com'
};
```

### Why Separate Config File?

✅ **Easy Updates** - Change API keys without touching main code  
✅ **Better Organization** - All settings in one place  
✅ **Maintainability** - Cleaner codebase  
✅ **Best Practice** - Industry standard approach  

### How to Update API Key

1. Open `config.js`
2. Replace the `WEB3FORMS_ACCESS_KEY` value
3. Save the file
4. Commit and push to deploy

```bash
git add config.js
git commit -m "Update API key"
git push origin main
```

### Security Note

**Web3Forms access keys are safe to be public** because:
- They are designed for frontend use
- Domain restrictions protect them
- Rate limiting prevents abuse
- You can revoke/regenerate anytime

### Configuration Options

| Setting | Description | Current Value |
|---------|-------------|---------------|
| `WEB3FORMS_ACCESS_KEY` | Web3Forms API key | `1ec75090-c145-4810-b9ee-4b04443b5ec6` |
| `CONTACT_EMAIL` | Your contact email | `vivekinturi27@gmail.com` |

### Getting a New API Key

1. Go to https://web3forms.com
2. Enter your email
3. Get your access key
4. Update `config.js`
5. Deploy

### Template File

If you need to reset, copy from `config.example.js`:

```bash
cp config.example.js config.js
# Then add your actual keys
```

---

**Your config is now properly separated and easy to maintain!** 🎉

