"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/context/CartContext";
import { createOrder } from "@/lib/actions/orderActions";
import { useCreateOrder } from "@/lib/hooks/orders/useCreateOrder";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod";

const orderSchema = z
  .object({
    name: z.string().min(1, "Ime i prezime je neophodno"),
    phone: z
      .string()
      .min(1, "Broj telefona je neophodan")
      .regex(
        /^(\+381)[0-9]{8,}$/,
        "Broj telefona mora počinjati sa +381 i sadržati najmanje 8 cifara nakon koda.",
      ),
    email: z
      .string()
      .min(1, "Email je neophodan")
      .email("Unesite ispravan email")
      .refine(
        (email) => {
          const domain = email.split("@")[1];
          const tempEmailDomains = [
            "mailinator.com",
            "10minutemail.com",
            "guerrillamail.com",
            "temporarymail.com",
          ];
          return !tempEmailDomains.includes(domain);
        },
        { message: "Privremeni email nalozi nisu dozvoljeni" },
      ),
    city: z.string().optional(),
    address: z.string().optional(),
    zip: z.string().optional(),
    scheduleDelivery: z.boolean(),
    date: z.date().optional(),
  })
  .refine(
    (data) => {
      if (data.scheduleDelivery) {
        return data.city && data.address && data.zip && data.date;
      }
      return true;
    },
    {
      message:
        "Grad, Adresa, Poštanski broj i Datum su neophodni kada je zakazana dostava",
      path: ["city", "address", "zip", "date"],
    },
  );

export type OrderFormInputs = z.infer<typeof orderSchema>;

