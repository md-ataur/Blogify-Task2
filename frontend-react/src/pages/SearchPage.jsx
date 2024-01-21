import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import heartIcon from "../assets/images/heart.svg";
import starIcon from "../assets/images/star.svg";

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [dateSearch, setDateSearch] = useState("");

  const dateSearchKey = (value) => {
    setDateSearch(value);
  };

  // Data fetch from api
  const fetchApi = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:7000/v1/property/");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const responseData = await response.json();
      setProperties(responseData.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    if (properties && dateSearch) {
      setFilterData(
        properties.filter((property) => {
          const propertyDate = property.date.split("T")[0];
          return propertyDate === dateSearch;
        })
      );
    } else {
      setFilterData(properties);
    }
  }, [properties, dateSearch]);

  return (
    <>
      <Header dateSearchKey={dateSearchKey} />
      <div className="border-t">
        <div className="px-5 py-5 mt-10">
          {isLoading && <p className="text-lg pb-4">Loading...</p>}
          <div className="w-[800px]">
            {filterData.length > 0 &&
              filterData.map((property) => (
                <div key={property._id} className="flex gap-6 border-b pb-5 mb-5">
                  <img width="300px" src={property.url} alt="" />
                  <div className="w-[400px] flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[14px] text-gray-500">Entire home in Bordeaux</p>
                        <h3 className="text-lg font-semibold text-[#374151]">{property.title}</h3>
                      </div>
                      <img width="30px" src={heartIcon} alt="" />
                    </div>
                    <div>
                      <p className="text-[14px] text-gray-500">
                        {property.guests} guests · Entire Home · {property.bed} beds ·{" "}
                        {property.bath} bath
                      </p>
                      <p className="text-[14px] text-gray-500">
                        {property.wifi ? "Wifi" : "No"} · {property.kitchen ? "Kitchen" : "No"} ·{" "}
                        {property.parking ? "Free Parking" : "No"}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[14px] flex justify-between gap-1">
                        <span>5.0</span>
                        <span>
                          <img src={starIcon} alt="" />
                        </span>
                        <span>({property.reviews} reviews)</span>
                      </p>
                      <div>
                        <span className="text-lg">${property.price}</span>
                        <span className="text-[13px] text-gray-600 ml-1">/night</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
