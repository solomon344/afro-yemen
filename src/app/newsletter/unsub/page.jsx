import { prisma } from "@/lib/prisma";

const Page = async ({searchParams})=>{
    const {email} = await searchParams
    
    //

    if (await prisma.newsletter.findUnique({where:{email:email}}) === null) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1>You are already unsubscribed from our newsletter</h1>
            </div>
        )
    }

    await prisma.newsletter.deleteMany({where:{email:email}})

    return (
        <div className="h-screen flex items-center justify-center">
            <h1>You have been Unsubscribed from our newsletter</h1>
        </div>
    )
}

export default Page