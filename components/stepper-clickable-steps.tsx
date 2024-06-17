"use client";

import { Step, type StepItem, Stepper, useStepper } from "@/components/stepper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const steps = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
] satisfies StepItem[];

export default function StepperSteps() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 xl:py-20">
      <div className="space-y-4 container px-4md:px-6   2xl:px-0 pb-8 lg:gap-8">
        <Badge variant="outline">{'t("ClientTestimonials.title")'}</Badge>

        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {'t("ClientTestimonials.subtitle")'}
        </h2>
        <p className="max-w-[600px] dark:text-gray-200 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {'t("ClientTestimonials.description")'}
        </p>
      </div>
      <div className=" flex flex-col container gap-8 px-4 md:px-6  mx-auto 2xl:px-0  lg:gap-8">
        <div className="flex w-full flex-col gap-4">
          <Stepper
            initialStep={0}
            steps={steps}
            onClickStep={(step, setStep) => {
              alert(`Step ${step + 1} clicked`);
              setStep(step);
            }}
          >
            {steps.map((stepProps, index) => {
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <div className="h-40 flex items-center justify-center my-2 border bg-secondary text-primary rounded-md">
                    <h1 className="text-xl">Step {index + 1}</h1>
                  </div>
                </Step>
              );
            })}
            <Footer />
          </Stepper>
        </div>
      </div>
    </section>
  );
}

const Footer = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
  } = useStepper();
  return (
    <>
      {hasCompletedAllSteps && (
        <div className="h-40 flex items-center justify-center my-2 border bg-secondary text-primary rounded-md">
          <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
        </div>
      )}
      <div className="w-full flex justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={resetSteps}>
            Reset
          </Button>
        ) : (
          <>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              size="sm"
              variant="secondary"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
            </Button>
          </>
        )}
      </div>
    </>
  );
};
