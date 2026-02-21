![Screenshot](./public/images/preview.png)
### Software Engineering Portfolio of Jordan Smith

Built using vanilla JavaScript, Sass, Parcel, and [LocomotiveScroll.js](https://locomotivemtl.github.io/locomotive-scroll/)

# [VIEW PORTFOLIO](https://www.jordansmithdigital.com/)

## Build locally

```bash
npm install
npm run build
```

Open `dist/index.html` (or serve the `dist` folder) to verify changes before pushing.

## Deploy

Push to your connected branch; Amplify runs a clean build and deploys `dist` (see `amplify.yml`).

## If the live site still shows old content after a successful deploy

1. **Confirm the build actually ran** – In Amplify Console → your app → **Build** history: open the latest build and check the logs. You should see `npm run build` and Parcel output (e.g. "Built in X ms"). If the build was skipped or failed earlier, the deploy may be serving a previous artifact.

2. **Check which branch and URL** – Ensure you’re viewing the **production** URL for the branch that’s connected to the main app (e.g. `main` or `master`), not a preview URL for another branch.

3. **Force CDN/browser to fetch fresh HTML** – This repo includes `customHttp.yml` so `index.html` and `/` are served with `Cache-Control: no-cache`. After pushing it, redeploy once. Then try:
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac).
   - Or open the site in an **Incognito/Private** window.

4. **Manual CloudFront invalidation** – In **AWS Console → CloudFront** (or Amplify → Hosting → view the linked CloudFront distribution): create an invalidation with path `/*` to clear edge cache. Then reload the site.

5. **Skew protection** – In Amplify Console → **Hosting** → **Custom headers** (or cache settings): if "Skew protection" or similar is available, ensure it’s enabled so users get a consistent, up-to-date set of files.