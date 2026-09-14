import fs from 'fs';
import path from 'path';

export function getAggregateRating() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'reviews.json');
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileData = fs.readFileSync(filePath, 'utf8');
    const allReviews = JSON.parse(fileData);
    
    const approvedReviews = allReviews.filter((r: any) => r.status === 'approved');
    
    if (approvedReviews.length === 0) return null;
    
    const totalRating = approvedReviews.reduce((sum: number, r: any) => sum + r.rating, 0);
    const averageRating = (totalRating / approvedReviews.length).toFixed(1);

    return {
      ratingValue: averageRating,
      ratingCount: approvedReviews.length.toString()
    };
  } catch (error) {
    console.error('Failed to calculate aggregate rating:', error);
    return null;
  }
}
