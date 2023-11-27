import fs from "fs/promises"

export default defineEventHandler(async (event) => {
  console.log("hey")
  const body = await readBody(event)
  await fs.writeFile("./public/image.jpeg", body.image, "base64")
  return { success: true }
})
