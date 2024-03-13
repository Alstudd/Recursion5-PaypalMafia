import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";
  import "react-accessible-accordion/dist/fancy-example.css";
  import { MdOutlineArrowDropDown } from "react-icons/md";
  import serviceDetails from "../data/serviceDetails";
  
  export default function Services() {
    return (
      <div>
        <div className="relative mx-auto flex flex-col items-center lg:flex-row lg:gap-20 justify-center my-20">
          <header className="lg:hidden block text-center pb-10">
            <h2 className="text-[13px] tracking-[1px] font-bold m-0 text-blue-600 uppercase">
              Services
            </h2>
            <p className="mt-[10px] mx-0 mb-0 p-0 sm:text-[38px] sm:leading-[42px] font-bold text-black text-[28px] leading-[32px]">
              Our Services
            </p>
          </header>
          <div className="w-[20rem] h-[20rem] xs:w-[25rem] xs:h-[25rem] sm:w-[30rem] sm:h-[28rem] overflow-hidden rounded-t-[15rem]">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex gap-[0.5rem] flex-col items-start">
            <header className="lg:block hidden">
              <h2 className="text-[13px] tracking-[1px] font-bold m-0 text-blue-600 uppercase">
                Services
              </h2>
              <p className="mt-[10px] mx-0 mb-0 p-0 sm:text-[38px] sm:leading-[42px] font-bold text-black text-[28px] leading-[32px]">
                Our Services
              </p>
            </header>
            <Accordion
              className="sm:w-[30rem] xs:w-[25rem] w-[20rem] mt-[2rem]"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {serviceDetails.map((item, i) => {
                return (
                  <AccordionItem
                    className="bg-white border-[0.8px] border-solid border-[rgba(128, 128, 128, 0.143)] rounded-[8px] overflow-hidden mb-[20px]"
                    key={i}
                    uuid={i}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="flex justify-between cursor-pointer bg-white p-[1rem] w-full">
                        <div className="flex items-center text-blue-600 justify-center p-[10px] bg-blue-100 rounded-[5px]">
                          {item.icon}
                        </div>
                        <span className="sm:text-[25px] sm:leading-[42px] font-bold text-[#012970] text-[18px] leading-[32px]">
                          {item.heading}
                        </span>
                        <div className="flex items-center text-blue-600 justify-center p-[10px] bg-blue-100 rounded-[5px]">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="text-[0.9rem] font-semibold">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    );
  }