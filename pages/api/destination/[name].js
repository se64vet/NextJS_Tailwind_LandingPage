import data from "../data.json";
export default function helloAPI(req, res) {
  const { destinations } = data;
  const { name } = req.query;
  const result = destinations.filter(
    (x) => x.name.toLowerCase() === name.toLowerCase()
  );
  res.status(200).json({ data: result[0] });
}
