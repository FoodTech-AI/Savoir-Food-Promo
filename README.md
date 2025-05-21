# Savoir-Food-Promo
## Savoir-Food-Promo is the Savoir-Food promotional webapp.

Savoir-Food-Promo is a clean, modular HTML webapp with vanilla JS, ready for Azure Static Web Apps deployment.

⸻

✅ WebApp Folder Structure (HTML + Azure Functions)
```graph
Savoir-Food-Promo/
├── index.html                # Landing page with email catcher
├── verify.html               # Email confirmation + redirect to quiz
├── quiz.html                 # Simple UX to segment users
├── success.html              # Optional final screen
├── css/
│   └── styles.css            # Shared layout, buttons, animations
├── js/
│   ├── main.js               # Handles email post + redirect
│   ├── verify.js             # Token validation + backend fetch
│   └── quiz.js               # Quiz logic + dynamic routing
├── assets/
│   └── images/               # Promo images, favicons, illustrations
├── api/                      # Azure Functions: backend logic
│   ├── waitlist/
│   │   ├── index.js          # Receives emails + logs + generates token
│   │   └── function.json
│   ├── verify/
│   │   ├── index.js          # Token confirmation logic
│   │   └── function.json
│   └── host.json             # Azure Functions config
├── .github/
│   └── workflows/
│       └── azure-static-web-apps-salmon-stone-0ffcc4403.yml
├── local.settings.json       # Local Azure Functions config
├── package.json              # SQLite dependencies for Azure
└── README.md
```

## ✅ What’s Included

### index.html  
• Hero text  
• Email input + CTA  
• JS → POST to /api/waitlist  

### verify.html  
• Reads ?email=xyz&token=abc  
• Confirms via backend  
• CTA to quiz.html  

### quiz.html  
• Quick form → meal goal, budget, preferences  
• JS-driven redirect to best-fit sub-brand  

### Azure Functions  
• /api/waitlist logs new email + token in SQLite  
• /api/verify validates token + confirms email status  

## 🧭 Deployment Path
```table
Layer	Platform	URL Example
Frontend	Azure Static Web Apps	https://savoir-food-promo.azurestaticapps.net/
API	Azure Functions	https://savoir-food-promo.azurestaticapps.net/api/verify
```

## LICENSE

© 2024 **BrightNTech.AI** by **7Milestone**. All rights reserved. “BrightNTech.AI” and “Savoir-Food” are trademarks of **7Milestone**.

**Unauthorized use** of this software (the application) or these marks is strictly **prohibited**.

Unauthorized use, distribution, or modification is prohibited. Usage is governed by a **private licensing agreement** that includes branding, visual identity, and proprietary data rules.

Any reuse or derivative use of brand assets (names, logos, styling) requires explicit permission and is subject to **indemnities**.

Contact: [contact@Savoir-Food](mailto:BrightNTech.AI@proton.me?subject=Savoir-Food%20Promo%20Inquiry)