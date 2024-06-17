"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Step, Stepper, useStepper } from "@/components/stepper";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const steps = [
	{ label: "Step 1", description: "Description 1" },
	{ label: "Step 2", description: "Description 2" },
];

export default function StepperForm() {
	return (
		<div className="flex w-full flex-col gap-4">
			<Stepper variant="circle-alt" initialStep={0} steps={steps}>
				{steps.map((stepProps, index) => {
					if (index === 0) {
						return (
							<Step key={stepProps.label} {...stepProps}>
								<FirstStepForm />
							</Step>
						);
					}
					return (
						<Step key={stepProps.label} {...stepProps}>
							<SecondStepForm />
						</Step>
					);
				})}
				<MyStepperFooter />
			</Stepper>
		</div>
	);
}

const FirstFormSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
});

function FirstStepForm() {
	const { nextStep } = useStepper();

	const form = useForm<z.infer<typeof FirstFormSchema>>({
		resolver: zodResolver(FirstFormSchema),
		defaultValues: {
			username: "",
		},
	});

	function onSubmit(_data: z.infer<typeof FirstFormSchema>) {
		nextStep();
		toast({
			title: "First step submitted!",
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<StepperFormActions />
			</form>
		</Form>
	);
}

const SecondFormSchema = z.object({
	password: z.string().min(8, {
		message: "Password must be at least 8 characters.",
	}),
});

function SecondStepForm() {
	const { nextStep } = useStepper();

	const form = useForm<z.infer<typeof SecondFormSchema>>({
		resolver: zodResolver(SecondFormSchema),
		defaultValues: {
			password: "",
		},
	});

	function onSubmit(_data: z.infer<typeof SecondFormSchema>) {
		nextStep();
		toast({
			title: "Second step submitted!",
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type="password" {...field} />
							</FormControl>
							<FormDescription>This is your private password.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<StepperFormActions />
			</form>
		</Form>
	);
}

function StepperFormActions() {
	const {
		prevStep,
		resetSteps,
		isDisabledStep,
		hasCompletedAllSteps,
		isLastStep,
	} = useStepper();

	return (
		<div className="w-full flex justify-end gap-2">
			{hasCompletedAllSteps ? (
				<Button size="sm" type="button" onClick={resetSteps}>
					Reset
				</Button>
			) : (
				<>
					<Button
						disabled={isDisabledStep}
						onClick={prevStep}
						size="sm"
						variant="secondary"
						type="button"
					>
						Prev
					</Button>
					<Button size="sm" type="submit">
						{isLastStep ? "Finish" : "Next"}
					</Button>
				</>
			)}
		</div>
	);
}

function MyStepperFooter() {
	const { activeStep, resetSteps, steps } = useStepper();

	if (activeStep !== steps.length) {
		return null;
	}

	return (
		<div className="flex items-center justify-end gap-2">
			<Button onClick={resetSteps}>Reset Stepper with Form</Button>
		</div>
	);
}
