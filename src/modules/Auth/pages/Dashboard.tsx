import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import logoHalal from "../../../components/images/logohalal.png";
import mapindonesia from "../../../components/images/Map_Indonesia.svg";
import logoHalal2 from "../../../images/logohalal2.png";

export interface DashboardProps {
    className?: string;
}

const Dashboard: FC<DashboardProps> = ({ className = "" }) => {
    return (
        <div className={`nc-Dashboard ${className}`} data-nc-id="Dashboard">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="container pt-10 text-2xl text-purple-900 font-bold">
                Selamat Datang
            </div>
            <div className="container text-base text-purple-400  -mt-1" >
                di Website Reporting Halal BPJPH !
            </div>

            <div className="container">
                <ul className="text-sm font-medium text-center text-purple-900 rounded-lg flex flex-col lg:flex-row dark:divide-gray-700 dark:text-gray-400 pt-5">
                    {/* <li className="w-full">
                    <a href="#" className="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Profile</a>
                </li> */}
                    <li className="w-full">
                        <Link to={"/"} className="inline-block border border-gray-200 p-4 w-full bg-white rounded-l-lg hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-lg">Dashboard</Link>
                    </li>
                    <li className="w-full">
                        <Link to={"/sertifikasihalal"} className="inline-block border border-gray-200 p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50  dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-inner">Sertifikasi Halal</Link>
                    </li>
                    <li className="w-full">
                        <Link to={"/datapelatihan"} className="inline-block border border-gray-200 p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50  dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-inner">Pelatihan</Link>
                    </li>
                    <li className="w-full">
                        <Link to="/datalph" className="inline-block border border-gray-200 p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50  dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-inner">LPH</Link>
                    </li>
                    <li className="w-full">
                        <Link to={"/datapendampinganpph"} className="inline-block border border-gray-200 p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50  dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-inner">Pendampingan PPH</Link>
                    </li>
                </ul>
            </div>
            <div className="container pt-10 text-2xl text-purple-600 font-bold text-center">
                Peta Sebaran Keseluruhan
            </div>



            <div className="container ">
                <div className="container bg-red-500 shadow-lg rounded-lg mt-10">
                    ss

                </div>

            </div>

            <div className="container mt-10 mb-10 pb-10">
            <ul className="text-sm font-medium text-center text-purple-900 rounded-lg flex flex-col lg:flex-row dark:divide-gray-700 dark:text-gray-400 pt-5 ">

            <li className="w-full">
                        <Link to={"/"} className="inline-block border border-gray-200 p-4 w-full bg-white rounded-lg hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-lg">Dashboard</Link>
                    </li>
                    <li className="w-full">
                        <Link to={"/sertifikasihalal"} className="inline-block border border-gray-200 p-4 w-full bg-white rounded-lg hover:text-gray-700 hover:bg-gray-50  dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-inner">Sertifikasi Halal</Link>
                    </li>
                    <li className="w-full">
                        <Link to={"/"} className="inline-block border border-gray-200 p-4 w-full bg-white rounded-lg hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-lg">Dashboard</Link>
                    </li>
                    <li className="w-full">
                        <Link to={"/sertifikasihalal"} className="inline-block border border-gray-200 p-4 w-full bg-white rounded-lg hover:text-gray-700 hover:bg-gray-50  dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 shadow-inner">Sertifikasi Halal</Link>
                    </li>
                </ul>

            </div>





        </div>
    );

};

export default Dashboard;
