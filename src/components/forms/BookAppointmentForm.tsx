import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar } from "lucide-react";
import ShimmerButton from "../ui/simmer-button";

const formSchema = z.object({
  fullname: z.string().min(1, { message: "required" }).max(255),
  email: z.string().min(1, { message: "required" }).max(255),
  phone: z.string().min(1, { message: "required" }).max(255),
  specialty: z.string().min(1, { message: "required" }).max(255),
  date: z.string().min(1, { message: "required" }).max(255),
});

("use client");

export function AppointmentForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      specialty: "",
      date: "",
    },
  });

  // const onSubmit = (values: z.infer<typeof formSchema>) => {
  //   console.log(values);
  // };

  return (
    <Form {...form}>
      <form noValidate className="space-y-8">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Full Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="specialty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a specialty" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="psychiatry">Psychiatry</SelectItem>
                  <SelectItem value="radiology">Radiology</SelectItem>
                  <SelectItem value="dental">Dental</SelectItem>
                  <SelectItem value="surgery">General Surgery</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="gynecology">
                    Obstetrics & Gynecology
                  </SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="ENT">ENT</SelectItem>
                  <SelectItem value="paediatrics">Paediatrics</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="datetime-local" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled>
          Schedule
        </Button>
      </form>
    </Form>
  );
}

export function DialogAppointmentForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex w-32 cursor-pointer items-center justify-between gap-2 rounded-md bg-tertiary p-2 text-xs text-white md:w-72 md:p-7">
          Appointment
          <Calendar className="md:h-14 md:w-14" />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Appointment Form</DialogTitle>
          <DialogDescription>Schedule an appointment</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <AppointmentForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function DialogAppointmentShimmerForm({ label }: { label: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ShimmerButton className="hidden shadow-2xl md:flex" background="none">
          <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 md:text-lg">
            {label}
          </span>
        </ShimmerButton>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Appointment Form</DialogTitle>
          <DialogDescription>Schedule an appointment</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <AppointmentForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
