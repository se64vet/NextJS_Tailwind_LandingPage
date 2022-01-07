import data from "../data.json";
export default function helloAPI(req, res) {
  const { crew } = data;
  const { name } = req.query;
  const result = crew.filter(
    (x) =>
      x.name.split(" ").join("").toLowerCase() ===
      name.split("-").join("").toLowerCase()
  );
  res.status(200).json({ data: result[0] });
}
