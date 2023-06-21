import { FC } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

interface UserAuthFromProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const UserAuthFrom: FC<UserAuthFromProps> = ({ className, ...props }) => {
  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button>Google</Button>
    </div>
  );
};

export default UserAuthFrom;
