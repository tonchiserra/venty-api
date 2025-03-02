import { ExpressMiddleware } from "../config/AppInterface"
import { gs } from "../helpers/db-client.js"
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import uuid4 from "uuid4"

export const uploadImages: ExpressMiddleware = async (req, res) => {
    const images = req.files as any[] ?? []
    let imageURLs = []

    for await (let image of images) {
        const imageRef = ref(gs, `images/${image.originalname}-${uuid4()}`)
        const metadata = {
            contentType: image.mimetype
        } 

        const snapshot = await uploadBytesResumable(imageRef, image.buffer, metadata)
        const downloadURL = await getDownloadURL(snapshot.ref)
        
        imageURLs.push(downloadURL)
    }
    
    res.status(200).json({ message: 'Images uploaded!', data: imageURLs })
}