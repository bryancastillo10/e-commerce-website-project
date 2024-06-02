import { Button } from "src/components";
import { socialMedia } from "src/constants";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-secondary w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-center">
        <article className="p-4 my-2 lg:flex lg:flex-col-reverse place-items-center lg:p-0 lg:max-w-[88%] lg:ml-40 lg:my-8">
          <div className="">
            <h1 className="font-semibold tracking-wide text-center lg:text-left">Get Updated with the latest Tech Gadgets</h1>
            <p className="text-sm text-center leading-normal text-pretty my-2 font-light min-w-fit lg:text-left">
              Where innovation meets service excellence. Elevating your tech experience, one gadget at a time.</p>
          </div>
            <div className="flex justify-center gap-2">
            {socialMedia.map((soc) => {
              const Icons = soc.icon;
              return <div key={soc.id} className="my-4 text-center 
              cursor-pointer duration-500 ease-in-out hover:-rotate-12
               fill-emerald-200 hover:fill-sky-500"><Icons /></div>
            })}
          </div>
        </article>
        <div className="text-center lg:text-left lg:ml-10 mb-4 lg:mb-0">
          <h1 className="lg:font-bold lg:tracking-wider">Quick Links</h1>
            <ul className="flex flex-col gap-2 mt-4 text-sm font-light lg:text-base tracking-wider">
            <li>Home</li>
            <li>Contact</li>
            <li>Shop</li>
            </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 my-4 lg:my-0 overflow-x-hidden">
          <p className="lg:font-bold lg:tracking-wider">Subscribe to our Newsletter!</p>
          <div className="flex flex-col max-w-[80%] xs:flex-row xs:max-w-full">
            <input className="rounded-tl-xl rounded-bl-xl text-accent text-sm 
            outline-none indent-2 md:max-w-[60%] min-h-[50%] lg:max-w-[65%] placeholder-emerald-500"
              placeholder="Enter your e-mail" type="text" />
            <button className="bg-accent p-1.5 rounded-tr-xl rounded-br-xl 
            text-sm min-w-fit md:min-w-max duration-500 ease-in-out hover:bg-neutral-green">Send Now</button>
          </div>
          <div className="text-center lg:max-w-[90%] lg:ml-20  py-4">
            <Button type="call">Shop Now</Button>
          </div>
        </div>
      </div>

      <article className="text-sm mt-8 text-center py-4 md:flex flex-row justify-center">
        <p>Copyright &copy; {currYear} All Rights Reserved | </p>
        <p>Web Design Made by Bryan</p>
      </article>
    </footer>
  )
}

export default Footer;
