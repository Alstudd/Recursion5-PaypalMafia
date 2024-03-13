import React from "react";
import { MapPinned } from "lucide-react";
import { Card } from "@tremor/react";

const Complaint = () => {
  const cmpl = [
    {
      complaintName: "Hello",
      complaintDesc: "hi",
      type: "new ",
      user: "Alvin",
      loc: "Andheri",
      count: "10",
    },
  ];
  return (
    <div>
      <div>Hello</div>
      {cmpl.map((values, i) => {
        <Card key={i}>
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="../assets/logo.png"
                alt="Bonnie image"
              />
              {/* Firebase call for user details */}
            </div>
            <div>
              <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                {values.complaintName}
              </h3>
              <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                {values.complaintDesc}
              </p>
              <div className="flex flex-row gap-3">
                <MapPinned />
                {values.loc}
              </div>
            </div>
          </div>
        </Card>;
      })}
    </div>
  );
};

export default Complaint;
