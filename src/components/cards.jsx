import { useState, useEffect } from "react";
import fetchData from "../api/api.js";
import Card from "./card.jsx";

const Cards = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const fetchedData = await fetchData();
                setData(fetchedData);
                setLoading(false);
            } catch {
                setError("Failed to fetch data");
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="cards-wrapper">
            <h2 className="cards-title">Data from API:</h2>
            {data && data.length > 0 ? (
                <div className="cards-grid">
                    {data.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            ) : (
                <p className="message">No data available.</p>
            )}
        </div>
    );


};

export default Cards;
