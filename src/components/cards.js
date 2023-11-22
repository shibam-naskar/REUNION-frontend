import React from 'react'
import { FaBed, FaLayerGroup } from "react-icons/fa";
import { FaShower } from "react-icons/fa6";
import "./style.css"

function Cards() {
    return (
        <section class="bg-gray-2 dark:bg-dark pt-0 pb-10  lg:pb-20">
            <div class="container mx-auto">
                <div class="flex flex-wrap mt-10 -mx-4">

                    <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg neomorphism-card">
                        <img class="h-48 w-full object-cover object-center" src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Product Image" />
                        <div class="p-4">
                            <p class="ml-auto text-base font-medium text-green-500">₹ 15000/month</p>
                            <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Girls Hostel</h2>
                            <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Andheri , Mumbai , india</p>
                            <div class="flex items-center">
                                <p class=" text-xs flex font-semibold text-gray-900 dark:text-white m-auto"><FaBed className='m-auto mr-2' size={20} />3 bed</p>
                                <p class=" text-xs  font-medium text-gray-500  dark:text-gray-300 flex m-auto "><FaShower className='m-auto mr-2' size={20} /> 2 bathroom</p>
                                <p class=" text-xs font-medium text-green-500 flex m-auto"><FaLayerGroup className='m-auto mr-2' size={18} /> 5x7m^2</p>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    )
}

export default Cards