"use client";

import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FaGithub } from "react-icons/fa";

import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

const AuthModal = () => {
  const router = useRouter();
  const { onClose, isOpen } = useAuthModal();
  const { signIn } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: { email: "", full_name: "" }
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    if (!values.email) return toast.error("Enter an email address.");

    setIsLoading(true);
    signIn(values.email, values.full_name);
    setIsLoading(false);
    toast.success("Welcome back!");
    reset();
    onClose();
    router.refresh();
  };

  return (
    <Modal
      title="Welcome Back"
      description="Log In to Your Account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-2">
          <label className="text-sm text-neutral-300" htmlFor="email">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            disabled={isLoading}
            placeholder="you@example.com"
            {...register("email", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-sm text-neutral-300" htmlFor="full_name">
            Display name
          </label>
          <Input
            id="full_name"
            disabled={isLoading}
            placeholder="Optional"
            {...register("full_name")}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
        <button
          type="button"
          onClick={() => toast("GitHub sign-in is not connected yet.")}
          className="flex items-center justify-center gap-x-2 rounded-md border border-neutral-600 bg-neutral-800 px-3 py-3 text-sm font-medium text-neutral-200 transition hover:bg-neutral-700"
        >
          <FaGithub size={18} />
          Continue with GitHub
        </button>
      </form>
    </Modal>
  );
};

export default AuthModal;
