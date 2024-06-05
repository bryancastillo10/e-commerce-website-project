import { Store, Phone, Mail } from "lucide-react";

const AddressSection = () => {
  return (
    <div className="p-2 border shadow-md max-w-[90%] md:max-w-full mx-auto rounded-xl bg-secondary-glass">
      <div className="p-2 my-1 md:my-2">
        <div className="address-header">
          <Store />
          <h1>Address</h1>
        </div>
        <p className="text-[18px]">新竹市東區51忠孝路台灣</p>
      </div>

      <div className="p-2 my-1 md:my-2">
        <div className="address-header">
          <Phone />
          <h1>Contact No</h1>
        </div>
        <p className="text-[18px]">0123-456-789</p>
      </div>
      <div className="p-2 my-1 md:my-2">
        <div className="address-header">
          <Mail />
          <h1>Store E-mail</h1>
        </div>
        <p className="text-[14px] md:text-[18px]">brytechshop@email.com</p>
      </div>
    </div>
  );
};

export default AddressSection;
