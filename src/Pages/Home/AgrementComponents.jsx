import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
function agrementComponents() {
  const [isCollaborateExpanded, setIsCollaborateExpanded] = useState(false);
  const [create, setCreate] = useState(false);
  const [automate, setAutomate] = useState(false);
  const [anlayze, setAnlayze] = useState(false);
  const [getpaid, setGetpaid] = useState(false);
  const [sign, setSign] = useState(false);

  const togglesign = () => {
    setSign(!sign);
  };

  const toggleCraete = () => {
    setCreate(!create);
  };
  const toggleautomated = () => {
    setAutomate(!automate);
  };
  const toggleanalyze = () => {
    setAnlayze(!anlayze);
  };
  const togglegetpaid = () => {
    setGetpaid(!getpaid);
  };
  const toggleCollaborate = () => {
    setIsCollaborateExpanded(!isCollaborateExpanded);
  };
  return (
    <div className="bg-blue-100">
      <div className="bg-blue-100 p-8  mx-auto relative flex mt-10">
        <div className="max-w-4xl">
          <h1 className="text-6xl  font-semibold mb-6 text-left">
            The complete agreement management solution
          </h1>
          <p className="text-2xl lg:max-w-xl  mb-8 text-left">
            From creation to signature to payment, PandaDoc is a 360-degree
            agreement management solution that helps your teams get more done,
            faster.
          </p>
        </div>
        <div className="absolute bottom-8 right-8">
          <button className=" text-black text-2xl font-normal px-6 py-3 rounded-full flex items-center hover:border-black hover:border transition-colors">
            Request a demo
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between max-w-6xl mx-auto py-12 text-left">
        <div className="w-full md:w-2/4 pr-8 ">
          <div>
            <h2 className="lg:text-4xl font-bold mb-4" onClick={toggleCraete}>
              Create{" "}
              <span
                className={`transition-transform duration-300 ${
                  create ? "rotate-180" : ""
                }`}
              ></span>
            </h2>
            {create && (
              <div className="border-2 border-gray-300 rounded-lg p-4 mb-4 relative">
                <p className="text-gray-600 mb-4">
                  Easily generate custom agreements tailored to your audience
                  and workflow with our drag-and-drop editor.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-4">
                  Smart content
                </button>
                <div className="absolute inset-0 border-2  rounded-lg animate-border-in"></div>
              </div>
            )}
          </div>

          <h2 className="lg:text-4xl font-bold mb-4" onClick={toggleCollaborate}>
            Collaborate{" "}
            <span
              className={`transition-transform duration-300 ${
                isCollaborateExpanded ? "rotate-180" : ""
              }`}
            ></span>
          </h2>
          {isCollaborateExpanded && (
            <div className="border-2 border-gray-300 rounded-lg p-4 mb-4 relative">
              <p className="text-gray-600 mb-4">
                Close deals fast in a digital space that makes collaboration
                easy.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-4">
                Smart content
              </button>
              <div className="absolute inset-0 border-2 border-emerald-500 rounded-lg animate-border-in"></div>
            </div>
          )}
          <h2 className="lg:text-4xl font-bold mb-4" onClick={toggleautomated}>
            Automate{" "}
            <span
              className={`transition-transform duration-300 ${
                automate ? "rotate-180" : ""
              }`}
            ></span>
          </h2>
          {automate && (
            <div className="border-2 border-gray-300 rounded-lg p-4 mb-4 relative">
              <p className="text-gray-600 mb-4">
                Save time by automating manual and repetitive task
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-4">
                Smart content
              </button>
              <div className="absolute inset-0 border-2 border-emerald-500 rounded-lg animate-border-in"></div>
            </div>
          )}

          <h2 className="lg:text-4xl font-bold mb-4" onClick={togglesign}>
            Sign{" "}
            <span
              className={`transition-transform duration-300 ${
                sign ? "rotate-180" : ""
              }`}
            ></span>
          </h2>
          {sign && (
            <div className="border-2 border-gray-300 rounded-lg p-4 mb-4 relative">
              <p className="text-gray-600 mb-4">
                Close deals fast in a digital space that makes collaboration
                easy.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-4">
                Smart content
              </button>
              <div className="absolute inset-0 border-2 border-emerald-500 rounded-lg animate-border-in"></div>
            </div>
          )}

          <div>
            <h2 className="lg:text-4xl font-bold mb-4" onClick={toggleanalyze}>
              Anlayze{" "}
              <span
                className={`transition-transform duration-300 ${
                  anlayze ? "rotate-180" : ""
                }`}
              ></span>
            </h2>
            {anlayze && (
              <div className="border-2 border-gray-300 rounded-lg p-4 mb-4 relative">
                <p className="text-gray-600 mb-4">
                  Close deals fast in a digital space that makes collaboration
                  easy.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-4">
                  Smart content
                </button>
                <div className="absolute inset-0 border-2 border-emerald-500 rounded-lg animate-border-in"></div>
              </div>
            )}
          </div>
          <div>
            <h2 className="lg:text-4xl font-bold mb-4" onClick={togglegetpaid}>
              Get Paid{" "}
              <span
                className={`transition-transform duration-300 ${
                  getpaid ? "rotate-180" : ""
                }`}
              ></span>
            </h2>
            {getpaid && (
              <div className="border-2 border-gray-300 rounded-lg p-4 mb-4 relative">
                <p className="text-gray-600 mb-4">
                  Close deals fast in a digital space that makes collaboration
                  easy.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-4">
                  Smart content
                </button>
                <div className="absolute inset-0 border-2 border-emerald-500 rounded-lg animate-border-in"></div>
              </div>
            )}
          </div>

          {/* Other sections */}
        </div>
        <div className="w-full ">
          <video
            className="w-full h-auto rounded-lg border-2 border-green-200 object-contain"
            autoPlay
            loop
            muted
          >
            <source
              src="https://public-site.marketing.pandadoc-static.com/app/uploads/compliance.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default agrementComponents;
