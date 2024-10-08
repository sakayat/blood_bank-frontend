import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/empty.png";
import RequestsCard from "./RequestsCard";

const RequestsBlood = () => {
  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    fetchRequestData();
  }, []);

  const fetchRequestData = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/donors/blood-request-list/`
    );
    const data = await res.json();
    setRequestData(data.results);
  }; 

  return (
    <section className="pt-10">
      <div className="py-5">
        <h3 className="text-4xl text-center uppercase font-bold text-black/75">Current Blood Request</h3>
      </div>
      <div className="requests-list">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="blood-group py-5 space-y-5">
            <div className="request-list w-full">
              {requestData.length === 0 && (
                <img src={img} alt="" className="w-full h-full mx-auto" />
              )}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
                {requestData.slice(0, 6).map((item) => (
                  <RequestsCard key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <button className="default-btn w-full py-3 px-6">
                <Link to="blood-request/" className="hover:text-white">Load All Requests</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestsBlood;
