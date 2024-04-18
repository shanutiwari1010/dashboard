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
  customer_name: z.string().min(1, { message: "Customer name is required" }),
  email: z.string().email(),
  contact: z
    .string()
    .min(1, { message: "Contact number is required" })
    .min(10, { message: "Contact number must be of 10 digits" })
    .max(10, { message: "Contact number should not be exceed 10 digits." }),
});

const MyForm = () => {
  const form = useForm({
    defaultValues: {
      customer_name: "",
      email: "",
      contact: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const handleCustomerForm = (values) => {
    console.log(values);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="rounded-md bg-white p-8 -mt-20">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleCustomerForm)}
            className="w-96 mx-auto space-y-4"
          >
            <FormField
              control={form.control}
              name="customer_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customer Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
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
                    <Input
                      placeholder="Enter your email address"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your contact number"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default MyForm;

// // import { useState } from "react";
// // import { useForm } from "react-hook-form";

// function MyCustomer() {
//   // const { register, handleSubmit, errors } = useForm();
//   // const [customerInfo, setCustomerInfo] = useState;
//   // const onSubmit = (data) => {
//   //   setCustomerInfo(data);
//   //   console.log(data);
//   // };
//   return (
//     <div className=" flex justify-center">
//       {/* <pre>{JSON.stringify(customerInfo,undefined,2)}</pre> */}
//       <form
//         action=""
//         className="flex flex-col bg-white text-black max-w-screen-md p-5 gap-8"
//       >
//         <h1 className="text-2xl">Customer Form</h1>
//         <div className="w-full">
//           <div className="flex flex-col w-full">
//             <label htmlFor="">Customer Name</label>
//             <textareaw
//               name="customername"
//               id=""
//               placeholder="Customer Name"
//               // ref={register}
//             ></textarea>
//             <label htmlFor="">Customer Email</label>
//             <textarea
//               name="email"
//               id=""
//               placeholder="Customer Email"
//             ></textarea>
//             <label htmlFor=""> Contact No. </label>
//             <textarea name="contact" id="" placeholder="Contact No."></textarea>
//           </div>
//           <button></button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default MyCustomer;
