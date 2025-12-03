# UplinqChatWidget Customization Structure

## 1. Mount Function Signature & Implementation

**Location:** Lines 2145-2166

```javascript
function fe(t, l) {
  // t = target selector/element
  // l = options/config object
  const p = typeof t == "string" ? document.querySelector(t) : t;
  if (!p) {
    console.error("[UplinqChatWidget] Mount target not found:", t);
    return;
  }
  if (V.has(p)) {
    console.warn("[UplinqChatWidget] Widget already mounted on target:", t);
    return;
  }
  const h = document.createElement("div");
  h.className = "uplinq-chat-widget-host";
  const g = h.attachShadow({ mode: "open" }), c = document.createElement("style");
  c.textContent = pe, g.appendChild(c);
  const x = document.createElement("template");
  x.innerHTML = ge.trim(), g.appendChild(x.content.cloneNode(!0)), p.appendChild(h), ve(g, {
    webhookUrl: (l == null ? void 0 : l.webhookUrl) ?? he,
    inline: (l == null ? void 0 : l.inline) ?? !1,
    initialOpen: (l == null ? void 0 : l.initialOpen) ?? !1,
    position: (l == null ? void 0 : l.position) ?? "fixed"
  }), V.set(p, h);
}
```

**Current Options Interface:**
```javascript
{
  webhookUrl: string,      // Required: Webhook URL for chatbot
  inline: boolean,         // Optional: Enable inline mode (default: false)
  initialOpen: boolean,    // Optional: Open chat immediately (default: false)
  position: string         // Optional: Position type (default: "fixed")
}
```

**Export:**
```javascript
const xe = { mount: fe, unmount: ue };
typeof window < "u" && (window.UplinqChatWidget = xe);
```

---

## 2. CSS Styles - Gradient Background

**Location:** Line 114-119

**Current CSS:**
```css
.chat-scroll {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    background: linear-gradient(180deg, #1e5eff, #5860f4, #7c3aed 32%, #dcd6ff 55%, #fff 72%, #fff, #fff);
    padding: 0 0 16px
}
```

**Gradient Structure:**
- Direction: `180deg` (top to bottom)
- Colors:
  - `#1e5eff` (start)
  - `#5860f4` 
  - `#7c3aed` at 32%
  - `#dcd6ff` at 55%
  - `#fff` at 72%
  - `#fff` (end)

**Element ID:** `chatScroll` (line 1640)

**How to Apply Dynamically:**
The `.chat-scroll` element has `id="chatScroll"` and can be accessed via:
```javascript
const chatScroll = t.getElementById("chatScroll");
chatScroll.style.background = `linear-gradient(180deg, ${color1}, ${color2}, ${color3} 32%, ${color4} 55%, #fff 72%, #fff, #fff)`;
```

---

## 3. Avatars Rendering

**Location:** Lines 1647-1651 (HTML Template)

**Current HTML Structure:**
```html
<div class="chat-header-avatars" id="headerAvatars">
    <img src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1762618487/freepik__the-style-is-candid-image-photography-with-natural__92271_i3wbbw.png" alt="Agent">
    <img src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1762618487/freepik__the-style-is-candid-image-photography-with-natural__92272_kt5ypq.png" alt="Agent">
    <img src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1762618487/freepik__the-style-is-candid-image-photography-with-natural__31122_lpgfhk.png" alt="Agent">
</div>
```

**Element Reference:** Line 2174
```javascript
P = t.getElementById("headerAvatars")  // P is the headerAvatars element
```

**CSS Styling:** Lines 175-189
```css
.chat-home-header .chat-header-avatars {
    display: flex;
    align-items: center
}

.chat-home-header .chat-header-avatars img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: -8px
}

.chat-home-header .chat-header-avatars img:first-child {
    margin-left: 0
}
```

**How to Update Dynamically:**
```javascript
const headerAvatars = t.getElementById("headerAvatars");
headerAvatars.innerHTML = ""; // Clear existing
avatars.slice(0, 3).forEach(url => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Agent";
  headerAvatars.appendChild(img);
});
```

---

## 4. Logo Rendering

**Location:** Two places in the HTML template:

### A. Home Header Logo (Line 1644-1646)
```html
<div class="chat-header-logo" id="headerLogo">
  <img src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1764419595/Group_48_tm326o.png" alt="Uplinq AI">
</div>
```

**Element Reference:** Line 2174
```javascript
G = t.getElementById("headerLogo")  // G is the headerLogo element
```

### B. Support Header Logo (Line 1658-1659)
```html
<div class="chat-support-logo">
  <img src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1764419666/logo-white_x64htk.svg" alt="Support AI Bot">
  ...