export default function Form() {
  const [scheduleDelivery, setScheduleDelivery] = useState(false);
  const { cartItems } = useCart();
  const methods = useForm<OrderFormInputs>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      address: "",
      zip: "",
      scheduleDelivery: false,
      date: undefined,
    },
    shouldFocusError: false,
  });

  const createOrderMutation = useCreateOrder();

  const onSubmit: SubmitHandler<OrderFormInputs> = (data) => {
    createOrderMutation.mutate({ ...data, cartItems });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Card className="w-full lg:max-w-2xl p-6 bg-lightMode-background dark:bg-darkMode-background text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
          <CardHeader className="mb-6">
            <CardTitle className="text-2xl font-bold">
              Informacije o dostavi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="full-name"
                  className="text-lg font-medium text-gray-700 dark:text-gray-200"
                >
                  Ime i prezime
                </Label>
                <Input
                  id="full-name"
                  placeholder="Unesite vaše puno ime"
                  {...methods.register("name")}
                  className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-lightMode-surface dark:bg-darkMode-surface text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-50"
                />
                {methods.formState.errors.name && (
                  <p className="text-red-500 text-sm">
                    {methods.formState.errors.name?.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-lg font-medium text-gray-700 dark:text-gray-200"
                >
                  Broj telefona
                </Label>
                <Input
                  id="phone"
                  placeholder="Unesite vaš broj telefona"
                  {...methods.register("phone")}
                  className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-lightMode-surface dark:bg-darkMode-surface text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-50"
                />
                {methods.formState.errors.phone && (
                  <p className="text-red-500 text-sm">
                    {methods.formState.errors.phone?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-lg font-medium text-gray-700 dark:text-gray-200"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Unesite vaš email"
                  {...methods.register("email")}
                  className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-lightMode-surface dark:bg-darkMode-surface text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-50"
                />
                {methods.formState.errors.email && (
                  <p className="text-red-500 text-sm">
                    {methods.formState.errors.email?.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="city"
                  className="text-lg font-medium text-gray-700 dark:text-gray-200"
                >
                  Grad
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="w-full">
                      <Input
                        id="city"
                        placeholder="Unesite vaš grad"
                        {...methods.register("city")}
                        className={`p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-lightMode-surface dark:bg-darkMode-surface text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-50 ${
                          !scheduleDelivery
                            ? "cursor-not-allowed opacity-50"
                            : ""
                        }`}
                        disabled={!scheduleDelivery}
                      />
                    </TooltipTrigger>
                    {!scheduleDelivery && (
                      <TooltipContent>
                        <p>
                          Ovo polje je onemogućeno dok nije zakazana dostava
                        </p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
                {methods.formState.errors.city && (
                  <p className="text-red-500 text-sm">
                    {methods.formState.errors.city?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="address"
                  className="text-lg font-medium text-gray-700 dark:text-gray-200"
                >
                  Adresa
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="w-full">
                      <Input
                        id="address"
                        placeholder="Unesite vašu adresu"
                        {...methods.register("address")}
                        className={`p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-lightMode-surface dark:bg-darkMode-surface text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-50 ${
                          !scheduleDelivery
                            ? "cursor-not-allowed opacity-50"
                            : ""
                        }`}
                        disabled={!scheduleDelivery}
                      />
                    </TooltipTrigger>
                    {!scheduleDelivery && (
                      <TooltipContent>
                        <p>
                          Ovo polje je onemogućeno dok nije zakazana dostava
                        </p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
                {methods.formState.errors.address && (
                  <p className="text-red-500 text-sm">
                    {methods.formState.errors.address?.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="zip"
                  className="text-lg font-medium text-gray-700 dark:text-gray-200"
                >
                  Poštanski broj
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="w-full">
                      <Input
                        id="zip"
                        placeholder="Unesite vaš poštanski broj"
                        {...methods.register("zip")}
                        className={`p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-lightMode-surface dark:bg-darkMode-surface text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-50 ${
                          !scheduleDelivery
                            ? "cursor-not-allowed opacity-50"
                            : ""
                        }`}
                        disabled={!scheduleDelivery}
                      />
                    </TooltipTrigger>
                    {!scheduleDelivery && (
                      <TooltipContent>
                        <p>
                          Ovo polje je onemogućeno dok nije zakazana dostava
                        </p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
                {methods.formState.errors.zip && (
                  <p className="text-red-500 text-sm">
                    {methods.formState.errors.zip?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Label
                  htmlFor="schedule-delivery"
                  className="text-lg font-medium text-gray-700 dark:text-gray-200"
                >
                  Zakazivanje dostave
                </Label>
                <Switch
                  id="schedule-delivery"
                  type="button"
                  checked={scheduleDelivery}
                  onCheckedChange={(checked) => {
                    setScheduleDelivery(checked);
                    methods.setValue("scheduleDelivery", checked);
                    if (!checked) {
                      methods.setValue("date", undefined);
                    }
                  }}
                  className="bg-gray-300 dark:bg-gray-700 focus:ring-0 focus:ring-blue-500"
                />
              </div>
              {scheduleDelivery && (
                <div className="flex flex-col space-y-2">
                  <Label className="text-lg font-medium text-gray-700 dark:text-gray-200">
                    Datum i vreme
                  </Label>
                  <Controller
                    name="date"
                    control={methods.control}
                    render={({ field }) => (
                      <DateTimePicker
                        {...field}
                        label="M/D/Y : H/M"
                        ampm={true}
                        onChange={(value) => field.onChange(value?.toDate())}
                        value={field.value ? dayjs(field.value) : null}
                        className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-lightMode-surface dark:bg-lightMode-secondary text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  />
                  {methods.formState.errors.date && (
                    <p className="text-red-500 text-sm">
                      {methods.formState.errors.date?.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <Label
                htmlFor="payment-method"
                className="text-lg font-medium text-gray-700 dark:text-gray-200"
              >
                Način plaćanja
              </Label>
              <RadioGroup
                value={
                  methods.watch("scheduleDelivery")
                    ? "cash-on-delivery"
                    : "in-store-cash"
                }
                className="flex flex-col space-y-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="online-payment"
                    id="online-payment"
                    disabled
                  />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="cursor-not-allowed">
                        <Label
                          htmlFor="online-payment"
                          className="text-gray-500 dark:text-gray-500 cursor-not-allowed"
                        >
                          Online Plaćanje
                        </Label>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Uskoro</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex items-center space-x-2">
                  {scheduleDelivery ? (
                    <>
                      <RadioGroupItem
                        value="cash-on-delivery"
                        id="cash-on-delivery"
                      />
                      <Label
                        htmlFor="cash-on-delivery"
                        className="text-gray-700 dark:text-gray-200"
                      >
                        Plaćanje pouzećem
                      </Label>
                    </>
                  ) : (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="flex gap-1 items-center text-center cursor-not-allowed">
                          <RadioGroupItem
                            value="cash-on-delivery"
                            id="cash-on-delivery"
                            disabled
                          />
                          <Label
                            htmlFor="cash-on-delivery"
                            className="text-gray-500 dark:text-gray-500 cursor-not-allowed"
                          >
                            Plaćanje pouzećem
                          </Label>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Samo za porudžbine</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {scheduleDelivery ? (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="flex gap-1 items-center text-center cursor-not-allowed">
                          <RadioGroupItem
                            value="in-store-cash"
                            id="in-store-cash"
                            disabled
                          />
                          <Label
                            htmlFor="in-store-cash"
                            className="text-gray-500 dark:text-gray-500 cursor-not-allowed"
                          >
                            U Prodavnici
                          </Label>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Zakazali ste porudzbinu, plaćanje je moguce pouzećem
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <>
                      <RadioGroupItem
                        disabled={scheduleDelivery}
                        value="in-store-cash"
                        id="in-store-cash"
                      />
                      <Label
                        htmlFor="in-store-cash"
                        className="text-gray-700 dark:text-gray-200"
                      >
                        U Prodavnici
                      </Label>
                    </>
                  )}
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <Button
              type="submit"
              variant="default"
              className="w-full py-3 bg-green-500 dark:bg-green-700 text-white font-semibold rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 transition-all"
              disabled={createOrderMutation.isPending}
            >
              {createOrderMutation.isPending
                ? "Kreiranje narudžbine..."
                : "Potvrdi narudžbinu"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
}
