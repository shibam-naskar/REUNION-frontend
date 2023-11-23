import React from 'react'
import { FaBed, FaLayerGroup } from "react-icons/fa";
import { FaShower } from "react-icons/fa6";
import "./style.css"
import useStore from '../utils/state';

function Cards() {
    const { data, setData } = useStore();



    return (
        <section class="bg-gray-2 dark:bg-dark pt-0 pb-10  lg:pb-20">
            <div class="container mx-auto">
                <div class="flex flex-wrap mt-10 -mx-4">

                    {data.map((item) => (
                        <div class=" mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg neomorphism-card">
                            <img class="h-48 w-full object-cover object-center" src={item.img} alt="Product Image" />
                            <div class="p-4">
                                <p class="ml-auto text-base font-medium text-green-500">₹ {item.fare}/month</p>
                                <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">{item.name}</h2>
                                <p class="mb-2 text-base dark:text-gray-300 text-gray-700">{item.city} , {item.state} , {item.country}</p>
                                <div class="flex items-center">
                                    <p class=" text-xs flex font-semibold text-gray-900 dark:text-white m-auto"><FaBed className='m-auto mr-2' size={20} />{item.bed} bed</p>
                                    <p class=" text-xs  font-medium text-gray-500  dark:text-gray-300 flex m-auto "><FaShower className='m-auto mr-2' size={20} /> {item.bathroom} bathroom</p>
                                    <p class=" text-xs font-medium text-green-500 flex m-auto"><FaLayerGroup className='m-auto mr-2' size={18} /> {item.length}mX{item.width}m^2</p>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Cards