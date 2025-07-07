// import { writeFile } from 'node:fs/promises'

const createFiles = async (req, res) => {
  console.log(req.query.name)
  console.log(req.body)
  console.log(req.name)

  await writeFile(`./${req.query.name}.txt`, req.body.content)

  res.json({ data: "files" });
}

export { createFiles }