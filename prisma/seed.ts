// import { PrismaClient } from "@prisma/client";
// import { randomUUID } from "crypto";

// const prisma = new PrismaClient();

// async function main() {
//   // Create multiple users
//   const users = await prisma.user.createMany({
//     data: [
//       {
//         id: "b12e77b7-f1ea-4a4b-b3c5-f6a4c8acfdb3",
//         username: "Primeagen",
//         email: "Primeagen@example.com",
//         password: "hashed_password1", //
//         bio: "Software developer",
//       },
//       {
//         id: "1fda2062-8dcc-4971-9b02-840517e35fc2",

//         username: "jane_smith",
//         email: "jane@example.com",
//         password: "hashed_password2", //
//         bio: "Web designer",
//       },
//       {
//         id: "f3d520eb-2d1f-4883-8fd8-4bc0131411e8",

//         username: "alice_wonderland",
//         email: "alice@example.com",
//         password: "hashed_password3", //
//         bio: "Project manager",
//       },
//     ],
//   });

//   console.log(`Created ${users.count} users`);

//   // Create multiple repositories
//   const repos = await prisma.repo.createMany({
//     data: [
//       {
//         id: "b12e77b7-f1ea-4a4b-b3c5-f6a4c8acfdb3",
//         name: "Project Alpha",
//         path: "/projects/alpha",
//         language: "JavaScript",
//         description: "A project for alpha testing.",
//         userId: "b12e77b7-f1ea-4a4b-b3c5-f6a4c8acfdb3", //
//       },
//       {
//         id: "1fda2062-8dcc-4971-9b02-840517e35fc2",
//         name: "Project Beta",
//         path: "/projects/beta",
//         language: "Python",
//         description: "A project for beta testing.",
//         userId: "1fda2062-8dcc-4971-9b02-840517e35fc2", //
//       },
//       {
//         id: "f3d520eb-2d1f-4883-8fd8-4bc0131411e8",
//         name: "Project Gamma",
//         path: "/projects/gamma",
//         language: "Java",
//         description: "A project for gamma testing.",
//         userId: "f3d520eb-2d1f-4883-8fd8-4bc0131411e8", //
//       },
//     ],
//   });

//   console.log(`Created ${repos.count} repositories`);

//   // Create multiple branches
//   const branches = await prisma.branch.createMany({
//     data: [
//       {
//         id: "jdj9f0f9-f1ea-4a4b-b3c5-f6a4c8acfdb3",
//         name: "main",
//         repoId: "b12e77b7-f1ea-4a4b-b3c5-f6a4c8acfdb3", //
//       },
//       {
//         id: "jdj9f0f9-f1ea-4a4b-b3c5-f6a4c8acfdb3",
//         name: "development",
//         repoId: "b12e77b7-f1ea-4a4b-b3c5-f6a4c8acfdb3",
//       },
//     ],
//   });

//   console.log(`Created ${branches.count} branches`);

//   // Create multiple files
//   const files = await prisma.file.createMany({
//     data: [
//       {
//         id: "b12e77b7-f1ea-4a4b-b3c5-f6a4c8acfdb3",
//         path: "/src/index.js",
//         language: "JavaScript",
//         repoId: "b12e77b7-f1ea-4a4b-b3c5-f6a4c8acfdb3",
//       },
//     ],
//   });

//   console.log(`Created ${files.count} files`);
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
