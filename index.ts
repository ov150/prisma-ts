import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function main() {

    // create user 
    // const user = await prisma.user.create({
    //     data:{
    //         name: 'underscore',
    //         email: 'underscore@gmail.com',
    //     }
    // })
    // console.log(user);

    //get users

    // const users = await prisma.user.findMany();
    // console.log(users);

    //create an article

    // const article = await prisma.article.create({
    //     data:{
    //         title: 'underscore title',
    //         body:'this is underscore post',
    //         author:{
    //             connect:{
    //                 id:1,   
    //             },
    //         },
    //     },
    // });
    // console.log(article);

    //get all articles

    // const articles = await prisma.article.findMany();
    // console.log(articles);

    //create user with article 

    // const user = await prisma.user.create({
    //     data:{
    //         name: 'underscore damm 1',
    //         email: 'underscoredamm1@gmail.com',
    //         articles: {
    //             create: {
    //                 title:'article by underscore damm',
    //                 body: 'this is article created by underscore damm',
    //             },
    //         },
    //     },
    // });
    
    // const articles = await prisma.article.findMany();
    // console.log(user);
    // console.log(articles);

    // const user = await prisma.user.findMany({
    //     include:{
    //         articles:true,
    //     }
    // });
    // console.log(user);
    
    // const article = await prisma.article.create({
    //     data:{
    //         title:'another article by underscore',
    //         body:'breaf introduction to the body of the underscore article',
    //         author:{
    //             connect:{
    //                 id: 2
    //             }
    //         }
    //     }
    // })
    // console.log(article);


    //get all users with there articles

    // const user = await prisma.user.findMany({
    //     include:{
    //         articles:true,
    //     }
    // })
    // user.forEach((user)=>{
    //     console.log(`User : ${user.name} , Email : ${user.email}`);
    //     console.log('Articles : ');
    //     user.articles.forEach((article)=>{
    //         console.log(`- Title : ${article.title}, Body: ${article.body} , Author Id : ${article.authorId}`);  
    //     })  
    //     console.log('\n');
    // })


    //update user

    // const user = await prisma.user.update({
    //     where:{
    //         id:1,
    //     },
    //     data:{
    //         name: 'multi boi',
    //     }
    // })
    // console.log(user);


    //remove article

    // const article = await prisma.article.delete({
    //     where:{
    //         id: 4,
    //     }
    // })
    
    // console.log(article);

    // const articles = await prisma.article.findMany();
    // console.log(articles);
    
    
}

main()
    .then(async () =>{
        await prisma.$disconnect();
    })
    .catch(async(e)=>{
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    })