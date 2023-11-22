import React, { useState } from 'react'
import './style.css'
import Datepicker from "tailwind-datepicker-react"

function Filter() {

    const [rate, SetRate] = useState(1000)
    const [city,SetCity] = useState(null)


    const citylist = [
        {
            id:"CAL",
            city:"Calcutta"
        },
        {
            id:"DEL",
            city:"Delhi"
        },
        {
            id:"Ben",
            city:"Bengaluru"
        },
        {
            id:"JAL",
            city:"Jalpaiguri"
        }
    ]





    

    return (
        <form class="w-full max-w-6xl ml-auto mr-auto mt-6">
            <div class="flex flex-wrap -mx-5  ml-6 mr-6 bg-black neomorphism rounded-2xl pl-4 pr-4 pt-4 pb-4">
                <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        City
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                </div>
                <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        State
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-2xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            {/* <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option> */}
                            {citylist.map((e)=>(
                                <option>{e.city+"-"+e.id}</option>
                            ))}
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Move in date
                    </label>
                    <input type="date" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" placeholder="Albuquerque" />
                </div>
                <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">

                    <label for="small-range" class="block mb-2 text-sm font-medium text-gray-900 ">₹ {rate}/month</label>
                    <input id="small-range" min={1000} max={50000} type="range" value={rate} onChange={(e) => { SetRate(e.target.value) }} class="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700" />

                </div>
                <div class=" md:w-1/5 px-3 pr-0">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full  h-20">FILTER</button>
                </div>
            </div>
        </form>
    )
}

export default Filter