import { getApplications } from "@/api/apiApplicatons";
import UseFetch from "@/hooks/UseFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import ApplicationCard from "./ApplicationCard";


const CreatedApplications = () => {

    const { user } = useUser();

    const {
      loading: loadingApplications,
      data: applications,
      fn: applicationsFunction,
    } = UseFetch(getApplications, {
      user_id: user.id,
    });

    useEffect(() => {
        applicationsFunction();
      }, []);

    if (loadingApplications) {
        return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
      }


  return (
        <div className="flex flex-col gap-2">
      {applications?.map((application) => {
        return (
          <ApplicationCard
            key={application.id}
            application={application}
            isCandidate={true}
          />
        );
      })}
    </div>
  )
}
export default CreatedApplications