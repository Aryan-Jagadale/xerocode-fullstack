import prisma from "@/app/libs/prismadb";

import { NextResponse } from "next/server";
interface IParams {
    emailId?:string
}
export async function DELETE(
    request:Request, {
        params
    }: {params:IParams}
) {
    

    const {emailId} = params


    if(!emailId || typeof emailId !== 'string') {
        throw new Error('Invalid Id')
    }

    const email = await prisma.wailtListEmail.deleteMany({
        where: {
            id:emailId
        }
    });

    return NextResponse.json(email)
}



export async function PUT( 
    request: Request, 
    {params}:{params:IParams}    
) {
    const {emailId} = params
    const json = await request.json()

    console.log(json);
    


    if(!emailId || typeof emailId !== 'string') {
        throw new Error('Invalid Id')
    }

    const updated = await prisma.wailtListEmail.update({
        where: {
            id: emailId,
        },
        data:  json
    })

    return NextResponse.json(updated)

}