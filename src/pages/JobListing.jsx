import { getCompanies } from "@/api/apiCompanies";
import { getjobs } from "@/api/apiJobs";
import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UseFetch from "@/hooks/UseFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { State } from "country-state-city";



const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");


  const {isLoaded} = useUser();

  const { fn: jobFunction, data: Jobs, loading: jobloading } = UseFetch(getjobs,{location, company_id, searchQuery});

  const { fn: companyFunction, data: companies, loading: companiesLoading,} = UseFetch(getCompanies);

  useEffect(() => {
    if(isLoaded) {
      companyFunction();
    }
  }, [isLoaded]);

  useEffect(() => {
    if(isLoaded) {
      jobFunction();
    }
  }, [isLoaded, location, company_id, searchQuery]);


const handleSearch = (e) => {
  e.preventDefault();
  let formData = new FormData(e.target);

  const query = formData.get("search-query");
  if (query) setSearchQuery(query);
}


const crealFilters = () => {
  setCompany_id("");
  setSearchQuery("");
  setLocation("");
}


  if (!isLoaded){
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7"/>
  }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-4xl sm:text-5xl text-center pb-8">Latest Jobs</h1>

      <form onSubmit={handleSearch} className="flex h-14 w-full items-center gap-2 mb-3">
        <Input 
        type={"text"}
        placeholder="Search jobs by title..."
        name="search-query"
        className={"h-full flex-1 px-4 text-md"}/>

        <Button type="submit" className={"h-full sm:w-28 text-lg cursor-pointer"} variant={"blue"}>
          Search
        </Button>
      </form>

      <div className="flex w-full flex-col sm:flex-row gap-2 items-center">
      <Select value={location} onValueChange={(value) => setLocation(value)}>
      <SelectTrigger className="w-full" >
        <SelectValue placeholder="Select a Location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {State.getStatesOfCountry("IN").map(({name}) => {
            return <SelectItem key={name} value={name}>{name}</SelectItem>
          })}
        </SelectGroup>
      </SelectContent>
    </Select>

    <Select value={company_id} onValueChange={(value) => setCompany_id(value)}>
      <SelectTrigger className="w-full" >
        <SelectValue placeholder="Select a Company" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {companies?.map(({name, id}) => {
            return <SelectItem key={name} value={id}>{name}</SelectItem>
          })}
        </SelectGroup>
      </SelectContent>
    </Select>

    <Button onClick={crealFilters}  variant={"destructive"} className={"w-full sm:w-1/2 cursor-pointer"}>
      Clear Filters
    </Button>
      </div>

      {jobloading && (
        <BarLoader className="mt-3" width={"100%"} color="#36d7b7"/>
      )}


      {jobloading === false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4">
          {Jobs?.length ? (Jobs.map((Job) => {
            return <JobCard key={Job.id} job={Job} savedIntial={Job?.saved?.length > 0}/>
          })): (<div>Sorry no jobs found 🥲</div>)}
        </div>
      )}
    </div>
  )
}
export default JobListing