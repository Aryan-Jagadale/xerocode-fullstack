import { useState } from "react";
import Button from "../Button/Button";
import clsx from "clsx";
import { Space_Grotesk } from "next/font/google";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
});

const Form = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    
    axios
      .post("/api/waitlistEmail", data)
      .then((callback) => {
        if (callback) {
          router.push("/admin");
          toast.success("Email added");
        }
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="mt-[3.25rem]">
      <form
        className="flex items-center justify-center gap-3 flex-col md:flex-row"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className={clsx(
            `flex items-center  border-gradient-rounded rounded-full px-1 py-0 gap-3`
          )}
        >
          <input
            type="email"
            className={clsx(
              `h-12 w-72 md:w-96 bg-transparent px-5 text-white outline-none  focus:outline-none  ${spaceGrotesk.className}`,
              errors["email"] && "border-red-500"
            )}
            placeholder={"Your email"}
            {...register("email", { required: true })}
          />
          <span className="hidden md:block">
            <Button disabled={isLoading} type="submit" label="JOIN WAITLIST" />
          </span>
        </div>
        <div className="block md:hidden">
          <Button disabled={isLoading} type="submit" label="JOIN WAITLIST" />
        </div>
      </form>
    </div>
  );
};

export default Form;
