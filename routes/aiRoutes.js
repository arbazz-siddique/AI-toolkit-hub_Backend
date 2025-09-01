import express from 'express'
import { auth } from '../middlewares/auth.js';
import { genearteArticle, genearteBlogTitle, genearteImage, removeImageBackground, removeImageObject, resumeReview } from '../controllers/aiControllers.js';
import { upload } from '../configs/multer.js';
const aiRouter = express.Router();

aiRouter.post('/generate-article', auth, genearteArticle)
aiRouter.post('/generate-blog-title', auth, genearteBlogTitle)
aiRouter.post('/generate-image', auth, genearteImage)
aiRouter.post('/remove-image-background', upload.single('image'), auth, removeImageBackground )
aiRouter.post('/remove-image-object', upload.single('image'), auth, removeImageObject )
aiRouter.post('/resume-review', upload.single('resume'), auth, resumeReview )



export default aiRouter;