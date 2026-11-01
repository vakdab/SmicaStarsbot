"use client";

import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import uniqid from "uniqid";

import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";

import useUploadModal from "@/hooks/useUploadModal";
import useLibrary from "@/hooks/useLibrary";
import { useUser } from "@/hooks/useUser";

const readAsDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

const UploadModal = () => {
  const uploadModal = useUploadModal();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const addSong = useLibrary((state) => state.addSong);

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null
    }
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      const imageFile = values.image?.[0] as File | undefined;
      const songFile = values.song?.[0] as File | undefined;

      if (!imageFile || !songFile || !user) {
        toast.error("Missing Fields.");
        return;
      }

      const image_path = await readAsDataUrl(imageFile);

      addSong({
        id: uniqid(),
        user_id: user.id,
        title: values.title,
        author: values.author,
        image_path,
        song_path: URL.createObjectURL(songFile)
      });

      toast.success("Song Created!");
      reset();
      uploadModal.onClose();
    } catch (error) {
      toast.error("Something Went Wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Add a Song"
      description="Upload an MP3 File."
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          disabled={isLoading}
          placeholder="Song Title"
          {...register("title", { required: true })}
        />
        <Input
          id="author"
          disabled={isLoading}
          placeholder="Author"
          {...register("author", { required: true })}
        />
        <div>
          <div className="pb-1">Select a Song File.</div>
          <Input
            id="song"
            type="file"
            disabled={isLoading}
            accept=".mp3"
            {...register("song", { required: true })}
          />
        </div>
        <div>
          <div className="pb-1">Select an Image.</div>
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
