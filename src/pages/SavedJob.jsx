import { getSavedJobs } from "@/api/apiJobs"
import JobCard from "@/components/JobCard";
import UseFetch from "@/hooks/UseFetch"
import { useUser } from "@clerk/clerk-react"
import { useEffect } from "react";
import { BarLoader } from "react-spinners";


const SavedJob = () => {

  const {isLoaded} = useUser();

  const {fn: getSavedJobsFunction, data: savedJobs, loading: savedJobsloading} = UseFetch(getSavedJobs)

  useEffect(() => {
    if(isLoaded){
      getSavedJobsFunction()
    }
  },[isLoaded])


  if (!isLoaded || savedJobsloading){
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7"/>
  }
  return (
    <div>
      <h1 className="gradient-title font-extrabold text-4xl sm:text-5xl text-center pb-8">Saved Jobs</h1>

      {savedJobsloading === false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4">
          {savedJobs?.length ? (savedJobs.map((saved) => {
            return <JobCard key={saved.id} job={saved?.job} savedIntial={true} onJobSaved={getSavedJobsFunction}/>
          })): (<div>You have no saved job 👀</div>)}
        </div>
      )}
    </div>
  )
}
export default SavedJob