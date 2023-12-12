import ItineraryItemSummary from "./ItineraryItemSummary";

export default function ItineraryCarousel() {
    const ItineraryItems= [
        {
          imageUrl: '/Images/pairs.png',
          // status:'SOLD OUT',
          rating:'5.0 (6)', 
          region:'Europe',
          title:'Take me back to Paris',
          price:'From $799 / person'
        },
        {
          imageUrl: '/Images/vietnam.png',
          // status:'ONLINE',
          rating:'5.0 (28)', 
          region:'Asia',
          title:'Colorful Vibrant Vietnam',
          price:'From $1299 / person'
        },
        {
          imageUrl: '/Images/roadtrip.png',
          rating:'4.8 (2)', 
          region:'USA',
          title:'Scenic Road Trips',
          price:'From $75 / person'
        },
        {
          imageUrl: '/Images/egyptian.png',
          rating:'4.7 (25)', 
          region:'Africa',
          title:'Ancient Egyptian Art',
          price:'From $2399 / person'
        },
        {
          imageUrl: '/Images/australia.png',
          rating:'4.5 (10)', 
          region:'Australia',
          title:'The Ultimate Bucket List',
          price:'From $2399 / person'
        },
        {
          imageUrl: '/Images/brazilian.png',
          rating:'4.3 (18)', 
          region:'South America',
          title:'Brazilian Carnival',
          price:'From $1099 / person'
        }
    ];

    return (
        <div className="flex flex-row overflow-x-auto">
            {ItineraryItems.map((item,index)=> (
              <div key={index} className="mx-0.3">
                <div className="w-64 h-auto">
                <ItineraryItemSummary  item={item} />
                </div>
              </div>
            ))}
        </div>
    );
};
