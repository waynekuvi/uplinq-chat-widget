# Customization Debugging Guide

## Extensive Debugging Added

I've added comprehensive console logging throughout the customization application process to help identify where the issue is occurring.

## Debug Logs to Look For

### 1. Mount Function (When Widget Loads)
```
[UplinqChatWidget] Mount function - options being passed to ve(): { ... }
```
**What to check:** Verify `customization` object is present in the options

### 2. Initialization Function
```
[UplinqChatWidget] Initializing widget with options: { ... }
```
**What to check:** Full options object including customization

### 3. Element Verification
```
[UplinqChatWidget] Element check - chatScroll: <element>, headerAvatars: <element>, headerLogo: <element>
```
**What to check:** All elements should be non-null. If any are null, the element IDs are wrong.

### 4. Customization Extraction
```
[UplinqChatWidget] Extracted customization: { gradient: {...}, avatars: [...], logo: '...' }
[UplinqChatWidget] Extracted values - gradient: {...}, avatars: [...], logo: '...'
```
**What to check:** 
- If `customization` is `undefined` or `null`, the options aren't being passed correctly
- If `gradient`/`avatars`/`logo` are `undefined`, the structure doesn't match

### 5. Gradient Application
```
[UplinqChatWidget] Applying gradient to chatScroll element
[UplinqChatWidget] Gradient colors: { color1: '#...', color2: '#...', color3: '#...', color4: '#...' }
[UplinqChatWidget] Setting gradient: linear-gradient(180deg, ...)
[UplinqChatWidget] Gradient applied. Inline style: linear-gradient(180deg, ...)
[UplinqChatWidget] Gradient verification (after 100ms) - inline style: ...
[UplinqChatWidget] ✓ Gradient successfully applied!
```
**What to check:**
- If you see "No gradient object found" → gradient not in customization
- If you see "chatScroll element not found!" → element selection issue
- If you see "Gradient colors incomplete" → missing color values
- If verification shows gradient applied → style is set correctly

### 6. Avatar Application
```
[UplinqChatWidget] Applying avatars: ['url1', 'url2', 'url3']
[UplinqChatWidget] Adding avatar 1: url1
[UplinqChatWidget] Avatars updated. Total children: 3
```
**What to check:**
- If you see "No avatars array provided" → avatars not in customization
- If you see "headerAvatars element not found!" → element selection issue
- Check "Total children" matches number of avatars provided

### 7. Logo Application
```
[UplinqChatWidget] Logo element found: <element> Logo img: <img>
[UplinqChatWidget] Updating logo from 'old-url' to 'new-url'
[UplinqChatWidget] Logo updated. New src: 'new-url'
```
**What to check:**
- If you see "headerLogo element not found!" → element selection issue
- Verify "New src" matches the logo URL you provided

## Troubleshooting Steps

### Step 1: Check if Customization is Received
1. Open browser console
2. Look for: `[UplinqChatWidget] Mount function - options being passed to ve()`
3. **If NOT present:** The mount function isn't being called with customization
4. **If present but customization is undefined:** Check embed code generation

### Step 2: Check Element Selection
1. Look for: `[UplinqChatWidget] Element check - chatScroll: ...`
2. **If chatScroll is null:** Element ID might be wrong or element doesn't exist
3. **If all elements are null:** Widget HTML template might not be loading

### Step 3: Check Customization Extraction
1. Look for: `[UplinqChatWidget] Extracted customization: ...`
2. **If undefined:** Options aren't being passed from mount to ve()
3. **If defined but gradient/avatars/logo are undefined:** Structure mismatch

### Step 4: Check Gradient Application
1. Look for: `[UplinqChatWidget] Gradient applied. Inline style: ...`
2. **If style is empty:** CSS might be overriding or setProperty failed
3. **If verification fails:** Check browser DevTools → Elements → inspect `.chat-scroll` → Styles tab

