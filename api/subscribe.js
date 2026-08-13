export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  const { email } = req.body;

  console.log("Received email:", email);

  return res.status(200).json({
    message: "Subscription successful",
  });
}