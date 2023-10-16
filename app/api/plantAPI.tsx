import { useState } from "react";
const API_KEY = "sk-9yzA652a5284c22c92461";

export const usePlantSearch = () => {
  const [plants, setPlants] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const searchPlant = async (search: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://perenual.com/api/species-list?key=${API_KEY}&q=${search}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPlants(data.data);
    } catch (error) {
      console.error("Error fetching plant data:", error);
      // You might want to display an error message to the user here
    } finally {
      setLoading(false);
    }
  };

  return { plants, searchTerm, loading, setSearchTerm, searchPlant };
};

export const useSpecificPlant = () => {
  const [plants, setPlants] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  const searchPlant = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://perenual.com/api/species/details/${id}?key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPlants(data.data);
      console.log(plants);
    } catch (error) {
      console.error("Error fetching plant data:", error);
      // You might want to display an error message to the user here
    } finally {
      setLoading(false);
    }
  };

  return { plants, loading, searchPlant };
};
