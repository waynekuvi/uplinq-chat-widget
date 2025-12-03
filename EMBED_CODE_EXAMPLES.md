# Uplinq Chat Widget - Embed Code Examples

## Standard Floating Widget (Default)

For client websites - renders as a floating button in the bottom-right corner:

```html
<div id="uplinq-chat-root"></div>

<script>
  (function (src) {
    var s = document.createElement('script');
    s.src = src;
    s.defer = true;
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.onload = function () {
      if (window.UplinqChatWidget) {
        UplinqChatWidget.mount('#uplinq-chat-root', {
          webhookUrl: 'https://uplinq.app.n8n.cloud/webhook/chatbot'
        });
      }
    };
    (document.currentScript.parentNode || document.body).appendChild(s);
  })('https://uplinq-chat-widget-iczxn5vmm-waynedevs-projects.vercel.app/uplinq-chat-widget.umd.js?v=4');
</script>
```

## Inline Widget (For Dashboard Preview)

For dashboard/admin preview pages - renders inline, opened, and contained:

```html
<div id="uplinq-chat-root" style="width: 100%; height: 700px;"></div>

<script>
  (function (src) {
    var s = document.createElement('script');
    s.src = src;
    s.defer = true;
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.onload = function () {
      if (window.UplinqChatWidget) {
        UplinqChatWidget.mount('#uplinq-chat-root', {
          webhookUrl: 'https://uplinq.app.n8n.cloud/webhook/chatbot',
          inline: true,
          initialOpen: true,
          position: 'relative'
        });
      }
    };
    (document.currentScript.parentNode || document.body).appendChild(s);
  })('https://uplinq-chat-widget-iczxn5vmm-waynedevs-projects.vercel.app/uplinq-chat-widget.umd.js?v=4');
</script>
```

## Configuration Options

### `inline` (boolean, default: `false`)
- When `true`: Widget renders inline with `position: relative` instead of floating
- Hides the floating button
- Container takes full width/height of parent

### `initialOpen` (boolean, default: `false`)
- When `true`: Chat interface opens immediately on load
- Only effective when `inline: true` is also set
- Shows the full chat interface instead of just the button

### `position` (string, default: `"fixed"`)
- `"fixed"`: Floating widget (default behavior)
- `"relative"`: Inline rendering (requires `inline: true`)

### `webhookUrl` (string, required)
- The webhook URL for the chatbot backend

## Notes

- **Backward Compatibility**: Existing embed codes without the new options will continue to work (defaults to floating mode)
- **Dashboard Usage**: Use `inline: true` and `initialOpen: true` together for dashboard preview pages
- **Container Size**: When using inline mode, ensure the parent container has a defined height (e.g., `height: 700px`)



