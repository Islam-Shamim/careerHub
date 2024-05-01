import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(3);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    // console.log(jobs)
    return (
        <div>
            <div className="text-center">
                <p className="text-5xl">Featured Jobs : {jobs.length}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi minima cumque delectus!</p>
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center ${dataLength === jobs.length && 'hidden'}`}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn btn-primary ">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;