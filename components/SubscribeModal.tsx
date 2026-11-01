"use client";

import React from "react";
import { toast } from "react-hot-toast";

import Modal from "./Modal";
import Button from "./Button";

import { Price, ProductWithPrice } from "@/types";

import { useUser } from "@/hooks/useUser";
import useSubscribeModal from "@/hooks/useSubscribeModal";

interface SubscribeModalProps {
  products: ProductWithPrice[];
}

const formatPrice = (price: Price) => {
  const priceString = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: price.currency,
    minimumFractionDigits: 0
  }).format((price.unit_amount || 0) / 100);

  return priceString;
};

const SubscribeModal: React.FC<SubscribeModalProps> = ({ products }) => {
  const subscribeModal = useSubscribeModal();
  const { user, subscription } = useUser();

  const onChange = (open: boolean) => {
    if (!open) subscribeModal.onClose();
  };

  const handleCheckout = (price: Price) => {
    if (!user) return toast.error("Must be Logged In to Subscribe.");

    if (subscription) return toast("Already Subscribed.");

    toast("Billing is not connected yet.");
  };

  let content = <div className="text-center">No Products Available.</div>;

  if (products.length) {
    content = (
      <div>
        {products.map((product) => {
          if (!product.prices?.length) {
            return <div key={product.id}>No Prices Available.</div>;
          }

          return product.prices.map((price) => (
            <Button
              key={price.id}
              onClick={() => handleCheckout(price)}
              disabled={Boolean(subscription)}
              className="mb-4"
            >
              {`Subscribe for ${formatPrice(price)} a ${price.interval}`}
            </Button>
          ));
        })}
      </div>
    );
  }

  if (subscription) {
    content = <div className="text-center">Already Subscribed.</div>;
  }

  return (
    <Modal
      title="Only for Premium User"
      description="Listen to Music with SmicaStars Premium."
      isOpen={subscribeModal.isOpen}
      onChange={onChange}
    >
      {content}
    </Modal>
  );
};

export default SubscribeModal;
