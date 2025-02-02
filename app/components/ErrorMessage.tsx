import React from "react";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <Text color="red" as="p">
      {error}
    </Text>
  );
};

export default ErrorMessage;
