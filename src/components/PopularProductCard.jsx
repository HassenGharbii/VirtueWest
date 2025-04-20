import { useState } from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, rating, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-1 flex-col w-full max-sm:w-full bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={imgURL}
          alt={name}
          className="w-full h-48 object-cover cursor-pointer rounded-lg mb-4"
          onClick={() => setIsModalOpen(true)}
        />
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <div className="flex items-center gap-2">
            <img src={star} alt="rating" width={20} height={20} />
            <p className="text-gray-600">({rating})</p>
          </div>
          <p className="text-lg font-semibold text-blue-600">{price}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full p-6">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              ×
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={imgURL}
                alt={name}
                className="w-full md:w-1/2 h-auto object-cover rounded-lg"
              />
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">{name}</h2>
                <div className="flex items-center gap-2 mb-4">
                  <img src={star} alt="rating" width={20} height={20} />
                  <p className="text-gray-600">Rating: {rating}</p>
                </div>
                <p className="text-xl font-semibold text-blue-600 mb-4">{price}</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Key Features:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {name === "Real Estate & Property Management" && (
                      <>
                        <li>Sales & rentals tracking</li>
                        <li>Property availability</li>
                        <li>Occupancy rates</li>
                        <li>ROI analysis</li>
                        <li>Agent performance</li>
                      </>
                    )}
                    {name === "Smart City & Security / Surveillance" && (
                      <>
                        <li>Traffic monitoring</li>
                        <li>Surveillance tracking</li>
                        <li>Public safety alerts</li>
                        <li>IoT sensor data</li>
                      </>
                    )}
                    {name === "Tourism & Hospitality" && (
                      <>
                        <li>Hotel occupancy tracking</li>
                        <li>Tourist demographics</li>
                        <li>Customer satisfaction</li>
                        <li>Demand prediction</li>
                      </>
                    )}
                    {name === "Healthcare & Clinics" && (
                      <>
                        <li>Patient inflow tracking</li>
                        <li>Resource monitoring</li>
                        <li>Staff performance</li>
                        <li>Health KPIs</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Summary keywords export
export const industryKeywords = {
  realEstate: ["sales tracking", "property availability", "occupancy rates", "ROI analysis", "agent performance"],
  smartCity: ["traffic monitoring", "surveillance", "public safety", "IoT sensors"],
  tourism: ["hotel occupancy", "tourist demographics", "customer satisfaction", "demand prediction"],
  healthcare: ["patient tracking", "resource monitoring", "staff performance", "health KPIs"]
};

export default PopularProductCard;