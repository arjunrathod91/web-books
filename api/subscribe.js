import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Web Books <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for subscribing!",
      html: `
        <h2>Thank you for subscribing to Web Books!</h2>
        <p>We're happy to have you with us.</p>
      `,
    });

    console.log("EMAIL:", email);
    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) {
      console.error("RESEND ERROR:", error);

      return res.status(500).json({
        message: "Failed to send email",
        error: error.message,
      });
    }

    return res.status(200).json({
      message: "Subscription successful",
      data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
}