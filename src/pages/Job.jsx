import { getSingleJob, updateHiringStatus } from "@/api/apiJobs";
import ApplicationCard from "@/components/ApplicationCard";
import Applyjob from "@/components/Applyjob";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UseFetch from "@/hooks/UseFetch";
import { useUser } from "@clerk/clerk-react";
import MDEditor from "@uiw/react-md-editor";
import { Briefcase, DoorClosed, DoorOpen, MapPinIcon } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

const Job = () => {
  const { isLoaded, user } = useUser();
  const { id } = useParams();

  const {
    fn: singleJobFunction,
    data: job,
    loading: singleJobloading,
  } = UseFetch(getSingleJob, { job_id: id });

  const {
    fn: hireStatusFunction,
    data: hireStausData,
    loading: updateHireStatusloading,
  } = UseFetch(updateHiringStatus, { job_id: id });

  const handleStatusChange = (value) => {
    const isOpen = value === "open";
    hireStatusFunction(isOpen).then(() => singleJobFunction());
  };

  useEffect(() => {
    if (isLoaded) {
      singleJobFunction();
    }
  }, [isLoaded]);

  if (!isLoaded || singleJobloading) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div className="flex flex-col gap-8 mt-5">
      <div className="flex flex-col-reverse gap-6 md:flex-row justify-between items-center">
        <h1 className="gradient-title font-extrabold pb-3 text-4xl sm:text-5xl">
          {job?.title}
        </h1>
        <img src={job?.company?.logo_url} alt={job?.title} className="h-12" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <MapPinIcon />
          {job?.location}
        </div>

        <div className="flex gap-2">
          <Briefcase />
          {job?.applications.length} Applicants
        </div>

        <div className="flex gap-2">
          {job?.isOpen ? (
            <>
              {" "}
              <DoorOpen /> Open
            </>
          ) : (
            <>
              <DoorClosed /> Closed
            </>
          )}
        </div>
      </div>

      {/* hiring status*/}
      {updateHireStatusloading && <BarLoader width={"100%"} color="#36d7b7"/>}
      {job?.recruiter_id === user?.id && (
        <Select onValueChange={handleStatusChange}>
          <SelectTrigger className={`w-full !text-white ${job?.isOpen ? "!bg-green-950" : "!bg-red-950"}`}>
            <SelectValue placeholder={
              "Hiring Status " + (job?.isOpen ? "( Open ) " : "( Closed )")
            } />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"open"}>
              Open
            </SelectItem>
            <SelectItem value={"closed"}>
              Closed
            </SelectItem>
          </SelectContent>
        </Select>
      )}

      <h2 className="text-2xl sm:text-3xl font-bold">About the application</h2>
      <p className="sm:text-lg">{job?.description}</p>

      <h2 className="text-2xl sm:text-3xl font-bold">
        Application requirements
      </h2>
      <MDEditor.Markdown source={job?.requirements} />

      {/* render applications */}
      {job?.recruiter_id !== user?.id && <Applyjob
      job ={job}
      user={user}
      fetchJob={singleJobFunction}
      applied={job?.applications?.find((ap) => ap.candidate_id === user.id)}
      />}

      {
        job?.applications?.length > 0 && job?.recruiter_id === user?.id && (
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Applications
            </h2>
            {
              job?.applications.map((application) => {
                return <ApplicationCard key={application.id} application={application} />
              })
            }
            </div>
        )
      }
    </div>
  );
};
export default Job;
