import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";
import { useEffect } from "react";
import UseFetch from "@/hooks/UseFetch";
import { getMyJobs } from "@/api/apiJobs";
import JobCard from "./JobCard";


const CreatedJobs = () => {

    const { user } = useUser();

    const {
      loading: loadingCreatedJobs,
      data: createdJobs,
      fn: createdJobsFunction,
    } = UseFetch(getMyJobs, {
      recruiter_id: user.id,
    });
  
    useEffect(() => {
        createdJobsFunction();
    }, []);


  return (
    <div>
    {loadingCreatedJobs ? (
      <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
    ) : (
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {createdJobs?.length ? (
          createdJobs.map((job) => {
            return (
              <JobCard
                key={job.id}
                job={job}
                onJobSaved={createdJobsFunction}
                isMyJob
              />
            );
          })
        ) : (
          <div>No Jobs Found 😢</div>
        )}
      </div>
    )}
  </div>
  )
}
export default CreatedJobs