import {useLoaderData, useParams } from "react-router-dom";
import './JobDetails.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData()
    // console.log(jobs) => full data load
    const { id } = useParams()
    // console.log(id) => clicked id from details view button
    const idInt = parseInt(id)
    // console.log(idInt) => clicked id convert character to int value
    const job = jobs.find(job => job.id === idInt)
    // console.log(job) => clicked id_job shows its all details
    console.log(job)
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job

    const handleApplyJob = () =>{
        
        toast('Your applied is successful.')
        saveJobApplication(id);
    }

    return (
        <div>
            <p className="text-center text-4xl font-bold my-2">Job Details</p>
            <div className="grid md:grid-cols-4 gap-6 my-4">
                <div className="border md:col-span-3 p-4 rounded">
                    <p><span>Job Description : </span>{job_description}</p>
                    <p><span>Job Responsibility : </span>{job_responsibility}</p>
                    <p><span>Educational Requirements</span><br />{educational_requirements}</p>
                    <p><span>Experiences</span><br />{experiences}</p>
                </div>
                <div className="border md:col-span-1 p-4 rounded bg-slate-100">
                    <div>
                        <h3>Job Details</h3>
                        <hr />
                        <p><span>Salary : </span>{salary}</p>
                        <p><span>JobTitle : </span>{job_title}</p>
                        <h3>Contact Information</h3>
                        <hr />
                        <p><span>Phone:</span>{contact_information.phone}</p>
                        <p><span>Email:</span>{contact_information.email}</p>
                        <p><span>Address:</span>{contact_information.address}</p>
                        <button onClick={handleApplyJob} className="btn btn-primary w-full mt-3">Apply Now</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;