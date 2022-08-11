import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export interface DataPelatihanProps {
    className?: string;
}

const DataPelatihan: FC<DataPelatihanProps> = ({ className = "" }) => {
    return (
        <div className={`nc-DataPelatihan ${className}`} data-nc-id="DataPelatihan">
            <Helmet>
                <title>Data Pelatihan</title>
            </Helmet>
            <div className="container pt-10 text-2xl text-purple-900 font-bold">
                Data Pelatihan
            </div>
            <div className="container text-base text-purple-400 " >

            </div>
            <div className="container mt-5">
                <ul className="text-sm font-medium text-center text-purple-900 rounded-lg flex flex-col lg:flex-row dark:divide-gray-700 dark:text-gray-400 pt-5">
                    <li className="w-full">
                        <Link to={"/"} className="inline-block border border-gray-200 p-4 w-full bg-white rounded-l-lg hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-inner">Dashboard</Link>
                    </li>
                    <li className="w-full">
                        <Link to={"/sertifikasihalal"} className="inline-block border border-gray-200 p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50  dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-inner">Sertifikasi Halal</Link>
                    </li>
                    <li className="w-full">
                        <Link to={"/datapelatihan"} className="inline-block border border-gray-200 p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50  dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-lg">Pelatihan</Link>
                    </li>
                    <li className="w-full">
                        <Link to="/datalph" className="inline-block border border-gray-200 p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50  dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-inner">LPH</Link>

                    </li>
                    <li className="w-full">
                        <Link to={"/datapendampinganpph"} className="inline-block border border-gray-200 p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50  dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-inner">Pendampingan PPH</Link>

                    </li>
                </ul>
            </div>
        </div>
    );

};

export default DataPelatihan;
