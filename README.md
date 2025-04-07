This is a [Next.js](https://nextjs.org) Non-profit organization landing page website  bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone the project:
```bash
git clone https://github.com/solomon344/afro-yemen.git
```
Next, install the dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```
Next, Get the email credentials from gmail app password and a mysql database either by downloading mysql or cloud databse, store the informations as follows in the .env file

```bash
# the app passowrd and email for sending emails
EMAIL_ID="email@example.com"
EMAIL_PASSWORD="example app password"

# databse connection
DATABE_URL="mysql://username:password@host:port/dbname
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Third Party Services

### Databse:
- [Prisma ORM](https://prisma.io/docs) - The Site is using the Prisma orm to interect with the databse
- [Aven Io](https://aiven.io) - Aiven is hosting the site's MySQL database

### Mailing:
- [Nodemailer](https://nodemailer.com) - Nodemailer enabled the site to send email messages programatically to the afro-yemen gmail account.
- [Gmail](https://mail.google.com) - Nodemail is using the afro-yemen Gmail account and gmail smtp in order to send and recieve emails from the app.