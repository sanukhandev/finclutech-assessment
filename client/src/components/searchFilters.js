
import {useState} from "react";

const initialState = {
    LastName: '',
    FirstName: '',
    City: '',
    State: '',
    Gender: '',
    StudentStatus: '',
    Major: '',
    Country: '',
    Age: '',
    SAT: '',
    Height: '',
}
const SearchFilters = ({searchFilterCallback}) => {
    const [studentStateObj, setStudentStateObj] = useState(initialState)
    const handleInputChange = event => {
        setStudentStateObj({
            ...studentStateObj,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        searchFilterCallback(studentStateObj)
    }

    const resetFilters = () => {
        setStudentStateObj(initialState)
        searchFilterCallback(initialState)
    }
    return (   <div>
        <div className="mx-10 my-5">
            <div className="mt-5 md:mt-0 md:col-span-2">

                <form action="#" onSubmit={handleSubmit}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-10 sm:p-10">
                            <div className="grid grid-cols-5 gap-6">
                                <div className="col-span-1 sm:col-span-1">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">

                                        <input type="text"  value={studentStateObj.FirstName}
                                               onChange={handleInputChange} name="FirstName" id="first-name"
                                               className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2"
                                               placeholder="First Name"/>
                                    </div>
                                </div>
                                <div className="col-span-1 sm:col-span-1">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">

                                        <input type="text"  value={studentStateObj.LastName}
                                               onChange={handleInputChange} name="LastName" id="first-name"
                                               className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2"
                                               placeholder="Last Name"/>
                                    </div>
                                </div>

                                <div className="col-span-1 sm:col-span-1">
                                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                                        Age
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="text"  value={studentStateObj.Age}
                                               onChange={handleInputChange} name="Age" id="age"
                                               className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2"
                                               placeholder="Age (Number/Range)"/>
                                    </div>
                                </div>
                                <div className="col-span-1 sm:col-span-1">
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                        Country
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="text"  value={studentStateObj.Country}
                                               onChange={handleInputChange} name="Country" id="country"
                                               className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2"
                                               placeholder="Country of origin"/>
                                    </div>
                                </div>
                                <div className="col-span-1 sm:col-span-1">
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                        State
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="text"  value={studentStateObj.State}
                                               onChange={handleInputChange} name="State" id="state"
                                               className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2"
                                               placeholder="State"/>
                                    </div>
                                </div>
                                <div className="col-span-1 sm:col-span-1">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="text"  value={studentStateObj.City}
                                               onChange={handleInputChange} name="City" id="city"
                                               className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2"
                                               placeholder="City"/>
                                    </div>
                                </div>
                                <div className="col-span-1 sm:col-span-1">
                                    <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                                        Height
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="text"  value={studentStateObj.Height}
                                               onChange={handleInputChange} name="Height" id="height"
                                               className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2"
                                               placeholder="Height (CM/Range)"/>
                                    </div>
                                </div>
                                <div className="md:col-span-1">
                                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Movie
                                        Gender</label>
                                    <select  value={studentStateObj.Gender} onChange={handleInputChange}
                                            name="Gender" id="gender" autoComplete="gender"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value={""}>Select Gender</option>
                                        <option value={"Male"}>Male</option>
                                        <option value={"Female"}>Female</option>

                                    </select>
                                </div>
                                <div className="col-span-1 sm:col-span-1">
                                    <label htmlFor="studentStatus" className="block text-sm font-medium text-gray-700">
                                        Student Status
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="text"  value={studentStateObj.StudentStatus}
                                               onChange={handleInputChange} name="StudentStatus" id="studentStatus"
                                               className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2"
                                               placeholder="Current Status"/>
                                    </div>
                                </div>
                                <div className="col-span-1 sm:col-span-1">
                                    <label htmlFor="major" className="block text-sm font-medium text-gray-700">
                                        Major In
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="text"  value={studentStateObj.Major}
                                               onChange={handleInputChange} name="Major" id="major"
                                               className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2"
                                               placeholder="Majors"/>
                                    </div>
                                </div>
                                <div className="col-span-1 sm:col-span-1">
                                    <label htmlFor="sat" className="block text-sm font-medium text-gray-700">
                                        SAT Score
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="text"  value={studentStateObj.SAT}
                                               onChange={handleInputChange} name="SAT" id="sat"
                                               className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 focus:outline-none py-2"
                                               placeholder="SAT score / Range"/>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button onClick={resetFilters}
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                Reset
                            </button>
                            <button type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                               Filter
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>)

    
}

export default SearchFilters;
