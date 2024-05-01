import PropTypes from 'prop-types'
import { IoLocation } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id,logo, job_title, company_name, remote_or_onsite, job_type, salary, contact_information } = job
    return (
        <div className='border-2 rounded my-4 py-4 pl-8'>
            <img src={logo} alt="" className='w-[120px] h-[40]' />
            <h3 className='text-xl font-bold my-2'>{job_title}</h3>
            <h4 className='my-2'>{company_name}</h4>
            <button className='border bg-gray-200 px-4 rounded py-1 my-2 mr-4'>{remote_or_onsite}</button><button className='border bg-gray-200 px-4 rounded py-1 my-2'>{job_type}</button><br />
            <div className='flex my-2'>
                <IoLocation className='text-xl mr-2 my-1' />
                <p>{contact_information.address}</p>
            </div>
            <div className='flex my-2'>
                <AiOutlineDollar className='text-xl mr-2'/>
                <p>{salary}</p>
            </div>
            <div>
                <Link to={`/job/${id}`}>
                <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-2 border px-4 py-2 rounded'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
}
export default Job;