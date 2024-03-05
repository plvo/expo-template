import "../global.css"
import React from "react";
import { Slot } from "expo-router";
import { Navbar } from "@/component/Navbar";

export default function RootLayout() {
    return (
        <>
            <Slot />
            {/* <Nav /> */}
        </>
    )
}