import { useState } from "react";
import { ArrowRight } from "lucide-react";

function AgreementComponents() {
  const [isCollaborateExpanded, setIsCollaborateExpanded] = useState(false);
  const [create, setCreate] = useState(false);
  const [automate, setAutomate] = useState(false);
  const [analyze, setAnalyze] = useState(false);
  const [getpaid, setGetPaid] = useState(false);
  const [sign, setSign] = useState(false);

  const toggleSign = () => {
    setSign(!sign);
  };

  const toggleCreate = () => {
    setCreate(!create);
  };
  const toggleAutomate = () => {
    setAutomate(!automate);
  };
  const toggleAnalyze = () => {
    setAnalyze(!analyze);
  };
  const toggleGetPaid = () => {
    setGetPaid(!getpaid);
  };
  const toggleCollaborate = () => {
    setIsCollaborateExpanded(!isCollaborateExpanded);
  };

  return (
    <div className="bg-blue-100">
      <div className="bg-blue-100 p-8 mx-auto relative flex flex-col lg:flex-row mt-10">
        <div className="lg:max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-left">
            The complete agreement management solution
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl lg:max-w-xl mb-8 text-left">
            From creation to signature to payment, PandaDoc is a 360-degree
            agreement management solution that helps your teams get more done,
            faster.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:absolute lg:bottom-8 lg:right-8">
          <button className="text-black text-lg md:text-xl lg:text-2xl font-normal px-6 py-3 rounded-full flex items-center hover:border-black hover:border transition-colors">
            Request a demo
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto py-12 text-left space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-2/4 pr-0 lg:pr-8 grid grid-cols-2 p-8">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" onClick={toggleCreate}>
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
                <div className="absolute inset-0 border-2 rounded-lg animate-border-in"></div>
              </div>
            )}
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" onClick={toggleCollaborate}>
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

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" onClick={toggleAutomate}>
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
                Save time by automating manual and repetitive tasks.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-4">
                Smart content
              </button>
              <div className="absolute inset-0 border-2 border-emerald-500 rounded-lg animate-border-in"></div>
            </div>
          )}

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" onClick={toggleSign}>
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" onClick={toggleAnalyze}>
              Analyze{" "}
              <span
                className={`transition-transform duration-300 ${
                  analyze ? "rotate-180" : ""
                }`}
              ></span>
            </h2>
            {analyze && (
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" onClick={toggleGetPaid}>
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
        </div>

        <div className="w-full lg:w-2/4">
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

export default AgreementComponents;
