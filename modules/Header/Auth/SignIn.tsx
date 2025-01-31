import Button from "@/components/Button";
import Input from "@/components/Input";
import { Spinner } from "@heroui/spinner";

const SignIn: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <>
      <Input name="email" placeholder="Enter your email" type="text" />
      <Input
        name="password"
        placeholder="Enter your password"
        type="password"
      />
      <Button
        loading={<Spinner color="white" size="md" />}
        isLoading={isLoading}
        extraClass="!w-full"
        type="submit"
        title="Sign In"
      />
    </>
  );
};
export default SignIn;
