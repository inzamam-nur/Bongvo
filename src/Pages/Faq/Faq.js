import React from "react";

const Faq = () => {
  return (
    <div>
      <div>
        <div>
          <div
            style={{ width: "100%", margin: "auto", padding: "50px" }}
            className="bg-white text-black rounded	"
          >
            <h2 className="text-3xl text-center m-5 pb-5">
              Frequently Asked Questions
            </h2>
            <div>
              <h2
                style={{ backgroundColor: "#F2F2EE" }}
                className="text-2xl p-5 rounded"
              >
                Is the course open for all
              </h2>
              <p className="text-xl p-5 rounded">
                YEs It is you just have to signup and create a profile
                after that you can also purchase premium{" "}
              </p>
            </div>
            <div>
              <h2
                style={{ backgroundColor: "#F2F2EE" }}
                className="text-2xl p-5 rounded"
              >
                Can I take a subject without completing its pre-requisite?
              </h2>
              <p className="text-xl p-5 rounded">
                No. Check the pre-requisite in table 1 and Table 2 (for
                electives) (Shown later part in this document){" "}
              </p>
            </div>
            <div>
              <h2
                style={{ backgroundColor: "#F2F2EE" }}
                className="text-2xl p-5 rounded"
              >
                . The subject and section I want to take is full. What can I do?
              </h2>
              <p className="text-xl p-5 rounded">
                Either check for alternative courses for which you have
                completed the prerequisite courses or wait till final
                registration or “Adding/Dropping”.
              </p>
            </div>
            <div>
              <h2
                style={{ backgroundColor: "#F2F2EE" }}
                className="text-2xl p-5 rounded"
              >
                When can I take elective subjects?
              </h2>
              <p className="text-xl p-5 rounded">
              For the new curriculum (18-2 onwards) students, you will have to declare
major before taking any elective course. This should be done after completing
100 credits. Instruction on how to declare major will be available soon in the
website.
For the old curriculum students, whenever the pre-requisite of your desired
elective course gets completed. So, check the course curriculum to know
about the pre-requisites.</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
