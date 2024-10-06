import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { forwardRef } from "react";
import { Button } from "./button";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const LoadingButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      loading,
      children,
      ...props
    }: ButtonProps,
    forwardedRef
  ) => {
    return (
      <Button
        ref={forwardedRef}
        type={props.onClick ? "button" : "submit"}
        className={cn(
          className
        )}
        disabled={props.disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Button>
    );
  }
);

LoadingButton.displayName = "LoadingButton";

export { LoadingButton };