### Step 5: Manual Verification in DevTools
1. Open DevTools → Elements
2. Find `.chat-scroll` element (inside shadow DOM)
3. Check "Styles" tab:
   - Look for inline style: `background: linear-gradient(...) !important`
   - Check if it's crossed out (overridden)
4. Check "Computed" tab:
   - See what `background` value is actually applied

## Common Issues & Solutions

### Issue 1: Customization Not Received
**Symptom:** No logs about customization
**Solution:** Check embed code - verify `customization` is in the mount() call

### Issue 2: Elements Not Found
**Symptom:** "element not found!" errors
**Solution:** 
- Verify widget HTML template is loading
- Check element IDs match: `chatScroll`, `headerAvatars`, `headerLogo`

### Issue 3: Gradient Not Visible
**Symptom:** Gradient applied but not visible
**Possible causes:**
- CSS specificity issue (even with !important)
- Element is hidden or has opacity 0
- Gradient colors are transparent
- Element has `display: none`

**Solution:**
- Check computed styles in DevTools
- Try hardcoding a simple gradient: `background: red !important;`
- Verify element is visible: `chatScroll.style.display !== 'none'`

### Issue 4: Timing Issue
**Symptom:** Elements exist but styles don't apply
**Solution:** 
- The code already runs after element validation
- If still failing, try wrapping in `requestAnimationFrame` or `setTimeout`

## Test Cases

### Test 1: Hardcoded Gradient
Temporarily add this after line 2193:
```javascript
// TEST: Hardcoded gradient
chatScroll.style.setProperty("background", "linear-gradient(180deg, #ff0000, #00ff00, #0000ff, #ffff00) !important", "important");
console.log("[UplinqChatWidget] TEST: Hardcoded gradient applied");
```
**If this works:** The issue is with data extraction, not style application

### Test 2: Direct Style Assignment
Add this test:
```javascript
// TEST: Direct assignment
chatScroll.style.background = "red";
console.log("[UplinqChatWidget] TEST: Direct style - background should be red");
```
**If this works:** `setProperty` might have an issue

### Test 3: Verify Element
Add this test:
```javascript
// TEST: Element verification
console.log("[UplinqChatWidget] TEST: chatScroll element:", chatScroll);
console.log("[UplinqChatWidget] TEST: chatScroll classList:", chatScroll.classList);
console.log("[UplinqChatWidget] TEST: chatScroll parent:", chatScroll.parentElement);
```

## Next Steps

1. **Deploy** the updated widget with debugging
2. **Test** in browser with console open
3. **Share** the console logs to identify the exact failure point
4. **Remove** debug logs after fixing (optional, for production)

## Expected Console Output (Success Case)

```
[UplinqChatWidget] Mount function - options being passed to ve(): { webhookUrl: '...', customization: {...} }
[UplinqChatWidget] Initializing widget with options: { ... }
[UplinqChatWidget] Element check - chatScroll: <div>, headerAvatars: <div>, headerLogo: <div>
[UplinqChatWidget] Extracted customization: { gradient: {...}, avatars: [...], logo: '...' }
[UplinqChatWidget] Customization received: { ... }
[UplinqChatWidget] Applying gradient to chatScroll element
[UplinqChatWidget] Gradient colors: { color1: '#1e5eff', ... }
[UplinqChatWidget] Setting gradient: linear-gradient(180deg, #1e5eff, ...)
[UplinqChatWidget] Gradient applied. Inline style: linear-gradient(180deg, #1e5eff, ...)
[UplinqChatWidget] ✓ Gradient successfully applied!
[UplinqChatWidget] Applying avatars: ['url1', 'url2', 'url3']
[UplinqChatWidget] Adding avatar 1: url1
[UplinqChatWidget] Avatars updated. Total children: 3
[UplinqChatWidget] Logo updated. New src: 'logo-url'
```

If you see all these logs, customization is working. If any are missing, that's where the issue is.

