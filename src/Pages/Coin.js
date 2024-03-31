import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { coinObject } from "../functions/coinObject";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { settingChartData } from "../functions/settingChartData";
import Header from "../Components/Common/Header";
import Loader from "../Components/Common/Loader/Loader";
import List from "../Components/DashBoard/List/List";
import PriceToggle from "../Components/Coin/PriceToggle/priceToggle";
import LineChart from "../Components/Coin/LineChart/lineChart";
import Footer from "../Components/Common/Footer";
import CoinInfo from "../Components/Coin/CoinInfo/info";
import SelectDays from "../Components/Coin/SelectDays/selectDays";
function CoinPage() {
    const { id } = useParams();
    const [coin, setCoin] = useState();
    const [loading, setLoading] = useState(false);
    const [days, setDays] = useState(120);
    const [priceType, setPriceType] = useState("prices");
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        getData();
    }, [id]);

    const getData = async () => {
        setLoading(true);
        const data = await getCoinData(id);
        if (data) {
            coinObject(setCoin, data); //For Coin Obj being passed in the List
            const prices = await getCoinPrices(id, days, priceType);
            if (prices) {
                settingChartData(setChartData, prices, data);
                setLoading(false);
            }
        }
    };

    const handleDaysChange = async (event) => {
        setLoading(true);
        setDays(event.target.value);
        const prices = await getCoinPrices(id, event.target.value, priceType);
        if (prices) {
            settingChartData(setChartData, prices, coin);
            setLoading(false);
        }
    };

    const handlePriceTypeChange = async (event) => {
        setLoading(true);
        setPriceType(event.target.value);
        const prices = await getCoinPrices(id, days, event.target.value);
        if (prices) {
            settingChartData(setChartData, prices, coin);
        }
        setLoading(false);
    };

    return (
        <div>
            <Header />
            {loading || !coin?.id || !chartData ? (
                <Loader />
            ) : (
                <>
                    <div className="grey-wrapper">
                        <List coin={coin} delay={0.1} />
                    </div>
                    <div className="grey-wrapper">
                            <SelectDays days={days} handleDaysChange={handleDaysChange} />
                        <PriceToggle
                            handlePriceTypeChange={handlePriceTypeChange}
                            priceType={priceType}
                        />
                        <LineChart chartData={chartData} priceType={priceType} />
                    </div>
                    <CoinInfo name={coin.name} desc={coin.desc} />
                </>
            )}
            <Footer />
        </div>
    );
}

export default CoinPage;