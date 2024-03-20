"use client";
import Sidemenu from "@/components/Sidemenu";
import Chat from "@/components/Chat";
import { useEffect, useState } from "react";
import { useDispatch } from "@/lib/store/store";
import { getCompanies } from "@/lib/store/slices/messagesSlice";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex rounded-b-lg shadow-lg h-dvh md:h-[92vh]">
      <Sidemenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Chat openMobileMenu={() => setIsMobileMenuOpen(true)} />
    </div>
  );
}
