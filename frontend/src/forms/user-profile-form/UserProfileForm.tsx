import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { User } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().optional(),
  username: z.string().min(1, "name is required"),
  Gender: z.enum(["male", "female", "others"], {
    required_error: "You need to select a Gender",
  }),
  Age: z.string().min(2, "Age is required"),
  Aadhar_no: z.string().min(16, {
    message: "Aadhar no. must be 16 characters",
  }),
  Mobile_no: z.string().min(10, {
    message: "Mobile no. must be 10 characters",
  }),
  City: z.string({
    required_error: "Please select a City",
  }),
  State: z.string({
    required_error: "Please select a State",
  }),
  PinCode: z.string().min(6, {
    message: "Pincode must be 6 characters",
  }),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

function UserProfileForm({ onSave, isLoading, currentUser }: Props) {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-100 rounded-lg md:p-10"
      >
        <div>
          <h2 className="text-2xl font-bold">User Profile Form</h2>
          <FormDescription>
            View and change your profile information here
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white font-semibold"
                  type="text"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Age"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <FormField
            control={form.control}
            name="Gender"
            render={({ field }) => (
              <FormItem className="space-y-3 flex-1 items-center justify-center">
                <FormLabel>Gender:</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value="male"
                          checked={field.value === "male"}
                        />
                      </FormControl>
                      <FormLabel className="font-semibold">Male</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value="female"
                          checked={field.value === "female"}
                        />
                      </FormControl>
                      <FormLabel className="font-semibold">Female</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value="others"
                          checked={field.value === "others"}
                        />
                      </FormControl>
                      <FormLabel className="font-semibold">Others</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-8">
            <FormField
              control={form.control}
              name="Aadhar_no"
              render={({ field }) => (
                <FormItem className="font-bold">
                  <FormLabel>Aadhar Number</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={16} {...field}>
                      <InputOTPGroup className="bg-gray-100 rounded-lg border-black">
                        <InputOTPGroup className="bg-white rounded-lg">
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup className="bg-white rounded-lg">
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                          <InputOTPSlot index={6} />
                          <InputOTPSlot index={7} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup className="bg-white rounded-lg">
                          <InputOTPSlot index={8} />
                          <InputOTPSlot index={9} />
                          <InputOTPSlot index={10} />
                          <InputOTPSlot index={11} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup className="bg-white rounded-lg">
                          <InputOTPSlot index={12} />
                          <InputOTPSlot index={13} />
                          <InputOTPSlot index={14} />
                          <InputOTPSlot index={15} />
                        </InputOTPGroup>
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Mobile_no"
              render={({ field }) => (
                <FormItem className="font-bold container">
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={10} {...field}>
                      <span className="mr-3">+91</span>
                      <InputOTPGroup className="bg-gray-100 rounded-lg border-black">
                        <InputOTPGroup className="bg-white rounded-lg">
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup className="bg-white rounded-lg">
                          <InputOTPSlot index={5} />
                          <InputOTPSlot index={6} />
                          <InputOTPSlot index={7} />
                          <InputOTPSlot index={8} />
                          <InputOTPSlot index={9} />
                        </InputOTPGroup>
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="City"
            render={({ field }) => (
              <FormItem className="flex-1 font-semibold">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="State"
            render={({ field }) => (
              <FormItem className="flex-1 font-semibold">
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="PinCode"
            render={({ field }) => (
              <FormItem className="font-bold">
                <FormLabel>PinCode</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="bg-white rounded-lg">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="bg-orange-500">
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
}

export default UserProfileForm;
