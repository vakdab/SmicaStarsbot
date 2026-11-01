"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";

import useSubscribeModal from "@/hooks/useSubscribeModal";
import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";

const AccountContent = () => {
  const router = useRouter();
  const subscribeModal = useSubscribeModal();
  const { subscription, user } = useUser();

  return (
    <div className="mb-7 px-6">
      {!user && (
        <div className="flex flex-col gap-y-4">
          <p>You are not logged in.</p>
          <Button className="w-[300px]" onClick={() => router.push("/")}>
            Back to Home
          </Button>
        </div>
      )}
      {user && !subscription && (
        <div className="flex flex-col gap-y-4">
          <p>
            Signed in as <b>{user.full_name}</b> ({user.email}).
          </p>
          <p>No Active Plan.</p>
          <Button className="w-[300px]" onClick={subscribeModal.onOpen}>
            Subscribe
          </Button>
        </div>
      )}
      {user && subscription && (
        <div className="flex flex-col gap-y-4">
          <p>
            You are currently on the{" "}
            <b>{subscription?.prices?.products?.name || "SmicaStars"}</b> plan.
          </p>
          <Button
            className="w-[300px]"
            onClick={() => toast("Billing is not connected yet.")}
          >
            Open Customer Portal
          </Button>
        </div>
      )}
    </div>
  );
};

export default AccountContent;
