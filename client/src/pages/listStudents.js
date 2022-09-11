import {useEffect, useState} from "react";
import ErrorAlert from "../components/errorAlert";
import Table from "../components/table";
import {fetchHookWithToken, fetchHookWithTokenAndBody} from "../utils/fetchUtil";
import {Link} from "react-router-dom";
import SuccessAlert from "../components/successAlert";
import SearchFilters from "../components/searchFilters";

const initialFilterState = {
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
const ListStudents = () => {
    const [filter, setFilter] = useState(initialFilterState)
    const fetchStudents = async ({page}) => {
        console.log("fetching students", filter)
        const studentPromise = await fetchHookWithTokenAndBody(`students?page=${page}&limit=10`, {method: 'POST'}, filter);
        if (studentPromise.status === 'ERROR') {
            setError('Error fetching Movies')
            setStudents([])
        } else {
            setTimeout(() => {
                setSuccess(null)
            }, 1000)

            setStudents(studentPromise.data.students)
            setTotal(studentPromise.data.total)
        }
    }
    const [students, setStudents] = useState([])
    const [error, setError] = useState(null)
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [success, setSuccess] = useState(null)
    const onDeleteClick = async (id) => {
        const deletePromise = await fetchHookWithToken(`students/${id}`, {method: 'DELETE'})
        if (deletePromise.status === 'ERROR') {
            setError('Error deleting Movie')
        } else {
            setSuccess('Student deleted successfully')
            fetchStudents({page})
        }
    }
    const onFilterChange = (object) => {
        setFilter({...object})
        console.log(object)
    }
    useEffect(() => {
        fetchStudents({page})
    })
    const columns = Object.keys(initialFilterState || {}).filter(key => key !== '_id' && key !== 'ID').map(key => ({
            label: key,
            field: key
        })
    )
    return (
        <div>
            <div className="mx-40 my-5">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="flex flex-wrap">
                        <h1 className="text-2xl font-bold text-gray-800 mx-5 my-5">All Students</h1>
                        <Link to='/add-student'>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">
                                Add Student
                            </button>
                        </Link>
                    </div>
                    <SearchFilters searchFilterCallback={onFilterChange}/>

                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        {
                                            success && <SuccessAlert message={success}/>
                                        }
                                        {
                                            error ? <ErrorAlert error={error}/> :
                                                <Table data={students} columns={columns}
                                                       deleteCallBack={onDeleteClick}/>
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                {students.length > 0 && <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px">
                        <a onClick={() => page > 1 && setPage(page - 1)}
                           className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        {
                            Array.from({length: total}, (_, i) => i + 1).map((number) => (
                                <li key={number}>
                                    <a onClick={() => setPage(number)}
                                       className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{number}</a>
                                </li>
                            ))
                        }
                        <a onClick={() => page < total && setPage(page + 1)}
                           className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>

                    </ul>
                </nav>}
            </div>
        </div>
    )
}

export default ListStudents;
