"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import { Input } from "@/components/ui/input";
import PlantCard from "@/components/PlantCard";
import { usePlantSearch, useSpecificPlant } from "../api/plantAPI"; // Import the hook

export default function Home() {
  const { plants, searchTerm, loading, setSearchTerm, searchPlant } =
    usePlantSearch();

  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-2">
        <div>Image Here</div>
        <div>
          <div>Where your plant meets passion and practicality!</div>
          <div>
            <Input
              placeholder="Search for plants"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <Button onClick={() => searchPlant(searchTerm)}>Search</Button>
          </div>
        </div>
      </div>
      <div>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : plants?.length > 0 ? (
          <div className="flex flex-wrap flex-row gap-4">
            {plants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No plants Found!</h2>
          </div>
        )}
      </div>
    </div>
  );
}
