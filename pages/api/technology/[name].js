import data from "../data.json";
export default function helloAPI(req, res) {
  const { technology } = data;
  const { name } = req.query;
  const result = technology.filter(
    (x) =>
      x.name.split(" ").join("").toLowerCase() ===
      name.split("-").join("").toLowerCase()
  );
  res.status(200).json({ data: result });
}
