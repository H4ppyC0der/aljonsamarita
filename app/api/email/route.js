import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const { firstName, lastName, email, subject, message } = await req.json();
    let config = {
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    };
    const transporter = nodemailer.createTransport(config);
    const contactMailOption = {
        name: "My Portfolio Website",
        from: {
            name: "My Portfolio Website | " + firstName + " " + lastName,
            address: email,
        },
        replyTo: email,
        sender: email,
        to: "arsamarita2@gmail.com",
        subject: subject,
        html: ` 
            <table>
                <tr>
                    <th>From:</th>
                    <td>${firstName} ${lastName}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>${email}</td>
                </tr>
                <tr>
                    <th>Subject:</th>
                    <td>${subject}</td>
                </tr>
                <tr>
                    <th>Message:</th>               
                </tr>
            </table>
            <p>${message}</p>`,
    };
    try {
        let result = await transporter.sendMail(contactMailOption);
        res.send();
    } catch (error) {
        return NextResponse.json(error);
    }
}
// Note: instead of using NextResponse.json(), it is better to use response.status(200).send(). It fixed my internal server error 500
