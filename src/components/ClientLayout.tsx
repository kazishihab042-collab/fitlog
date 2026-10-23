"use client";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ProductProvider } from "@/context/ProductContext";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ProductProvider>
        <Navbar />

        <main>{children}</main>
        <Footer />
        <Toaster />
      </ProductProvider>
    </div>
  );
};

export default ClientLayout;
