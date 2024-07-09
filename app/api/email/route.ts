import { NextRequest, NextResponse } from "next/server";
import sgMail from '@sendgrid/mail'

const key = process.env.SG_KEY||''

sgMail.setApiKey(key)

export async function POST(params:NextRequest) {
    console.log('post called');
    
    const { name, email, message } = await params.json()

    const msg = {
        to: email.trim(),
        from: 'eason@umatech.work', 
        subject: `email from ${name}`,
        text: `email from ${name}`,
        html: `
                <p><strong>This is a message from ${name}</strong></p>
                <br>
                <p>${message}</p>
        `,
    }
    let res: any
    try {
        res = await sgMail.send(msg)
    } catch (error: any) {
        console.log(error);
        const err = error.response.body
        console.log(err);

    }
    
    return new NextResponse(JSON.stringify(res), {
      headers: {
        'content-type': 'application/json',
      },
      
    }) 
    
}