import React from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number; // example: 4.3, 2.8 etc.
  size?: number;  // optional, default = 20
  className?: string; // optional for styling
}

const StarRating: React.FC<StarRatingProps> = ({ rating, size = 20, className }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={`flex items-center gap-1 ${className || ""}`}>
      {stars.map((star) => {
        const isFull = rating >= star;
        const isHalf = rating >= star - 0.5 && rating < star;

        return (
          <div
            key={star}
            className="relative"
            style={{ width: size, height: size }}
          >
            {/* Empty background star */}
            <FaStar
              size={size}
              className="text-gray-300 absolute top-0 left-0"
              strokeWidth={1.5}
            />

            {/* Filled portion (full or half) */}
            <div
              className="absolute top-0 left-0 overflow-hidden text-yellow-400"
              style={{
                width: isFull ? "100%" : isHalf ? "50%" : "0%",
              }}
            >
              <FaStar size={size} fill="currentColor" stroke="none" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
