import { useEffect, useState } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false}) => {
    const [jobListings, setJobListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobListings = async () => {
            const apiUrl = isHome ? '/api/jobs?limit=3' : '/api/jobs';
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobListings(isHome ? data.slice(0, 3) : data);
            } catch (error) {
                console.error("Error fetching job listings:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchJobListings();
    }, []);

    return (
    <section className='bg-blue-50 px-4 py-10'>
        <div className='container-xl lg:container m-auto'>
            <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                {isHome ? "Recent Jobs" : "Browse Jobs"}
            </h2>
            {
                loading ? (
                            <Spinner loading={loading} />
                        ) : (
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {
                                jobListings.map((job) => (
                                    <JobListing key={job.id} job={job} />
                                ))
                            }
                        </div>
                        )
            }
        </div>
    </section>
  )
}

export default JobListings