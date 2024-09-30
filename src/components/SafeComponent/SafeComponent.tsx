import React, { ReactNode } from "react";

interface SafeComponentProps {
  children: ReactNode;
}

interface SafeComponentState {
  hasError: boolean;
}

export default class SafeComponent extends React.Component<
  SafeComponentProps,
  SafeComponentState
> {
  constructor(props: SafeComponentProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): SafeComponentState {
    console.error(error); // Log the error to the console
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
