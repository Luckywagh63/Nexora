import dbConnect from '@/lib/dbConnect';
import Startup from '@/models/Startup';

export async function POST(req) {
  const body = await req.json();
  await dbConnect();

  const startup = await Startup.create({
    ...body,
    status: 'pending', // ensure it's pending until admin approval
  });

  return Response.json({
    message: 'Startup submitted and awaiting approval.',
    startup,
  });
}
