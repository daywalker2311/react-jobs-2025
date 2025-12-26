import { useParams, useLoaderData} from 'react-router-dom';

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

// const JobPage = () => {
//     const [job, setJob] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const { id } = useParams();

//     useEffect(() => {
//         const fetchJob = async () => {
//             try {
//                 const response = await fetch(`/api/jobs/${id}`);
//                 const data = await response.json();
//                 setJob(data);
//             } catch (error) {
//                 console.error('Error fetching job data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchJob();
//     }, []);

//   return loading ? <Spinner /> : <h1>{job?.title}</h1>
// }

const JobPage = () => {
    const { id } = useParams();
    const job = useLoaderData();
    return <h1>{job?.title}</h1>
}

export { JobPage as default, jobLoader };