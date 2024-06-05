import { formatCurrency } from "src/utilities";
import { useShoppingContext } from "src/context/UseContexts";

const PriceSummary = () => {
  const { totalPrice } = useShoppingContext();
  const shippingFee: number = 200;
  return (
    <table
      className="table-fixed md:text-sm lg:text-base tracking-wide
    md:max-w-[75%] md:text-left text-secondary"
    >
      <tbody>
        <tr>
          <td> Cart Items Price</td>
          <td className="indent-4 font-light">{formatCurrency(totalPrice)}</td>
        </tr>
        <tr>
          <td>Shipping Fee</td>
          <td className="indent-4 font-light">{formatCurrency(shippingFee)}</td>
        </tr>
        <tr>
          <td>Total Price</td>
          <td className="indent-4 font-bold">
            {formatCurrency(totalPrice + shippingFee)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PriceSummary;
