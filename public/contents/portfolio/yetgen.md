# Web Application with Login and Register Features

This is a web application project that provides user authentication functionalities, including a login and registration system. The application is built using NextJS/React, NodeJS, NextAuth, MongoDB frameworks/libraries used in my project, and it allows users to create accounts, log in securely, and access their personalized dashboard.

This read.me Includes

- How it works Video
- NextJS usage
- API's
- What did I learn while doing this project?
- What should I learn

## How It Works Video Link

https://youtu.be/R7jPAi5nM34

## Features

- **User Registration:** New users can create accounts by providing their necessary information, such as username, email,nıckname and password. The registration process includes validation checks to ensure data accuracy.

- **User Login:** Registered users can log in using their credentials. The application employs robust security measures, such as password hashing and encryption, to protect user data.

## Installation and Usage

### Getting Started

#### 1. Clone the repository to your local machine.

#### 2. Install npm packages, react-icons, NextAuth, mongoose, bcryptjs

```bash
/* open terminal */
> cd my-app //first
> npm i  //second
> npm i   next-auth, mongoose, bcryptjs //third
```

#### 3. Configure the [open an .env file at my-app directory write

MONGODB_URI = Create your MongoDB project and cluster and database> connect > connect for visual studio
<your cluster name>
NEXTAUTH_SECRET = I wrote chracters randomly long and meaning does not matters.
NEXTAUTH_URL = http://localhost:3000 for use on your local
]. 4. Run the application using cd my-app > npm run dev

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the MIT. See the MIT (link-to-license-file) file for details.

## Acknowledgements

[List any external libraries, frameworks, or resources that you used and would like to acknowledge.]

Feel free to explore the application, and we welcome any feedback or contributions to enhance its functionality and user experience.

For questions or support, please contact https://nazlican.dev/connectme

## API Usage

### Register a New User

**Endpoint:** `POST /api/register`

Register a new user by sending a JSON payload containing the user's information to MongoDB.

Example Request:

```json
POST /api/register
{
  "username": "test",
  "nickname": "testnick",
  "email": "test@test.com",
  "password": "securepassword"
}

```

### Login

**Endpoint:** `POST /api/auth/[...nextauth]`

```http
{
  "email": "test@test.com",
  "password": "securepassword"
}

```

# What I learned

This is a fullstack task but I am not (just planning to be 😅) also my first contact with the backend, so good for me 🎉

- I learned how to use Postman to testing my http request
- I learned usage of MongoDb and implementation to project
- I learned writing basic endpoints
- I learned nextAuth at enterance level
- I gained experience using tailwind
- I learned how websites works (bakcand sides)

# What I could not learn and I should learn

- I could not map user nickname because I could not use callbacks. here is some source for this issue. I will solve this problem.

https://next-auth.js.org/configuration/callbacks#session-callback
https://github.com/nextauthjs/next-auth/issues/2385

- I could not use access token because of this I cold not get it together with my product management page. I will solve this problem.

https://www.youtube.com/watch?v=3ISuQ5HjU-M&pp=ygUbbmV4dCBhdXRoIGp3dCBtZWhtZXQgcGVrY2Fu

- I do not feel comfortable using NextAuth. I shoul read documentation
