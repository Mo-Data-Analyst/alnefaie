# Al Nefaie Website

The website for **Mohamed Al Nefaie Office for Accounting, Auditing, Financial & Legal Consultancy**
(النفيعي للمحاسبة والمراجعة).

It is a one-page website in **Arabic (right-to-left)** and **English (left-to-right)**. It includes:

- Services, About, Who We Serve, How We Work, Ongoing Support, International Clients, FAQ and Contact sections
- A language switcher that remembers the choice (`?lang=en` in the address)
- A mobile menu
- A contact form that checks what visitors type
- A FAQ chatbot with **fixed, pre-written answers only** (no AI, no outside services)

---

## 1. Technology

| Tool | Why |
| --- | --- |
| [React](https://react.dev) | Builds the page from small, reusable pieces (components) |
| [Vite](https://vite.dev) | Runs the site locally and builds the final files |
| Plain CSS with variables | All colours, fonts and sizes live in one file |
| `@fontsource` packages | IBM Plex Sans Arabic + Inter fonts stored with the site, with no Google Fonts requests |

The site has no database, no server code and no secret keys.

---

## 2. What each folder and file does

```
al-nefaie-website/
├── index.html                 Page shell: browser tab title, description, favicon
├── package.json               List of dependencies and the npm commands
├── vite.config.js             Vite settings (normally no need to touch)
├── public/                    Files copied as-is (favicon, robots.txt)
└── src/
    ├── main.jsx               Starts the app, loads fonts and global styles
    ├── App.jsx                Puts the sections in order on the page
    │
    ├── data/                  ✏️  ALL THE TEXT — edit these to change content
    │   ├── siteInfo.js        Office name, slogan, phone, WhatsApp, email, address, form setting
    │   ├── pageText.js        Headings and short texts of every section
    │   ├── navigation.js      Menu links
    │   ├── services.js        The service cards (also used in the form and footer)
    │   ├── whyUs.js           "Why Al Nefaie" points
    │   ├── audiences.js       "Who We Serve" cards
    │   ├── processSteps.js    "How We Work" steps
    │   ├── ongoingSupport.js  "Ongoing Support" items
    │   ├── faq.js             FAQ section questions & answers
    │   ├── chatbotFaq.js      Chatbot questions & answers + chatbot messages
    │   └── contactForm.js     Form labels, countries, phone codes, messages
    │
    ├── sections/              One file per page section (Hero, Services, WhyUs, …)
    ├── components/            Reusable pieces (Header, Footer, Button, Icon, Chatbot, ContactForm, …)
    ├── i18n/LanguageContext.jsx   Arabic/English switching and right-to-left handling
    ├── hooks/                 Small helpers (e.g. "has the page been scrolled?")
    ├── assets/images/         Logo (logo-al-nefaie.webp)
    └── styles/
        ├── variables.css      🎨 Colours, fonts, sizes (design tokens)
        ├── base.css           Page defaults
        ├── components.css     Buttons, section headings, language switcher, animations
        ├── header.css, footer.css, chatbot.css
        └── sections/          One CSS file per section
```

---

## 3. Install (first time only)

1. Install **Node.js 20 or newer** (LTS) from <https://nodejs.org>.
2. Open the project folder in **Visual Studio Code**.
3. Open the terminal (**View → Terminal**) and run:

```bash
npm install
```

## 4. Run the website on your computer

```bash
npm run dev
```

Open the address it prints (usually <http://localhost:5173>). The page reloads by itself when you save a file.
Stop it with `Ctrl + C`.

## 5. Build the final version for the internet

```bash
npm run build
```

The ready-to-upload website is created in the **`dist/`** folder.
To test that exact build locally: `npm run preview`.

---

## 6. How to change things

### Text
Open the matching file in `src/data/`. Every text has an Arabic and an English version:

```js
title: { ar: 'التراخيص الصناعية', en: 'Industrial Licensing' },
```

Change the words between the quotes and save. Keep the quotes and commas.
If your text contains an apostrophe ( ' ), wrap it in double quotes instead: `en: "We'll reply"`.

### Contact details (phone, WhatsApp, email, address)
Edit `src/data/siteInfo.js`:

```js
contact: {
  address: { ar: 'القاهرة، ...', en: 'Cairo, ...' },
  phone: '+20 100 000 0000',
  whatsappNumber: '201000000000', // digits only, with country code, no +
  email: 'info@your-domain.com',
},
```

While a value is `null`, the site shows a "to be confirmed" placeholder instead of a broken link.
After you fill them in, the phone, WhatsApp and email become clickable automatically.

### Colours and fonts
Edit `src/styles/variables.css`. For example, change `--color-gold: #c7a76c;` to update the gold everywhere.
The fonts are loaded in `src/main.jsx` and selected by `--font-arabic` / `--font-latin`.

### Logo / images
Replace `src/assets/images/logo-al-nefaie.webp` with a new file **using the same name**
(a square-ish image, at least 400 px wide, with a transparent background).
For the browser-tab icon, replace `public/favicon.png` and `public/favicon.ico`.

### Add or remove a service
In `src/data/services.js`, copy a whole `{ ... },` block, give it a new unique `id`, and edit the text.
Delete a block to remove a service. `icon` must be a name from `src/components/Icon.jsx`.
`showInFooter: true` also lists it in the footer. The contact form's service list updates automatically.

### Add or remove a FAQ question
- **FAQ section:** `src/data/faq.js`. Copy a `{ question: …, answer: … },` block and edit it.
- **Chatbot:** `src/data/chatbotFaq.js`. Copy a block, give it a unique `id`, and edit the question and answer.
  The chatbot only ever shows these answers. Typed questions get an answer only if they match a listed question;
  anything else gets the fallback message.

---

## 7. Making the contact form send emails

The website has no server, so the form can't send messages by itself yet.
At the moment it checks the visitor's input and then **tells them honestly** that online sending isn't set up yet.
It never shows a false "sent" message.

To receive messages by email:

1. Create a free form on a form service such as **Formspree** (<https://formspree.io>) and set it to send to the office email.
2. Copy the form's endpoint URL (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it in `src/data/siteInfo.js` → `contactFormEndpoint: 'https://formspree.io/f/abcdwxyz'`.
4. Run `npm run build` again and re-upload.

The endpoint URL is public by design, so it is not a secret. **Never** put passwords or private API keys in this project.

---

## 8. Putting the site on your domain

After `npm run build`, upload **the contents of the `dist/` folder** (not the folder itself). Pick the option that matches your host:

### A) Shared hosting / cPanel (e.g. the company you bought the domain from)
1. Open **File Manager** → `public_html`.
2. Delete any placeholder `index.html` there.
3. Upload everything inside `dist/` (`index.html`, `assets/`, `favicon.png`, …).
4. In cPanel, turn on **SSL** (Let's Encrypt / AutoSSL) so the site opens with `https://`.

### B) Netlify / Vercel / Cloudflare Pages (free, automatic HTTPS)
1. Put the project on GitHub, or drag-and-drop the `dist/` folder into Netlify.
2. If connecting GitHub: build command `npm run build`, output folder `dist`.
3. In the host's **Domains** settings, add your domain and follow the DNS instructions they show.
   That usually means an `A` record for the root domain and a `CNAME` for `www`, set at your domain registrar.
4. DNS changes can take a few hours to work everywhere.

The site is a single page, so it needs no special routing rules.

---

## 9. Before going live: checklist

- [ ] Real phone, WhatsApp, email and address in `src/data/siteInfo.js`
- [ ] `contactFormEndpoint` set (or accept that the form only shows the "not set up yet" message)
- [ ] Privacy policy page and its link (`privacyPolicyUrl` in `siteInfo.js`)
- [ ] Office review of all Arabic text and the English translations (including chatbot answers)
- [ ] Office confirmation of the professional claims shown (for example "محاسب قانوني" and the Saudi company-formation service)
- [ ] Packages and pricing for "Ongoing Support", if the office wants to show them
- [ ] Optional: replace the line drawings in "Who We Serve" with real photos
