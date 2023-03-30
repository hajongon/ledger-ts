type PaymentInfoTypes = {
  paymentInfo: { id: string, name: string, amount: number, date: string }[],
  setPaymentInfo: React.Dispatch<
    React.SetStateAction<{ id: string, name: string, amount: number, date: string }[]>
  >,
};

export default PaymentInfoTypes;
