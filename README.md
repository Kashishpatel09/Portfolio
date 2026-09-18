# Kashish Patel — Data Analyst Portfolio

A React + Vite portfolio site for a fresher Data Analyst, built around four
end-to-end analytics projects (Power BI, SQL, DAX, Excel, Python).

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Opens at `http://localhost:5173`.

## 3. Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

---

## 4. Where to put your real content

Everything you need to personalize lives in a small number of files:

| What to replace              | Where                                                |
|-------------------------------|------------------------------------------------------|
| Email, GitHub, LinkedIn, resume path | `src/data/site.js`                            |
| Project details, GitHub links, Power BI links, dashboard images | `src/data/projects.js` |
| Dashboard screenshots         | `src/assets/dashboard/` (import into `projects.js`)  |
| Resume PDF                    | `public/resume/Kashish-Patel-Data-Analyst-Resume.pdf` |
| Certifications                | `src/components/Certifications.jsx`                   |
| Favicon                       | `public/favicon.svg`                                  |

Every project card's **GitHub**, **Power BI** and screenshot links come
from the `projects` array in `src/data/projects.js` — update the objects
there rather than editing individual components.

The contact form in `src/components/Contact.jsx` is **frontend UI only**.
It is not wired to a backend or email service — connect it to something
like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/)
by editing the `handleSubmit` function, or point it at your own API.

---

## 5. Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**. Vercel will give you a live URL, and redeploy automatically on every push.

## 6. Deploy to GitHub Pages

1. Install the deploy helper (already listed in `devDependencies`):
   ```bash
   npm install
   ```
2. In `vite.config.js`, set `base` to your repo name:
   ```js
   base: "/your-repo-name/",
   ```
3. Build and publish:
   ```bash
   npm run deploy
   ```
   This runs `predeploy` (build) then pushes `dist/` to a `gh-pages` branch.
4. In your GitHub repo settings → **Pages**, set the source to the `gh-pages` branch.

## 7. Deploy to Netlify

1. Push the project to GitHub.
2. In Netlify, **Add new site → Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

---

## Project structure

```
src/
├── components/       # One component per section
├── data/
│   ├── site.js       # Email, GitHub, LinkedIn, resume path
│   └── projects.js   # All 4 project entries, reused by cards + modal
├── assets/
│   └── dashboard/     # Dashboard screenshots (imported into projects.js)
├── App.jsx
├── main.jsx
└── index.css          # Design tokens + global styles
public/
├── favicon.svg
└── resume/            # Put your resume PDF here
```

## Pre-launch checklist

- [ ] Replace `email`, `github`, `linkedin` in `src/data/site.js`
- [ ] Add resume PDF to `public/resume/`
- [ ] Replace each project's `githubUrl` and `powerbiUrl` in `src/data/projects.js`
- [ ] Add real dashboard screenshots and wire up the `image` field per project
- [ ] Replace certification placeholders in `src/components/Certifications.jsx`
- [ ] Replace the `dataset`, insights and recommendation placeholders in `projects.js` with real findings
- [ ] Swap `public/favicon.svg` for your own mark
- [ ] Connect the contact form to a real email/form service
