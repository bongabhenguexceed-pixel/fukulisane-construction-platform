# Fukulisane Construction Platform

Professional construction website powered by ZUXURU intelligence.

## Quick Setup

```bash
# Clone the repo
git clone https://github.com/bongabhenguexceed-pixel/fukulisane-construction-platform.git
cd fukulisane-construction-platform

# Run the setup script (copies missing files from workspace, installs deps, builds)
bash scripts/setup.sh
```

## Manual Setup

```bash
npm install
npx shadcn@latest add button card badge tabs table dialog input label textarea select accordion progress separator skeleton tooltip avatar dropdown-menu sheet popover switch checkbox scroll-area alert popover
npx prisma generate
npx shogo generate
npm run build
```

## Deploy to Netlify

```bash
# Option 1: CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist

# Option 2: GitHub (recommended)
# Go to https://app.netlify.com → Add new site → Import from Git
# Select this repo → Build command: npm run build → Publish directory: dist
```

## Owner Login

- Email: donlegendwear@gmail.com
- Password: Bonana100#

## Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Hono + Prisma + SQLite
- **Intelligence**: ZUXURU hidden backend (10 engines, 12 platforms)
- **Host**: Cloudflare Pages / Netlify / Render
