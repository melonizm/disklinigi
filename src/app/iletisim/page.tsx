import { getImages } from "@/lib/getImages"
import IletisimClient from "./client"

export default async function IletisimPage() {
  const dbImages = await getImages()
  return <IletisimClient dbImages={dbImages} />
}
