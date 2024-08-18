import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/context/CartContext";
import { createOrder } from "@/lib/actions/orderActions";
import { OrderFormInputs } from "@/app/porudzbine/form";
import { CartItem } from "@/context/CartContext";

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { clearCart } = useCart();

  return useMutation({
    mutationFn: (data: OrderFormInputs & { cartItems: CartItem[] }) =>
      createOrder(data),
    onSuccess: () => {
      toast({
        className:
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4",
        title: "Narudžbina uspešna",
        description:
          "Vaša narudžbina je uspešno kreirana. Poslali smo vam email, proverite i spam odnosno nepozeljeno sekciju na vašem email-u.",
      });
      clearCart();
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: () => {
      toast({
        title: "Greška",
        description: "Došlo je do greške prilikom kreiranja narudžbine.",
        variant: "destructive",
      });
    },
  });
};
