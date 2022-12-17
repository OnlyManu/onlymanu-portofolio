// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const service_id = process.env.SERVICE_ID
const template_id = process.env.TEMPLATE_ID
const public_key = process.env.PUBLIC_KEY

export default async function handler(req, res) {
  const params = {
    service: `${service_id}`,
    template: `${template_id}`,
    key: `${public_key}`
  }
  res.status(200).json({
    success: true,
    data: params
  });
}