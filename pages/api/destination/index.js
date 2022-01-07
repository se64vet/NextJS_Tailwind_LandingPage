// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "../data.json";
export default function helloAPI(req, res) {
  const { destinations } = data;
  res.status(200).json({ data: destinations });
}
