This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Get Started

First, install dependencies:

```bash
npm run install

```
Second, create .env file:

```bash
DATABASE_URL="mongo_url"

```

Third, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Error one may face:
In package.json, don't mess with the "postinstall" it may cause error in production, For reference: [https://github.com/prisma/prisma/issues/7579](https://github.com/prisma/prisma/issues/7579)


## Deploy on Vercel
Deployed link [https://xerocode-fullstack.vercel.app/](https://xerocode-fullstack.vercel.app/)

