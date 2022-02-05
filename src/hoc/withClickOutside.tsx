import React, { useEffect, useRef, useState } from "react";

export interface WrappedComponentProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function withClickOutside<P extends {}>(
  WrappedComponent: React.ComponentType<P>
) {
  const Component = ({ ...props }) => {
    const [open, setOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>();

    useEffect(() => {
      const handleOutsideClick = (ev: MouseEvent) => {
        if (!ref.current?.contains(ev?.target as Node)) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleOutsideClick);

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [ref]);

    return (
      <WrappedComponent
        {...(props as P)}
        open={open}
        setOpen={setOpen}
        ref={ref}
      />
    );
  };

  return Component;
}
