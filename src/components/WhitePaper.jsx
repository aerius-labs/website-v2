import React from "react";
import { useEffect } from "react";

export function WhitePaper() {
    useEffect(() => {
        window.location.replace('https://drive.google.com/file/d/1Yb3VJ0AYGDhvTHNzE-hkv8-0gFjWkt8m/view', { replace: true });
    }, []);
  
    return <div>Redirecting...</div>;
  }