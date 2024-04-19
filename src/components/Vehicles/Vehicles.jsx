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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

const FormSchema = z.object({
  vehicle_name: z.string().min(1, { message: "Vehicle Name is required" }),
  vehicle_id: z.string(),
  licence_plate:z.string().min(1, { message: "Licence Plate Number is required" }),
  vin:z.string().min(1, { message: "VIN Number is required" }),
});

const VehicleForm = () => {
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
              name="vehicle_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Vehicle Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="licence_plate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Licence Plate Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Licence Plate Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="vin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>VIN Number</FormLabel>
                  <FormControl>
                    <Input placeholder="VIN Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="vehicle_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle ID</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="text-gray-500">
                        <SelectValue
                          placeholder="Select an Option"
                          {...field}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one">1</SelectItem>
                        <SelectItem value="two">2</SelectItem>
                        <SelectItem value="three">3</SelectItem>
                        <SelectItem value="four">4</SelectItem>
                        <SelectItem value="five">5</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="country_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country ID</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="text-gray-500">
                        <SelectValue
                          placeholder="Select an Option"
                          {...field}
                          type="number"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one">1</SelectItem>
                        <SelectItem value="two">2</SelectItem>
                        <SelectItem value="three">3</SelectItem>
                        <SelectItem value="four">4</SelectItem>
                        <SelectItem value="five">5</SelectItem>
                      </SelectContent>
                    </Select>
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

export default VehicleForm;
