import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useSpecificPlant } from "@/app/api/plantAPI";
interface PlantCardProps {
  plant: {
    default_image: {
      original_url: string;
    };
    common_name: string;
    scientific_name: string;
    id: any;
    // Add other properties as needed
  };
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const { plants, loading, searchPlant } = useSpecificPlant();

  const regularUrl = plant.default_image && plant.default_image.original_url;
  return (
    // <Link href="/plant">
    <Card
      className="border-solid border-2 border-indigo-600"
      onClick={() => {
        searchPlant(plant.id);
      }}
    >
      <CardContent>
        {regularUrl && (
          <Image
            src={regularUrl}
            width={100}
            height={100}
            alt="Upgrade Access"
          />
        )}
      </CardContent>
      <CardHeader>
        <CardTitle>{plant.common_name}</CardTitle>
        <CardDescription>{plant.scientific_name}</CardDescription>
      </CardHeader>

      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
    // </Link>
  );
};

export default PlantCard;