</div>
```

**Note:** Support header logo doesn't have a unique ID, but can be accessed via:
```javascript
const supportLogo = t.querySelector(".chat-support-logo img");
```

**CSS Styling:** Lines 157-166
```css
.chat-home-header .chat-header-logo {
    display: flex;
    align-items: center;
    gap: 10px
}

.chat-home-header .chat-header-logo img {
    height: 40px;
    width: auto
}
```

**How to Update Dynamically:**
```javascript
const headerLogo = t.getElementById("headerLogo");
const logoImg = headerLogo.querySelector("img");
if (logoUrl) {
  logoImg.src = logoUrl;
} else {
  headerLogo.style.display = "none"; // Hide if null
}
```

---

## 5. Initialization Function (`ve`)

**Location:** Line 2173

**Current Structure:**
```javascript
function ve(t, l) {
  // t = shadow root
  // l = options object
  
  // Get all elements
  const p = me(), h = t.getElementById("chatButton"), g = t.getElementById("chatContainer"), 
        // ... many element references ...
        G = t.getElementById("headerLogo"), 
        P = t.getElementById("headerAvatars"),
        // ... more elements ...
        chatScroll = t.getElementById("chatScroll"); // Note: chatScroll is NOT currently stored in a variable
  
  // Extract options
  const isInline = (l == null ? void 0 : l.inline) === !0;
  const initialOpen = (l == null ? void 0 : l.initialOpen) === !0;
  
  // Apply inline mode if needed
  const widgetRoot = t.querySelector(".chat-widget");
  if (isInline && widgetRoot) {
    widgetRoot.classList.add("inline");
  }
  
  // ... rest of initialization ...
}
```

**Missing Element Reference:**
Currently, `chatScroll` is NOT stored in a variable. You'll need to add:
```javascript
const chatScroll = t.getElementById("chatScroll");
```

---

## 6. Current Options Object Structure

**Current:**
```javascript
{
  webhookUrl: string,      // Required
  inline?: boolean,        // Optional, default: false
  initialOpen?: boolean,   // Optional, default: false
  position?: string        // Optional, default: "fixed"
}
```

**Proposed Addition:**
```javascript
{
  webhookUrl: string,      // Required
  inline?: boolean,        // Optional, default: false
  initialOpen?: boolean,   // Optional, default: false
  position?: string,       // Optional, default: "fixed"
  customization?: {        // NEW: Optional customization object
    gradient?: {
      color1: string,      // e.g., "#1e5eff"
      color2: string,      // e.g., "#5860f4"
      color3: string,      // e.g., "#7c3aed"
      color4: string       // e.g., "#dcd6ff"
    },
    avatars?: string[],    // Array of avatar URLs (max 3)
    logo?: string | null   // Logo URL or null to hide
  }
}
```

---

## 7. Implementation Points Summary

### Where to Modify:

1. **Mount Function (fe)**: Add `customization` to options passed to `ve()`
   - Line 2160-2165

2. **Initialization Function (ve)**: 
   - Extract customization options (after line 2184)
   - Get `chatScroll` element reference (add after line 2174)
   - Apply gradient to `chatScroll` (add after element extraction)
   - Update avatars in `headerAvatars` (P variable, add after element extraction)
   - Update logo in `headerLogo` (G variable, add after element extraction)

3. **CSS**: No changes needed - styles are already in place

### Key Element IDs:
- `chatScroll` - Gradient background element
- `headerAvatars` - Avatar container (variable: `P`)
- `headerLogo` - Logo container (variable: `G`)

### Key Variables in `ve()` function:
- `t` = shadow root
- `l` = options object
- `P` = headerAvatars element
- `G` = headerLogo element
- `chatScroll` = needs to be added

---

## 8. Example Implementation Code

Here's where you would add the customization logic in the `ve()` function:

```javascript
function ve(t, l) {
  // ... existing code ...
  
  // Extract customization options
  const customization = l?.customization;
  const gradient = customization?.gradient;
  const avatars = customization?.avatars;
  const logo = customization?.logo;
  
  // Get chatScroll element (currently missing)
  const chatScroll = t.getElementById("chatScroll");
  
  // Apply gradient
  if (gradient && chatScroll) {
    const { color1, color2, color3, color4 } = gradient;
    chatScroll.style.background = `linear-gradient(180deg, ${color1}, ${color2}, ${color3} 32%, ${color4} 55%, #fff 72%, #fff, #fff)`;
  }
  
  // Update avatars
  if (avatars && Array.isArray(avatars) && P) {
    P.innerHTML = "";
    avatars.slice(0, 3).forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      img.alt = "Agent";
      P.appendChild(img);
    });
  }
  
  // Update logo
  if (G) {
    const logoImg = G.querySelector("img");
    if (logo !== undefined) {
      if (logo) {
        logoImg.src = logo;
        G.style.display = "flex";
      } else {
        G.style.display = "none";
      }
    }
  }
  
  // ... rest of existing code ...
}
```

