// @ts-nocheck
const pe = `
:host {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    display: block
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

.chat-widget {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999
}

.chat-widget.inline {
    position: relative;
    bottom: auto;
    right: auto;
    z-index: auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column
}

.chat-widget.inline .chat-button {
    display: none
}

.chat-widget.inline .chat-container {
    position: relative;
    bottom: auto;
    right: auto;
    width: 100%;
    height: 100%;
    max-height: 100%;
    display: flex;
    border-radius: 0
}

.chat-widget.inline .chat-container.active {
    display: flex
}

.chat-button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;
    position: relative
}

.chat-button:hover {
    transform: scale(1.1)
}

.chat-button svg {
    width: 28px;
    height: 28px;
    fill: #fff;
    transition: all .3s ease
}

.chat-button.active svg {
    transform: rotate(180deg)
}

.unread-badge {
    position: absolute;
    top: -2px;
    right: -2px;
    background: #ff4757;
    color: #fff;
    border-radius: 10px;
    padding: 2px 6px;
    font-size: 11px;
    font-weight: 600;
    border: 2px solid white;
    min-width: 20px;
    height: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1
}

.chat-container {
    position: absolute;
    bottom: 80px;
    right: 0;
    width: 400px;
    height: 700px;
    max-height: calc(100vh - 100px);
    background: #fff;
    border-radius: 24px;
    box-shadow: 0 18px 48px #2538582e;
    display: none;
    flex-direction: column;
    overflow: hidden;
    animation: slideUp .3s ease
}

.chat-scroll {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    background: linear-gradient(180deg, #1e5eff, #5860f4, #7c3aed 32%, #dcd6ff 55%, #fff 72%, #fff, #fff);
    padding: 0 0 16px
}

.chat-container.active {
    display: flex
}

@keyframes slideUp {
    0% {
        opacity: 0;
        transform: translateY(20px)
    }
    to {
        opacity: 1;
        transform: translateY(0)
    }
}

.chat-header {
    background: transparent;
    color: #fff;
    padding: 32px 24px 80px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative
}

.chat-header-top,
.chat-home-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 16px
}

.chat-home-header .chat-header-logo {
    display: flex;
    align-items: center;
    gap: 10px
}

.chat-home-header .chat-header-logo img {
    height: 40px;
    width: auto
}

.chat-home-header .chat-header-logo span {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -.5px;
    color: #fff
}

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

.chat-support-header {
    display: none;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 16px
}

.chat-support-left,
.chat-support-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0
}

.chat-support-logo img {
    height: 36px;
    width: auto
}

.support-header-text {
    display: flex;
    flex-direction: column;
    min-width: 0
}

.support-title {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    line-height: 1.1;
    white-space: nowrap
}

.support-subtitle {
    font-size: 13px;
    color: #ffffffbf;
    line-height: 1.2;
    white-space: nowrap
}

.chat-header-actions {
    display: flex;
    align-items: center;
    gap: 10px
}

.header-icon-btn {
    background: none;
    border: none;
    color: #ffffffd9;
    cursor: pointer;
    padding: 6px;
    border-radius: 50%;
    transition: background .2s ease, color .2s ease
}

.header-icon-btn:hover {
    background: #ffffff2e;
    color: #fff
}

.header-icon-btn svg {
    width: 18px;
    height: 18px
}

.chat-header-avatars {
    display: none
}

.chat-header-greeting {
    margin-top: 8px
}

.chat-header-greeting h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 4px
}

.chat-header-greeting p {
    font-size: 16px;
    opacity: .95
}

.header-info {
    display: flex;
    align-items: center;
    gap: 12px
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #667eea;
    position: relative
}

.status-dot {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    background: #2ecc71;
    border: 2px solid white;
    border-radius: 50%
}

.header-text h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 2px
}

.header-text p {
    font-size: 13px;
    opacity: .9
}

.chat-view {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    background: transparent;
    overflow: visible
}

.home-view {
    margin-top: -10px;
    overflow: visible;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0;
    min-height: 0;
    background: transparent;
    position: relative
}

.home-view:before {
    content: "";
    position: absolute;
    top: -44px;
    left: 10px;
    right: 10px;
    bottom: 0;
    border-radius: 20px;
    background: #fffffff7;
    box-shadow: 0 28px 60px #0f172a3d;
    z-index: 0;
    height: 250px
}

.home-view>* {
    position: relative;
    z-index: 1
}

.search-container {
    padding: 10px;
    background: transparent;
    margin-top: -50px;
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px
}

.search-box {
    position: relative;
    padding: auto;
    background: #94a3b81f;
    border-radius: 16px;
    border: 1px solid rgba(148, 163, 184, .35);
    box-shadow: none;
    margin: 10px 10px 0
}

.search-box input {
    width: 100%;
    padding: 12px 14px 12px 16px;
    border: none;
    border-radius: 16px;
    font-size: 14px;
    font-family: inherit;
    transition: all .2s ease;
    background: transparent
}

.search-box input:focus {
    outline: none;
    box-shadow: 0 0 0 3px #1e5eff1f
}

.search-box input::placeholder {
    color: #94a3b8
}

.search-icon {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    pointer-events: none
}

.search-icon svg {
    width: 100%;
    height: 100%;
    fill: #2563eb
}

.articles-container {
    flex: 0;
    overflow-y: visible;
    padding: 14px 12px 12px;
    margin: -6px 10px 16px;
    scrollbar-width: thin;
    scrollbar-color: #cbd5e0 transparent;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 18px 36px #0f172a1a;
    border: 1px solid rgba(148, 163, 184, .18)
}

.articles-container::-webkit-scrollbar {
    width: 6px
}

.articles-container::-webkit-scrollbar-track {
    background: transparent
}

.articles-container::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 3px
}

.articles-container::-webkit-scrollbar-thumb:hover {
    background: #a0aec0
}

.search-item {
    background: #fff;
    border: 1px solid transparent;
    border-radius: 14px;
    padding: 12px 16px;
    cursor: pointer;
    transition: all .2s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    box-shadow: none
}

.search-item:hover {
    background: #2563eb14;
    border-color: #2563eb38;
    transform: translateY(0)
}

.article-item {
    background: #fff;
    border: 1px solid rgba(148, 163, 184, .2);
    border-radius: 14px;
    padding: 16px 20px;
    cursor: pointer;
    transition: all .2s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    gap: 12px;
    box-shadow: 0 14px 30px #0f172a12;
    margin: 0 10px 12px
}

.article-item:hover {
    background: #f1f5ff;
    border-color: #2563eb38;
    transform: translateY(-1px)
}

.article-item span {
    font-size: 14px;
    color: #1f2937;
    line-height: 1.45;
    flex: 1
}

.article-arrow {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    margin-left: 12px
}

.article-arrow svg {
    width: 100%;
    height: 100%;
    fill: #2563eb
}

.article-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    margin-left: 12px
}

.article-icon svg {
    width: 100%;
    height: 100%;
    fill: #2563eb
}

.suggestion-item {
    background: #fff;
    border: 1px solid rgba(148, 163, 184, .2);
    border-radius: 16px;
    padding: 16px 20px;
    cursor: pointer;
    transition: all .2s ease;
    display: flex;
    align-items: center;
    gap: 12px;
    text-align: left;
    width: calc(100% - 20px);
    box-shadow: 0 16px 32px #0f172a12;
    margin: 0 10px 16px
}

.suggestion-item:hover {
    border-color: #2563eb38;
    transform: translateY(0)
}

.suggestion-item svg {
    width: 18px;
    height: 18px;
    fill: #2563eb;
    flex-shrink: 0
}

.suggestion-item span {
    font-size: 14px;
    color: #1f2937;
    flex: 1
}

.quick-actions {
    display: grid;
    gap: 12px;
    margin-bottom: 24px
}

.action-btn {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 16px;
    text-align: left;
    cursor: pointer;
    transition: all .2s;
    display: flex;
    align-items: center;
    gap: 12px
}

.action-btn:hover {
    border-color: #667eea;
    background: #f7fafc;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px #667eea1a
}

.action-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0
}

.action-icon svg {
    width: 20px;
    height: 20px;
    fill: #fff
}

.action-content h4 {
    font-size: 14px;
    color: #2d3748;
    margin-bottom: 4px;
    font-weight: 600
}

.action-content p {
    font-size: 13px;
    color: #718096
}

.faq-section h3 {
    font-size: 14px;
    color: #718096;
    text-transform: uppercase;
    letter-spacing: .5px;
    margin-bottom: 12px;
    font-weight: 600
}

.faq-list {
    display: grid;
    gap: 8px
}

.faq-item {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 14px;
    cursor: pointer;
    transition: all .2s;
    font-size: 14px;
    color: #2d3748;
    text-align: left
}

.faq-item:hover {
    border-color: #667eea;
    background: #f7fafc
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background: #f7fafc;
    min-height: 0
}

.message {
    margin-bottom: 16px;
    display: flex;
    gap: 10px;
    animation: fadeIn .3s ease
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(10px)
    }
    to {
        opacity: 1;
        transform: translateY(0)
    }
}

.message.bot {
    flex-direction: row
}

.message.user {
    flex-direction: row-reverse
}

.message-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1e5eff, #7c3aed);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    flex-shrink: 0
}

.message.user .message-avatar {
    background: #4a5568
}

.message-content {
    max-width: 75%
}

.message-bubble {
    padding: 12px 16px;
    border-radius: 12px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word
}

.message.bot .message-bubble {
    background: #fff;
    color: #2d3748;
    border-bottom-left-radius: 4px
}

.message.user .message-bubble {
    background: linear-gradient(135deg, #1e5eff, #7c3aed);
    color: #fff;
    border-bottom-right-radius: 4px
}

.message-time {
    font-size: 11px;
    color: #a0aec0;
    margin-top: 4px;
    padding: 0 4px
}

.message-attachment .message-bubble,
.message-gif .message-bubble,
.message-voice .message-bubble {
    background: #fff;
    color: #1f2937;
    border-radius: 16px;
}

.message.user.message-attachment .message-bubble,
.message.user.message-gif .message-bubble,
.message.user.message-voice .message-bubble {
    background: #f8fafc;
    color: #1f2937;
}

.attachment-card {
    display: flex;
    align-items: center;
    gap: 12px;
}

.attachment-icon {
    width: 36px;
    height: 36px;
    border-radius: 12px;
    background: #e0e7ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
}

.attachment-meta {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.attachment-name {
    font-weight: 600;
    color: #1f2937;
}

.attachment-size {
    font-size: 12px;
    color: #64748b;
}

.attachment-download {
    margin-top: 8px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #1e5eff;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
}

.attachment-download:hover {
    text-decoration: underline;
}

.message-gif .message-bubble {
    padding: 8px;
}

.message-gif-media {
    max-width: 220px;
    border-radius: 12px;
    display: block;
}

.message-bubble-text {
    margin-top: 8px;
    font-size: 14px;
    line-height: 1.5;
}

.message-voice .message-bubble {
    padding: 12px 16px;
}

.message-voice-player {
    width: 240px;
    max-width: 100%;
}

.voice-duration {
    margin-top: 8px;
    font-size: 12px;
    color: #475569;
    font-weight: 500;
}

.hide-avatars .message-time {
    font-size: 12px;
    color: #0f172a73;
    font-weight: 500
}

.hide-avatars .message {
    gap: 0
}

.hide-avatars .message-avatar {
    display: none
}

.hide-avatars .message-content {
    max-width: 100%
}

.typing-indicator {
    display: flex;
    gap: 4px;
    padding: 12px 16px;
    background: #fff;
    border-radius: 12px 12px 12px 4px;
    width: fit-content
}

.typing-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #cbd5e0;
    animation: typing 1.4s infinite
}

.typing-dot:nth-child(2) {
    animation-delay: .2s
}

.typing-dot:nth-child(3) {
    animation-delay: .4s
}

@keyframes typing {
    0%, 60%, to {
        transform: translateY(0)
    }
    30% {
        transform: translateY(-10px)
    }
}

.chat-input-area {
    padding: 16px;
    background: #fff;
    border-top: 1px solid #e2e8f0;
    flex-shrink: 0
}

.input-shell {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 24px;
    padding: 10px 14px;
    box-shadow: inset 0 1px 2px #0f172a0d;
    transition: border-color .2s ease, box-shadow .2s ease
}

.input-shell:focus-within {
    border-color: #1e5eff;
    box-shadow: inset 0 1px 2px #0f172a0d, 0 0 0 2px #1e5eff26
}

.input-tools {
    display: flex;
    align-items: center;
    gap: 14px;
    color: #94a3b8;
    flex-shrink: 0;
    padding-left: 2px
}

.input-tool-btn {
    background: none;
    border: none;
    padding: 4px;
    cursor: pointer;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color .2s ease, background .2s ease;
    border-radius: 8px
}

.input-tool-btn:hover {
    color: #64748b;
    background: #94a3b81a
}

.input-tool-btn svg {
    width: 20px;
    height: 20px;
    fill: currentColor
}

.input-tool-btn .gif-label {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .5px
}

.input-popovers {
    position: relative;
}

.emoji-picker,
.gif-picker {
    position: absolute;
    bottom: 52px;
    left: 0;
    background: #fff;
    border: 1px solid #e2e8f0;
    box-shadow: 0 18px 36px #0f172a1a;
    border-radius: 18px;
    padding: 12px;
    z-index: 30;
    width: 280px;
    max-height: 280px;
    overflow-y: auto;
}

.emoji-picker h4 {
    font-size: 13px;
    font-weight: 600;
    color: #475569;
    margin-bottom: 8px;
}

.emoji-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
}

.emoji-picker > div + div {
    margin-top: 12px;
}

.emoji-button {
    border: none;
    background: none;
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    padding: 6px;
    border-radius: 10px;
    transition: background .2s ease;
}

.emoji-button:hover {
    background: #f1f5f9;
}

.gif-picker {
    width: 320px;
    padding: 12px 12px 16px;
}

.gif-picker-header {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
}

.gif-picker-header input {
    flex: 1;
    border: 1px solid #cbd5e1;
    border-radius: 12px;
    padding: 6px 12px;
    font-size: 14px;
}

.gif-picker-header input:focus {
    outline: none;
    border-color: #1e5eff;
    box-shadow: 0 0 0 2px #1e5eff26;
}

.gif-close-btn {
    border: none;
    background: #f1f5f9;
    border-radius: 10px;
    width: 32px;
    height: 32px;
    font-size: 18px;
    cursor: pointer;
    color: #475569;
    transition: background .2s ease;
}

.gif-close-btn:hover {
    background: #e2e8f0;
}

.gif-picker-results {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    max-height: 200px;
    overflow-y: auto;
}

.gif-picker-results button {
    border: none;
    padding: 0;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    background: none;
    position: relative;
}

.gif-picker-results img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.voice-indicator {
    position: absolute;
    bottom: 52px;
    right: 0;
    background: #fff;
    border: 1px solid #f87171;
    color: #991b1b;
    padding: 10px 14px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 18px 36px #f871711a;
    z-index: 30;
}

.voice-indicator-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ef4444;
    animation: pulse 1.2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.4);
        opacity: .6;
    }
}

.input-tool-btn.recording {
    color: #ef4444;
}

.gif-loading,
.gif-empty {
    text-align: center;
    color: #64748b;
    font-size: 14px;
    padding: 16px 0;
}

.input-wrapper {
    display: flex;
    gap: 8px;
    align-items: center
}

.chat-input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 15px;
    line-height: 1.4;
    resize: none;
    max-height: 120px;
    font-family: inherit;
    color: #1e293b
}

.chat-input:focus {
    outline: none
}

.chat-input::placeholder {
    color: #94a3b8
}

.send-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: #1e5eff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s;
    flex-shrink: 0
}

.send-btn:hover {
    transform: scale(1.05)
}

.send-btn:disabled {
    opacity: .5;
    cursor: not-allowed
}

.send-btn svg {
    width: 20px;
    height: 20px;
    fill: #fff
}

.back-btn {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    opacity: .9;
    transition: opacity .2s
}

.back-btn:hover {
    opacity: 1
}

.back-btn svg {
    width: 16px;
    height: 16px;
    fill: #fff
}

.status-section {
    padding: 16px 20px;
    border-radius: 16px;
    background: #fff;
    border: 1px solid rgba(148, 163, 184, .2);
    margin: 0 10px 18px;
    box-shadow: 0 14px 32px #0f172a12
}

.status-content {
    display: flex;
    align-items: center;
    gap: 12px
}

.status-icon {
    width: 32px;
    height: 32px;
    border-radius: 12px;
    background: #2563eb26;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0
}

.status-icon svg {
    width: 18px;
    height: 18px;
    fill: #2563eb
}

.status-text {
    flex: 1
}

.status-text h4 {
    font-size: 13px;
    color: #1f2937;
    margin-bottom: 2px;
    font-weight: 600
}

.status-text p {
    font-size: 12px;
    color: #64748b
}

.bottom-nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
    border-top: 1px solid #e2e8f0;
    padding: 12px 0;
    flex-shrink: 0;
    min-height: 60px
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px 20px;
    background: none;
    border: none;
    cursor: pointer;
    transition: all .2s;
    color: #718096
}

.nav-item:hover,
.nav-item.active {
    color: #1e5eff
}

.nav-item svg {
    width: 24px;
    height: 24px;
    fill: currentColor
}

.nav-item span {
    font-size: 12px;
    font-weight: 500
}

.help-view {
    padding: 0;
    overflow-y: auto;
    flex: 1;
    display: none;
    flex-direction: column;
    min-height: 0
}

.help-view.active {
    display: flex
}

.help-header {
    padding: 24px;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid #e2e8f0
}

.help-header h2 {
    font-size: 24px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 16px
}

.collections-header {
    padding: 20px 24px 12px;
    background: #fff
}

.collections-header h3 {
    font-size: 18px;
    font-weight: 600;
    color: #2d3748
}

.collections-container {
    flex: 1;
    overflow-y: auto;
    padding: 0
}

.collection-item {
    background: #fff;
    border: none;
    border-bottom: 1px solid #e2e8f0;
    padding: 20px 24px;
    cursor: pointer;
    transition: all .2s;
    display: block;
    text-align: left;
    width: 100%
}

.collection-item:hover {
    background: #f7fafc
}

.collection-title {
    font-size: 16px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between
}

.collection-description {
    font-size: 14px;
    color: #718096;
    line-height: 1.5;
    margin-bottom: 8px
}

.collection-count {
    font-size: 13px;
    color: #a0aec0
}

.messages-view {
    padding: 0;
    overflow-y: auto;
    flex: 1;
    display: none;
    flex-direction: column;
    min-height: 0;
    background: #fff
}

.messages-view.active {
    display: flex
}

.messages-header {
    padding: 20px 24px;
    background: #fff;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    position: sticky;
    top: 0;
    z-index: 2
}

.messages-new-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #1e5eff;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 8px 14px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: background .2s ease, box-shadow .2s ease, transform .2s ease;
    pointer-events: auto
}

.messages-new-btn:hover {
    background: #2563eb;
    box-shadow: 0 10px 20px #1e5eff33;
    transform: translateY(-1px)
}

.messages-new-btn svg {
    width: 16px;
    height: 16px;
    fill: currentColor
}

.messages-header h2 {
    font-size: 20px;
    font-weight: 600;
    color: #2d3748;
    margin: 0
}

.messages-new-btn svg {
    width: 18px;
    height: 18px;
    fill: currentColor
}

.messages-new-btn span {
    line-height: 1
}

.messages-empty {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 24px;
    text-align: center
}

.conversation-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    background: #fff;
    overflow-y: auto
}

.conversation-item {
    background: #fff;
    border: none;
    border-bottom: 1px solid #e2e8f0;
    padding: 18px 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    transition: background .2s ease;
    text-align: left
}

.conversation-item:first-child {
    border-top: 1px solid #e2e8f0
}

.conversation-item:hover {
    background: #f8fafc
}

.conversation-item.active {
    background: #f1f5ff
}

.conversation-item-icon {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    flex-shrink: 0;
    overflow: hidden;
    background: #fff;
}

.conversation-item-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block
}

.conversation-item-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0
}

.conversation-item-title {
    font-size: 15px;
    font-weight: 600;
    color: #1f2937;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.conversation-item.unread .conversation-item-title {
    color: #0f172a
}

.conversation-item-subtitle {
    font-size: 13px;
    color: #64748b;
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap
}

.conversation-item-agent {
    font-weight: 500;
    color: #475569
}

.conversation-item-time {
    color: #64748b
}

.conversation-item-meta {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px
}

.conversation-unread-count {
    background: #ef4444;
    color: #fff;
    min-width: 22px;
    height: 20px;
    border-radius: 12px;
    padding: 0 8px;
    font-size: 12px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1
}

.conversation-unread-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ef4444
}

.conversation-item-arrow svg {
    width: 18px;
    height: 18px;
    fill: #2563eb
}

.conversation-item-separator {
    color: #94a3b8
}

.messages-empty-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 24px
}

.messages-empty-icon svg {
    width: 100%;
    height: 100%;
    fill: #2d3748
}

.messages-empty h3 {
    font-size: 20px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 12px
}

.messages-empty p {
    font-size: 15px;
    color: #718096;
    line-height: 1.6;
    margin-bottom: 32px
}

.messages-cta-btn {
    background: linear-gradient(135deg, #1e5eff, #7c3aed);
    color: #fff;
    border: none;
    border-radius: 24px;
    padding: 14px 32px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all .2s;
    box-shadow: 0 4px 12px #1e5eff4d
}

.messages-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px #1e5eff66
}

.messages-cta-btn svg {
    width: 20px;
    height: 20px;
    fill: #fff
}

@media (max-width: 480px) {
    .chat-container {
        width: 100vw;
        height: 100vh;
        bottom: 0;
        right: 0;
        border-radius: 0
    }
}
`;

