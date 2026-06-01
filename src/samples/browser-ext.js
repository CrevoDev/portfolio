const browserExt = {
    id: 'browser-ext',
    title: 'Extensão Chrome — Auto-preenchimento',
    language: 'JavaScript',
    summary: 'Content script com manifest V3 para preencher formulários repetitivos com perfis salvos pelo usuário.',
    files: [
        {
            name: 'manifest.json',
            language: 'json',
            code: `{
  "manifest_version": 3,
  "name": "Form AutoFill Pro",
  "version": "1.2.0",
  "permissions": ["storage", "activeTab", "scripting"],
  "action": { "default_popup": "popup.html" },
  "content_scripts": [{
    "matches": ["<all_urls>"],
    "js": ["content.js"],
    "run_at": "document_idle"
  }]
}`
        },
        {
            name: 'content.js',
            language: 'javascript',
            code: `chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action !== 'fillForm') return;

  const profile = message.profile;
  const fieldMap = {
    'input[name="nome"]': profile.name,
    'input[name="email"]': profile.email,
    'input[name="cpf"]': profile.cpf,
    'textarea[name="observacao"]': profile.notes,
  };

  Object.entries(fieldMap).forEach(([selector, value]) => {
    const el = document.querySelector(selector);
    if (el) {
      el.value = value;
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });

  sendResponse({ filled: Object.keys(fieldMap).length });
});`
        }
    ]
};

export default browserExt;
