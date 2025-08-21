import { useUser } from "@clerk/clerk-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { HeartIcon, MapPinIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import UseFetch from "@/hooks/UseFetch";
import { deleteJobs, savejobs } from "@/api/apiJobs";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const JobCard = ({job,isMyJob = false, savedIntial = false, onJobSaved = () => {}}) => {

    const [saved, setSaved] = useState(savedIntial)
    const { fn: savedJobFunction, data: savedJobs, loading: savedJobloading} = UseFetch(savejobs,{alreadySaved: saved});
    const { fn: deleteJobFunction, loading: deleteJobloading} = UseFetch(deleteJobs,{
        job_id: job.id,
    });

    const {user} = useUser();

    const handleSaveJob = async () => {
        await savedJobFunction({
            user_id: user.id,
            job_id: job.id
        });

        onJobSaved();
    }

    const handaleDeleteJob = async() => {
        await deleteJobFunction()
        onJobSaved()
    }

    useEffect (() => {
        if(savedJobs !== undefined) setSaved(savedJobs?.length > 0)
    }, [savedJobs])

  return (
    <div>
        <Card className={"h-full"}>
            {deleteJobloading && (
                <BarLoader className="mt-4" width="100%" color="#36d7b7" />
            )}
            <CardHeader>
                <CardTitle className={"flex justify-between font-bold"}>{job.title}
                {isMyJob && <Trash2Icon onClick={handaleDeleteJob} fill="red" size={18} className="text-red-300 cursor-pointer"/>}
                </CardTitle>
                
            </CardHeader>

            <CardContent className={"flex flex-col gap-4 flex-1"}>
                <div className="flex justify-between">
                    {job.company && <img src={job.company.logo_url} className="h-6 object-cover object-center"/>}
                    <div className="flex gap-2 items-center">
                        <MapPinIcon size={15}/> {job.location}
                    </div>
                </div>
                <hr />
                {job.description.substring(0, job.description.indexOf("."))}
            </CardContent>
            <CardFooter className={"flex gap-2"}>
                <Link to={`/job/${job.id}`} className="flex-1">
                <Button variant={"secondary"} className={"w-full cursor-pointer"}>
                    More Details
                </Button>
                </Link>
                {!isMyJob && (
                    <Button variant={"outline"}
                    className={"w-15"}
                    onClick={handleSaveJob}
                    disabled={savedJobloading}>
                        {
                            saved ? (<HeartIcon size={20} fill="red" />) : (<HeartIcon size={20} />)
                        }
                    </Button>
                )}
                
            </CardFooter>
        </Card>
    </div>
  )
}
export default JobCard