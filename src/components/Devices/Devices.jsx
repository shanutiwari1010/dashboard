import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const FormSchema = z.object({
  device_model: z.string().min(1, { message: "Device Model is required" }),
  serial_number: z
    .string()
    .min(1, { message: "Serial Number is required" })
    .min(10, { message: "Serial Number must be of 9 digits" })
    .max(10, { message: "Serial Number should not be exceed 9 digits." }),
});

const DeviceForm = () => {
  const form = useForm({
    defaultValues: {
      device_model: "",
      serial_number: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const handleDeviceForm = (values) => {
    console.log(values);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="rounded-md bg-white p-8 -mt-20">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleDeviceForm)}
            className="w-96 mx-auto space-y-4"
          >
            <FormField
              control={form.control}
              name="device_model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Device Model</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter device model" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="serial_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Serial Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Serial Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default DeviceForm;
