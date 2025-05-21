# Savoir-Food-Promo
Savoir-Food-Promo is the Savoir-Food promotional webapp

Perfect — we’ll structure Savoir-Food-Promo as a clean, modular HTML webapp with vanilla JS, ready for Azure Static Web Apps deployment.

⸻

✅ WebApp Folder Structure (HTML-Only Version)

Savoir-Food-Promo/
├── index.html                # Landing page with email catcher
├── verify.html              # Email confirmation + redirect to quiz
├── quiz.html                # Simple UX to segment users
├── success.html             # Optional final screen
├── css/
│   └── styles.css           # Shared layout, buttons, animations
├── js/
│   ├── main.js              # Handles email post + redirect
│   ├── verify.js            # Token validation + backend fetch
│   └── quiz.js              # Quiz logic + dynamic routing
├── assets/
│   └── images/              # Promo images, favicons, illustrations
├── api/                     # (Optional) Add Azure Functions later
│   └── waitlist.js
└── README.md


⸻

✅ What’s Included

index.html
	•	Hero text
	•	Email input + CTA
	•	JS → POST to /api/waitlist

verify.html
	•	Reads ?token=xyz
	•	Confirms via backend
	•	CTA to quiz.html

quiz.html
	•	Quick form → meal goal, budget, preferences
	•	JS-driven redirect to best-fit sub-brand

⸻

🧭 Deployment Path

Frontend	Hosted on	URL Example
index.html	Azure Static Web Apps	https://savoir-food-promo.azurestaticapps.net/
API	Azure Functions (optional)	/.netlify/functions/waitlist.js or Azure App


⸻

© 2024 BrightNTech.AI by 7Milestone. All rights reserved.  
"BrightNTech.AI" and "Savoir-Food" are trademarks of BrightNTech.AI by 7Milestone.  
Unauthorized use of these marks is strictly prohibited.

Unauthorized use, distribution, or modification is prohibited.  
Usage is governed by a private licensing agreement that includes branding, visual identity, and proprietary data rules.  
Any reuse or derivative use of brand assets (names, logos, styling) requires explicit permission.

Contact: [contact@Savoir-Food](mailto:BrightNTech.AI@proton.me?subject=Savoir-Food%20Promo%20Inquiry)