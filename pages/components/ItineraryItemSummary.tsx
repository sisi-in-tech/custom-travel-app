import React from 'react';
import Image from 'next/image';
interface ItineraryItem {
    imageUrl?:string;
    status?: string;
    rating: string;
    region: string;
    title: string;
    price: string;
  }



export default function ItineraryItemSummary({ item }: { item: ItineraryItem }): JSX.Element {
  const { imageUrl, status, rating, region, title, price } = item;

  return (
    <div className="flex flex-col items-center">
      {imageUrl && (
        <div className='w-40 h-60 relative overflow-hidden rounded-lg'>
          <Image 
            src={imageUrl} 
            alt={`Image for ${title}`} 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
      )}
      <p>{status}</p>
      <p>{rating} {region}</p>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}