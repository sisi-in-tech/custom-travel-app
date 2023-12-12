import React from 'react'
import Image from 'next/image' 


const images = [
    {src:"/Images/arizona.png", alt:'Airzona',href:'/link'},
    {src:"/Images/aurora.png", alt:'Aurora',href:'/link'},
    {src:"/Images/beach.png", alt:'Beach',href:'/link'},
    {src:"/Images/castle.png", alt:'Castle',href:'/link'},
    {src:"/Images/cityNight.png", alt:'CityNight',href:'/link'},
    {src:"/Images/desert.png", alt:'Desert',href:'/link'},
    {src:"/Images/greece.png", alt:'Greece',href:'/link'},
    {src:"/Images/hotAirBallon.png", alt:'Hot Air Ballon',href:'/link'},
    {src:"/Images/lavender.png", alt:'Lavendar',href:'/link'}
]


const LinkableImageSection: React.FC = () => (
  <div className='max-w-5xl mx-auto my-12 grid grid-cols-6 grid-rows-2 gap-4'>
    {images.map((image, index)=>{
      let spanClasses = '';
      if (index === 0) {
        spanClasses = 'col-span-1 row-span-1';
      } else if (index === 1) {
        spanClasses = 'col-span-2 row-span-2';
      } 
      return (
        <div className={spanClasses} key={image.alt}>
          <a href={image.href} className="image-wrapper">
            <Image 
              src={image.src} 
              alt={image.alt} 
              width={200} 
              height={300} 
              className="rounded-lg object-cover w-full h-full" 
            />
          </a>
        </div>
      );
    })}
    </div>
);



export default LinkableImageSection 
