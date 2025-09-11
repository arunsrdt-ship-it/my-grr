import React from "react";

const reviewsData = [
  {
    name: "Mark Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    date: "22nd March, 2024",
    text: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    name: "Mark Doe",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    date: "10th April, 2024",
    text: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    name: "Mark Doe",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    date: "5th May, 2024",
    text: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
];

const ratingsSummary = [
  { stars: 5, percent: 80 },
  { stars: 4, percent: 10 },
  { stars: 3, percent: 5 },
  { stars: 2, percent: 3 },
  { stars: 1, percent: 2 },
];

export default function EnrollReview() {
  return (
    <div className="w-full px-10">
      <h2 className="text-xl font-semibold mb-6">Learner Reviews</h2>

      {/* Flex container: left summary + right reviews */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Ratings summary */}
        <div className="w-full md:w-1/3 space-y-4">
          {/* Average rating */}
          <div className="flex items-center text-lg font-medium">
            <span className="text-yellow-500 text-3xl">★</span>
            <span className="ml-2 text-3xl font-semibold">4.6</span>
            <span className="ml-3 text-gray-500 text-sm">146,951 reviews</span>
          </div>

          {/* Star distribution */}
          {ratingsSummary.map((item, i) => (
            <div key={i} className="flex items-center text-sm text-gray-700">
              <div className="flex items-center w-28">
                {Array.from({ length: item.stars }).map((_, j) => (
                  <span key={j} className="text-yellow-500 text-xl">
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - item.stars }).map((_, j) => (
                  <span key={j} className="text-gray-300 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2">{item.percent}%</span>
            </div>
          ))}
        </div>

        {/* Right: Reviews */}
        <div className="w-full md:w-2/3 space-y-6">
          {reviewsData.map((review, index) => (
            <div key={index} className="p-6 border border-[#E2E8F0] rounded-lg bg-white w-full">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />

                {/* Content */}

                {/* Top row: name, rating, date */}
                <div className="flex   items-start">
                  {/* Name column */}
                  <div className="w-[20%] font-semibold text-gray-900">{review.name}</div>

                  {/* Right column */}
                  <div className="flex flex-col space-y-1 w-full">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="text-yellow-500 font-medium text-lg">★ {review.rating}</span>
                      <span className="text-gray-500">Reviewed on {review.date}</span>
                    </div>

                    {/* Review text */}
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
                    </div>
                  </div>
                </div>

                {/* Review text under the row (indented with the text column) */}
              </div>
            </div>
          ))}

          {/* Button */}
          <div className="flex ">
            <button className="px-6 py-2 border-[#0F172A] border rounded-md hover:bg-gray-100 transition">View more Reviews</button>
          </div>
        </div>
      </div>
    </div>
  );
}
