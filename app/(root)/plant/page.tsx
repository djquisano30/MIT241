import React from "react";

import Image from "next/image";
interface PlantCardProps {
  plant: {
    default_image: {
      original_url: string;
    };
    common_name: string;
    scientific_name: string;
    // Add other properties as needed
  };
}

const PlantPage: React.FC<PlantCardProps> = ({ plant }) => {
  return <></>;
};

export default PlantPage;
