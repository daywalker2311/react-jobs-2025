import Card from './Card'

const HomeCards = () => {
  return (
    <section className='py-4'>
        <div className='container-xl lg:container m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4 p-4 rounded-lg'>
                <Card bg='bg-gray-100'>
                    <h2 className='text-2xl font-bold'>
                        For Developers
                    </h2>
                    <p className='mt-2 mb-4'>
                        Browse our React jobs and start your career as a React developer today!
                    </p>
                    <a href='jobs.html' className='text-indigo-600 font-semibold hover:underline'>
                        Browse Jobs &rarr;
                    </a>
                </Card>
                <Card bg='bg-indigo-100'>
                    <h2 className='text-2xl font-bold'>
                        For Employers
                    </h2>
                    <p className='mt-2 mb-4'>
                        List your React job openings and find the perfect candidate today!
                    </p>
                    <a href='/add-job' className='text-indigo-600 font-semibold hover:underline'>
                        Add Job &rarr;
                    </a>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default HomeCards