const he = "https://uplinq.app.n8n.cloud/webhook/chatbot-enterprise";
const ee = "enterpriseChatWidgetSessionId";
const ge = `
<div class="chat-widget">
  <button class="chat-button" id="chatButton">
    <img style="width: 44px; height: 44px;" src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1764419666/logo-white_x64htk.svg" alt="Uplinq AI">
    <span class="unread-badge" id="unreadBadge" style="display: none;">1</span>
  </button>

  <div class="chat-container" id="chatContainer">
    <div class="chat-scroll" id="chatScroll">
      <div class="chat-header" id="chatHeader">
        <div class="chat-header-top"> 
          <div class="chat-home-header" id="chatHomeHeader">
            <div class="chat-header-logo" id="headerLogo">
              <img src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1764419595/Group_48_tm326o.png" alt="Uplinq AI">
            </div>
            <div class="chat-header-avatars" id="headerAvatars">
                <img src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1762618487/freepik__the-style-is-candid-image-photography-with-natural__92271_i3wbbw.png" alt="Agent">
                <img src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1762618487/freepik__the-style-is-candid-image-photography-with-natural__92272_kt5ypq.png" alt="Agent">
                <img src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1762618487/freepik__the-style-is-candid-image-photography-with-natural__31122_lpgfhk.png" alt="Agent">
            </div>
          </div>
          <div class="chat-support-header" id="chatSupportHeader" style="display: none;">
            <div class="chat-support-left">
              <button class="back-btn" id="backBtn" style="display: none;">
                <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
              </button>
              <div class="chat-support-logo">
                <img src="https://res.cloudinary.com/dwjvtgiid/image/upload/v1764419666/logo-white_x64htk.svg" alt="Support AI Bot">
                <div class="support-header-text">
                  <span class="support-title">Support AI Bot</span>
                  <span class="support-subtitle">The team can also help</span>
                </div>
              </div>
            </div>
            <div class="chat-header-actions">
              <button class="header-icon-btn" id="headerMenuBtn" aria-label="More options">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="5" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="19" cy="12" r="2"></circle>
                </svg>
              </button>
              <button class="header-icon-btn" id="headerCloseBtn" aria-label="Close chat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="chat-header-greeting" id="headerGreeting">
          <h2 style="opacity: 0.5; font-size: 24px; font-weight: 400;">Hi User 👋</h2>
          <p style="font-size: 24px; font-weight: 400; opacity: 1; margin-top: -10px;">How can we help?</p>
        </div>
      </div>

      <div class="chat-view">
        <div class="home-view" id="homeView">
          <div class="search-container">
            <div  style="margin-bottom: 15px;" class="search-box">
              <input type="text" id="searchInput" placeholder="Search for help">
              <div class="search-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </div>
            </div>
          </div>

          <div style="margin-top: -20px;" class="articles-container">
            <button class="search-item" data-article="scraper-pricing">
              <span>Google Maps Scraper pay-per-event</span>
              <div class="article-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </button>

            <button class="search-item" data-article="platform-subscription">
              <span>Subscribing to the platform</span>
              <div class="article-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </button>

            <button class="search-item" data-article="bypass-protections">
              <span>Several tips on how to bypass website anti-scraping protections</span>
              <div class="article-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </button>

            <button class="search-item" data-article="platform-limits">
              <span>Reaching platform limits</span>
              <div class="article-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </button>
          </div>

          <button class="suggestion-item" data-suggestion="new-actor">
            <svg viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            <span>Have an idea for a new Actor or integration?</span>
            <div class="article-icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
            </div>
          </button>

          <div class="status-section">
            <div class="status-content">
              <div class="status-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div class="status-text">
                <h4>Status: All Systems Operational</h4>
                <p>Updated Nov 8, 06:45 CET</p>
              </div>
            </div>
          </div>

          <button class="article-item" data-action="mailto" data-email="sales@yourcompany.com">
            <span>Contact sales</span>
            <div class="article-icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
            </div>
          </button>

          <button class="article-item" data-action="link" data-url="https://discord.gg/yourserver">
            <span>Join our dev community on Discord</span>
            <div class="article-icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
            </div>
          </button>

          <button class="article-item" data-action="link" data-url="https://reddit.com/r/yoursubreddit">
            <span>Ask on Reddit</span>
            <div class="article-icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
            </div>
          </button>

          <button class="article-item" data-action="chat">
            <span>Send us a message</span>
            <div class="article-arrow">
              <svg viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </div>
          </button>
        </div>

        <div class="help-view" id="helpView" style="margin-top: -125px;">
          <div class="help-header">
            <h2>Help</h2>
            <div class="search-box">
              <input type="text" id="helpSearchInput" placeholder="Search for help">
              <div class="search-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </div>
            </div>
          </div>

          <div class="collections-header">
            <h3>9 collections</h3>
          </div>

          <div class="collections-container">
            <button class="collection-item" data-collection="getting-started">
              <div class="collection-title">
                <span>Getting started</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1e5eff">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
              <div class="collection-description">
                New to Apify? Get up to speed with our intro articles and tutorials.
              </div>
              <div class="collection-count">9 articles</div>
            </button>

            <button class="collection-item" data-collection="dictionary">
              <div class="collection-title">
                <span>Dictionary</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1e5eff">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
              <div class="collection-description">
                Confused by terminology? Find explanation of key terms in our dictionary.
              </div>
              <div class="collection-count">27 articles</div>
            </button>

            <button class="collection-item" data-collection="pricing-billing">
              <div class="collection-title">
                <span>Pricing & billing</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1e5eff">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
              <div class="collection-description">
                Learn how we charge for the usage of the Apify platform.
              </div>
              <div class="collection-count">9 articles</div>
            </button>

            <button class="collection-item" data-collection="integrations">
              <div class="collection-title">
                <span>Integrations</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1e5eff">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
              <div class="collection-description">
                Learn how to connect Apify with third party services, using ready-made integrations or API.
              </div>
              <div class="collection-count">15 articles</div>
            </button>

            <button class="collection-item" data-collection="actors">
              <div class="collection-title">
                <span>Actors</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1e5eff">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
              <div class="collection-description">
                Everything you need to know about Actors - the building blocks of the Apify platform.
              </div>
              <div class="collection-count">12 articles</div>
            </button>

            <button class="collection-item" data-collection="storage">
              <div class="collection-title">
                <span>Storage</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1e5eff">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
              <div class="collection-description">
                Learn about data storage options on the Apify platform.
              </div>
              <div class="collection-count">8 articles</div>
            </button>

            <button class="collection-item" data-collection="proxy">
              <div class="collection-title">
                <span>Proxy</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1e5eff">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
              <div class="collection-description">
                Understand how to use proxies for web scraping and automation.
              </div>
              <div class="collection-count">11 articles</div>
            </button>

            <button class="collection-item" data-collection="api">
              <div class="collection-title">
                <span>API</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1e5eff">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
              <div class="collection-description">
                Learn how to use the Apify API to programmatically control the platform.
              </div>
              <div class="collection-count">14 articles</div>
            </button>

            <button class="collection-item" data-collection="troubleshooting">
              <div class="collection-title">
                <span>Troubleshooting</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1e5eff">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
              <div class="collection-description">
                Common issues and how to solve them.
              </div>
              <div class="collection-count">10 articles</div>
            </button>
          </div>
        </div>

        <div class="messages-view" id="messagesView" style="margin-top: -125px;">
          <div class="messages-header">
            <h2>Messages</h2>
            <button type="button" class="messages-new-btn" id="newConversationBtn">
              <svg viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              <span>Start new conversation</span>
            </button>
          </div>
          <div class="conversation-list" id="messagesList"></div>
        </div>

        <div class="chat-messages" id="chatMessages" style="margin-top: -60px; display: none;"></div>
      </div>
    </div>

    <div class="chat-input-area" id="inputArea" style="display: none;">
      <div class="input-wrapper">
        <div class="input-shell">
          <textarea
            class="chat-input"
            id="messageInput"
            placeholder="Type your message..."
            rows="1"
          ></textarea>
          <div class="input-tools">
            <button class="input-tool-btn" type="button" id="attachmentBtn" aria-label="Attach a file">
              <svg viewBox="0 0 24 24">
                <path d="M16.5 3a4.5 4.5 0 00-6.36 0L3.88 9.26a6 6 0 108.49 8.49l6.01-6.01-1.41-1.41-6.01 6.01a4 4 0 11-5.66-5.66l6.26-6.26a2.5 2.5 0 113.54 3.54l-5.66 5.66 1.41 1.41 5.66-5.66A4.5 4.5 0 0016.5 3z"/>
              </svg>
            </button>
            <button class="input-tool-btn" type="button" id="emojiBtn" aria-label="Insert emoji">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-3 6a1.5 1.5 0 11-1.5 1.5A1.5 1.5 0 019 8zm6 0a1.5 1.5 0 11-1.5 1.5A1.5 1.5 0 0115 8zm-3 10a5.5 5.5 0 01-4.9-3h9.8A5.5 5.5 0 0112 18z"/>
              </svg>
            </button>
            <button class="input-tool-btn" type="button" id="gifBtn" aria-label="Insert GIF">
              <span class="gif-label">GIF</span>
            </button>
            <button class="input-tool-btn" type="button" id="voiceBtn" aria-label="Voice message">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3zm5 9a5 5 0 01-10 0H5a7 7 0 0014 0zM11 19v3h2v-3z"/>
              </svg>
            </button>
          </div>
          <div class="input-popovers">
            <div class="emoji-picker" id="emojiPicker" style="display: none;"></div>
            <div class="gif-picker" id="gifPicker" style="display: none;">
              <div class="gif-picker-header">
                <input type="text" id="gifSearchInput" placeholder="Search GIFs" aria-label="Search GIFs" />
                <button type="button" class="gif-close-btn" id="gifCloseBtn" aria-label="Close GIF picker">&times;</button>
              </div>
              <div class="gif-picker-results" id="gifResults"></div>
            </div>
            <div class="voice-indicator" id="voiceIndicator" style="display: none;">
              <span class="voice-indicator-dot"></span>
              <span class="voice-indicator-text">Listening...</span>
            </div>
          </div>
          <input type="file" id="attachmentInput" style="display: none;" multiple />
        </div>
        <button class="send-btn" id="sendBtn">
          <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="bottom-nav" id="bottomNav">
      <button class="nav-item active" data-nav="home">
        <svg viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
        <span>Home</span>
      </button>
      <button class="nav-item" data-nav="help">
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
        </svg>
        <span>Help</span>
      </button>
      <button class="nav-item" data-nav="messages">
        <svg viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
        <span>Messages</span>
      </button>
    </div>
  </div>
</div>
`
const conversationIconUrl = "https://res.cloudinary.com/dwjvtgiid/image/upload/v1764419666/logo-white_x64htk.svg";
const Te = "uplinqChatWidgetConversations";
const Se = "uplinqChatWidgetActiveConversationId";
const THREADS_KEY = "uplinqChatThreads";
const ACTIVE_THREAD_KEY = "uplinqChatActiveThread";

