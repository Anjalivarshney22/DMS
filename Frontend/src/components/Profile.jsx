import React from 'react';
import FundCard from './Events/FundCard';

function Profile() {

    const campaigns = [
        {
          id: 1,
          img: "../../public/images/fundraiserPlaceholderImg.jpg",
          title: "Campaign 1",
          description: "Description of Campaign 1",
          amount: 10000,
          collected: 5000,
        },
        {
          id: 2,
          img: "../../public/images/fundraiserPlaceholderImg.jpg",
          title: "Campaign 2",
          description: "Description of Campaign 2",
          amount: 20000,
          collected: 15000,
        },
    ]
  return (
    <div className="flex flex-col items-center mx-[5vw] my-[5vh]">
      <h1 className="text-2xl md:text-3xl font-bold text-wrap text-center mx-2">My Profile</h1>
      <div className="flex justify-center mb-3">
        <div className="h-1 w-24 bg-yellow-500"></div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4">
        {/* Profile Image */}
        <div className="flex items-center justify-center my-3 w-[70%] md:w-[50%] lg:w-[30%] p-2 ">
          <img
            src={"../../public/images/fundraiserPlaceholderImg.jpg"}
            alt="Profile"
            className="h-auto w-[80%] rounded-md shadow-md object-contain "
          />
        </div>
        <div className="flex flex-col items-start justify-center my-2 w-[80%] md:w-[50%] lg:w-[40%] shadow-md p-3">
          <p className="text-lg"><span className='font-semibold'>Name: </span>John Doe</p>
          <p className="text-lg"><span className='font-semibold'>Email: </span> john.doe@example.com</p>
          <p className="text-lg"><span className='font-semibold'>Phone: </span> +1234567890</p>
          <p className="text-lg"><span className='font-semibold'>Address: </span>: 123 Main St, City, Country</p>
        </div>
      </div>

      <div className="w-full mt-10">
        <h2 className="text-2xl font-bold text-center">My Campaigns</h2>
        <div className="flex justify-center mb-3">
          <div className="h-1 w-24 bg-yellow-500"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {campaigns.map((campaign) => (
            <FundCard
              key={campaign.id}
              img={campaign.img}
              title={campaign.title}
              description={campaign.description}
              amount={campaign.amount}
              collected={campaign.collected}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;