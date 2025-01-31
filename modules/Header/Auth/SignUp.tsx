import Button from "@/components/Button";
import Input from "@/components/Input";
import { Spinner } from "@heroui/spinner";

const SignUp: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <>
      <Input name="fullName" placeholder="Enter your fullName" type="text" />
      <Input name="email" placeholder="Enter your email" type="email" />
      <Input name="pasword" placeholder="Enter your password" type="password" />
      <Button
        loading={<Spinner color="white" size="md" />}
        isLoading={isLoading}
        extraClass="!w-full"
        type="submit"
        title="Sign Up"
      />
    </>
  );
};

export default SignUp;
