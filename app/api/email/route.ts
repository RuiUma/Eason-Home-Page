import { NextRequest, NextResponse } from "next/server";
import sgMail from '@sendgrid/mail'

const key = process.env.SG_KEY||''

sgMail.setApiKey(key)

export async function POST(params:NextRequest) {
    console.log('post called');
    
    const { name, email, message } = await params.json()

    const msgToMe = {
        to: 'theoneuma9@gmail.com',
        from: 'eason@umatech.work', 
        subject: `email from ${name}`,
        text: `email from ${name}`,
        html: `
                <p><strong>This is a message from ${name}</strong></p>
                <br>
                <p>${message}</p>
        `,
    }
    let resToMe: any
    try {
      resToMe = await sgMail.send(msgToMe)
    } catch (error: any) {
        console.log(error);
        const err = error.response.body
        console.log(err);
    }

    const msgToCustomer = {
      to: email.trim(),
      from: 'eason@umatech.work', 
      subject: `Thank you for contacting.`,
      text: `Thank you for contacting.`,
      html: `
              <p><strong>Thank you for your message</strong></p>
              <br>
              <p>This is the message you sent:</p>
              <p>${message}</p>
      `,
  }

  let resToCustomer: any
  try {
      resToCustomer = await sgMail.send(msgToCustomer)
  } catch (error: any) {
      console.log(error);
      const err = error.response.body
      console.log(err);
  }
    
    return new NextResponse(JSON.stringify({
      resToMe,
      resToCustomer
    }), {
      headers: {
        'content-type': 'application/json',
      },
      
    }) 
    
}