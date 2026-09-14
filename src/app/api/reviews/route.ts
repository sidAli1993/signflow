import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the path to our JSON "database"
const dataFilePath = path.join(process.cwd(), 'src', 'data', 'reviews.json');

// Helper to read reviews
function getReviews() {
  try {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Error reading reviews.json:', error);
    return [];
  }
}

// Helper to write reviews
function saveReviews(reviews: any[]) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(reviews, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing reviews.json:', error);
    return false;
  }
}

export async function GET() {
  const allReviews = getReviews();
  
  // Only return approved reviews to the public API
  const approvedReviews = allReviews.filter((r: any) => r.status === 'approved');
  
  // Calculate aggregate rating
  const totalRating = approvedReviews.reduce((sum: number, r: any) => sum + r.rating, 0);
  const averageRating = approvedReviews.length > 0 
    ? (totalRating / approvedReviews.length).toFixed(1) 
    : "0.0";

  return NextResponse.json({
    reviews: approvedReviews,
    aggregate: {
      ratingValue: averageRating,
      ratingCount: approvedReviews.length.toString()
    }
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Basic validation
    if (!body.name || !body.rating || !body.comment) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    if (typeof body.rating !== 'number' || body.rating < 1 || body.rating > 5) {
      return NextResponse.json({ error: 'Invalid rating value' }, { status: 400 });
    }

    const allReviews = getReviews();
    
    const newReview = {
      id: Date.now().toString(),
      name: body.name.trim().substring(0, 50),
      rating: body.rating,
      comment: body.comment.trim().substring(0, 1000),
      date: new Date().toISOString(),
      status: 'pending' // Require manual approval in the JSON file
    };
    
    allReviews.unshift(newReview);
    
    const saved = saveReviews(allReviews);
    
    if (!saved) {
      throw new Error('Failed to save to filesystem');
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Review submitted successfully and is pending approval.' 
    }, { status: 201 });
    
  } catch (error) {
    console.error('POST /api/reviews error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
