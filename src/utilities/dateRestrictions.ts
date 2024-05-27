// Get Current Date
const currentDate = new Date();

// Calculate Shipping Date After 7 Days
const shippingDateObj = new Date();
shippingDateObj.setDate(currentDate.getDate() + 7);
const shippingDate = shippingDateObj.toISOString().split("T")[0];

// Max Date for Future Dates
const maxDate = currentDate.toISOString().split('T')[0];

export { shippingDate, maxDate };
