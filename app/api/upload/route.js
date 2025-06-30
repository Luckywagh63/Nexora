import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file || typeof file.arrayBuffer !== 'function') {
      return NextResponse.json({ error: 'No valid file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const originalName = file.name || 'upload';
    const baseName = originalName.split('.').slice(0, -1).join('.') || 'file';
    const extension = originalName.split('.').pop();

    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: 'raw',
          public_id: `${baseName}.${extension}`, // Keeps correct extension
          use_filename: false,
          unique_filename: false
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary stream error:', error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      streamifier.createReadStream(buffer).pipe(uploadStream);
    });

    return NextResponse.json({ url: uploadResult.secure_url }, { status: 200 });

  } catch (err) {
    console.error('Cloudinary upload failed:', err);
    return NextResponse.json({
      error: 'Upload failed',
      details: err.message || err.toString()
    }, { status: 500 });
  }
}
