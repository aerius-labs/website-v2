import React from "react";
import { useEffect } from "react";

export function WhitePaper() {
    useEffect(() => {
        window.location.replace('https://drive.google.com/file/d/1bu0oe9PVTtSuT8JpwMmzKEG8Fb-mdPLH/view', { replace: true });
    }, []);
  
    return <div>Redirecting...</div>;
  }