function generateId(prefix = "thread") {
  try {
    if (typeof crypto != "undefined" && typeof crypto.randomUUID === "function")
      return `${prefix}-${crypto.randomUUID()}`;
  } catch (err) {
    console.warn("[UplinqChatWidget] crypto.randomUUID unavailable", err);
  }
  return `${prefix}-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}

function createEmptyThread() {
  const now = (/* @__PURE__ */ new Date()).toISOString();
  return {
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    unread: !1,
    unreadCount: 0,
    messages: []
  };
}

function loadThreads() {
  try {
    const raw = localStorage.getItem(THREADS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((thread) => {
      const createdAt = typeof (thread == null ? void 0 : thread.createdAt) === "string" ? thread.createdAt : (/* @__PURE__ */ new Date()).toISOString();
      const normalizedMessages = Array.isArray(thread == null ? void 0 : thread.messages) ? thread.messages.filter((msg) => msg && typeof msg.role === "string").map((msg) => {
        const timestamp = typeof msg.timestamp === "string" ? msg.timestamp : (/* @__PURE__ */ new Date()).toISOString();
        const role = msg.role === "user" || msg.role === "bot" ? msg.role : "bot";
        const type = typeof msg.type === "string" ? msg.type : "text";
        const content = typeof msg.content === "string" ? msg.content : "";
        const attachmentObj = msg.attachment && typeof msg.attachment === "object" ? {
          name: typeof msg.attachment.name === "string" ? msg.attachment.name : undefined,
          size: Number.isFinite(msg.attachment.size) ? msg.attachment.size : undefined,
          type: typeof msg.attachment.type === "string" ? msg.attachment.type : undefined,
          dataUrl: typeof msg.attachment.dataUrl === "string" ? msg.attachment.dataUrl : undefined
        } : void 0;
        const attachment = attachmentObj && (attachmentObj.name || attachmentObj.dataUrl) ? attachmentObj : void 0;
        const gifObj = msg.gif && typeof msg.gif === "object" ? {
          url: typeof msg.gif.url === "string" ? msg.gif.url : undefined,
          previewUrl: typeof msg.gif.previewUrl === "string" ? msg.gif.previewUrl : undefined,
          title: typeof msg.gif.title === "string" ? msg.gif.title : undefined
        } : void 0;
        const gif = gifObj && gifObj.url ? gifObj : void 0;
        const audioObj = msg.audio && typeof msg.audio === "object" ? {
          dataUrl: typeof msg.audio.dataUrl === "string" ? msg.audio.dataUrl : undefined,
          duration: Number.isFinite(msg.audio.duration) ? msg.audio.duration : undefined,
          mimeType: typeof msg.audio.mimeType === "string" ? msg.audio.mimeType : undefined
        } : void 0;
        const audio = audioObj && audioObj.dataUrl ? audioObj : void 0;
        return {
          role,
          content,
          timestamp,
          type,
          attachment,
          gif,
          audio
        };
      }) : [];
      const lastTimestamp = normalizedMessages.length ? normalizedMessages[normalizedMessages.length - 1].timestamp : createdAt;
      const unreadCount = Number.isFinite(thread == null ? void 0 : thread.unreadCount) ? Math.max(0, Math.floor(thread.unreadCount)) : typeof (thread == null ? void 0 : thread.unread) === "boolean" && thread.unread ? 1 : 0;
      return {
        id: typeof (thread == null ? void 0 : thread.id) === "string" ? thread.id : generateId(),
        createdAt,
        updatedAt: typeof (thread == null ? void 0 : thread.updatedAt) === "string" ? thread.updatedAt : lastTimestamp,
        unread: unreadCount > 0,
        unreadCount,
        messages: normalizedMessages
      };
    });
  } catch (err) {
    console.warn("[UplinqChatWidget] Failed to load thread history", err);
    return [];
  }
}

function saveThreads(threads) {
  try {
    localStorage.setItem(THREADS_KEY, JSON.stringify(threads));
  } catch (err) {
    console.warn("[UplinqChatWidget] Failed to save thread history", err);
  }
}

function loadActiveThreadId() {
  try {
    return localStorage.getItem(ACTIVE_THREAD_KEY);
  } catch (err) {
    console.warn("[UplinqChatWidget] Failed to load active thread id", err);
    return null;
  }
}

function saveActiveThreadId(id) {
  try {
    id ? localStorage.setItem(ACTIVE_THREAD_KEY, id) : localStorage.removeItem(ACTIVE_THREAD_KEY);
  } catch (err) {
    console.warn("[UplinqChatWidget] Failed to persist active thread id", err);
  }
}

const V = /* @__PURE__ */ new Map();
function fe(t, l) {
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
    position: (l == null ? void 0 : l.position) ?? "fixed",
    customization: (l == null ? void 0 : l.customization) ?? void 0
  }), V.set(p, h);
}
function ue(t) {
  const l = typeof t == "string" ? document.querySelector(t) : t;
  if (!l) return;
  const p = V.get(l);
  p && (l.removeChild(p), V.delete(l));
}
function ve(t, l) {
  const p = me(), h = t.getElementById("chatButton"), g = t.getElementById("chatContainer"), c = t.getElementById("backBtn"), x = t.getElementById("homeView"), _ = t.getElementById("helpView"), j = t.getElementById("messagesView"), N = t.getElementById("chatMessages"), D = t.getElementById("inputArea"), O = t.getElementById("messageInput"), W = t.getElementById("sendBtn"), T = t.getElementById("unreadBadge"), Y = t.getElementById("bottomNav"), $ = t.getElementById("headerGreeting"), G = t.getElementById("headerLogo"), P = t.getElementById("headerAvatars"), R = t.getElementById("chatHomeHeader"), F = t.getElementById("chatSupportHeader"), y = t.getElementById("searchInput"), w = t.getElementById("helpSearchInput"), messagesListEl = t.getElementById("messagesList"), newConversationBtn = t.getElementById("newConversationBtn"), closeBtn = t.getElementById("headerCloseBtn"), attachmentBtn = t.getElementById("attachmentBtn"), emojiBtn = t.getElementById("emojiBtn"), gifBtn = t.getElementById("gifBtn"), voiceBtn = t.getElementById("voiceBtn"), attachmentInput = t.getElementById("attachmentInput"), emojiPicker = t.getElementById("emojiPicker"), gifPicker = t.getElementById("gifPicker"), gifSearchInput = t.getElementById("gifSearchInput"), gifResults = t.getElementById("gifResults"), gifCloseBtn = t.getElementById("gifCloseBtn"), voiceIndicator = t.getElementById("voiceIndicator"), chatScroll = t.getElementById("chatScroll");
  if (!h || !g || !x || !_ || !j || !N || !D || !O || !W || !T || !Y || !$ || !G || !P || !R || !F || !messagesListEl || !newConversationBtn || !closeBtn || !attachmentBtn || !emojiBtn || !gifBtn || !voiceBtn || !attachmentInput || !emojiPicker || !gifPicker || !gifSearchInput || !gifResults || !gifCloseBtn || !voiceIndicator || !chatScroll) {
    console.error("[UplinqChatWidget] Failed to initialize widget; required elements missing.");
    return;
  }
  const isInline = (l == null ? void 0 : l.inline) === !0;
  const initialOpen = (l == null ? void 0 : l.initialOpen) === !0;
  const widgetRoot = t.querySelector(".chat-widget");
  if (isInline && widgetRoot) {
    widgetRoot.classList.add("inline");
  }
  const customization = (l == null ? void 0 : l.customization);
  const gradient = customization == null ? void 0 : customization.gradient;
  const avatars = customization == null ? void 0 : customization.avatars;
  const logo = customization == null ? void 0 : customization.logo;
  if (gradient && chatScroll) {
    const { color1, color2, color3, color4 } = gradient;
    chatScroll.style.background = `linear-gradient(180deg, ${color1}, ${color2}, ${color3} 32%, ${color4} 55%, #fff 72%, #fff, #fff)`;
  }
  if (avatars && Array.isArray(avatars) && P) {
    P.innerHTML = "";
    avatars.slice(0, 3).forEach((url) => {
      const img = document.createElement("img");
      img.src = url;
      img.alt = "Agent";
      P.appendChild(img);
    });
  }
  if (G) {
    const logoImg = G.querySelector("img");
    if (logo !== void 0) {
      if (logo) {
        logoImg.src = logo;
        G.style.display = "flex";
      } else {
        G.style.display = "none";
      }
    }
  }
  const k = x, z = _, B = j, r = N, L = D, E = $, M = G, I = P, S = R, H = F, u = O, ie = W, ae = Y;
  let b = !1;
  let threads = loadThreads();
  if (!threads.length)
    threads.push(createEmptyThread());
  let currentThreadId = loadActiveThreadId();
  if (!currentThreadId || !threads.some((thread) => thread.id === currentThreadId))
    currentThreadId = threads[0].id;
  sortThreads();
  let activeThread = threads.find((thread) => thread.id === currentThreadId);
  if (!activeThread) {
    activeThread = threads[0];
    currentThreadId = activeThread.id;
  }
  let q = activeThread.messages;
  saveThreads(threads);
  saveActiveThreadId(currentThreadId);
  updateUnreadBadge();
  function sortThreads() {
    threads.sort((a, b) => {
      const aTime = new Date(a.updatedAt || a.createdAt).getTime();
      const bTime = new Date(b.updatedAt || b.createdAt).getTime();
      return bTime - aTime;
    });
  }

  function getActiveThread() {
    return threads.find((thread) => thread.id === currentThreadId) || null;
  }

  function saveThreadState() {
    threads.forEach((thread) => {
      thread.unreadCount = Math.max(0, Math.floor(thread.unreadCount || 0));
      thread.unread = thread.unreadCount > 0;
    });
    sortThreads();
    saveThreads(threads);
    saveActiveThreadId(currentThreadId);
    updateUnreadBadge();
  }

  function updateUnreadBadge() {
    const totalUnread = threads.reduce((sum, thread) => sum + Math.max(0, Math.floor(thread.unreadCount || 0)), 0);
    if (!T)
      return;
    if (totalUnread > 0 && !g.classList.contains("active")) {
      T.textContent = totalUnread > 99 ? "99+" : `${totalUnread}`;
      T.style.display = "inline-flex";
    } else {
      T.style.display = "none";
    }
  }

  const emojiPalette = [
    {
      label: "Smileys",
      items: ["😀", "😁", "😂", "🤣", "😊", "😍", "😘", "😎", "🤩", "😇", "😉", "🥳"]
    },
    {
      label: "Gestures",
      items: ["👍", "👏", "🙏", "🤝", "👌", "🙌", "🤞", "👋", "🤗", "💪", "🤙", "✌️"]
    },
    {
      label: "Symbols",
      items: ["🔥", "✨", "💡", "🚀", "💬", "❤️", "💙", "💛", "💚", "💜", "🧠", "📌"]
    }
  ];
  const TENOR_API_KEY = "LIVDSRZULELA";
  const MAX_GIF_RESULTS = 18;
  const MAX_ATTACHMENT_SIZE = 8 * 1024 * 1024;
  const MAX_AUDIO_DURATION_MS = 6e4;
  let emojiPickerOpen = !1;
  let gifPickerOpen = !1;
  let gifLoading = !1;
  let voiceRecording = !1;
  let mediaRecorder = null;
  let recordedChunks = [];
  let voiceStream = null;
  let voiceTimeout = null;
  renderEmojiPicker();

  function renderEmojiPicker() {
    emojiPicker.innerHTML = "";
    emojiPalette.forEach((group) => {
      const section = document.createElement("div");
      const heading = document.createElement("h4");
      heading.textContent = group.label;
      const grid = document.createElement("div");
      grid.className = "emoji-grid";
      group.items.forEach((emoji) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "emoji-button";
        btn.textContent = emoji;
        btn.addEventListener("click", () => {
          insertEmoji(emoji);
          closeEmojiPicker();
        });
        grid.appendChild(btn);
      });
      section.appendChild(heading);
      section.appendChild(grid);
      emojiPicker.appendChild(section);
    });
  }

  function insertEmoji(emoji) {
    if (!u) return;
    const start = typeof u.selectionStart === "number" ? u.selectionStart : u.value.length;
    const end = typeof u.selectionEnd === "number" ? u.selectionEnd : u.value.length;
    const before = u.value.slice(0, start);
    const after = u.value.slice(end);
    u.value = `${before}${emoji}${after}`;
    const next = start + emoji.length;
    requestAnimationFrame(() => {
      u.focus();
      u.setSelectionRange(next, next);
    });
  }

  function openEmojiPicker() {
    emojiPicker.style.display = "block";
    emojiPickerOpen = !0;
  }

  function closeEmojiPicker() {
    emojiPicker.style.display = "none";
    emojiPickerOpen = !1;
  }

  function toggleEmojiPicker() {
    if (emojiPickerOpen) {
      closeEmojiPicker();
    } else {
      closeGifPicker();
      openEmojiPicker();
    }
  }

  function openGifPicker() {
    gifPicker.style.display = "block";
    gifPickerOpen = !0;
    if (!gifPicker.dataset.trendingLoaded) {
      loadGifResults();
    }
    requestAnimationFrame(() => {
      gifSearchInput.focus();
      gifSearchInput.select();
    });
  }

  function closeGifPicker() {
    gifPicker.style.display = "none";
    gifPickerOpen = !1;
    gifSearchInput.blur();
  }

  function toggleGifPicker() {
    if (gifPickerOpen) {
      closeGifPicker();
    } else {
      closeEmojiPicker();
      openGifPicker();
    }
  }

  function setGifLoadingState(message) {
    gifResults.innerHTML = `<div class="gif-loading">${Z(message)}</div>`;
  }

  function setGifEmptyState(message) {
    gifResults.innerHTML = `<div class="gif-empty">${Z(message)}</div>`;
  }

  function clearGifResults() {
    gifResults.innerHTML = "";
  }

  async function loadGifResults(query) {
    if (gifLoading)
      return;
    gifLoading = !0;
    setGifLoadingState("Loading GIFs…");
    try {
      const endpoint = query && query.trim().length ? `https://g.tenor.com/v1/search?q=${encodeURIComponent(query.trim())}&key=${TENOR_API_KEY}&limit=${MAX_GIF_RESULTS}` : `https://g.tenor.com/v1/trending?key=${TENOR_API_KEY}&limit=${MAX_GIF_RESULTS}`;
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      const results = Array.isArray(payload == null ? void 0 : payload.results) ? payload.results : [];
      if (!results.length) {
        setGifEmptyState("No GIFs found. Try another search term.");
      } else {
        renderGifResults(results);
      }
      if (!query)
        gifPicker.dataset.trendingLoaded = "true";
    } catch (err) {
      console.warn("[UplinqChatWidget] Failed to load GIFs", err);
      setGifEmptyState("Unable to load GIFs right now.");
    } finally {
      gifLoading = !1;
    }
  }

  function renderGifResults(results) {
    clearGifResults();
    results.forEach((item) => {
      var _a, _b, _c, _d, _e;
      const media = Array.isArray(item == null ? void 0 : item.media) ? item.media[0] : null;
      const gifMedia = media && (((_a = media.gif) == null ? void 0 : _a.url) || ((_b = media.mediumgif) == null ? void 0 : _b.url) || ((_c = media.tinygif) == null ? void 0 : _c.url));
      const preview = media && (((_d = media.nanogif) == null ? void 0 : _d.url) || ((_e = media.tinygif) == null ? void 0 : _e.url) || gifMedia);
      if (!gifMedia)
        return;
      const button = document.createElement("button");
      button.type = "button";
      const img = document.createElement("img");
      img.src = preview || gifMedia;
      img.alt = item.title || "GIF";
      button.appendChild(img);
      button.addEventListener("click", () => {
        handleGifSelection({
          url: gifMedia,
          previewUrl: preview || gifMedia,
          title: item.title || "GIF"
        });
      });
      gifResults.appendChild(button);
    });
    if (!gifResults.children.length)
      setGifEmptyState("No GIFs available.");
  }

  function handleGifSelection(gif) {
    closeGifPicker();
    const messageText = gif.title ? `Shared a GIF: ${gif.title}` : "Shared a GIF";
    const gifRecord = {
      url: gif.url,
      previewUrl: gif.previewUrl,
      title: gif.title
    };
    d("user", messageText, {
      type: "gif",
      gif: gifRecord
    });
    v(messageText, {
      messageType: "gif",
      gif: gifRecord
    });
  }

  function formatFileSize(bytes) {
    if (!bytes) return "0 B";
    const units = ["B", "KB", "MB", "GB"];
    const exponent = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
    const value = bytes / Math.pow(1024, exponent);
    return `${value.toFixed(value >= 10 || exponent === 0 ? 0 : 1)} ${units[exponent]}`;
  }

  function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }

  function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  }

  function getAudioDuration(dataUrl) {
    return new Promise((resolve) => {
      const audio = new Audio();
      audio.preload = "metadata";
      audio.src = dataUrl;
      audio.addEventListener("loadedmetadata", () => {
        resolve(audio.duration || 0);
      });
      audio.addEventListener("error", () => resolve(0));
    });
  }

  function formatDuration(seconds) {
    if (!seconds || !isFinite(seconds)) return "0:00";
    const totalSeconds = Math.round(seconds);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  function closeAllPopovers() {
    closeEmojiPicker();
    closeGifPicker();
    if (!voiceRecording)
      voiceIndicator.style.display = "none";
  }

  async function startVoiceRecording() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      d("bot", "Voice messages are not supported in this browser.", {
        persist: !1,
        scroll: !0
      });
      return;
    }
    try {
      voiceStream = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      mediaRecorder = new MediaRecorder(voiceStream);
      recordedChunks = [];
      mediaRecorder.addEventListener("dataavailable", (event) => {
        if (event.data && event.data.size)
          recordedChunks.push(event.data);
      });
      mediaRecorder.addEventListener("stop", handleVoiceStop);
      mediaRecorder.start();
      voiceRecording = !0;
      voiceBtn.classList.add("recording");
      voiceIndicator.style.display = "flex";
      if (voiceTimeout)
        clearTimeout(voiceTimeout);
      voiceTimeout = setTimeout(() => {
        stopVoiceRecording();
      }, MAX_AUDIO_DURATION_MS);
    } catch (err) {
      console.warn("[UplinqChatWidget] Microphone access denied", err);
      d("bot", "We couldn't access your microphone.", {
        persist: !1,
        scroll: !0
      });
    }
  }

  function stopVoiceRecording() {
    if (!voiceRecording) {
      voiceIndicator.style.display = "none";
      return;
    }
    voiceRecording = !1;
    voiceBtn.classList.remove("recording");
    voiceIndicator.style.display = "none";
    if (voiceTimeout) {
      clearTimeout(voiceTimeout);
      voiceTimeout = null;
    }
    if (mediaRecorder && mediaRecorder.state !== "inactive")
      mediaRecorder.stop();
    if (voiceStream) {
      voiceStream.getTracks().forEach((track) => track.stop());
      voiceStream = null;
    }
  }

  async function handleVoiceStop() {
    try {
      if (!recordedChunks.length)
        return;
      const mimeType = mediaRecorder && mediaRecorder.mimeType ? mediaRecorder.mimeType : "audio/webm";
      const blob = new Blob(recordedChunks, { type: mimeType });
      const dataUrl = await blobToDataUrl(blob);
      const duration = await getAudioDuration(dataUrl);
      const durationLabel = formatDuration(duration);
      const messageText = `Voice message (${durationLabel})`;
      const audioRecord = {
        dataUrl,
        duration,
        mimeType
      };
      d("user", messageText, {
        type: "voice",
        audio: audioRecord
      });
      v(messageText, {
        messageType: "voice",
        audio: audioRecord
      });
    } catch (err) {
      console.warn("[UplinqChatWidget] Failed to process voice message", err);
      d("bot", "We couldn't process that recording.", {
        persist: !1,
        scroll: !0
      });
    } finally {
      recordedChunks = [];
      mediaRecorder = null;
    }
  }

  async function toggleVoiceRecording() {
    if (voiceRecording) {
      stopVoiceRecording();
    } else {
      closeEmojiPicker();
      closeGifPicker();
      await startVoiceRecording();
    }
  }

  function truncatePreview(value, length = 80) {
    if (!value) return "";
    const trimmed = value.trim();
    if (trimmed.length <= length)
      return trimmed;
    return `${trimmed.slice(0, Math.max(0, length - 1))}…`;
  }

  function getMessagePreview(message) {
    if (!message)
      return "New conversation";
    const type = typeof message.type === "string" ? message.type : "text";
    if (type === "attachment") {
      const name = (message == null ? void 0 : message.attachment) && typeof message.attachment.name === "string" ? message.attachment.name : "Attachment";
      return `Sent ${name}`;
    }
    if (type === "gif")
      return "Shared a GIF";
    if (type === "voice")
      return "Sent a voice message";
    const content = typeof message.content === "string" ? message.content : "";
    return content || "New conversation";
  }

  function renderConversation(scrollToBottom = !0) {
    if (!r) return;
    r.innerHTML = "";
    const thread = getActiveThread();
    if (!thread) return;
    if (thread.unread || Math.max(0, thread.unreadCount || 0) > 0) {
      thread.unread = !1;
      thread.unreadCount = 0;
      saveThreadState();
      renderThreadList();
    }
    thread.messages.forEach((message) => {
      d(message.role, message.content, {
        timestamp: message.timestamp,
        persist: !1,
        scroll: !1,
        type: message.type,
        attachment: message.attachment,
        gif: message.gif,
        audio: message.audio
      });
    });
    if (scrollToBottom)
      r.scrollTop = r.scrollHeight;
  }

  function renderThreadList() {
    if (!messagesListEl) return;
    sortThreads();
    messagesListEl.innerHTML = "";
    if (!threads.length) {
      const empty = document.createElement("div");
      empty.className = "messages-empty";
      empty.innerHTML = `
        <div class="messages-empty-icon">
          <svg viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        </div>
        <h3>No conversations yet</h3>
        <p>Start a new conversation to stay in touch.</p>
      `;
      messagesListEl.appendChild(empty);
      return;
    }
    threads.forEach((thread, index) => {
      const lastMessage = thread.messages[thread.messages.length - 1];
      const previewText = truncatePreview(getMessagePreview(lastMessage), 56);
      const authorLabel = lastMessage ? lastMessage.role === "user" ? "You" : "Support AI Bot" : "Support AI Bot";
      const referenceDate = lastMessage ? new Date(lastMessage.timestamp) : new Date(thread.updatedAt || thread.createdAt);
      const relativeDate = X(referenceDate);
      const unreadCount = Math.max(0, Math.floor(thread.unreadCount || 0));
      const item = document.createElement("button");
      item.type = "button";
      item.className = `conversation-item${thread.id === currentThreadId ? " active" : ""}${unreadCount > 0 ? " unread" : ""}`;
      item.dataset.threadId = thread.id;
      const metaTemplate = unreadCount > 0 ? `<span class="conversation-unread-count">${unreadCount > 99 ? "99+" : unreadCount}</span>` : '<span class="conversation-item-arrow"><svg viewBox="0 0 24 24"><path d="M9.29 6.71a1 1 0 0 0 0 1.41L12.17 11H6a1 1 0 0 0 0 2h6.17l-2.88 2.88a1 1 0 1 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.7a1 1 0 0 0-1.41.01z"></path></svg></span>';
      item.innerHTML = `
        <div class="conversation-item-icon">
          <img src="${Z(conversationIconUrl)}" alt="Support AI Bot">
        </div>
        <div class="conversation-item-content">
          <div class="conversation-item-title">${Z(previewText)}</div>
          <div class="conversation-item-subtitle">
            <span class="conversation-item-agent">${Z(authorLabel)}</span>
            <span class="conversation-item-separator">•</span>
            <span class="conversation-item-time">${Z(relativeDate)}</span>
          </div>
        </div>
        <div class="conversation-item-meta">${metaTemplate}</div>
      `;
      item.addEventListener("click", () => {
        if (thread.id !== currentThreadId) {
          currentThreadId = thread.id;
          q = thread.messages;
        }
        if (unreadCount > 0 || thread.unread) {
          thread.unread = !1;
          thread.unreadCount = 0;
        }
        saveThreadState();
        renderThreadList();
        f();
      });
      messagesListEl.appendChild(item);
    });
  }

  function startNewConversation() {
    const thread = createEmptyThread();
    threads.unshift(thread);
    currentThreadId = thread.id;
    q = thread.messages;
    saveThreadState();
    renderThreadList();
    u.value = "";
    f();
  }

  attachmentBtn.addEventListener("click", (event) => {
    event.preventDefault();
    closeAllPopovers();
    attachmentInput.click();
  });
  attachmentInput.addEventListener("change", async (event) => {
    const inputEl = event.target;
    if (!inputEl || !inputEl.files)
      return;
    const fileList = Array.from(inputEl.files).slice(0, 3);
    if (!fileList.length)
      return;
    closeAllPopovers();
    for (const file of fileList) {
      if (file.size > MAX_ATTACHMENT_SIZE) {
        d("bot", `${file.name} is larger than ${formatFileSize(MAX_ATTACHMENT_SIZE)}.`, {
          persist: !1,
          scroll: !0
        });
        continue;
      }
      try {
        const dataUrl = await readFileAsDataUrl(file);
        const attachmentRecord = {
          name: file.name,
          size: file.size,
          type: file.type,
          dataUrl
        };
        const messageText = `${file.name} (${formatFileSize(file.size)})`;
        d("user", messageText, {
          type: "attachment",
          attachment: attachmentRecord
        });
        v(messageText, {
          messageType: "attachment",
          attachment: attachmentRecord
        });
      } catch (err) {
        console.warn("[UplinqChatWidget] Failed to read attachment", err);
        d("bot", `We couldn't attach ${file.name}.`, {
          persist: !1,
          scroll: !0
        });
      }
    }
    attachmentInput.value = "";
  });
  emojiBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleEmojiPicker();
  });
  gifBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleGifPicker();
  });
  gifCloseBtn.addEventListener("click", (event) => {
    event.preventDefault();
    closeGifPicker();
  });
  gifSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const query = gifSearchInput.value.trim();
      loadGifResults(query);
    }
  });
  voiceBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleVoiceRecording();
  });
  t.addEventListener("click", (event) => {
    const path = event.composedPath();
    if (emojiPickerOpen && !path.includes(emojiPicker) && !path.includes(emojiBtn))
      closeEmojiPicker();
    if (gifPickerOpen && !path.includes(gifPicker) && !path.includes(gifBtn))
      closeGifPicker();
  });
  t.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllPopovers();
      if (voiceRecording)
        stopVoiceRecording();
    }
  });

  renderThreadList();

  h.addEventListener("click", () => {
    closeAllPopovers();
    const isActive = g.classList.toggle("active");
    h.classList.toggle("active");
    if (isActive)
      T.style.display = "none";
    else
      updateUnreadBadge();
  }), closeBtn && closeBtn.addEventListener("click", () => {
    closeAllPopovers();
    g.classList.remove("active"), h.classList.remove("active"), updateUnreadBadge();
  }), c && c.addEventListener("click", () => {
    U();
  });
  function A(e) {
    t.querySelectorAll(".nav-item").forEach((a) => {
      a.dataset.nav === e ? a.classList.add("active") : a.classList.remove("active");
    });
  }
  function oe() {
    S.style.display = "flex", H.style.display = "none", E.style.display = "block", M.style.display = "flex", I.style.display = "flex";
  }
  function ne() {
    S.style.display = "none", H.style.display = "flex", E.style.display = "none", M.style.display = "none", I.style.display = "none";
  }
  function U() {
    closeAllPopovers();
    b = !1;
    k.style.display = "flex";
    z.classList.remove("active");
    B.classList.remove("active");
    r.style.display = "none";
    r.classList.remove("hide-avatars");
    L.style.display = "none";
    c && (c.style.display = "none");
    messagesListEl && (messagesListEl.style.display = "none");
    oe();
    A("home");
  }
  function se() {
    closeAllPopovers();
    b = !1;
    k.style.display = "none";
    z.classList.add("active");
    B.classList.remove("active");
    r.style.display = "none";
    r.classList.remove("hide-avatars");
    L.style.display = "none";
    c && (c.style.display = "none");
    messagesListEl && (messagesListEl.style.display = "none");
    S.style.display = "flex";
    H.style.display = "none";
    E.style.display = "none";
    M.style.display = "none";
    I.style.display = "none";
    A("help");
  }
  function re() {
    closeAllPopovers();
    b = !1;
    k.style.display = "none";
    z.classList.remove("active");
    B.classList.add("active");
    r.style.display = "none";
    r.classList.remove("hide-avatars");
    L.style.display = "none";
    c && (c.style.display = "none");
    S.style.display = "flex";
    H.style.display = "none";
    E.style.display = "none";
    M.style.display = "none";
    I.style.display = "none";
    messagesListEl && (messagesListEl.style.display = "flex");
    renderThreadList();
    A("messages");
  }
  function f() {
    closeAllPopovers();
    b = !0;
    messagesListEl && (messagesListEl.style.display = "none");
    renderConversation();
    k.style.display = "none";
    z.classList.remove("active");
    B.classList.remove("active");
    r.style.display = "block";
    r.classList.add("hide-avatars");
    L.style.display = "block";
    c && (c.style.display = "flex");
    ne();
    A("messages");
    u.focus();
  }
  ae.querySelectorAll(".nav-item").forEach((e) => {
    e.addEventListener("click", () => {
      const i = e.dataset.nav;
      i && (i === "home" && U(), i === "help" && se(), i === "messages" && re());
    });
  }), t.querySelectorAll(".article-item").forEach((e) => {
    e.addEventListener("click", () => {
      var s, n;
      const i = e.dataset.action;
      if (i === "mailto") {
        const o = e.dataset.email || "support@yourcompany.com";
        window.location.href = `mailto:${o}`;
        return;
      }
      if (i === "link") {
        const o = e.dataset.url;
        o && window.open(o, "_blank", "noopener,noreferrer");
        return;
      }
      if (i === "chat") {
        f(), d("bot", "Hello! How can I help you today?");
        return;
      }
      const a = (n = (s = e.querySelector("span")) == null ? void 0 : s.textContent) == null ? void 0 : n.trim();
      a && (f(), d("user", a), v(a));
    });
  }), t.querySelectorAll(".suggestion-item").forEach((e) => {
    e.addEventListener("click", () => {
      var s, n;
      const i = e.dataset.action, a = (n = (s = e.querySelector("span")) == null ? void 0 : s.textContent) == null ? void 0 : n.trim();
      if (a)
        if (i === "link") {
          const o = e.dataset.url;
          o && window.open(o, "_blank", "noopener,noreferrer");
        } else
          f(), d("user", a), v(a);
    });
  }), t.querySelectorAll(".collection-item").forEach((e) => {
    e.addEventListener("click", () => {
      var s, n;
      const i = (n = (s = e.querySelector(".collection-title span")) == null ? void 0 : s.textContent) == null ? void 0 : n.trim();
      if (!i) return;
      f();
      const a = `Tell me about ${i}`;
      d("user", a), v(a);
    });
  }), y && y.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const i = y.value.trim();
      i && (f(), d("user", i), v(i), y.value = "");
    }
  }), w && w.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const i = w.value.trim();
      i && (f(), d("user", i), v(i), w.value = "");
    }
  }), newConversationBtn && newConversationBtn.addEventListener("click", (event) => {
    event.preventDefault();
    closeAllPopovers();
    startNewConversation();
  });
  function Q() {
    closeAllPopovers();
    const e = u.value.trim();
    e && (d("user", e), u.value = "", u.style.height = "auto", v(e));
  }
  ie.addEventListener("click", Q), u.addEventListener("keydown", (e) => {
    e.key === "Enter" && !e.shiftKey && (e.preventDefault(), Q());
  }), u.addEventListener("input", function () {
    this.style.height = "auto", this.style.height = Math.min(this.scrollHeight, 120) + "px";
  });
  function X(e) {
    const a = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), s = Math.floor(a / 1e3), n = Math.floor(s / 60), o = Math.floor(n / 60), m = Math.floor(o / 24);
    return s < 60 ? "Just now" : n < 60 ? n === 1 ? "1 minute ago" : `${n} minutes ago` : o < 24 ? o === 1 ? "1 hour ago" : `${o} hours ago` : m < 7 ? m === 1 ? "Yesterday" : `${m} days ago` : e.toLocaleDateString();
  }
  function Z(e) {
    const i = document.createElement("div");
    return i.textContent = e, i.innerHTML;
  }
  function d(role, content, options = {}) {
    const {
      timestamp,
      persist = !0,
      scroll = !0,
      type = "text",
      attachment,
      gif,
      audio
    } = options;
    const normalizedRole = role === "user" ? "user" : "bot";
    const messageType = typeof type === "string" ? type : "text";
    const textContent = typeof content === "string" ? content : "";
    const a = timestamp ? new Date(timestamp) : /* @__PURE__ */ new Date();
    const recordTimestamp = a.toISOString();
    const messageEl = document.createElement("div");
    messageEl.className = `message ${normalizedRole} message-${messageType}`;
    const n = a.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    });
    const o = b ? normalizedRole === "bot" ? `Support AI Bot • AI Agent • ${X(a)}` : `You • ${X(a)}` : n;
    const avatar = document.createElement("div");
    avatar.className = "message-avatar";
    avatar.textContent = normalizedRole === "bot" ? "AI" : "You";
    const contentWrapper = document.createElement("div");
    contentWrapper.className = "message-content";
    const bubble = document.createElement("div");
    bubble.className = "message-bubble";
    if (messageType === "attachment" && attachment && typeof attachment.dataUrl === "string") {
      bubble.classList.add("attachment-bubble");
      const card = document.createElement("div");
      card.className = "attachment-card";
      const icon = document.createElement("div");
      icon.className = "attachment-icon";
      icon.textContent = "📎";
      const meta = document.createElement("div");
      meta.className = "attachment-meta";
      const nameEl = document.createElement("span");
      nameEl.className = "attachment-name";
      nameEl.textContent = attachment.name || textContent || "Attachment";
      const sizeEl = document.createElement("span");
      sizeEl.className = "attachment-size";
      sizeEl.textContent = formatFileSize(attachment.size || 0);
      meta.appendChild(nameEl);
      meta.appendChild(sizeEl);
      card.appendChild(icon);
      card.appendChild(meta);
      bubble.appendChild(card);
      if (attachment.dataUrl) {
        const download = document.createElement("a");
        download.className = "attachment-download";
        download.href = attachment.dataUrl;
        download.download = attachment.name || "attachment";
        download.textContent = "Download";
        bubble.appendChild(download);
      }
      if (textContent) {
        const caption = document.createElement("div");
        caption.className = "message-bubble-text";
        caption.innerHTML = Z(textContent);
        bubble.appendChild(caption);
      }
    } else if (messageType === "gif" && gif && typeof gif.url === "string") {
      bubble.classList.add("gif-bubble");
      const img = document.createElement("img");
      img.className = "message-gif-media";
      img.src = gif.url;
      img.alt = gif.title || "GIF";
      bubble.appendChild(img);
      const captionText = textContent || (gif.title ? `GIF • ${gif.title}` : "Shared a GIF");
      if (captionText) {
        const caption = document.createElement("div");
        caption.className = "message-bubble-text";
        caption.innerHTML = Z(captionText);
        bubble.appendChild(caption);
      }
    } else if (messageType === "voice" && audio && typeof audio.dataUrl === "string") {
      bubble.classList.add("voice-bubble");
      const audioEl = document.createElement("audio");
      audioEl.className = "message-voice-player";
      audioEl.controls = !0;
      audioEl.src = audio.dataUrl;
      bubble.appendChild(audioEl);
      const durationLabel = typeof audio.duration === "number" ? formatDuration(audio.duration) : null;
      const captionText = textContent || (durationLabel ? `Voice message (${durationLabel})` : "Voice message");
      if (captionText) {
        const caption = document.createElement("div");
        caption.className = "message-bubble-text";
        caption.innerHTML = Z(captionText);
        bubble.appendChild(caption);
      }
    } else {
      bubble.innerHTML = textContent ? Z(textContent) : "&nbsp;";
    }
    const timeEl = document.createElement("div");
    timeEl.className = "message-time";
    timeEl.innerHTML = Z(o);
    contentWrapper.appendChild(bubble);
    contentWrapper.appendChild(timeEl);
    messageEl.appendChild(avatar);
    messageEl.appendChild(contentWrapper);
    r.appendChild(messageEl);
    scroll && (r.scrollTop = r.scrollHeight);
    if (persist) {
      const thread = getActiveThread();
      if (thread) {
        const messageRecord = {
          role: normalizedRole,
          content: textContent,
          timestamp: recordTimestamp,
          type: messageType
        };
        if (messageType === "attachment" && attachment)
          messageRecord.attachment = attachment;
        if (messageType === "gif" && gif)
          messageRecord.gif = gif;
        if (messageType === "voice" && audio)
          messageRecord.audio = audio;
        thread.messages.push(messageRecord);
        thread.updatedAt = recordTimestamp;
        if (normalizedRole === "bot" && !b) {
          const currentUnread = Math.max(0, Math.floor(thread.unreadCount || 0));
          thread.unreadCount = currentUnread + 1;
        } else if (b || normalizedRole !== "bot") {
          thread.unreadCount = 0;
        }
        thread.unread = Math.max(0, thread.unreadCount || 0) > 0;
        q = thread.messages;
        saveThreadState();
        renderThreadList();
      }
    }
  }
  function le() {
    const e = document.createElement("div");
    e.className = "message bot", e.id = "typingIndicator", e.innerHTML = `
      <div class="message-avatar">AI</div>
      <div class="message-content">
        <div class="typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>
    `, r.appendChild(e), r.scrollTop = r.scrollHeight;
  }
  function ce() {
    const e = r.querySelector("#typingIndicator");
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function C(e, i = /* @__PURE__ */ new Set()) {
    if (e == null) return null;
    if (typeof e == "string") {
      const n = e.trim();
      return n.length ? n : null;
    }
    if (typeof e == "number")
      return e.toString();
    if (typeof e != "object" || i.has(e)) return null;
    i.add(e);
    const a = e, s = [
      "reply",
      "response",
      "result",
      "output",
      "text",
      "answer",
      "agentOutput",
      "agent_output",
      "aiReply",
      "ai_reply",
      "message",
      "content",
      "body"
    ];
    for (const n of s)
      if (n in a) {
        const o = C(a[n], i);
        if (o) return o;
      }
    if (Array.isArray(e))
      for (const n of e) {
        const o = C(n, i);
        if (o) return o;
      }
    else
      for (const n of Object.values(a)) {
        const o = C(n, i);
        if (o) return o;
      }
    return null;
  }
  async function v(e, meta = {}) {
    le();
    const i = {
      message: e,
      messageType: typeof meta.messageType === "string" ? meta.messageType : "text",
      sessionId: p,
      sessionKey: p,
      conversationHistory: q,
      attachment: meta.attachment,
      gif: meta.gif,
      audio: meta.audio,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    try {
      const a = await fetch(l.webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(i)
      }), s = a.headers.get("content-type") || "", n = await a.text();
      let o = n;
      if (s.includes("application/json") && n.trim().length)
        try {
          o = JSON.parse(n);
        } catch (de) {
          console.warn("[UplinqChatWidget] Failed to parse JSON response", de, n);
        }
      if (!a.ok)
        throw new Error(`Unexpected status ${a.status}: ${typeof o == "string" ? o : JSON.stringify(o)}`);
      const m = C(o);
      m ? d("bot", m) : d("bot", "I received your message and will get back to you shortly!");
    } catch (a) {
      console.error("[UplinqChatWidget] Error sending message", a), d("bot", "I'm having trouble connecting right now. Please try again in a moment.");
    } finally {
      ce();
    }
  }
  if (initialOpen && isInline) {
    g.classList.add("active");
    h.classList.add("active");
    T.style.display = "none";
    U();
  } else {
    setTimeout(() => {
      g.classList.contains("active") || (T.style.display = "block");
    }, 3e3), U();
  }
}
function te() {
  try {
    if (window.crypto && typeof window.crypto.randomUUID == "function")
      return window.crypto.randomUUID();
  } catch (t) {
    console.warn("[UplinqChatWidget] crypto.randomUUID unavailable", t);
  }
  return `session-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function me() {
  try {
    const t = localStorage.getItem(ee);
    if (t) return t;
    const l = te();
    return localStorage.setItem(ee, l), l;
  } catch (t) {
    return console.warn("[UplinqChatWidget] localStorage unavailable", t), te();
  }
}
const xe = { mount: fe, unmount: ue };
typeof window < "u" && (window.UplinqChatWidget = xe);
export {
  xe as UplinqChatWidget,
  fe as mount,
  ue as unmount
};
