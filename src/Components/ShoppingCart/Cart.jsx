//Shopping Cart System
import { useUser } from '@clerk/clerk-react'
import { Button } from "../../Components/ui/button"
import { IoCartOutline } from "react-icons/io5"
import Paystack from "@paystack/inline-js";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../Components/ui/dialog"
import useCartStore from "../../../Context/Statecontext";
import { toast } from 'sonner';
import { useState } from 'react';


export function Cart() {
  const { user, isSignedIn } = useUser();
  const cartItems = useCartStore((s) => s.cart);
  const [open, setOpen] = useState(false);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const clearCart = useCartStore((s) => s.clearCart);
  const cartStore = useCartStore();
  console.log(cartStore)
  //console.log(cartItems) //
  const handlePayments = () => {
    if (!isSignedIn) {
      toast("Please sign in.")
      return
    }
    setOpen(false)
    setTimeout(() => {
      const paystack = new Paystack();
      const amount = totalPrice * 100
      const userEmail = user.primaryEmailAddress.emailAddress
      const metadata = {
        custom_fields: [
          {
            display_name: "Customer Name",
            variable_name: "customer_name",
            value: user?.fullName || shippingDetails.Name,
          },
          {
            display_name: "Cart Items",
            variable_name: "cart_items",
            value: JSON.stringify(
              cartItems.map((item) => ({
                id: item.id,
                name: item.name,
                qty: item.quantity,
                price: item.price,
              }))
            ),
          },
        ],
      };
      const paystacktestkey = 'pk_test_1156b935d863b0c6d92a19b3678d034562cf062a'
      paystack.newTransaction({
        key: paystacktestkey,
        email: userEmail,
        amount: amount,
        metadata,
        onSuccess(transaction) {
          const reference = transaction?.reference ?? String(Date.now());
          toast('Payment Succesful')
          clearCart()

        } //console.log("Paystack success:", reference); 
      })
    }, 1000)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="border-none" variant="outline"><IoCartOutline /></Button>
      </DialogTrigger>
      <DialogContent className="bg-white text-gray-500 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Your Cart</DialogTitle>
          <DialogDescription>
            Review the items in your cart. Update quantities or remove items before proceeding to checkout.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <img src={item.image[0].url} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p>${item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                  <span>{item.quantity}</span>
                  <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="destructive" onClick={() => removeItem(item.id)}>Remove</Button>
              </div>
            ))
          )}
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
          <Button onClick={handlePayments} type="button" variant="default">Checkout</Button>
          <p>{totalPrice}</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}