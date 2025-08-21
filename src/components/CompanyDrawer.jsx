import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer";
  import { Button } from "./ui/button";
  import { Input } from "./ui/input";
  import { z } from "zod";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { useForm } from "react-hook-form";
  import { BarLoader } from "react-spinners";
  import { useEffect } from "react";
import UseFetch from "@/hooks/UseFetch";
import { addNewCompany } from "@/api/apiCompanies";


const schema = z.object({
    name: z.string().min(1, { message: "Company name is required" }),
    logo: z
      .any()
      .refine(
        (file) =>
          file[0] &&
          (file[0].type === "image/png" || file[0].type === "image/jpeg"),
        {
          message: "Only Images are allowed",
        }
      ),
  });


const CompanyDrawer = ({fetchCompanies}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schema),
      });

      const {
        loading: loadingAddCompany,
        error: errorAddCompany,
        data: dataAddCompany,
        fn: addCompanyFunction,
      } = UseFetch(addNewCompany);


      const onSubmit = (data) => {
        addCompanyFunction({
            ...data,
            logo:data.logo[0]
        })
      }

      useEffect(() => {
        if(dataAddCompany?.length > 0){
            fetchCompanies()
        }
      },[loadingAddCompany])



  return (
    <Drawer>
    <DrawerTrigger className="w-full">
      <Button type="button" variant="green" className={"w-full text-xs sm:text-sm"}>
        Your Company
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Add your Company</DrawerTitle>
      </DrawerHeader>
      <form className="flex gap-2 p-4 pb-0">
        <Input placeholder="Company name" {...register("name")} />

        <Input
          type="file"
          accept="image/*"
          className=" file:text-gray-500"
          {...register("logo")}
        />

        <Button
          type="button"
          onClick={handleSubmit(onSubmit)}
          variant="blue"
          className="w-40"
        >
          Add
        </Button>
      </form>


      <DrawerFooter>
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        {errors.logo && <p className="text-red-500">{errors.logo.message}</p>}
        {errorAddCompany?.message && (
          <p className="text-red-500">{errorAddCompany?.message}</p>
        )}
        {loadingAddCompany && <BarLoader width={"100%"} color="#36d7b7" />}
        <DrawerClose asChild>
          <Button type="button" variant="destructive">
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  )
}
export default CompanyDrawer