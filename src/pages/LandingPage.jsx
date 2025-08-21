import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import comps from "../data/companies.json";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import questions from "../data/questions.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const LandingPage = () => {

  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-12">
      <section className="text-center">
      <h1 className="flex flex-col items-center justify-center gradient-title text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter py-4">
        Find your Dream Job <span className="flex items-center gap-2 sm:gap-6">with <img src="/logo.png" alt="Worklink logo" className="h-16 sm:h-28 lg:h-36"/></span>
      </h1>

      <p className="text-gray-300  text-xs sm:text-xl">
        Explore job opertunities or find the ideal candidate
      </p>
      </section>

      <div className="flex gap-6 justify-center">
        <Link to="/jobs">
        <Button variant="green" size="xl">Find Jobs</Button>
        </Link>
        <Link to="/post/jobs">
        <Button variant="blue" size="xl">Post Jobs</Button>
        </Link>
      </div>


        

        <Carousel className="w-full py-10" plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}   
      opts={{
        align: "start",
        loop: true,
      }}>
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
        {comps.map(({name, id, path}) => {
          return <CarouselItem key={id} className="basis-1/3 lg:basis-1/5">
            <img src={path} alt={name} className="h-9 sm:h-14 object-contain"/>
          </CarouselItem>
        })}
      </CarouselContent>
    </Carousel>
      
      <div className="w-full flex items-center justify-center">
        <img src="/banner.jpeg" alt="banner image" className="w-3/4 drop-shadow-[0_0_40px_rgba(59,130,246,0.85)]"/>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* cards */}

        <Card>
          <CardHeader>
            <CardTitle>Launch Your Career</CardTitle>
          </CardHeader>
          <CardContent>
          Find your next opportunity, follow your progress, and land your dream role.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Find Top Talent</CardTitle>
          </CardHeader>
          <CardContent>
          Post openings, review applicants, and discover the perfect match.
          </CardContent>
        </Card>
      </section>

      <Accordion type="single" collapsible>
        {questions.map((question,index) => {
          return <AccordionItem key={index} value={`item-${index+1}`}>
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>
                    {question.answer}
                  </AccordionContent>
        </AccordionItem>
        })}

</Accordion>
    </main>
  )
}
export default LandingPage